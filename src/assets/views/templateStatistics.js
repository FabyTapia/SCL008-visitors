export const templateStatistics = () => {

    document.getElementById('containervisitors').innerHTML =

        `<nav class="navbar">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon">----</span>
        </button>
        <a class="navbar-brand" href="#">
          <img src="./assets/img/come-inc.png" width="30" height="30" class="d-inline-block align-top" alt="logo">
          PaseNoma'
        </a>
      
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item ">
              <a class="nav-link" href="#/newregister">Nuevo registro</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#/visitorshistory">Historial de visitantes</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#/statics">Estadisticas</a>
            </li>						
          </ul>
        </div>
      </nav> 
    `
};