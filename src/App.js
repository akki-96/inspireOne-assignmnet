import "./styles.css";
import { useEffect, useState } from "react";
import UserName from "./UserName";

export default function App() {
  const api = `https://jsonplaceholder.typicode.com/users`;
  const [userDetails, setUserDetails] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(api, { method: "GET" });
      const dataJson = await data.json();
      setUserDetails(dataJson);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <div className="main">
        <img src="https://images.unsplash.com/photo-1564510714597-3a775f297ef5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80" />
        <div className="container">
          <div className="loading"></div>
        </div>
        <div className="main2">
          <div className="userDetails">
            {userDetails.map((user, index) => {
              return <UserName key={index} user={user} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
