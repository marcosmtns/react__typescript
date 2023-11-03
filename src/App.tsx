import {useState} from 'react'

// CSS
import styles from './App.module.css';

// components
import Footer from './components/Footer'
import Header from './components/Header'
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

// interface 
import { ITask } from './interfaces/ITask';

function App() {

  const [taskList, setTaskList] = useState<ITask[]>([]);

  return (
    <div>
      <Header />
      <main className={styles.main}>
        <div>
          <h2>O que você vai fazer?</h2>
          <TaskForm taskList={taskList} setTaskList={setTaskList} btnText="Criar tarefa" />
        </div>
        <div>
          <h2>Suas tarefas:</h2>
          <TaskList taskList={taskList} />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
