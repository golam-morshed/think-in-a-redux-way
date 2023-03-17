import { useDispatch } from 'react-redux';
import { filterColor, filterStatus } from '../redux/filters/action';
import { useSelector } from 'react-redux';


export default function Footer() {
    const dispatch = useDispatch();
    const filters = useSelector((state) => state.filters);
    const todos = useSelector((state) => state.todos);

    const handleStatusChange = (status) => {
        dispatch(filterStatus(status))
    }

    const handleColorFilter = (color) => {
        filters.color.includes(color) ? dispatch(filterColor(color, "remove")) : dispatch(filterColor(color, "add"))
    }

    const incompleteTodos = () => {
        const n = todos.filter((todo) => !todo.completed).length;
        switch (n) {
            case 0:
                return "0 todo"

            case 1:
                return "1 todo"

            default:
                return `${n} todos`
        }
    }

    return (
        <div className="mt-4 flex justify-between text-xs text-gray-500">
            <p> {incompleteTodos()} left</p>

            {todos.length > 0 &&
                <ul className="flex space-x-1 items-center text-xs">
                    <li className={`cursor-pointer ${filters.status === "all" ? "font-bold" : ""}`} onClick={() => handleStatusChange("all")}>All</li>
                    <li>|</li>
                    <li className={`cursor-pointer ${filters.status === "incomplete" ? "font-bold" : ""}`} onClick={() => handleStatusChange("incomplete")}>Incomplete</li>
                    <li>|</li>
                    <li className={`cursor-pointer ${filters.status === "complete" ? "font-bold" : ""}`} onClick={() => handleStatusChange("complete")}>Complete</li>
                    <li></li>
                    <li></li>
                    <li className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${filters.color.includes("green") ? "bg-green-500" : ""} `} onClick={() => handleColorFilter("green")}></li>
                    <li className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${filters.color.includes("red") ? "bg-red-500" : ""}`} onClick={() => handleColorFilter("red")}></li>
                    <li className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${filters.color.includes("yellow") ? "bg-yellow-500" : ""}`} onClick={() => handleColorFilter("yellow")}></li>
                </ul>
            }
        </div>
    );
}
