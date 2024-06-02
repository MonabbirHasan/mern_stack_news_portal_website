const express = require("express")
const cors = require("cors")
const bodyParser = require('body-parser')
require("dotenv").config()
const app = express()
const SrequestRouter = require("./routes/s_request.routes")
const AdminTmpRouter = require("./routes/admin_tmp.routes")
const CategoryRouter = require("./routes/category.routes")
const ContactRouter = require("./routes/contact.routes")
const CommentRouter = require("./routes/comment.routes")
const PostsRouter = require("./routes/posts.routes")
const UserRouter = require("./routes/users.routes")

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(cors({ origin: ["http://localhost:5173", "http://192.168.0.105:5173"] }))
/*************************
 * STARTUP ROUTE SETUP
 *************************/
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html")
})
app.use("/api/service_request", SrequestRouter)
app.use("/api/admin_tmp", AdminTmpRouter)
app.use("/api/category", CategoryRouter)
app.use("/api/comments", CommentRouter)
app.use("/api/contact", ContactRouter)
app.use("/api/posts", PostsRouter)
app.use("/api/users", UserRouter)
/*************************
 * ROUTE ERROR HANDELING
 *************************/
/*************************
 * SERVER ERROR HANDELING
 *************************/
/*************************
 * RUN SERVER ON PORT
 *************************/
app.listen(3000, () => {
    console.log("server running on port: http:localhost:3000")
})