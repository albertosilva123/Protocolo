import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Switch, Route, Redirect, withRouter ,Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from './actions/user'
import Login from './components/auth/login'
import Signup from './components/auth/signup'
import './style/main.css'
import Alumno from './components/alumno'
import Home from './components/home'
import Maestro from './components/maestro'
import logo from './images/logo.png'
import ModalLogin from './components/ModalLogin'
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
        show: false
      };
      showModal = e => {
        this.setState({
          show: !this.state.show
        });
      };

    render() {
        const { loggedIn, user } = this.props;
        let reDirect = !loggedIn ? <Redirect to="/login" push /> : '';
        let pantalla = !loggedIn ? '' : 
        user.alumno? 
            <Alumno>
                <div><h3>Welcome {user.nombre}</h3> <Button className="btn btn-primary" onClick={this.handleLogout}>Logout</Button></div>;
            </Alumno>
        : 
            <Maestro>
                {console.log(user.alumno)}
                <div><h3>Welcome {user.alumno}</h3> <Button className="btn btn-primary" onClick={this.handleLogout}>Logout</Button></div>;
            </Maestro>
        return (
            <div className="body-inner">
                <header id="header" className="alt">
                    <h1>
                        <a href="index.html">
                            {/* <!-- Si da tiempo colocar logo --> */}
                        </a>
                    </h1>
                    <nav id="nav">
                    <ul>
                        <li><Link to={'/maestro'} className="nav-link"> Inicio </Link></li>
                                            {/* <a href="index.html">Inicio</a> */}
                        
                        <li><a className = "nav-link" href = "http://www.escom.ipn.mx/htmls/escomunidad/catt.php">Contacto</a></li> 
                                            {/* <a href="http://www.escom.ipn.mx/htmls/escomunidad/catt.php">Contacto</a> */}
                        <li><a className = "button" onClick={e => {this.showModal();}}>Iniciar Sesion</a></li>
                                            {/* <a class="button" onclick="document.getElementById('login').style.display='block'" style="width:auto;">Iniciar sesión</a> */}
                    </ul>
                    </nav>
                    <ModalLogin onClose={this.showModal} show={this.state.show} />
                </header>
                {pantalla}
                <Switch>
                    <Route path="/login" component={Home} />
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
