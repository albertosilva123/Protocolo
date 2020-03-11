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
      // const script = document.createElement("script");
      // script.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0-beta1/jquery.min.js";
      // script.async = true;
      // document.body.appendChild(script);
      // const script2 = document.createElement("script");
      // script2.src = "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" ;
      // script2.async = true;
      // document.body.appendChild(script2);
      // const script3 = document.createElement("script");
      // script3.src = "js/adminlte.js";
      // script3.async = true;
      // document.body.appendChild(script3);
  }



  sendEvaluacion = (e)=>
    console.log(e);
  
  getData = _=>{
    fetch(`https://localhost:4000/database/getprotocoloToMaster?boleta=${this.props.usuario.identificador}`)
    .then(ress => ress.json())
    .then(ress => this.setState({items: ress.data}))
    .then(ress => console.log("hola",this.state))
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
      <div className="wrapper">

            {/* <!-- Navbar --> */}
            <nav className="main-header navbar navbar-expand navbar-white navbar-light">
              {/* <!-- Left navbar links --> */}
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" data-widget="pushmenu" href="#"><i className="fas fa-bars"></i></a>
                </li>
                <li className="nav-item d-none d-sm-inline-block">
                  <a href="/login" className="nav-link">Home</a>
                </li>
                <li className="nav-item d-none d-sm-inline-block">
                  <a href="#" className="nav-link">Contact</a>
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

                          <div className="card-tools">
                            <button type="button" className="btn btn-tool" data-card-widget="collapse">
                              <i className="fas fa-minus"></i>
                            </button>
                          </div>
                        </div>
                        {/* <!-- /.card-header --> */}
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
                                {/* <td></td>
                                <td></td>
                                <td></td>
                                <td><input type="file" name="" id=""></td>
                                <td>
                                  <select name="" id="">
                                    <option value="Calificado">Calificado</option>
                                    <option value="Rechazado">Rechazado</option>
                                  </select>
                                </td>
                                <td></td>
                                <td>
                                  <button>Enviar</button>
                                </td> */}
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
                Anything you want
              </div>
              {/* <!-- Default to the left --> */}
              <strong>Copyright &copy; 2014-2019 <a href="https://adminlte.io">AdminLTE.io</a>.</strong> All rights reserved.
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