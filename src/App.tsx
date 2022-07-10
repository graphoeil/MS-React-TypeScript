// Imports
import React from 'react';
import Todos from "./components/Todos";
import NewTodo from "./components/NewTodo";
import { useTodosContext } from "./context/todos-context";

// Component
const App = () => {

	// Context
	// Of course with a context we delete prop drilling in component,
	// but here it's for learning purpose ,-)
	const { todos, addTodo, removeTodo } = useTodosContext();

	// Return
	return(
		<React.Fragment>
			<NewTodo addTodo={ addTodo }/>
			<Todos items={ todos } removeTodo={ removeTodo }/>
		</React.Fragment>
	);

};

// Export
export default App;