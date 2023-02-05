import React  from "react";
import { Component } from "react";
import './TodoList.css';
import TodoForm from "../TodoForm/TodoForm";

class TodoList extends Component {
    state = {
        todos:[],
        newTodo: "",
    }

    handleChange = (event) => {
        this.setState({newTodo: event.target.value});
    }

    handleSubmit = (event) =>{
        event.preventDefault();

        let todosLength = this.state.todos.length;


        this.setState({
            newTodo:'',
            todos: [
                ...this.state.todos,
                {
                    id: (todosLength += 1),
                    title: this.state.newTodo,
                    iSCompleted: false                    
                }
            ]
        })
    }
    
    render() { 
        return (
            <div className="todo-list container d-flex-column w-50 mt-5 pb-3">
                <h1 className="display-4 fw-bold">Todo App</h1>
                <TodoForm
                todos={this.state.todos}
                newTodo={this.state.newTodo}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                />
            </div>

        );
    }
}
 
export default TodoList;