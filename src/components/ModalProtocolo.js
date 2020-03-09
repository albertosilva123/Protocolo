import React, { Component } from 'react';

class ModalProtocolo extends Component {
    state = { show: false };
    render() {
    if(!this.props.show){
        return null;
    }
    return (
        <div>
          <div id="prot" className="modalprot">
                <form className="modal-content animate" action="/action_page.php" method="post">
                    <div className="tittleprotcontainer">
                    <span onclick="document.getElementById('prot').style.display='none'" className="close" title="Close Modal">&times;</span>
                    <h1 style={{font_size: '25px', font_weight: 'bold'}} >Inicio de sesión</h1>
                    </div>
          
                    <div className="protcontainer" style={{text_align: 'center', color: 'black'}}>
                    <table style={{width:'90%', text_align:'center', margin_left: '5%'}}>
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
          
                    <div className="protcontainer" style={{background_color:'#f1f1f1'}}>
                    <button id="cancelar0" type="button" onclick={document.getElementById('prot').style.display='none'}>Cancelar</button>
                    <button id="registrar0" type="submit">Registrar</button>
                    </div>
                </form>
            </div>
        </div>
    );
  }
}

export default ModalProtocolo;