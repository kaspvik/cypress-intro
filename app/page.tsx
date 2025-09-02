import { db } from "@/prisma/db";
import TodoList from "./ui/todo-list";

export default async function Home() {
  const todos = await db.todo.findMany();

  return (
    <main>
      <h1>Things Todo</h1>
      <h2>hello</h2>
      <TodoList defaultTodos={todos} />
    </main>
  );
}
