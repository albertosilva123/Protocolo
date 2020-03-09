import React, { Component } from 'react';
import '../style/login.css';
class ModalLogin extends Component {
  
  
  render() {
    let style ={display:'block'}
    const close= ()=> {document.getElementById("login").style.display="none"}
    if(!this.props.show){
      this.style= {
        display:'none'
      }
    } 
    else{
      this.style = {
        display:'block'
      }
    }
    return (
          <div id ="login" className="modallogin" style = {this.style}>
            <form className="modal-content animate" action="/action_page.php" method="post">
                <div className="tittlelogincontainer">
                <span className="close" title="Close Modal" onClick={close}>&times;</span>
                <h1 style={{font_size: '25px', font_weight: 'bold'}}>Inicio de sesión</h1>
                </div>
                <div className="logincontainer" style={{text_align: 'center', color: 'black'}}>
                <label for="uname"><b>Usuario</b></label><br/>
                <input type="text" name="uname" required/><br/>
                {/* <!--Hay que validar que sólo se puedan ingresar números--> */}
                <label for="psw"><b>Contraseña</b></label><br/>
                <input type="password" name="psw" required/><br/>
                
                <label>
                    <input type="checkbox" checked="checked" name="remember"/> Recordar cuenta
                </label>
                
                </div>

                <div className="logincontainer" style={{background_color:'#f1f1f1'}}>
                <button id="fpass" type="button">Olvidé la contraseña</button>
                <button id="sesion" type="submit">Iniciar sesión</button>
                </div>
            </form>
            </div>
    );
  }
}

export default ModalLogin;