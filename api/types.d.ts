declare namespace Express {
  export interface Request {
    tokenInfo: {
      id: string;
      startedTime: string;
      iat: number;
      exp: number;
    };
  }
}
