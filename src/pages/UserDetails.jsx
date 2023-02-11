
import './home.css'

import React, {useContext, useEffect} from "react";
import {GithubContext} from "../context/Context";
import Profile from '../components/Profile/';
import Repo from "../components/Repo/";
import {useParams} from 'react-router-dom'

function UserDetails() {
  const {user, repos, fetchUser} = useContext(GithubContext);

  const {username} = useParams();

  useEffect(() => {
    console.log(username, !user)
    if(!user.login && username){
      fetchUser(username );
    }
  },[username]);

  // console.log(user);
  return (
    <>
    <Profile user={user} />
    <Repo repos={repos} />
    </>

  );
}

export default UserDetails;
