import React, { Component } from 'react';
import '../style/alumno.css';
import '../style/fontawesome-free/css/all.min.css';
const ni = require('network-interfaces');
const options = {
  internal: false, // boolean: only acknowledge internal or external addresses (undefined: both)
  ipVersion: 4     // integer (4 or 6): only acknowledge addresses of this IP address family (undefined: both)
}
const interfaceNames = ni.getInterfaces(options);
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
      show:false,
      address: interfaceNames
    };
  }
  componentDidMount(){
    // this.getLocalIP();
    this.getData()
  }

  // getLocalIP=_=>{
  //   const interfaces = os.networkInterfaces();
  //   const addresses = [];
  //   Object.keys(interfaces).forEach((netInterface) => {
  //   interfaces[netInterface].forEach((interfaceObject) => {
  //     if (interfaceObject.family === 'IPv4' && !interfaceObject.internal) {
  //     addresses.push(interfaceObject.address);
  //     }
  //   });
  //   });
  //   this.setState({address:addresses})
  //   console.log(this.state)
  // }
  getData = _=>{
    console.log(`http://protocolo-env.eba-9bvnhbdx.us-east-1.elasticbeanstalk.com/database/getprotocolo?boleta=${this.props.usuario.boleta}`)
    fetch(`http://protocolo-env.eba-9bvnhbdx.us-east-1.elasticbeanstalk.com/database/getprotocolo?boleta=${this.props.usuario.boleta}`)
    .then(ress => ress.json())
    .then(ress => this.setState({items: ress.data}))
    .then(ress => console.log(this.state))
    console.log(this.state)
  }


  renderBase =({numTT,nombre,ruta_pdf_eval,estatus})=>
    <tr>
      <td>{nombre}</td>
      <td><i className="fas fa-file-pdf fa-3x"></i></td>
      <td><span className="badge badge-success">{estatus}</span></td>
      <td>2020/05</td>
    </tr>

  // addI = _ =>{
  //   const {item} = this.state
  //   console.log(item)
  //   fetch(`https://localhost:4000/database/add?curp=${item.curp}&nombre=${item.nombre}&edad=${item.edad}&dir=${item.dir}&tel=${item.telefono}`)
  //   .then(this.getData)
  //   .catch(err=>console.error(err))
  //   console.log(`https://localhost:4000/database/add?curp=${item.curp}&nombre=${item.nombre}&edad=${item.edad}&dir=${item.dir}&tel=${item.telefono}`)
  // }
  render() {
    const {items} = this.state;
    return (
             <div className="wrapper">

            {/* <!-- Navbar --> */}
            <nav className="main-header navbar navbar-expand navbar-white navbar-light">
              {/* <!-- Left navbar links --> */}
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" data-widget="pushmenu" href="#"><i className="fas fa-bars"></i></a>
                </li>
                <li className="nav-item d-none d-sm-inline-block">
                  <a href="index3.html" className="nav-link">Cerrar sesión</a>
                </li>
                <li className="nav-item d-none d-sm-inline-block">
                  <a href="https://www.escom.ipn.mx/htmls/escomunidad/catt.php" className="nav-link">Contacto</a>
                </li>
              </ul>

              {/* <!-- SEARCH FORM --> */}
              <form className="form-inline ml-3">
                <div className="input-group input-group-sm">
                  <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search"/>
                  <div className="input-group-append">
                    <button className="btn btn-navbar" type="submit">
                      <i className="fas fa-search"></i>
                    </button>
                  </div>
                </div>
              </form>

              {/* <!-- Right navbar links --> */}
              <ul className="navbar-nav ml-auto">
                {/* <!-- Messages Dropdown Menu --> */}
                <li className="nav-item dropdown">
                  <a className="nav-link" data-toggle="dropdown" href="#">
                    <i className="far fa-comments"></i>
                    <span className="badge badge-danger navbar-badge">3</span>
                  </a>
                  <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                    <a href="#" className="dropdown-item">
                      {/* <!-- Message Start --> */}
                      <div className="media">
                        <img src="" alt="User Avatar" className="img-size-50 mr-3 img-circle"/>
                        <div className="media-body">
                          <h3 className="dropdown-item-title">
                            Brad Diesel
                            <span className="float-right text-sm text-danger"><i className="fas fa-star"></i></span>
                          </h3>
                          <p className="text-sm">Call me whenever you can...</p>
                          <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> 4 Hours Ago</p>
                        </div>
                      </div>
                      {/* <!-- Message End --> */}
                    </a>
                    <div className="dropdown-divider"></div>
                    <a href="#" className="dropdown-item">
                      {/* <!-- Message Start --> */}
                      <div className="media">
                        <img src="" alt="User Avatar" className="img-size-50 img-circle mr-3"/>
                        <div className="media-body">
                          <h3 className="dropdown-item-title">
                            John Pierce
                            <span className="float-right text-sm text-muted"><i className="fas fa-star"></i></span>
                          </h3>
                          <p className="text-sm">I got your message bro</p>
                          <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> 4 Hours Ago</p>
                        </div>
                      </div>
                      {/* <!-- Message End --> */}
                    </a>
                    <div className="dropdown-divider"></div>
                    <a href="#" className="dropdown-item">
                      {/* <!-- Message Start --> */}
                      <div className="media">
                        <img src="" alt="User Avatar" className="img-size-50 img-circle mr-3"/>
                        <div className="media-body">
                          <h3 className="dropdown-item-title">
                            Nora Silvester
                            <span className="float-right text-sm text-warning"><i className="fas fa-star"></i></span>
                          </h3>
                          <p className="text-sm">The subject goes here</p>
                          <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> 4 Hours Ago</p>
                        </div>
                      </div>
                      {/* <!-- Message End --> */}
                    </a>
                    <div className="dropdown-divider"></div>
                    <a href="#" className="dropdown-item dropdown-footer">See All Messages</a>
                  </div>
                </li>
                {/* <!-- Notifications Dropdown Menu --> */}
                <li className="nav-item dropdown">
                  <a className="nav-link" data-toggle="dropdown" href="#">
                    <i className="far fa-bell"></i>
                    <span className="badge badge-warning navbar-badge">15</span>
                  </a>
                  <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                    <span className="dropdown-header">15 Notifications</span>
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
                <li className="nav-item">
                  <a className="nav-link" data-widget="control-sidebar" data-slide="true" href="#"><i
                      className="fas fa-th-large"></i></a>
                </li>
              </ul>
            </nav>
            {/* <!-- /.navbar --> */}

            {/* <!-- Main Sidebar Container --> */}
            {/* <!-- Content Wrapper. Contains page content --> */}
            <div className="content-wrapper">
              {/* <!-- Content Header (Page header) --> */}
              <div className="content-header">
                <div className="container-fluid">
                  <div className="row mb-2">
                    <div className="col-sm-6">
                       <h1 className="m-0 text-dark">Bienvenido {this.props.usuario.nombre}</h1>
                    </div>
                    {/* <!-- /.col --> */}
                  </div>
                  {/* <!-- /.row --> */}
                </div>
                {/* <!-- /.container-fluid --> */}
              </div>
              {/* <!-- /.content-header --> */}

              {/* <!-- Main content --> */}
              <div className="content">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="card">
                        <div className="card-header border-transparent">
                          <h3 className="card-title">Evaluaciones</h3>

                        </div>
                        {/* <!-- /.card-header --> */}
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
                                {items.map(this.renderBase)}
                              </tbody>
                            </table>
                          </div>
                          {/* <!-- /.table-responsive --> */}
                        </div>
                      </div>
                    </div>
                    {/* <!-- /.col-md-6 --> */}
                  </div>
                  {/* <!-- /.row --> */}
                </div>
                {/* <!-- /.container-fluid --> */}
              </div>
              {/* <!-- /.content --> */}
            </div>
            {/* <!-- /.content-wrapper --> */}

            {/* <!-- Control Sidebar --> */}
            <aside className="control-sidebar control-sidebar-dark">
              {/* <!-- Control sidebar content goes here --> */}
              <div className="p-3">
                <h5>Title</h5>
                <p>Sidebar content</p>
              </div>
            </aside>
            {/* <!-- /.control-sidebar --> */}

            {/* <!-- Main Footer --> */}
            <footer className="main-footer">
              {/* <!-- To the right --> */}
              <div className="float-right d-none d-sm-inline">
              </div>
              {/* <!-- Default to the left --> */}
              <strong>Copyright &copy; 2020</strong> All rights reserved.
            </footer>
              <script src="../js/jquery.min.js"></script>
              {/* <!-- Bootstrap 4 --> */}
              <script src="../js/bootstrap.bundle.min.js"></script>
              {/* <!-- AdminLTE App --> */}
              <script src="../js/adminlte.min.js"></script>
          </div>
      );
  }
}

export default Alumno;