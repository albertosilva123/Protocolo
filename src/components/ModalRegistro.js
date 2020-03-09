import React, { Component } from 'react';
import '../style/registro.css'
// import '../style/style.css'
class ModalRegistro extends Component {

    render() { 
    let style ={display:'block'}
    const close= ()=> {document.getElementById("regis").style.display="none";console.log("HOLA")}
    if(!this.props.show){
        this.style= {
            display:'none'
        }
    } 
    else{
        console.log("HOLIIII  desde dentro")
      this.style = {
        display:'block'
      }
    }
    return (
        <div>
          <div id="regis" className="modalregis" style = {this.style}>
             <form className="modal-content animate" action="/action_page.php" method="post">
                 <div className="tittleregiscontainer">
                 <span  className="close" title="Close Modal" onClose={e => {this.onClose(e);}}>&times;</span>
                 <h1 style={{font_size: '25px', font_weight: 'bold'}}>Registro de alumno</h1>
                 </div>
          
                     <div className="regiscontainer" style={{text_align: 'center', color: 'black'}}>
                         <table style={{width:'90%', text_align:'center', margin_left: '5%'}}>
                             <tbody>

                             <tr>
                                 <th>
                                     <label htmlFor="user0"><b>Nombre</b></label>
                                 </th>
                                 <th>
                                     <label htmlFor="user1"><b>Apellido paterno</b></label>
                                 </th> 
                                 <th>
                                     <label htmlFor="user2"><b>Apellido materno</b></label>
                                 </th>
                             </tr>
                             <tr>
                                 <td>
                                     <input id="nomb" type="text" name="uname" required/>
                                 </td>
                                 <td>
                                     <input id="appa" type="text" name="uname" required/>      
                                 </td>
                                 <td>
                                     <input id="apma" type="text" name="uname" required/>
                                 </td>
                             </tr>
                             </tbody>
                         </table><br/>
                         <table style={{width:'90%', text_align:'center', margin_left: '5%'}}>
                             <tbody>

                             <tr>
                                 <th>
                                     <label htmlFor="uname"><b>Usuario</b></label>
                                 </th>
                                 <th>
                                     <label htmlFor="uname"><b>Boleta</b></label>
                                 </th>
                                 <th>
                                     <label htmlFor="uname"><b>Correo electrónico</b></label>
                                 </th> 
                             </tr>
                             <tr>
                                 <td>
                                     <input id="user" type="text" name="uname" required/>
                                 </td>
                                 <td>
                                     <input id="bole" type="text" name="uname" required/>
                                 </td>
                                 <td>
                                     <input id="email" type="email" name="email" required/>
                                 </td>
                             </tr>
                             </tbody>
                         </table>
                         <br/>
                         <table style={{width:'90%', text_align:'center', margin_left: '5%'}}>
                             <tbody>
                             <tr>
                                 <th>
                                     <label htmlFor="uname"><b>Contraseña</b></label>
                                 </th>
                                 <th>
                                     <label htmlFor="uname"><b>Confirmar contraseña</b></label>
                                 </th> 
                             </tr>
                             <tr>
                                 <td>
                                     <input id="passw" type="password" name="uname" required/>
                                 </td>
                                 <td>
                                     <input id="cpassw" type="password" name="email" required/>
                                 </td>
                             </tr>
                             </tbody>
                         </table>
                         <table style={{width:'60%', text_align:'center', margin_left: '20%'}}>
                            <tbody>

                             <tr>
                                 <td>
                                     <label htmlFor="nump"><b>Número de protocolo</b></label>
                                 </td>
                             </tr>
                             <tr>
                                 <td>
                                     <input id="nump" type="text" name="psw" required/>
                                 </td>
                             </tr>
                            </tbody>
                         </table>
                     </div>
          
                 <div className="regiscontainer" style={{background_color:'#f1f1f1'}}>
                 <button id="cancelar" type="button" onClick={close}>Cancelar</button>
                 <button id="registrar" type="submit">Registrar</button>
                 </div>
             </form>
             </div>

        </div>
    );
  }
}

export default ModalRegistro;