import { error } from "console";
import express, {
  ErrorRequestHandler,
  NextFunction,
  Request,
  Response,
} from "express";
const app = express();
const port = 3000;

app.use(express.json());
// Express Router
const userRouter = express.Router();
const courseRouter = express.Router();

//
app.use("/api/v1/users", userRouter);
app.use("/api/v1/courses", courseRouter);
//

userRouter.get("/create-user", (req: Request, res: Response) => {
  const user = req.body;
  console.log(user);
  res.json({
    success: true,
    message: "User created successfully",
    data: user,
  });
});
courseRouter.post("/create-course", (req: Request, res: Response) => {
  const course = req.body;
  console.log(course);
  res.json({
    success: true,
    message: "Created a new course",
    course: course,
  });
});
const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.url, req.method);
  next();
};

app.get("/", logger, (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log(req.body);
    res.send(something);
  } catch (error) {
    console.log(error);
    next(error);
  }
});
app.get("/:userId/:id", (req: Request, res: Response) => {
  console.log(req.params);
  res.send("Hello World!");
});
// app.get("/", (req: Request, res: Response) => {
//   console.log(req.query);
//   res.send("Hello World!");
// });
app.post("/", (req: Request, res: Response) => {
  console.log(req.body);
  res.send("Got Data!");
});

app.all("*", (req: Request, res: Response) => {
  res.status(400).json({
    success: false,
    message: "Route is not found",
  });
});

// Global error handler
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  console.log(error);
  if (error) {
    res.status(400).json({ success: false, message: "Something went wrong" });
  }
});
export default app;
