import { Request, Response } from 'express';

export const indexController = (_req: Request, res: Response): Response => {
  return res.status(200).send('Hola');
};
