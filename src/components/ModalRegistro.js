import React, { Component } from 'react';
import '../style/modals.css'
import { Form, FormGroup, FormControl, ControlLabel, Button, Grid, Row, Col, Alert } from 'react-bootstrap';
class ModalRegistro extends Component {
    constructor(props){
        super(props);
        this.state = {
            nombre:'',
            apellidoP:'',
            apellidoM:'',
            usuario:'',
            boleta:'',
            correo:'',
            pass:'',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
       }
    
    handleChange(e) {
        const { name, value } = e.target;
        console.log(name,value);
        this.setState({ [name]: value });
    }

    handleSubmit(event){ 
        event.preventDefault();
        fetch('https://localhost:4000/add', {
            method: 'POST',
            body: JSON.stringify({
                nombre: this.state.nombre,
                apellidoP:this.state.apellidoP,
                apellidoM:this.state.apellidoM,
                Usuario:this.state.usuario,
                boleta:this.state.boleta,
                pass:this.state.pass,
                correo:this.state.correo,

            }),
            headers: {"Content-Type": "application/json"}
        })
        .then(ress => ress.json())
        .then(ress=> ress.data.length?alert("El usuario ya esta registrado"):alert("Usuario registrado con exito"));
    };
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
             <Form className="modal-content animate" onSubmit={this.handleSubmit}>
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
                                     <FormControl id="nomb" type="text" name="nombre"  onChange={this.handleChange} required/>
                                 </td>
                                 <td>
                                     <FormControl id="appa" type="text" name="apellidoP"  onChange={this.handleChange} required/>      
                                 </td>
                                 <td>
                                     <FormControl id="apma" type="text" name="apellidoM" onChange={this.handleChange}required/>
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
                                     <FormControl id="user" type="text" name="usuario" onChange={this.handleChange} required/>
                                 </td>
                                 <td>
                                     <FormControl id="bole" type="text" name="boleta" onChange={this.handleChange} required/>
                                 </td>
                                 <td>
                                     <FormControl id="email" type="email" name="correo" onChange={this.handleChange} required/>
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
                                     <FormControl id="passw" type="password" name="pass" onChange={this.handleChange} required/>
                                 </td>
                                 <td>
                                     <FormControl id="cpassw" type="password" name="email" required/>
                                 </td>
                             </tr>
                             </tbody>
                         </table>
                         <table style={{width:'60%', textAlign:'center', marginLeft: '20%'}}>
                            {/* <tbody>

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
                            </tbody> */}
                         </table>
                     </div>
          
                 <div className="regiscontainer" style={{backgroundColor:'#f1f1f1'}}>
                 <button id="cancelar" type="button" onClose={e => {this.onClose(e);}}onClick={close}>Cancelar</button>
                 <button id="registrar" type="submit">Registrar</button>
                 </div>
             </Form>
             </div>

        </div>
    );
  }
}

export default ModalRegistro;