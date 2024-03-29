// Imports
import React, { useRef } from "react";
import styled from "styled-components";

// Component
// addTodo return nothing => void and take 1 argument
const NewTodo:React.FC<{ addTodo:(text:string)=>void }> = ({ addTodo }) => {

	// Uncontrolled form
	// All doms element have their HTML...Element type
	// See https://developer.mozilla.org/fr/docs/Web/HTML/Element/input
	// and check "Attributs" section to have the type ,-)
	// With TS we must indicate a starting value with useRef => null
	const inputRef = useRef<HTMLInputElement>(null);
	const submitForm = (e:React.FormEvent) => {
		e.preventDefault();
		// or ?.value in case where value is not yet defined
		// but not in this case ,-)
		const text = inputRef.current!.value;
		if (!text.trim()){
			return;
		}
		// Submit to list of todos in App
		addTodo(text);
		// Reset
		inputRef.current!.value = '';
	};

	// Return
	return(
		<Wrapper onSubmit={ submitForm }>
			<label htmlFor="todoText">Todo text</label>
			<input type="text" id="todoText" ref={ inputRef } />
			<button>Add Todo</button>
		</Wrapper>
	);

};

// Styled
const Wrapper = styled.form`
	width: 40rem;
	margin: 2rem auto;
	text-align: center;
	label{
		display: block;
		font-weight: bold;
		margin-bottom: 0.5rem;
		text-align: left;
	}
	input{
		display: block;
		width: 100%;
		font: inherit;
		padding: 0.5rem;
		border-radius: 4px;
		background-color: #f7f5ef;
		border: none;
		border-bottom: 2px solid #494844;
		border-bottom-right-radius: 0;
		border-bottom-left-radius: 0;
		margin-bottom: 0.5rem;
	}
	button{
		font: inherit;
		background-color: #ebc002;
		border: none;
		color: #201d0f;
		padding: 0.5rem 1.5rem;
		border-radius: 4px;
		cursor: pointer;
		transition: 0.35s background ease-in-out, 0.35s padding ease-in-out;
		&:hover, &:active{
			background-color: #ebb002;
			padding: 0.5rem 2rem;
		}
	}
`;

// Export
export default NewTodo;