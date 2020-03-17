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
        user:[],
        loggedIn:false,
        alumno:true,
      };
      showModal = e => {
        this.setState({
          show: !this.state.show
        });
      };
      

    handleLogin = (user) => {
        user?this.setState({user:user}):'';
        user?this.setState({loggedIn:true}):'';
        user.boleta?this.setState({alumno:true}):this.setState({alumno:false});
        console.log(user,this.state)
    }

    get =_ =>{
        console.log("check");
        var userPass= "id=0&pass=profesor0"
        fetch('http://protocolo-env.eba-9bvnhbdx.us-east-1.elasticbeanstalk.com/login', {
            method: 'POST',
            body:userPass,
            headers: {"Content-Type": 'application/x-www-form-urlencoded'}
        })
        .then(ress => ress.json())
        .then(ress=> console.log(ress))
    }
    

    render() {
        const { loggedIn, user } = this.props;
        let alumno = true;
        console.log(user);
        this.state.loggedIn?console.log(user):'';
        this.state.loggedIn?this.get:''; 
        let reDirect = !this.state.loggedIn ? <Redirect to="/login" push /> :'';
        this.state.loggedIn?this.state.show= false :'';
        this.state.loggedIn?console.log(this.state):'';
        return (
            <div className="body-inner">
                {this.state.loggedIn?'':
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
                    <ModalLogin onClose={this.showModal} show={this.state.show} login={this.handleLogin}/>
                </header>
                }
                {/* {pantalla} */}
                <Switch>
                    <Route path="/alumno" component={Alumno}/>
                    <Route path="/login" render={(routeProps) => (
                        this.state.loggedIn?
                        this.state.alumno?
                        <Alumno usuario= {this.state.user} />
                        :
                        <Maestro usuario = {this.state.user}/>
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
