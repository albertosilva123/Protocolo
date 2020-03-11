import React, { Component } from 'react';
import '../style/modals.css'
class ModalProtocolo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alumnos:0      
    };
  }
    addAlumn=_=>{
      this.setState({alumnos:this.state.alumnos+1})
      if(this.state.alumnos>3)this.setState({alumnos:3})
      console.log(this.state);
    }
    renderaddAlumno=(id)=>
          <tr>
            <labl>Alumno {id}</labl><input name={"boleta"+id} required/>
          </tr>
    addrenders=_=>{
      for(let i = 0;i<this.state.alumnos;i++)this.renderaddAlumno(i+1);
    }
    render() {
        let style ={display:'block'}
        const close= ()=> {console.log("JOLA");document.getElementById("prot").style.display="none";}
        const onClose = e => {
            console.log(this.props.onClose);
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
          <div id="prot" className="modalprot" style = {this.style}>
                <form className="modal-content animate" action="/action_page.php" method="post">
                    <div className="tittleprotcontainer">
                    <span onClick={close} onClose = {e=>{this.onClose}} className="close" title="Close Modal">&times;</span>
                    <h1 style={{fontSize: '25px', fontWeight: 'bold'}} >Inicio de sesión</h1>
                    </div>
          
                    <div className="protcontainer" style={{textAlign: 'center', color: 'black'}}>
                    <table style={{width:'90%', textAlign:'center', marginLeft: '5%'}}>
                                <tr>
                                    <th>
                                        <label for="uname"><b>Nombre del protocolo</b></label><br/>
                                    </th>
                                    <th>
                                        <label for="uname"><b>Archivo del protocolo</b></label>
                                    </th> 
                                </tr>
                                <tr>
                                    <td>
                                        <input id="nproto" type="text" name="uname" required/>
                                    </td>
                                    <td>
                                        <input id="proto" type="file" name="email" required/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                      <label for="uname"><b>Añadir alumno</b></label><br/>
                                    </td>
                                    <td>
                                    <i className="fas fa-plus-circle" onClick={this.addAlumn}></i>
                                        </td>
                                </tr>
                                  {
                                      this.addrenders
                                  }
                            </table>      
                    </div>
          
                    <div className="protcontainer" style={{backgroundColor:'#f1f1f1'}}>
                    <button id="cancelar0" type="button" onClick={close}>Cancelar</button>
                    <button id="registrar0" type="submit">Registrar</button>
                    </div>
                </form>
            </div>
        </div>
    );
  }
}

export default ModalProtocolo;