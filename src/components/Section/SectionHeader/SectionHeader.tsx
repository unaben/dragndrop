import React, { FC } from "react";
import { ITask } from "../../../model/task.type";
import Task from "../../Task/Task";
import style from "./SectionHeader.module.css";

type SectionHeaderProps = {
  headingText: string;
  taskToMap: ITask[];
  tasks: ITask[];
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
  bgColor: string;
};

const SectionHeader: FC<SectionHeaderProps> = ({
  headingText,
  taskToMap,
  tasks,
  setTasks,
  bgColor,
}) => {
  return (
    <div className={style.container}>
      <div
        className={style.wrapper}
        style={{background: `${bgColor}`}}
      >
        <p>{headingText.toUpperCase()}</p>
        <span>{taskToMap.length}</span>
      </div>
      {!!taskToMap.length &&
        taskToMap.map((task: ITask) => (
          <Task key={task.id} {...{ task, tasks, setTasks }} />
        ))}
    </div>
  );
};

export default SectionHeader;
