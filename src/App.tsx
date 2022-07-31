import React from "react";
import TodoList from './Todos/TodoList';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<TodoList />} >
                    <Route index element={<TodoList/ >} />
                    
                </Route>
            </Routes>
        </BrowserRouter>
    </div>
)
    


export default App