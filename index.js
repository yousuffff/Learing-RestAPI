import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 8080;

const _fileName = fileURLToPath(import.meta.url);
const __dirname = path.dirname(_fileName);
let posts = [
  {
    username: "Yousuf",
    content: "How's the joshsss guyzzzzzzzz",
  },
  {
    username: "Abdul",
    content: "hey Guyss meri shadhi hogyi h",
  },
  {
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
  let { username, content } = req.body;
  if (!username.trim() || !content.trim()) {
    res.send("Please fill both fields");
    res.redirect("/posts/new");
  }
  posts.push({ username, content });
  res.redirect("/posts");
});

app.listen(port, () => {
  console.log(`This app is running on port ${port}`);
});
