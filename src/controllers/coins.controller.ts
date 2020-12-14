import { NextFunction, Request, Response } from 'express';

class CoinsController {
  public getCoins = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      res.status(200).json({});
    } catch (error) {
      next(error);
    }
  };
}

export default CoinsController;
