import type { NextApiRequest, NextApiResponse } from 'next';
import httpProxy from 'http-proxy';
import Cookies from 'cookies';

// turrn off bodyParser => bodyParser are handled in server
export const config = {
  api: {
    bodyParser: false,
  },
};

const proxy = httpProxy.createProxyServer();

export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  return new Promise((resolve) => {
    //convert cookies to header Author
    const cookies = new Cookies(req, res);
    const accessToken = cookies.get('access_token');
    if (cookies.get('access_token')) {
      req.headers.Authorization = `Bearer ${accessToken}`;
    }

    // dont send cookies to API server
    req.headers.cookie = '';

    //remove /api to avoid /api/v1/api/products?_page=1&_limit=4
    if (req.url?.startsWith('/api')) {
      req.url = req.url.replace('/api', '');
    }

    proxy.web(req, res, {
      target: process.env.API_URL,
      changeOrigin: true,
      selfHandleResponse: false,
    });

    proxy.once('proxyRes', () => {
      resolve(true);
    });
  });
}
