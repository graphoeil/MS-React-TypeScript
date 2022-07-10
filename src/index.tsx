// Imports
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { TodosProvider } from "./context/todos-context";

// ReactDOM
const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<TodosProvider>
			<App />
		</TodosProvider>
	</React.StrictMode>
);