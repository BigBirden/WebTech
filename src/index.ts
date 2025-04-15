import express , {Request, Response} from "express"
import usersRouter from "./routes/users.routes";
import authRouter from "./routes/auth.routes";
import swaggerUI from "swagger-ui-express";
import swaggerSpec from "./config/openAPI";
import { connectDB } from "./config/connectDB";
const app = express()
const port = 3000

//npm run dev - запуск

//Для использования статических файлов
app.use(express.static('public'))

app.use(express.json())
app.use(express.urlencoded({extended: true}))

connectDB();

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));
app.use("/users", usersRouter)
app.use("/auth", authRouter)

//Страница чето там
app.set("view engine", "ejs")
app.get('/ejs-pages', (req: Request, res: Response) => {
  res.render('layout', {message: "My message12312", title: "My page", content: "layout"})
})

//Страница "о нас"
app.get('/about', (req: Request, res: Response) => {
  res.render('about', {title: "About", currenttime: new Date()})
})

//Домашняя директория
app.get('/', (req: Request, res: Response) => {
  res.render('main', {name: "Shaman", title: "Home"})
})

//Динамический роутер
app.get('/:name', function (req, res) {
        const { name } = req.params;
        res.send(`Привет, ${name}, как ты сюда попал?`);
    })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})