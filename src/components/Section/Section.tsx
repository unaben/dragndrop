import React, { FC } from "react";
import { ITask } from "../../model/task.type";
import SectionHeader from "./SectionHeader/SectionHeader";
import { useDrop } from "react-dnd";
import style from './Section.module.css'

type SectionProps = {
  status: string;
  todos: ITask[];
  closed: ITask[];
  inProgress: ITask[];
  tasks: ITask[];
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
};

const Section: FC<SectionProps> = ({
  status,
  todos,
  closed,
  inProgress,
  tasks,
  setTasks,
}) => {
  const addItem = (id: string) => {
    setTasks((prevState) => {
      const draggedItem = prevState.map((task: ITask) => {
        if (task.id === id) {
          return { ...task, status: status };
        } else {
          return task;
        }
      });
      return draggedItem;
    });
  };

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "task",
    drop: (item: ITask) => addItem(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  let headingText: string = "todos";
  let taskToMap: ITask[] = todos;
  let bgColor = "#415a77";

  if (status === "inProgress") {
    headingText = "in Progress";
    taskToMap = inProgress as ITask[];
    bgColor = "#160f29";
  }
  if (status === "closed") {
    headingText = "closed";
    taskToMap = closed as ITask[];
    bgColor = "#80ed99";
  }

  return (
    <div ref={drop} className={style.container}>
      <SectionHeader
        {...{ headingText, taskToMap, tasks, setTasks, bgColor }}
      />
    </div>
  );
};

export default Section;
