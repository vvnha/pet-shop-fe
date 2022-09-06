import Cookies from 'cookies';
import httpProxy from 'http-proxy';
import type { NextApiRequest, NextApiResponse } from 'next';

// turrn off bodyParser => bodyParser are handled in server
type Data = {
  message: string;
};

export const config = {
  api: {
    bodyParser: false,
  },
};

const proxy = httpProxy.createProxyServer();

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== 'POST') {
    return res.status(404).json({ message: 'Method not supported!' });
  }

  const cookies = new Cookies(req, res);
  cookies.set('access_token');

  res.status(200).json({ message: 'Logout successfully!' });
}
