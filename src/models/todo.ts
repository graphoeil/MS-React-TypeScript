// Describe what's todo likes (data model)
class Todo {
	
	// Type description
	id:string;
	text:string;

	// Set value
	constructor(todoText:string){
		this.id = new Date().getMilliseconds().toString();
		this.text = todoText;
	};

};

// Export
export default Todo;