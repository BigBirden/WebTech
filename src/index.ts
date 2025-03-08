import express , {Request, Response} from "express"
const app = express()
const port = 3000

//Для использования статических файлов
app.use(express.static('public'))

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.set("view engine", "ejs")
app.get('/ejs-pages', (req: Request, res: Response) => {
  res.render('layout', {message: "My message12312", title: "My page", content: "layout"})
})

app.get('/about', (req: Request, res: Response) => {
  res.render('about', {title: "About", currenttime: new Date()})
})

app.get('/', (req: Request, res: Response) => {
  /*console.log(req.body)
  console.log(req.headers)
  res.send('Hello World!')*/
  res.render('main', {name: "Shaman", title: "Home"})
})

app.get('/:name', function (req, res) {
        const { name } = req.params;
        res.send(`Привет, ${name}, как ты сюда попал?`);
    })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})