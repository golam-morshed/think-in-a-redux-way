import Todo from "./Todo";
import { useSelector } from "react-redux";

export default function TodoList() {
    const todos = useSelector((state) => state.todos)
    const filters = useSelector((state) => state.filters)

    return (
        <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
            {todos
                .filter(todo => {
                    switch (filters.status) {
                        case "complete":
                            return todo.completed;

                        case "incomplete":
                            return !todo.completed

                        default:
                            return true;
                    }
                })
                .filter(todo => {
                    if (filters.color.length > 0) {
                        return filters.color.includes(todo.color)
                    } else {
                        return true;
                    }
                })
                .map((todo) => <Todo todo={todo} key={todo.id} />)}

        </div>
    );
}
