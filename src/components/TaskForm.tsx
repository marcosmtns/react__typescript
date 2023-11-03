import {useState, ChangeEvent, FormEvent} from 'react';
import styles from './TaskForm.module.css'
import { ITask } from '../interfaces/ITask';

type Props = {
    btnText: string;
    taskList: ITask[];
    setTaskList: React.Dispatch<React.SetStateAction<ITask[]>>;
}

const TaskForm = ({btnText, taskList, setTaskList}: Props) => {

    const [title, setTitle] = useState<string>('');
    const [difficulty, setDifficulty] = useState<number>(0);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.name === "title") {
            setTitle(e.target.value);
        } else {
            setDifficulty(parseInt(e.target.value));
        }
    }

    const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const id = Math.floor(Math.random() * 1000);
        const newTask = {id, title, difficulty};

        setTaskList!([...taskList, newTask]);

        setTitle('');
        setDifficulty(0);
    }

  return (
    <form onSubmit={addTaskHandler} className={styles.form}>
        <div className={styles.input_container}>
            <label htmlFor="title">Título:</label>
            <input type="text" name="title" value={title} onChange={handleChange} />
        </div>
        <div className={styles.input_container}>
            <label htmlFor="difficulty">Dificuldade:</label>
            <input type="number" name="difficulty" value={difficulty} onChange={handleChange} />
        </div>
        <input type="submit" value={btnText} />
    </form>
  )
}

export default TaskForm