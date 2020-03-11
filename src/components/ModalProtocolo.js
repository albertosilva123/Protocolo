import React, { Component } from 'react';
import '../style/modals.css'
class ModalProtocolo extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      alumnos:[],      
      alumnosc:0
    };
  }
    addAlumn=_=>{
        var rows = this.state.alumnos
        if(rows.length<3){  
          rows.push('Alumno: '+(this.state.alumnosc+1))
          this.setState({alumnos: rows})
          this.setState({alumnosc:this.state.alumnosc+1})
        }
      // if(this.state.alumnos>3)this.setState({alumnos:3})
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
                    <h1 style={{fontSize: '25px', fontWeight: 'bold'}} >Registro de protocolo</h1>
                    </div>
          
                    <div className="protcontainer" style={{textAlign: 'center', color: 'black'}}>
                    <table>
                                <tr>
                                    <th>
                                        <label for="uname"><b>Nombre del protocolo</b></label><br/>
                                        <input id="nproto" type="text" name="uname" style={{width:'80%', marginLeft:'10%'}} required/>
                                    </th>
                                </tr>                                   
                                <tr>
                                    <th>
                                        <label for="uname" style={{paddingLeft:'4%', width:'90%'}}><b>Archivo del protocolo</b></label>
                                    </th> 
                                </tr>
                                <tr>
                                    <td>
                                        <input id="proto" type="file" name="email" style={{marginBottom:'1em', width:'80%'}} required/>
                                    </td>
                                </tr>
                                <tr style={{width:'100%', color:'black'}}>
                                    <td style={{width:'800px'}}>
                                      <label for="uname"><b>Añadir alumno</b></label>
                                      <i className="fas fa-plus-circle" onClick={this.addAlumn} style={{paddingLeft:'0px', marginLeft:'10px'}}></i>
                                    </td>
                                </tr>
                                {this.state.alumnos.map((r) => (
                                  <tr style={{width:'100%', color:'black', textAlign:'center'}}>
                                        <td style={{width:'100%'}}><label>{r}</label><br></br><input placeholder="Boleta" name = {r} style={{width:'85%', color:'black'}}></input></td>
                                  </tr>
                                  ))}
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