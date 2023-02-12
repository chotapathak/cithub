# Frontend Task 2


<h1 align="center">
  Github-user-fetcher
<br/>
</h1>

<p align='center'>
This project is Built using <b>Github-API</b>
 where anyone can search directly with username
</p>

Create this simple website with two pages:

1. **GitHub Profile**: Contains a text field for GitHub Profile. User will enter his GitHub profile name / id here.
2. **User Details Page**: The header shows the GitHub profile details of the user- number of repositories, followers & following.
   There are 2 pie charts showing top languages and top repositories (based on stars).
   The main area shows all the user repositories with the following details - language, stars, forks, and size.
   The repository list should be sortable (according to stars, forks, etc) as well as searchable.
## [ Demo url](https://cithub.vercel.app/)

## 📃 Table of contents

- [Installation](#installation)
  - [Test](#commands)
    - [Process](#process)
  - [Usage](#usage)
- [File&Structure](#architecture-)

## 📥 Installation

- Start by cloning the repo with following command

```
git clone https://github.com/chotapathak/cithub.git
```

## 🧮 Test:

```shell
cd cithub
npm install
npm start
```

## 🔗 Process


```

Created a 2 api call one to get user deatils with username and another to show user repository

```
  - [Provider](http://localhost:3000/usersdetails)
      - [App](http://localhost:3000/)
  - [Routes](http://localhost:3000/usersdetails/:id)

## Project usage

- using **ReactJS** [React](https://reactjs.org/) and [Githuub-js](https://api.github.com/)

## File & Route structure

```
index.js[ContextProvider | Router] - host
  |- app.js[Routes] - App
    |- Home.js - Home page
    |  |- userdetails.js - User details page
    |  |  |- profile.js - GitHub profile page
    |  |  |  |- pie chart.js - Pie chart
          |- repo - Repository list page
          |  |- searching & sorting.js - Searching & sorting page
          |  |- userlist.js - User list page

````

```
- React Context Hook To get data in other components easily

localhost:3000/

with Context And Router

```

- React Router DOM Hook To make routes on

---

## 🔧 Tech Stack

### Tech Stacks

'''React | react-minimal-pie-chart | React-router-dom | Axios '''

<p align="center">

<img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="vercel"/>
    <img src="https://img.shields.io/badge/Github-0070ba?style=for-the-badge&logo=github&logoColor=white" alt="Github"/>

<img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="JavaScript"/>
<img src="https://img.shields.io/badge/NodeJS-3F6E1F?style=for-the-badge&logo=nodejs&logoColor=white" alt="NodeJS"/>
<br/>

<img src="https://img.shields.io/badge/React-0070ba?style=for-the-badge&logo=react&logoColor=white" alt="React"/>
<img src="https://img.shields.io/badge/Axios-000000?style=for-the-badge&logo=axios&logoColor=white" alt="axios"/>
</p>

## 👨🏻‍💻 Contributor

- ## [Vikash Pathak](https://www.linkedin.com/in/vikash-pathak-298a01183/?originalSubdomain=in)
