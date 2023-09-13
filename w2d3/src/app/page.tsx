'use client';
import Header from "@/components/Header";
import TodoList from "@/components/TodoList";
import { useState } from "react";

export default function Home() {

  const [tasks, setTasks] = useState<any[]>([]);

  const addTask = (task: any) => {
    setTasks(prev => {
      return [ ...prev, { title: task, isCompleted: false }]
    });
  }

  return (
    <main>
      <Header addTask={addTask} />
      <TodoList tasks={tasks} />
    </main>
  );
}
