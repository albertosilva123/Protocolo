import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter} from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { userActions } from './actions/user'
import Login from './components/auth/login'
import Signup from './components/auth/signup'
import './style/main.css'
import Alumno from '../src/components/alumno'
import Home from '../src/components/home'
import Maestro from '../src/components/maestro'
import logo from '../src/images/logo.png'
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
        let welcomeMessage = !loggedIn ? '' : 
        user.Alumno? 
            <div>
            <Alumno>
            </Alumno>
            <Button className="btn btn-primary" onClick={this.handleLogout}>Logout
            </Button>
            </div>
        : 
        <Maestro>

        </Maestro>
        // <div><h3>Welcome {user.nombre}</h3> <Button className="btn btn-primary" onClick={this.handleLogout}>Logout</Button></div>;
        return (
            <div className="App">
                {welcomeMessage}
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
