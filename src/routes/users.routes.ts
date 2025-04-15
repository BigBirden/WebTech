import {Router} from "express"
import { getUsers, createUser, deleteUser, updateUser } from "../controllers/users.controller";

const router = Router();

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Создать пользователя
 *     description: Добавляет нового пользователя в БД
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: 
 *               - username
 *               - email
 *               - password
 *             properties:
 *               username:
 *                 type: string
 *                 minLength: 3
 *                 maxLength: 30
 *                 example: "Иван Слоняров"
 *               email:
 *                 type: string
 *                 format: email
 *                 example: "ivanslon@mail.com"
 *               password:
 *                 type: string
 *                 format: password
 *                 minLength: 8
 *                 example: "ZGoidaSVO"
 *     responses:
 *       201:
 *         description: Пользователь создан
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 username:
 *                   type: string
 *                   example: "Юра Мыколенко"
 *                 email:
 *                   type: string
 *                   example: "hryumia@mail.com"
 *                 password:
 *                   type: string
 *                   example: "$2b$10$e6m9iPyQ5aqRTvWjv7PBZOsEo6dd1A4etEWsRLMWA.K3TiLmunNJG"
 *                 _id:
 *                   type: string
 *                   example: "67fe5f67a91106d0985d57f9"
 *                 __v:
 *                   type: int
 *                   example: 0
 *       400:
 *         description: Неверные данные
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Email is required"
 */
//Добавление пользователя (эндпоинт)
router.post("/", createUser);

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
 *              schema:
 *                type: array
 *                items:
 *                  type: object
 *                  properties:
 *                    _id:
 *                      type: string
 *                      example: 67f4c70441b7447c466a53ab
 *                    username:
 *                      type: string
 *                      example: John Doe
 *                    email:
 *                      type: string
 *                      example: johndoe@mail.com
 *                    password:
 *                      type: string
 *                      example: "$2b$10$e6m9iPyQ5aqRTvWjv7PBZOsEo6dd1A4etEWsRLMWA.K3TiLmunNJG"
 *                    __v:
 *                      type: int
 *                      example: 0
 */
//Получение всех пользователей (эндпоинт)
router.get("/", getUsers);

/**
 * @swagger
 * /users:
 *   put:
 *     summary: Изменить информацию о пользователе
 *     description: Меняет информацию о пользователе в БД
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: 
 *               - username
 *               - email
 *               - password
 *             properties:
 *               username:
 *                 type: string
 *                 minLength: 3
 *                 maxLength: 30
 *                 example: "Юра Мыколюк"
 *               email:
 *                 type: string
 *                 format: email
 *                 example: "hryumia@mail.com"
 *               password:
 *                 type: string
 *                 format: password
 *                 minLength: 8
 *                 example: "PereMoZ"
 *     responses:
 *       200:
 *         description: Информация о пользователе изменена
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 username:
 *                   type: string
 *                   example: "Юра Мыколенко"
 *                 email:
 *                   type: string
 *                   example: "hryumia@mail.com"
 *                 password:
 *                   type: string
 *                   example: "$2b$10$e6m9iPyQ5aqRTvWjv7PBZOsEo6dd1A4etEWsRLMWA.K3TiLmunNJG"
 *                 _id:
 *                   type: string
 *                   example: "67fe5f67a91106d0985d57f9"
 *                 __v:
 *                   type: int
 *                   example: 0
 *       400:
 *         description: Неверные данные
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Email is required"
 *       404:
 *         description: Пользователь не найден
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "User not found"
 */
router.put("/", updateUser);

/**
 * @swagger
 * /users:
 *   delete:
 *     summary: Удалить пользователя
 *     description: Удаляет пользователя по ID
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [username, email, password]
 *             properties:
 *               username:
 *                 type: string
 *                 minLength: 3
 *                 maxLength: 30
 *                 example: "Иван Слоняров"
 *               email:
 *                 type: string
 *                 format: email
 *                 example: "ivanslon@mail.com"
 *               password:
 *                 type: string
 *                 format: password
 *                 minLength: 8
 *                 example: "$2b$10$4CyKreqKBTugWv6parwbIuYqiOkk7R8r.hWONQ3ZPLkUDhB2OHxeC"
 *     responses:
 *       201:
 *         description: Успешное удаление
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 acknowledged:
 *                   type: bool
 *                   example: true
 *                 deletedCount:
 *                   type: int
 *                   example: 1
 *       404:
 *         description: Пользователь не найден
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "User not found"
 */
//Удаление пользователей (эндпоинт)
router.delete("/", deleteUser);

export default router;