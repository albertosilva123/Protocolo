import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Switch, Route, Redirect, withRouter ,Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from './actions/user'
import Login from './components/auth/login'
import Signup from './components/auth/signup'
import Alumno from './components/alumno'
import Home from './components/home'
import './style/main.css'
import Maestro from './components/maestro'
// import logo from './images/logo.png'
import {ModalLogin}  from './components/ModalLogin'
class App extends Component {
    constructor(props) {
        super(props);

        this.handleLogout = this.handleLogout.bind(this);
    }
    handleLogout() {
        const { dispatch } = this.props;
        dispatch(userActions.logout());
    }
    
    state = {
        show: false,
        id:''
      };
      showModal = e => {
        this.setState({
          show: !this.state.show
        });
      };
    _get(){
        fetch("http://localhost:3001/database/")
        .then(ress => ress.json())
        .then(ress => this.setState({id: ress.data}))
        .then(ress => console.log(ress))
    }


    render() {
        const { loggedIn, user } = this.props;
        let alumno = true;
        loggedIn?console.log(user):'';
        loggedIn?console.log("http://localhost:3001/database/search"+"?boleta="+user.identificador):'';
        loggedIn?this.get:''; 
        let reDirect = !loggedIn ? <Redirect to="/login" push /> :'';
        loggedIn?this.state.show= false :'';
        loggedIn?console.log(this.state):'';
        let pantalla = !loggedIn ? '' : 
        user.alumno? 
        console.log("I´m alumno")
            // <Alumno>
            //     <div><h3>Welcome {user.nombre}</h3> <Button className="btn btn-primary" onClick={this.handleLogout}>Logout</Button></div>;
            // </Alumno>
        : 
            <Maestro>
                {console.log(user.alumno)}
                <div><h3>Welcome {user.alumno}</h3> <Button className="btn btn-primary" onClick={this.handleLogout}>Logout</Button></div>;
            </Maestro>
        return (
            <div className="body-inner">
                {loggedIn?'':
                <header id="header" className="alt">
                    <h1>
                        <a href="index.html">
                        </a>
                    </h1>
                    <nav id="nav">
                    <ul>
                        <li><Link to={'/maestro'} className="nav-link"> Inicio </Link></li>
                        
                        <li><a className = "nav-link" href = "http://www.escom.ipn.mx/htmls/escomunidad/catt.php">Contacto</a></li> 
                        <li><a className = "button" onClick={e => {this.showModal();}}>Iniciar Sesion</a></li>
                    </ul>
                    </nav>
                    <ModalLogin onClose={this.showModal} show={this.state.show} usuario ={user}/>
                </header>
                }
                {/* {pantalla} */}
                <Switch>
                    <Route path="/alumno" component={Alumno}/>
                    <Route path="/login" render={(routeProps) => (
                        loggedIn?
                        alumno?
                        <Alumno usuario= {user} />
                        :
                        <Maestro usuario = {user}/>
                        :
                        <Home/>
                        )}
                    />
                    <Route path="/signup" component={Signup} />
                    {reDirect}
                </Switch>
            </div>

        );
    }
}

function mapStateToProps(state) {
    const { loggedIn, user } = state.authentication;
    return {
        loggedIn,
        user
    };
}

const connectedApp = withRouter(connect(mapStateToProps)(App));
export { connectedApp as  App };
