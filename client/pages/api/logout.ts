import { NextApiRequest, NextApiResponse } from 'next';
import { deleteCookie } from 'cookies-next';

export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    deleteCookie('Auth', { req, res });
    res.status(200).send({
      message: 'Deslogueo exitoso',
      logOut: true,
    });
  } catch (error) {
    res.status(500).send('Internal Error');
  }
};
