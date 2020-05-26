import { Request, Response } from 'express';

export interface RouteParams {
  req?: Request;
  res: Response;
}
