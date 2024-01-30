import "./home.css";
import images from "../assests"

import React, { useState, useContext } from "react";
import { GithubContext } from "../context/Context";

function Home() {
  const [username, setUsername] = useState("");
  const { loading, error, fetchUser } = useContext(GithubContext);

  return (
    <>
      <div className="home">
        <img src={images.Logo} alt="" id="logo" />
        <div className="user-form">
        <form>
          <h2>Github Home</h2>
          <input type="text" onChange={(e) => setUsername(e.target.value)} />
        </form>
        </div>
        {loading ? (
          <h2>Loading...</h2>
        ) : (
          <button onClick={() => fetchUser(username)}>Search user</button>
        )}
        {error ? <h2>{error}</h2> : null}
      </div>
    </>
  );
}

export default Home;
