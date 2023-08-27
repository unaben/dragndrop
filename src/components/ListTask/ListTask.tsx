import React, { FC, useEffect, useState } from "react";
import { ITask } from "../../model/task.type";
import Section from "../Section/Section";
import style from './ListTask.module.css'

type ListTaskProps = {
  tasks: ITask[];
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
};

const ListTask: FC<ListTaskProps> = ({ tasks, setTasks }) => {
  const [todos, setTodos] = useState<ITask[]>([]);
  const [inProgress, setInProgress] = useState<ITask[]>([]);
  const [closed, setClosed] = useState<ITask[]>([]);

  useEffect(() => {
    const filteredTodos = tasks.filter((task: ITask) => task.status === "todo");
    const filteredInProgress = tasks.filter(
      (task: ITask) => task.status === "inProgress"
    );
    const filteredClosed = tasks.filter(
      (task: ITask) => task.status === "closed"
    );

    setTodos(filteredTodos);
    setInProgress(filteredInProgress);
    setClosed(filteredClosed);
  }, [tasks]);

  const status = ["todo", "inProgress", "closed"];

  return (
    <div className={style.container}>
      {status.map((status: string, index: number) => (
        <Section
          key={index}
          {...{ status, tasks, setTasks, todos, inProgress, closed }}
        />
      ))}
    </div>
  );
};

export default ListTask;
