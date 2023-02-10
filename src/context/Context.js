import React, { useState, createContext, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const GithubContext = createContext();

function GithubProvider({ children }) {

  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);  
  const [error, setError] = useState('');
  const navigation = useNavigate();

  // console.log(repos, "repos")

  

  const requestRepo = async (gituser) => {
    try {
      const response = await axios.get(`https://api.github.com/users/${gituser}/repos`);
      setRepos(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const fetchUser = async (gituser) => {
    try {
      setLoading(true);
      const response = await axios.get(`https://api.github.com/users/${gituser}`);
      setUser(response.data);
      navigation(`/userdetails/${gituser}`);
    } catch (error) {
      setError(error.message);
      console.log(error);
    }
      setLoading(false);
  };
  useEffect(() => {
    if(user.login){
      requestRepo(user.login);
    }
    
  }, [user.login]);

  

  return (
    <GithubContext.Provider value={{ user, repos, fetchUser, error, loading}}>
      {children}
    </GithubContext.Provider>
  );
}

export default GithubProvider;