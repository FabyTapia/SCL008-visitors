import {templateVisitorRegistration} from './templateVisitorRegistration.js';
import {templateAdminOptions} from './templateAdminOptions.js';

export const templateSession = () => {

    document.getElementById('containervisitors').innerHTML =
    `
    <nav class="navbar">
      <a class="navbar-brand" href="#">
      <img src="./assets/img/come-inc.png" width="30" height="30" class="d-inline-block align-top" alt="">
       PaseNoma'
      </a>
     </nav>
    <div class="templatesession">
        <button  id="administration">Administador</button>   
        <button  id="visit">Visitante</button>               
    </div>
    `
    document.getElementById('visit').addEventListener('click',()=>{
        templateVisitorRegistration();
        window.location.hash="#/visitor"
    })

    document.getElementById('administration').addEventListener('click',()=>{
        templateAdminOptions();
        window.location.hash="#/administration"
    })
};