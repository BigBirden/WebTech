import {Router} from "express"
import { signUp, signIn } from "../controllers/auth.controller";

const router = Router();
/**
 * @swagger
 *   tags:
 *     name: Auth
 *     description: Аутентификация пользователей
 */
/**
 * @swagger
 * /auth/sign-up:
 *   post:
 *     summary: Аутентифицировать нового пользователя
 *     description: Добавляет нового пользователя в систему
 *     tags: [Auth]
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
 *                 example: "ZGoidaSVO"
 *     responses:
 *       201:
 *         description: Пользователь зарегистрирован
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
 *                   example: "User already exists"
 */
router.post("/sign-up", signUp)

/**
 * @swagger
 * /auth/sign-in:
 *   post:
 *     summary: Аутентифицировать пользователя
 *     description: Входит в аккаунт пользователя
 *     tags: [Auth]
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
 *                 example: "ZGoidaSVO"
 *     responses:
 *       200:
 *         description: Пользователь успешно вошел
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Login successfull"
 *       400:
 *         description: Неверные данные
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Username or password is incorrect"
 */
router.post("/sign-in", signIn)

export default router;