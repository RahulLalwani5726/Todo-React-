import { useId, useState } from "react";
import { useTodos } from "../Context/Todos";

function TodoForm() {
    const {Todos , AddTodo} = useTodos();
    const [Title , setTitle] = useState("");
     function CreateTodo(e){
        e.preventDefault();
        console.log(Title);
        if(!Title) return
        let Todo = {
            Title:Title,
            Complete:false
        }
        // prop.AddTodo(Todo);
        AddTodo(Todo)
        setTitle((prev) => prev = "");
        
    }
    return (
        <form  className="flex">
            <input
                onChange={(e)=>setTitle(e.target.value)}
                value = {Title}
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button
            onClick={CreateTodo}
             type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

