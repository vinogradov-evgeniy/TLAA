import { NextFunction, Request, Response } from 'express';

class ReverseController {
  public reverseStuff = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    // TODO: use res.query.??? to get query params
    try {
      // TODO: add service call
      res.status(200).json({});
    } catch (error) {
      next(error);
    }
  };
}

export default ReverseController;
