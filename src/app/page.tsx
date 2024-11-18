"use client";

import { useState } from "react";

// Define the type for a Todo
interface Todo {
  id: number;
  title: string;
  description: string;
}

export default function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([]); // Define the todos state as an array of Todo objects
  const [title, setTitle] = useState<string>(""); // Define title state as a string
  const [description, setDescription] = useState<string>(""); // Define description state as a string

  const addTodo = () => {
    if (!title || !description) {
      alert("Please enter both title and description!");
      return;
    }

    // Add new todo to the list
    setTodos((prevTodos) => {
      const newTodo: Todo = {
        id: Date.now(), // Unique ID
        title,
        description,
      };
      console.log("Updated Todos:", [...prevTodos, newTodo]); // Debug
      return [...prevTodos, newTodo]; // Add new todo to the list
    });

    setTitle(""); // Clear title input
    setDescription(""); // Clear description input
  };

  const deleteTodo = (id: number) => {
    // Filter out the todo with the given id
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.filter((todo) => todo.id !== id);
      console.log("After Deletion:", updatedTodos); // Debug
      return updatedTodos;
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h1 className="text-2xl font-bold mb-4 text-center">Todo App</h1>

        {/* Input Fields */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-2"
          />
          <textarea
            placeholder="Enter Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        {/* Add Todo Button */}
        <button
          onClick={addTodo}
          className="w-full bg-blue-600 text-white py-2 rounded mb-4 hover:bg-blue-700"
        >
          Add Todo
        </button>

        {/* Todo Table */}
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Title
                </th>
                <th scope="col" className="px-6 py-3">
                  Description
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {todos.length > 0 ? (
                todos.map((todo) => (
                  <tr
                    key={todo.id}
                    className="bg-white border-b hover:bg-gray-100"
                  >
                    <td className="px-6 py-4 font-medium text-gray-900">
                      {todo.title || "No Title"}
                    </td>
                    <td className="px-6 py-4">
                      {todo.description || "No Description"}
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => deleteTodo(todo.id)}
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={3} // Corrected colSpan as number
                    className="text-center py-4 text-gray-500 font-medium"
                  >
                    No todos added yet!
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
