import React, { useState, useEffect } from "react";

const api = `https://jsonplaceholder.typicode.com/todos`;
const UserTodo = ({ personId }) => {
  const [todoDetails, setTodoDetails] = useState([]);
  const [ids, setId] = useState();

  const fetcData = async () => {
    setId(personId);
    const todoData = await fetch(api, { method: "GET" });
    const todoJsonData = await todoData.json();
    setTodoDetails(todoJsonData);
  };

  const searchIdHandler = () => {
    const filterAppState = todoDetails.filter((users) =>
      users.userId.includes(personId)
    );
    setId(filterAppState);
  };

  useEffect(() => {
    fetcData();
    searchIdHandler();
  }, []);

  return (
    <div>
      <ol>
        <li>{todoDetails.title}</li>
        <li>{todoDetails.completed}</li>
      </ol>
    </div>
  );
};
export default UserTodo;
