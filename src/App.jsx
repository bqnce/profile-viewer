import { useState } from "react";
import "./App.css";
import Profile from "./components/Profile";
import Error from "./components/Error";
import axios from "axios";

function App() {
  const [username, setUsername] = useState("");
  const [data, setData] = useState({});
  const [error, setError] = useState({});

  const API_URL = "https://api.github.com/users/";

  const handleSearch = (event) => {
    if (event.key == "Enter") {
      axios
        .get(API_URL + username)
        .then((response) => {
          setData(response.data);
          setError(null);
        })
        .catch((error) => {
          setData(null);
          if (error.response && error.response.status === 404) {
            setError({ message: "A felhasználó nem található" });
          }
        });
    }
  };

  return (
    <>
      <div className="wrapper w-screen h-screen flex justify-center items-center">
        <div className="box h-[50px] w-[400px] flex justify-center items-center flex-col">
          <input
            type="text"
            placeholder="Enter text"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 hover:border-blue-500 transition duration-500"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onKeyDown={handleSearch}
          />
          {data ? <Profile userData={data} /> : null}
          {error ? <Error errorMessage={error} /> : null}
        </div>
      </div>
    </>
  );
}

export default App;
