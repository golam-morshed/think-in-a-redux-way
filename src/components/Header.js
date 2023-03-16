import tickImage from "../assets/images/double-tick.png";
import noteImage from "../assets/images/notes.png";
import plusImage from "../assets/images/plus.png";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewTodo, completeAll, clearAll } from "../redux/todos/action";

export default function Header() {
    const dispatch = useDispatch();
    const [todoText, setTodoText] = useState("");
    const handleTodoInput = (e) => {
        setTodoText(e.target.value);
    }

    const addTodo = (e) => {
        e.preventDefault();
        if (todoText !== "") {
            console.log(todoText);
            dispatch(addNewTodo(todoText));
            setTodoText("");
        }
    }

    const handleCompleteAll = () => {
        dispatch(completeAll());
    }

    const handleClearAll = () => {
        dispatch(clearAll());
    }
    return (
        <div>
            <form className="flex items-center bg-gray-100 px-4 py-4 rounded-md" onSubmit={addTodo}>
                <img src={noteImage} className="w-6 h-6" alt="Add todo" />
                <input
                    type="text"
                    placeholder="Type your todo"
                    value={todoText}
                    onChange={handleTodoInput}
                    className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
                />
                <button
                    type="submit"
                    className={`appearance-none w-8 h-8 bg-[url('${plusImage}')] bg-no-repeat bg-contain`}
                ></button>
            </form>

            <ul className="flex justify-between my-4 text-xs text-gray-500">
                <li className="flex space-x-1 cursor-pointer" onClick={handleCompleteAll}>
                    <img className="w-4 h-4" src={tickImage} alt="Complete" />
                    <span>Complete All Tasks</span>
                </li>
                <li className="cursor-pointer" onClick={handleClearAll}>Clear completed</li>
            </ul>
        </div>
    );
}
