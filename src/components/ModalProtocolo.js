import React, { Component } from 'react';
import '../style/modals.css'
class ModalProtocolo extends Component {
    render() {
        let style ={display:'block'}
        const close= ()=> {console.log("JOLA");document.getElementById("prot").style.display="none";}
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
          <div id="prot" className="modalprot" style = {this.style}>
                <form className="modal-content animate" action="/action_page.php" method="post">
                    <div className="tittleprotcontainer">
                    <span onClick={close} className="close" title="Close Modal">&times;</span>
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