
import './home.css'

import React, {useContext, useEffect} from "react";
import {GithubContext} from "../context/Context";
import Profile from '../components/Profile/';
import Repo from "../components/Repo/";
import {useParams} from 'react-router-dom'
import { useSelector } from 'react-redux';
function UserDetails() {
  const { fetchUser , repos} = useContext(GithubContext);
  const { user } = useSelector((state) => state.user);
  // const repos = useSelector((state) => state.repos);
  // const repo = repos || {};
  console.log(repos);
  
  const { username } = useParams();
  
  useEffect(() => {
    if (!user.login && username) {
      fetchUser(username);
    }
  },[username]);

  return (
    <>
      <Profile user={user} />
     {repos && <Repo repos={repos}  />}
    </>

  );
}


export default UserDetails;
