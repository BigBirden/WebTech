import User from "../models/User";
import type { Response, Request } from "express";

//Создать пользователя
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

//Получение списка всех пользователей
export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    res.status(201).json(users);
  } catch (e) {
    res.status(400).json({message: (e as Error).message})
  }
}

// Обновление пользователя
export const updateUser = async (req: Request, res: Response): Promise<void> => {
  try {
    
    const { email } = req.body;
    if (!email) {
      res.status(400).json({ message: "Email is required for updating user" });
      return;
    }

    const updateData = { ...req.body };
    console.log(updateData);
    delete updateData.email;

    const updatedUser = await User.findOneAndUpdate(
      { email },
      updateData,
      { new: true }
    );

    if (!updatedUser) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    res.status(200).json(updatedUser);
  } catch (e) {
    res.status(400).json({ message: (e as Error).message });
  }
};
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