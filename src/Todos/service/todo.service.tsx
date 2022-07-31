import axios from "axios";

export const getTodos = async() => {
    let result = await axios.get('http://localhost:8080/todos')
    return result.data;
};

export const addTodos = async( text: any ) => {
    let body = JSON.stringify({ text });
    console.log(body)
    let headers = {
        'Content-type': 'application/json'
    };
    let result = await axios.post(
        'http://localhost:8080/todos',
        body,
        {headers : headers}
    )
    return result.data;
};

export const deleteTodos = async(id: any) => {
    let result = await axios.delete(
        `http://localhost:8080/todos/${id}`
    );
    return result.data;
};

export const markTodosCompleted = async(id: any) => {
    let body = {};
    let result = await axios.post(
        `http://localhost:8080/todos/${id}/completed`,
        body
    );
    return result.data;
};