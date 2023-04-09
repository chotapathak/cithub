import React, { createContext, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUsers, setRepos, setLoading, setError } from "../redux/slice";

export const GithubContext = createContext();

function GithubProvider({ children }) {
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const user = useSelector((state) => state.user);
  const repos = useSelector((state) => state.user.repos);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);
  
  const fetchAllRepos = async (gituser, page = 1) => {
    try {
      dispatch(setLoading(true));
      const response = await axios.get(`https://api.github.com/users/${gituser}/repos?page=${page}&per_page=30`);
      const repos = response?.data || [];
      dispatch(setRepos(repos));
      if (repos.length === 30) {
        await fetchAllRepos(gituser, page + 1);
      }
    } catch (error) {
      console.log(error);
    }
    dispatch(setLoading(false));
  };
  

  const requestRepo = async (gituser) => {
    try {
      dispatch(setLoading(true));
      await fetchAllRepos(gituser);
    } catch (error) {
      console.log(error);
    }
    dispatch(setLoading(false));
  };  

  const fetchUser = async (gituser) => {
    try {
      dispatch(setLoading(true));
      const response = await axios.get(`https://api.github.com/users/${gituser}`);
      dispatch(setUsers(response?.data));
      navigation(`/userdetails/${gituser}`);
    } catch (error) {
      dispatch(setError(error.message));
      console.log(error);
    }
    dispatch(setLoading(false));
  };

  useEffect(() => {
    
    if(user?.login){
      requestRepo(user.login);
    }
  }, [user.login]);


  return (
    <GithubContext.Provider value={{ repos, fetchUser, error, loading }}>
      {children}
    </GithubContext.Provider>
  );
}

export default GithubProvider;