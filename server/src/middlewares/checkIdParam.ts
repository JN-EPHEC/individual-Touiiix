import { Request, Response, NextFunction } from "express";

export const checkIdParam = (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;

  const checkId = parseInt(id as string, 10);

  if (isNaN(checkId) || checkId <= 0) {
    return res.status(400).json({ error: "ID invalide, un entier positif est attendu" });
  }

  req.params.id = checkId.toString();

  next();
};