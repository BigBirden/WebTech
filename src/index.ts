import express , {Request, Response} from "express"
import mongoose from "mongoose"
import User from "./models/User"
const app = express()
const port = 3000

//Для использования статических файлов
app.use(express.static('public'))

app.use(express.json())
app.use(express.urlencoded({extended: true}))

mongoose
  .connect("mongodb://admin:1234@localhost:27017/ivtb-22?authSource=admin")
  .then(()=>console.log("DB connected!"))
  .catch((err)=>console.log(err));

//Добавление пользователя (эндпоинт)
app.post("/users", async (req: Request, res: Response) => {
  try {
    console.log(req.body);
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (e) {
    res.status(400).json({message: (e as Error).message})
  }
})

//Получение всех пользователей (эндпоинт)
app.get("/users", async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    res.status(201).json(users);
  } catch (e) {
    res.status(400).json({message: (e as Error).message})
  }
})

//Удаление пользователя по полученному телу (эндпоинт)
app.delete("/users", async (req: Request, res: Response) => {
  try {
    console.log(req.body);
    const result = await User.deleteOne(req.body);
    res.status(201).json(result);
  } catch (e) {
    res.status(400).json({message: (e as Error).message})
  }
})

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