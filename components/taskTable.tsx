import AddTask from "./addTask"
import { getTasks } from "./actions";
import Task from "./task";

export default async function TaskTable() {
  const tasks = await getTasks();

  return (
    <div className="sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/3 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      <div className="p-4">
        <h1 className="text-xl font-bold text-gray-800">Todoリスト</h1>
        <AddTask />
        <ul className="mt-4 divide-y divide-gray-200">
          {tasks.map((task) => (
            <li className="flex items-center justify-between py-2" key={task.id}>
              <Task id={task.id} text={task.text} update_at={task.updated_at}></Task>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
