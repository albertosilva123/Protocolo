import React, { Component } from 'react';
import '../style/modals.css'
let user, pass;
class ModalRegistro extends Component {
    addI = _ =>{
        fetch(`https://localhost:4000/add`,{method: 'post',body: JSON.stringify({user: user,password:pass})});
        // fetch(`https://localhost:4000/add`,method:'post',{user: user,password: pass})
        // .catch(err=>console.error(err+"ALV"))
        console.log("HOLA");
        // console.log(`https://localhost:4000/database/add?curp=${item.curp}&nombre=${item.nombre}&edad=${item.edad}&dir=${item.dir}&tel=${item.telefono}`)
    }
    render() { 
        let style ={display:'block'}
        const close= ()=> {document.getElementById("regis").style.display="none";}
        const onClose = e => {
            this.props.onClose && this.props.onClose(e);
          };
        
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
        <div>
          <div id="regis" className="modalregis" style = {this.style}>
             <form className="modal-content animate" onSubmit={this.addI} method="post">
                 <div className="tittleregiscontainer">
                 <span  className="close" title="Close Modal" onClose={e => {this.onClose(e); }}onClick={close}>&times;</span>
                 <h1 style={{fontSize: '25px', fontWeight: 'bold'}}>Registro de alumno</h1>
                 </div>
          
                     <div className="regiscontainer" style={{textAlign: 'center', color: 'black'}}>
                         <table style={{width:'90%', textAlign:'center', marginLeft: '5%'}}>
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
                         <table style={{width:'90%', textAlign:'center', marginLeft: '5%'}}>
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
                         <table style={{width:'90%', textAlign:'center', marginLeft: '5%'}}>
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
                         <table style={{width:'60%', textAlign:'center', marginLeft: '20%'}}>
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
          
                 <div className="regiscontainer" style={{backgroundColor:'#f1f1f1'}}>
                 <button id="cancelar" type="button" onClose={e => {this.onClose(e);}}onClick={close}>Cancelar</button>
                 <button id="registrar" type="submit">Registrar</button>
                 </div>
             </form>
             </div>

        </div>
    );
  }
}

export default ModalRegistro;