import React, { Component } from 'react';
import '../style/alumno.css';
import '../style/fontawesome-free/css/all.min.css';
class Alumno extends Component {
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
  // componentDidMount(){
  //   this.getData()
  // }
  // getData = _=>{
  //   fetch("https://localhost:4000/database")
  //   .then(ress => ress.json())
  //   .then(ress => this.setState({items: ress.data}))
  //   .then(ress => console.log(this.state))
  //   console.log(this.state)
  // }

  renderBase =({idhistorial,cedula,curp,fechaIngreso,fechaAlta})=>
  <div key={idhistorial}>
    {idhistorial+" "+cedula+" "+curp+" "+fechaIngreso+" "+fechaAlta}
  </div>

  addI = _ =>{
    const {item} = this.state
    console.log(item)
    fetch(`https://localhost:4000/database/add?curp=${item.curp}&nombre=${item.nombre}&edad=${item.edad}&dir=${item.dir}&tel=${item.telefono}`)
    // .then(this.getData)
    .catch(err=>console.error(err))
    console.log(`https://localhost:4000/database/add?curp=${item.curp}&nombre=${item.nombre}&edad=${item.edad}&dir=${item.dir}&tel=${item.telefono}`)
  }
  render() {
    const {items,item } = this.state;
    console.log(items);
    return (
        <div className = "wrapper">
          <div>{this.props.children}</div>
          <div>Pantalla alumno</div>;
          <div className="content-wrapper">
                    <div className="size card mx-auto "  >
                      <div className="card-header border-transparent">
                        <h3 className="card-title">Evaluaciones</h3>

                        <div className="card-tools">
                        <nav className="main-header navbar navbar-expand navbar-white navbar-light">
                        <ul className="navbar-nav">
                        </ul>
                        <ul className="navbar-nav ml-auto">
                          <li className="nav-item dropdown">
                            <a className="nav-link" data-toggle="dropdown" href="#">
                              <i className="far fa-comments"></i>
                              <span className="badge badge-danger navbar-badge">3</span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                              <a href="#" className="dropdown-item">
                                <div className="media">
                                  <img src="dist/img/user1-128x128.jpg" alt="User Avatar" className="img-size-50 mr-3 img-circle"/>
                                  <div className="media-body">
                                    <h3 className="dropdown-item-title">
                                      Brad Diesel
                                      <span className="float-right text-sm text-danger"><i className="fas fa-star"></i></span>
                                    </h3>
                                    <p className="text-sm">Call me whenever you can...</p>
                                    <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> 4 Hours Ago</p>
                                  </div>
                                </div>
                              </a>
                              <div className="dropdown-divider"></div>
                              <a href="#" className="dropdown-item">
                                <div className="media">
                                  <img src="dist/img/user8-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3"/>
                                  <div className="media-body">
                                    <h3 className="dropdown-item-title">
                                      John Pierce
                                      <span className="float-right text-sm text-muted"><i className="fas fa-star"></i></span>
                                    </h3>
                                    <p className="text-sm">I got your message bro</p>
                                    <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> 4 Hours Ago</p>
                                  </div>
                                </div>
                              </a>
                              <div className="dropdown-divider"></div>
                              <a href="#" className="dropdown-item">
                                <div className="media">
                                  <img src="dist/img/user3-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3"/>
                                  <div className="media-body">
                                    <h3 className="dropdown-item-title">
                                      Nora Silvester
                                      <span className="float-right text-sm text-warning"><i className="fas fa-star"></i></span>
                                    </h3>
                                    <p className="text-sm">The subject goes here</p>
                                    <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> 4 Hours Ago</p>
                                  </div>
                                </div>
                              </a>
                              <div className="dropdown-divider"></div>
                              <a href="#" className="dropdown-item dropdown-footer">See All Messages</a>
                            </div>
                          </li>
                          <li className="nav-item dropdown">
                            <a className="nav-link" data-toggle="dropdown" href="#">
                              <i className="far fa-bell"></i>
                              <span className="badge badge-warning navbar-badge">15</span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                              <span className="dropdown-item dropdown-header">15 Notifications</span>
                              <div className="dropdown-divider"></div>
                              <a href="#" className="dropdown-item">
                                <i className="fas fa-envelope mr-2"></i> 4 new messages
                                <span className="float-right text-muted text-sm">3 mins</span>
                              </a>
                              <div className="dropdown-divider"></div>
                              <a href="#" className="dropdown-item">
                                <i className="fas fa-users mr-2"></i> 8 friend requests
                                <span className="float-right text-muted text-sm">12 hours</span>
                              </a>
                              <div className="dropdown-divider"></div>
                              <a href="#" className="dropdown-item">
                                <i className="fas fa-file mr-2"></i> 3 new reports
                                <span className="float-right text-muted text-sm">2 days</span>
                              </a>
                              <div className="dropdown-divider"></div>
                              <a href="#" className="dropdown-item dropdown-footer">See All Notifications</a>
                            </div>
                          </li>
                        </ul>
                      </nav>
                        </div>
                      </div>
                      <div className="card-body p-0">
                        <div className="table-responsive">
                          <table className="table m-0">
                            <thead>
                            <tr>
                              <th>Profesor</th>
                              <th>Evaluacion</th>
                              <th>Estatus</th>
                              <th>Fecha</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                              <td></td>
                              <td><i className="fas fa-file-pdf fa-2x"></i></td>
                              <td><span className="badge badge-success">Calificado</span></td>
                              <td></td>
                            </tr>
                            <tr>
                              <td></td>
                              <td><i className="fas fa-file-pdf fa-3x"></i></td>
                              <td><span className="badge badge-warning">Pendiente</span></td>
                              <td></td>
                            </tr>
                            <tr>
                              <td></td>
                              <td><i className="fas fa-file-pdf fa-3x"></i></td>
                              <td><span className="badge badge-danger">Rechazado</span></td>
                              <td></td>
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

export default Alumno;