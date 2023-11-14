import { useState, useEffect } from 'react'
import styles from '../list.module.css'

export default function MyList() {

    const [tasks, setTasks] = useState([])

    useEffect(() => {
        async function searchDatas() {
            fetch("https://jsonplaceholder.typicode.com/todos")
                .then(res => res.json())
                .then(res => setTasks(res))
        }
        searchDatas()
    }, [])

    return (
        <div>
            <h1 className={styles.title}>Deploy com Vercel</h1>
            <ol className={styles.list}>
                {tasks.map((task) => {
                    return (
                        <li key={task.id} className={styles.listItem}>{task.id} - {task.title}</li>
                    )
                })}
            </ol>
        </div>
    )
}