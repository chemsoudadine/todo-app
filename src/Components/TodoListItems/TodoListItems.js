import React from "react";
import './TodoListItems.css';

function TodoListItems(props){
    const {todos} = props;
    
    const todoItem = todos.map((todo, index) => {
        return (
            <div key={todo.id} className="todoComponent d-flex w-75 mx-auto">
                <div className="todoCompLeft">
                    <input type="checkbox" />
                </div>
                <div className="todoCompRight d-flex justify-content-between flex-grow-1 px-3">
                    
                    <div className="todoTitle">
                        <span style={ {textDecoration: todo.isCompleted ? "line-through" : "none"} } >
                            { todo.title }
                        </span>
                    </div>

                    <div>
                        <i className="fa fa-trash"></i>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div className="todoListItems w-full">
            <hr/>
            {todos.length === 0 && 
            (<h3 className="noTodos" >Let's get some work done</h3>)
            }
            {
            todos.length > 0 && todoItem
            }

        </div>
    )

}

export default TodoListItems;