// import { NextApiRequest, NextApiResponse } from 'next';

// export default async function authMiddleware(handler) {
//   return async (req: NextApiRequest, res: NextApiResponse) => {
//     const data = fetch('http://localhost:3100/api/v2/users')
//       .then((response) => console.log(response))
//       .catch((err) => console.error(err));
//     console.log(data);
//     const isUserAuthenticated = false;
//     if (!isUserAuthenticated) {
//       res.status(401).json({ error: 'No autorizado' });
//     }
//   };
// }
