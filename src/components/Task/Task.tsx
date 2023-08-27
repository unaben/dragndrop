import React, { FC } from "react";
import { ITask } from "../../model/task.type";
import { notifySuccess } from "../../helper/toaster";
import { useDrag } from "react-dnd";
import { capitalizeFirstLetter } from "../../helper/capitalise";
import { MdDeleteForever } from "react-icons/md";
import cn from "classnames";
import style from "./Task.module.css";

type TaskProps = {
  task: ITask;
  tasks: ITask[];
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
};

const Task: FC<TaskProps> = ({ task, tasks, setTasks }) => {
  const handleDelete = (id: string) => {
    const itemToRemove = tasks.filter((task: ITask) => {
      return task.id !== id;
    });

    setTasks(itemToRemove);

    notifySuccess("Todo deleted successfully");
  };

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "task",
    item: { id: task.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className={cn(style.active, style.container, {
        [style.inActive]: isDragging,
      })}
    >
      {" "}
      <p>{capitalizeFirstLetter(task.title)}</p>
      <MdDeleteForever
        className={style.icon}
        onClick={() => handleDelete(task.id)}
      />
    </div>
  );
};

export default Task;
