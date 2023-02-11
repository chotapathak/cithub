import React, { useContext, useState } from "react";
import { GithubContext } from "../../context/Context";
import images from "../../assests";
import { getColor } from "../../utilities";

import "./repo.css";
const Repo = () => {
  
  const { repos } = useContext(GithubContext);
  const [filter, setFilter] = useState("");
  const [sortBy, setSortBy] = useState("stars");

  return (
    <div className="user-details">
      <div className="repo-header">
        <div className="filter">
          <div className="filter-head">
          <h2>Top Repos </h2>
          <div className="select-by">
          <p>by</p>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}  className={sortBy === "stars" ? "active" : ""}>
            <option value="stars">stars</option>
            <option value="forks">forks</option>
          </select>
          </div>
          </div>

        <div className="search">
          <i className="fa fa-search" aria-hidden="true"></i>
          <input
            type="text"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            placeholder="Search"
          />
        </div>
        </div>

      </div>
      <div className="repo-list">
        {repos
          .filter((repo) => repo.name.includes(filter))
          .sort((a, b) => b[sortBy] - a[sortBy])
          .map((repo) => (
            <div key={repo.name} className="project">
              <div className="project-container">
              <div className="p-head">
                <img src={images.Vector} alt="" />
                <b>{repo.name}</b>
              </div>
              <div className="repo-discription" >{repo.description}</div>
              <div className="p-bottom">
                <div className="info">
                  <>
                  <span className={repo.language} style={{background: `${getColor(repo.language)}`}}></span>
                  
                  </>
                  <div className="repo-language">{repo.language}</div>
                  <div className="repo-stars">
                    <i className="fa fa-star "></i>
                    {repo.stargazers_count}
                  </div>
                  <div className="repo-forks">
                    <i className="fa fa-code-fork "></i>
                    {repo.forks}
                  </div>
                </div>
                <div className="repo-size">{repo.size} KB </div>
              </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Repo;
