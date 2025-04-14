import {Router} from "express"
import { getUsers, createUser, deleteUser } from "../controllers/users.controller";

const router = Router();

/**
 * @swagger
 *  /users:
 *    get:
 *      summary: Получить список пользователей
 *      description: Возвращает список пользователей
 *      tags: [Users]
 *      responses:
 *        201: 
 *          description: Успешный ответ
 *          content: 
 *            application/json:
 *             schema:
 *                type: array
 *                items:
 *                  type: object
 *                  properties:
 *                    id:
 *                      type: string
 *                      example: 67f4c70441b7447c466a53ab
 *                    username:
 *                      type: string
 *                      example: John Doe
 *                    email:
 *                      type: string
 *                      example: johndoe@mail.com
 */
//Добавление пользователя (эндпоинт)
router.post("/", createUser);

//Получение всех пользователей (эндпоинт)
router.get("/", getUsers);

//Получение всех пользователей (эндпоинт)
router.delete("/", deleteUser);

export default router;