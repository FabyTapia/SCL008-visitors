export const templateNewCoworker = () =>{
    
    document.getElementById('containervisitors').innerHTML=    
    `<nav class="navbar">
      <a class="navbar-brand" href="#">
        <img src="./assets/img/come-inc.png" width="30" height="30" class="d-inline-block align-top" alt="">
        PaseNoma'
      </a>
     </nav>
     <div class="templatevisitors">
        <article id="visitorinfo">   
            <label>Nombre:</label>                     
            <input type="text" id="coworkerfirstname" placeholder="Ingresa nombre"/>
            <p id="firstnamealert"></p>
            <label>Apellido:</label>                     
            <input type="text" id="coworkerlastname" placeholder="Ingresa apellido"/>
            <p id="lastnamealert"></p>
            <label>Email:</label>  
            <input type="email" id= "coworkeremail" placeholder="Ingresa email"/>
            <p id ="emailalert"></p>
            <label>N° Celular:</label>  
            <input type="text" id="coworkerphone" placeholder="Ingresa n°de celular"/>
            <p id ="phonealert"></p>
            <label for="inputstate">Empresa:</label>
            <select id="inputstate" class="form-control">            
            <option selected>Selecciona...</option>
            <option>...</option>  
            <button id="add">Agregar</button>        
        </article>            
    </div>`
}