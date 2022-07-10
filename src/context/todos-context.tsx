// Import
import React, { useContext, useState } from "react";
import Todo from "../models/todo";

// Type definition
type TodosContextObject = {
	todos:Todo[],
	addTodo:(text:string)=>void,
	removeTodo:(id:string)=>void
}

// Context
const TodosContext = React.createContext<TodosContextObject>({
	// Description of the context ,-)
	todos:[],
	addTodo:(text:string)=>{},
	removeTodo:(id:string)=>{}
});

// Provider
const TodosProvider:React.FC<{ children:any }> = ({ children }) => {

	// Initial todos
	const initialTodos:Todo[] = [
		new Todo('Learn React')
	];

	// Todos
	// We indicate to TS that todos will be an array 
	// of Todo even if initially it's an empty array
	const [todos, setTodos] = useState<Todo[]>(initialTodos);

	// Add new todo
	const addTodo = (text:string) => {
		const newTodo = new Todo(text);
		console.log(newTodo);
		
		setTodos((oldTodos) => {
			return [...oldTodos, newTodo];
		});
	};

	// Remove todo
	const removeTodo = (id:string) => {
		setTodos((oldTodos) => {
			return oldTodos.filter((todo) => {
				return todo.id !== id;
			});
		});
	};

	// Return
	return <TodosContext.Provider value={ {
		todos, addTodo, removeTodo
	} }>{ children }</TodosContext.Provider>

};

// Custom hooks
export const useTodosContext = () => {
	return useContext(TodosContext);
};

// Provider export
export { TodosProvider };