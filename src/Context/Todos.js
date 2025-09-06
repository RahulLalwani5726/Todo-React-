import { useContext , createContext } from "react";

export const TodosContext = createContext({
    Todos:[
    ],
    AddTodo:(Todo)=>{},
    UpdateTodo:(id, Todo)=>{},
    DeleteTodo:(id)=>{},
    TogleComplete:(id)=>{},
})

export const TodosContextProvider = TodosContext.Provider;

export const useTodos = () =>{
    return useContext(TodosContext)
}