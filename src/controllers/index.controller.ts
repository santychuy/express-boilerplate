import { Response } from 'express';

import { RouteParams } from '../interfaces/RoutesParams';

export const indexController = ({ res }: RouteParams): Response => {
  return res.status(200).send('Hola');
};
