// Import
import React, { useContext, useEffect, useState } from "react";
import Todo from "../models/todo";

// Context type definition
type TodosContextDescription = {
	todos:Todo[];
	addTodo:(text:string)=>void;
	removeTodo:(id:string)=>void;
};

// Context
const TodosContext = React.createContext<TodosContextDescription>({
	// Default values of the context
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

	// Another todo (because id based on time)
	useEffect(() => {
		setTimeout(() => {
			addTodo('Learn TypeScript');
		},10);
	},[]);

	// Todos state
	// We indicate to TS that todos will be an array of Todo
	const [todos, setTodos] = useState<Todo[]>(initialTodos);

	// Add new todo
	const addTodo = (text:string) => {
		const newTodo = new Todo(text);
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