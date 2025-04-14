import User from "../models/User";
import type { Response, Request } from "express";

export const createUser = async (req: Request, res: Response) => {
    try {
        console.log(req.body);
        const user = new User(req.body);
        await user.save();
        res.status(201).json(user);
      } catch (e) {
        res.status(400).json({message: (e as Error).message})
      }
}

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    res.status(201).json(users);
  } catch (e) {
    res.status(400).json({message: (e as Error).message})
  }
}

//Удаление пользователя по полученному телу (эндпоинт)
export const deleteUser = async (req: Request, res: Response) => {
  try {
    console.log(req.body);
    const result = await User.deleteOne(req.body);
    res.status(201).json(result);
  } catch (e) {
    res.status(400).json({message: (e as Error).message})
  }
}