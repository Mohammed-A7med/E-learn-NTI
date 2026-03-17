import authRouter from "../modules/auth/auth.routes.js";
import userRouter from "../modules/users/user.routes.js";
import adminRouter from "../modules/admin/admin.routes.js";
import courseRouter from "../modules/course/course.routes.js";
import lessonRouter from "../modules/lesson/lesson.routes.js";
import enrollmentRouter from "../modules/enrollment/course/enrollment.routes.js";

const routerHandler = async (app, express) => {
  app.use(express.json());
  app.use("/auth", authRouter);
  app.use("/users", userRouter);
  app.use("/admin", adminRouter);
  app.use("/courses", courseRouter);
  app.use("/lessons", lessonRouter);
  app.use("/enrollments", enrollmentRouter);

  app.use("/{*any}", (req, res) => {
    res.status(404).json({ message: "this Router is not found" });
  });
};

export default routerHandler;
