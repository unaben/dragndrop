import React, { FC, useState } from "react";
import { ITask } from "../../model/task.type";
import { notifyError, notifySuccess } from "../../helper/toaster";
import style from "./FormInput.module.css";

type FormInputProps = {
  tasks: ITask[];
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
};

const FormInput: FC<FormInputProps> = ({ tasks, setTasks }) => {
  const [task, setTask] = useState<ITask>({
    id: "",
    title: "",
    status: "todo",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (task.title.length < 3) {
      notifyError("Input text must be more than 3 characters");
    } else {
      setTasks((prevState) => {
        const data = [...prevState, task];
        return data;
      });
      setTask({ id: "", title: "", status: "todo" });
      notifySuccess("Todo created successful");
    }
  };

  return (
    <div>
      <form className={style.container} onSubmit={handleSubmit}>
        <input
          type="text"
          value={task.title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTask({
              ...task,
              id: `~${Math.random().toString(36).substring(2, 9).toString()}`,
              title: e.target.value as string,
            })
          }
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default FormInput;
