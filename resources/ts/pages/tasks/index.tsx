import React from "react";
import { useTasks } from "../../queries/TaskQuery";

const TaskPage: React.FC = () => {

    const {data:tasks, status} = useTasks();

    if(status === 'loading') {
        return <div className="loader" />
    } else if (status === 'error') {
        return <div className="align-center">データの読み込みに失敗しました。</div>
    } else if (!tasks || tasks.length <= 0) {
        return <div className="align-center">登録されたタスクはありません。</div>
    }

    return (
        <>
            <form className="input-form">
                <div className="inner">
                    <input type="text" className="input" placeholder="TODOを入力してください。" defaultValue="" />
                    <button className="btn is-primary">追加</button>
                </div>
            </form>
            <div className="inner">
                <ul className="task-list">
                    {tasks.map((task) => (
                        <li key={task.id}>
                            <label className="checkbox-label">
                                <input type="checkbox" className="checkbox-input" />
                            </label>
                            <div><span>{ task.title }</span></div>
                            <button className="btn is-delete">削除</button>
                        </li>
                    ))}

                </ul>
            </div>
        </>
    )
};

export default TaskPage;
