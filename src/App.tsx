
import { ITask } from "./model/task.type";
import FormInput from "./components/FormInput/FormInput";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ListTask from "./components/ListTask/ListTask";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Header from "./components/Header/Header";
import style from "./App.module.css";

function App() {
  const [tasks, setTasks] = useLocalStorage<ITask[]>("tasks", []);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className={style.container}>
        <Header />
        <FormInput {...{ tasks, setTasks }} />
        <ListTask {...{ tasks, setTasks }} />
      </div>
      <ToastContainer />
    </DndProvider>
  );
}

export default App;
