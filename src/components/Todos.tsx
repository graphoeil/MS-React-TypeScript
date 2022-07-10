// Imports
import React from "react";
import styled from "styled-components";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";

// Component with type definition FC => Functional Component
// <{}> with that we indicate the generic type of the props, 
// an object that contains all the props ,-)
const Todos:React.FC<{ items:Todo[], removeTodo:(id:string)=>void }> = ({ items, removeTodo }) => {

	// Return
	return(
		<Wrapper>
			{
				items.map((item) => {
					// We define id and text in the todo.js data model
					return <TodoItem key={ item.id } text={ item.text } 
						removeTodo={ () => { removeTodo(item.id); } }/>
				})
			}
		</Wrapper>
	);

};

// Styled
const Wrapper = styled.ul`
	list-style: none;
	margin: 2rem auto;
	padding: 0;
	width: 40rem;
`;

// Export
export default Todos;