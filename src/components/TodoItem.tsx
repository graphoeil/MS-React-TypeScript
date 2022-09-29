// Imports
import React from "react";
import styled from "styled-components";

// Component
// React.FC<{}> => describes that it's a functional component, 
// in the curly braces we describes the type of the props
const TodoItem:React.FC<{ text:string, removeTodo:()=>void }> = ({ text, removeTodo }) => {

	// Return
	return <Wrapper onClick={ removeTodo }>
		{ text }
	</Wrapper>;

};

// Styled
const Wrapper = styled.li`
	margin: 1rem 0;
	box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
	padding: 1rem;
	background-color: #f7f5ef;
	cursor: pointer;
	transition: 0.35s background ease-in-out, 0.35s transform ease-in-out;
	&:hover{
		background-color: #ebb002;
		transform: scale(1.05);
	}
`;

// Export
export default TodoItem;