import React, { Component } from 'react';
// import '../style/main.css';
import '../style/alumno.css';
import '../style/fontawesome-free/css/all.min.css';
class Maestro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      show:false
      
    };
  }
  componentDidMount(){
    this.getData()
  }



  sendEvaluacion = (e)=>
    console.log(e);
  
  getData = _=>{
    fetch(`https://localhost:4000/database/getprotocoloToMaster?boleta=${this.props.usuario.identificador}`)
    .then(ress => ress.json())
    .then(ress => this.setState({items: ress.data}))
    .then(ress => console.log(this.state))
    console.log(this.state)
  }
  renderBase =({numTT,nombreTT,fechaIngreso,fechaAlta})=>
               <tr>
                <td>{numTT}</td>
                <td>{nombreTT}</td>
                <td></td>
                <td><input type="file" name="" id=""></input></td>
                <td>
                  <select name="" id="">
                    <option value="Calificado">Calificado</option>
                    <option value="Rechazado">Rechazado</option>
                  </select>
                </td>
                <td></td>
                <td>
                  <button onClick={console.log(this)}>Enviar</button>
                </td>
              </tr>

  addI = _ =>{
    const {item} = this.state
    fetch(`https://localhost:4000/database/add?curp=${item.curp}&nombre=${item.nombre}&edad=${item.edad}&dir=${item.dir}&tel=${item.telefono}`)
    .then(this.getData)
    .catch(err=>console.error(err))
    console.log(`https://localhost:4000/database/add?curp=${item.curp}&nombre=${item.nombre}&edad=${item.edad}&dir=${item.dir}&tel=${item.telefono}`)
  }
  render() {
    const {items,item} = this.state;
    console.log(this.props.usuario);
    return (
        <div>
          <h1>Maestro</h1>
           <div className="content-wrapper">
                <div className="sizeM card mx-auto">
                  <div className="card-header border-transparent">
                    <h3 className="card-title">Evaluaciones</h3>

                    <div className="card-tools">
                      <button type="button" className="btn btn-tool" data-card-widget="collapse">
                        <i className="fas fa-minus"></i>
                      </button>
                    </div>
                  </div>
                  <div className="card-body p-0">
                    <div className="table-responsive">
                      <table className="table m-0">
                        <thead>
                        <tr>
                          <th>No Protocolo</th>
                          <th>Protocolo</th>
                          <th>Alumnos</th>
                          <th>Calificación</th>
                          <th>Status</th>
                          <th>Fecha</th>
                          <th>Evaluar</th>
                        </tr>
                        </thead>
                        <tbody>
                          {items.map(this.renderBase)}
                        {/* <tr>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td><input type="file" name="" id=""></input></td>
                          <td>
                            <select name="" id="">
                              <option value="Calificado">Calificado</option>
                              <option value="Rechazado">Rechazado</option>
                            </select>
                          </td>
                          <td></td>
                          <td>
                            <button>Enviar</button>
                          </td>
                        </tr> */}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    );
  }
}
// function mapStateToProps(state) {
//     const { loggedIn, user } = state.authentication;
//     return {
//         loggedIn,
//         user
//     };
// }

// const connectedApp = withRouter(connect(mapStateToProps)(App));
// export { connectedApp as  App };


export default Maestro;