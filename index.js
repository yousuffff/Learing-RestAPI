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

app.get("/", (req, res) => {
  res.render("index.ejs", { posts });
});

app.listen(port, () => {
  console.log(`This app is running on port ${port}`);
});
