"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
// Express Router
const userRouter = express_1.default.Router();
const courseRouter = express_1.default.Router();
//
app.use("/api/v1/users", userRouter);
app.use("/api/v1/courses", courseRouter);
//
userRouter.get("/create-user", (req, res) => {
    const user = req.body;
    console.log(user);
    res.json({
        success: true,
        message: "User created successfully",
        data: user,
    });
});
courseRouter.post("/create-course", (req, res) => {
    const course = req.body;
    console.log(course);
    res.json({
        success: true,
        message: "Created a new course",
        course: course,
    });
});
const logger = (req, res, next) => {
    console.log(req.url, req.method);
    next();
};
app.get("/", logger, (req, res, next) => {
    try {
        console.log(req.body);
        res.send(something);
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
app.get("/:userId/:id", (req, res) => {
    console.log(req.params);
    res.send("Hello World!");
});
// app.get("/", (req: Request, res: Response) => {
//   console.log(req.query);
//   res.send("Hello World!");
// });
app.post("/", (req, res) => {
    console.log(req.body);
    res.send("Got Data!");
});
app.all("*", (req, res) => {
    res.status(400).json({
        success: false,
        message: "Route is not found",
    });
});
// Global error handler
app.use((error, req, res, next) => {
    console.log(error);
    if (error) {
        res.status(400).json({ success: false, message: "Something went wrong" });
    }
});
exports.default = app;
