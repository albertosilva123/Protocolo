import React, { Component } from 'react';
// import '../style/main.css';
import '../style/alumno.css';
import '../style/fontawesome-free/css/all.min.css';
class Maestro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      item:{
        curp:'Ingresar curp',
        nombre:'Ingresar nombre',
        edad:'Ingresar edad',
        dir:'Ingresar direccion',
        telefono:'Ingresar telefono'
      },
      show:false
      
    };
  }
  componentDidMount(){
    this.getData()
  }
  getData = _=>{
    fetch("https://localhost:4000/database")
    .then(ress => ress.json())
    .then(ress => this.setState({items: ress.data}))
    .then(ress => console.log(this.state))
    console.log(this.state)
  }

  renderBase =({idhistorial,cedula,curp,fechaIngreso,fechaAlta})=>
  <div key={idhistorial}>
    {idhistorial+" "+cedula+" "+curp+" "+fechaIngreso+" "+fechaAlta}
  </div>

  addI = _ =>{
    const {item} = this.state
    console.log(item)
    fetch(`https://localhost:4000/database/add?curp=${item.curp}&nombre=${item.nombre}&edad=${item.edad}&dir=${item.dir}&tel=${item.telefono}`)
    .then(this.getData)
    .catch(err=>console.error(err))
    console.log(`https://localhost:4000/database/add?curp=${item.curp}&nombre=${item.nombre}&edad=${item.edad}&dir=${item.dir}&tel=${item.telefono}`)
  }
  render() {
    const {items,item } = this.state;
    return (
        <div>
          <h1>Maestro</h1>
           <div class="content-wrapper">
                <div class="sizeM card mx-auto">
                  <div class="card-header border-transparent">
                    <h3 class="card-title">Evaluaciones</h3>

                    <div class="card-tools">
                      <button type="button" class="btn btn-tool" data-card-widget="collapse">
                        <i class="fas fa-minus"></i>
                      </button>
                    </div>
                  </div>
                  <div class="card-body p-0">
                    <div class="table-responsive">
                      <table class="table m-0">
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
                        <tr>
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
                        </tr>
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

export default Maestro;