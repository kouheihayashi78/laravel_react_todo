import { useQuery } from "react-query";
import { getTasks } from "../api/TaskAPI";

// useQueryを使うため、useEffectでの記述をコメントアウト
/*
    const [ tasks, setTasks ] = useState<Task[]>([]);

    const getTasks = async (): Promise<void> => {
        const res = await axios.get<Task[]>('api/tasks');
        setTasks(res.data);
    }
    useEffect(() => {
        getTasks();
    }, []);
*/

// 第一引数はkeyとなる文字列、第二引数は非同期処理
export const useTasks = () => {
    return useQuery("tasks", async () => getTasks());
}

