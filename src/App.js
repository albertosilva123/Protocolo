import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Switch, Route, Redirect, withRouter} from 'react-router-dom';
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
        console.log(user);
        let reDirect = !loggedIn ? <Redirect to="/login" push /> : '';
        let pantalla = !loggedIn ? '' : 
        user.alumno? 
            <Alumno>
            </Alumno>
        : 
            <Maestro>
                {console.log(user.alumno)}
                <div><h3>Welcome {user.alumno}</h3> <Button className="btn btn-primary" onClick={this.handleLogout}>Logout</Button></div>;
            </Maestro>
        return (
            <div className="App">
                {pantalla}
                <Switch>
                    <Route path="/login" component={Login} />
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
