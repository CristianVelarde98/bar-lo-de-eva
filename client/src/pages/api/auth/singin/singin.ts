/* eslint-disable prettier/prettier */
import type { NextApiRequest, NextApiResponse } from 'next';

export default function singinHandler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const { gmail, password } = request.body;

  response.status(200).json({
    gmail,
    password,
  });
}
