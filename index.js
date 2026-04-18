import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { v4 as uuidv4 } from "uuid";

const app = express();
const port = 8080;

const _fileName = fileURLToPath(import.meta.url);
const __dirname = path.dirname(_fileName);
let posts = [
  {
    id: uuidv4(),
    username: "Yousuf",
    content: "How's the joshsss guyzzzzzzzz",
  },
  {
    id: uuidv4(),
    username: "Abdul",
    content: "hey Guyss meri shadhi hogyi h",
  },
  {
    id: uuidv4(),
    username: "Fahad",
    content:
      "hey abdul congrats BTW meri shadhi ko ek saal hone wala h . HAHAHAHAAAA",
  },
];

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/posts", (req, res) => {
  //   let { username, content } = req.body;
  //   posts.push({ username, content });
  console.log(req.body);
  res.render("index.ejs", { posts });
});

app.get("/posts/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/posts", (req, res) => {
  let id = uuidv4();
  let { username, content } = req.body;
  if (!username.trim() || !content.trim()) {
    res.send("Please fill both fields");
    res.redirect("/posts/new");
  }
  posts.push({ id, username, content });
  res.redirect("/posts");
});

app.get("/posts/:id", (req, res) => {
  let { id } = req.params;

  let post = posts.find((p) => id === p.id);
  res.render("tweet view.ejs", post);
});

app.listen(port, () => {
  console.log(`This app is running on port ${port}`);
});
