import React, { useEffect, useState } from "react";
//import repos from '../data/repos';
import Repo from './repo';

export default () => {

const [repos,setRepos] = useState([]);
const [reposCount, setReposCount] = useState([]);

useEffect(()=>{

    const data = sessionStorage.getItem("repos");
    let myRepos;
    if(data){
          myRepos = JSON.parse(data);

          setReposCount(myRepos);

          myRepos = myRepos.slice(1,13);
          return setRepos(myRepos);
    }
  
    async function fetchRepos(){
        const response = await fetch("https://api.github.com/users/BMR27/repos");
        myRepos = await response.json();
        setReposCount(myRepos.length);

        sessionStorage.setItem("repos", JSON.stringify(myRepos));
    
        setRepos(myRepos);
    }
    fetchRepos();
   
},[]);

return(
    <div className="max-w-4xl mx-auto">
        <header className="text-center">
            <h2 className="text-3xl font-bold">Mi Trabajo en Open Source</h2>
            <p>Colaboraciones y Contribuciones de Codigo</p>
        </header>
        <ul className="repos-list">
        {
            repos.map((repo)=>{
               return <Repo repo={repo} key={repo.id} />
            })
        }
        </ul>
        <div className="mt-8 text-center">
            <a href="https://github.com/BMR27" className="btn" target="_blank" rel="noopener noreferrer">
                Ver mas en Github({reposCount})
            </a>   
        </div>
        
    </div>
    );

 };