import React, {useState,useEffect, useContext} from 'react'
import {GithubContext} from '../../context/Context'
import { PieChart } from 'react-minimal-pie-chart';
import {getColor} from '../../utilities'

const Pie = () => {
    const {repos} = useContext(GithubContext);
    const [topLanguages , setTopLanguages] = useState([]);
    const [topRepos , setTopRepos] = useState([]);
    
    useEffect(() => {
        const languageData = {};
        const sortedRepo = repos.sort((a,b) => b.stargazers_count - a.stargazers_count);
        const tmp = [];

        for(let i = 0; i < sortedRepo.length; i++){

            if(languageData[sortedRepo[i].language] === undefined){
                languageData[sortedRepo[i].language] = {count: 1 , color : getColor(sortedRepo[i].language)};
            }else{
                languageData[sortedRepo[i].language] = {count: languageData[sortedRepo[i].language].count + 1 , color : getColor(sortedRepo[i].language)};
            }
            
            if(i <= 5){
                tmp.push({
                    title: sortedRepo[i].name,
                    value: sortedRepo[i].stargazers_count,
                    color: getColor(sortedRepo[i].language)
                });
            }
        }
        const tmpData = [];
        for(let key in languageData){
            tmpData.push({
                title: key,
                value: languageData[key].count,
                color: languageData[key].color
            });
        }
        setTopLanguages(tmpData);
        setTopRepos(tmp);
    }, [repos])

    // console.log(repos, "repos")
  return (
    <div style={{display: 'flex', gap: '30px'}}>

<div id="piechart">
            <p>Top languages</p>
            <div className="chart">
            <PieChart
            data={
                topLanguages
            }
            width={400}
            height={400}
            lineColor='#ffffff'
            />

            </div>
          </div>
          <div id="piechart">
            <p>Top repos star</p>
            <div className="chart">
            <PieChart
            data={
                topRepos
            }
            width={400}
            height={400}
            lineColor='#ffffff'
            />                    </div>
        </div>
            

    </div>
  )
}
export default Pie;
