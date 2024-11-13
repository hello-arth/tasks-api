import { Router } from "express";
import { TaskController } from "./controllers/TaskController";

const router = Router()
const taskController = new TaskController();

router.get("/tasks", taskController.index)
router.post("/tasks", taskController.store)
router.get("/tasks/:id", taskController.show)
router.put("/tasks/update/:id", taskController.update)
router.delete("/tasks/delete/:id", taskController.delete)

export default router;
