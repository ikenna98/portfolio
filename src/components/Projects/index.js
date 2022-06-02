import "./styles.css";

import React from "react";

function Projects() {
  return (
    <div id="projects" className="container projects-container">
      <h1 className="project-txt">Projects</h1>
      <div className="project project-1">
        <div id="website1" className="project-img"></div>
        <div className="project-info">
          <h1 className="name">Adopters</h1>
          <h3 className="description">A mobile first site for adopting cats and dogs</h3>
          <h4 className="about">
            The frontend was created using React and the backend uses the Python framework - Django. A database was created using sqlite3 which was then converted to postgresql for deployment. The repository for this project can be found <a className='repoLink' href="https://github.com/ikenna98/Adoption">here</a>.
          </h4>
          <a href="https://adopters-lap4.netlify.app/" className="view-project">
            <span>view website</span>
          </a>
        </div>
      </div>

      <div className="project project-2">
        <div id='website2'className="project-img"></div>
        <div className="project-info">
          <h1 className="name">Big Fact Hunt</h1>
          <h3 className="description">A multiplayer quiz game</h3>
          <h4 className="about">
            The frontend was created using React and the backend uses the Node.js framework - Express, with postgresql used for the database. This project also utilises websocket, through the use of the socket.io npm package. The repository for this project can be found <a className='repoLink' href="https://github.com/ikenna98/big-fact-hunt">here</a>.
          </h4>
          <a href="https://big-fact-hunt.netlify.app/" className="view-project">
            <span>View website</span>
          </a>
        </div>
      </div>

      <div className="project project-3">
        <div id="website3" className="project-img"></div>
        <div className="project-info">
          <h1 className="name">Tracket</h1>
          <h3 className="description">A habit tracking website</h3>
          <h4 className="about">
            The frontend was created using HTML, CSS and vanilla JavaScript. The backend was created using the Express.js framework with a postgresql database. Docker was used to create a container during the development of this website. The repository for this project can be found <a className='repoLink' href="https://github.com/ikenna98/lap2-project/tree/main">here</a>.
          </h4>
          <a href="https://lap2-project-site.netlify.app/" className="view-project">
            <span>view website</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
