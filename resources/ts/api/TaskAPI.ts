import axios from "axios";
import { Task } from "../types/Task";

export const getTasks = async (): Promise<Task[]> => {
    const res = await axios.get<Task[]>("api/tasks");
    return res.data;
}

