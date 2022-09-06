import type { NextApiRequest, NextApiResponse } from 'next';
import httpProxy, { ProxyResCallback } from 'http-proxy';
import _get from 'lodash/get';
import Cookies from 'cookies';

// turrn off bodyParser => bodyParser are handled in server
export const config = {
  api: {
    bodyParser: false,
  },
};

const proxy = httpProxy.createProxyServer();

export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  if (req.method !== 'POST') {
    return res.status(404).json({ message: 'Method not supported!' });
  }

  return new Promise((resolve) => {
    // dont send cookies to API server
    req.headers.cookie = '';

    //remove /api to avoid /api/v1/api/products?_page=1&_limit=4
    if (req.url?.startsWith('/api')) {
      req.url = req.url.replace('/api/login', '/users/auth');
    }

    const handleLoginResponse: ProxyResCallback = (proxyRes, req, res) => {
      let body = '';
      //get data while proxy are streaming
      proxyRes.on('data', function (chunk) {
        body += chunk;
      });

      // when proxy streaming is done
      proxyRes.on('end', function () {
        try {
          const { value } = JSON.parse(body);
          const accessToken = _get(value, 'access_token', null);
          const expiredAt = _get(value, 'expired_at', null);

          //convert token to cookies
          const cookies = new Cookies(req, res, { secure: process.env.NODE_ENV !== 'development' });
          cookies.set('access_token', accessToken, {
            httpOnly: true,
            sameSite: 'lax',
            expires: new Date(expiredAt),
          });

          (res as NextApiResponse).status(200).json({ message: 'Login successfully!' });
          resolve(true);
        } catch (error) {
          (res as NextApiResponse).status(500).json({ message: (error as Error).message });
        }
      });
    };

    proxy.web(req, res, {
      target: process.env.API_URL,
      changeOrigin: true,
      selfHandleResponse: true,
    });

    proxy.once('proxyRes', handleLoginResponse);
  });
}
