import React, { Component } from 'react';
import '../style/login.css';
import { Link, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Form, FormGroup, FormControl, ControlLabel, Button, Grid, Row, Col, Alert } from 'react-bootstrap';
import { userActions } from '../actions/user'

class ModalLogin extends Component {
    
    constructor(props) {
      super(props);

      this.state = {
          boleta: '',
          password: ''
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

    handleChange(e) {
        const { name, value } = e.target;
        console.log(name,value);
        this.setState({ [name]: value });
        console.log(this.state.boleta,this.state.password);
    }

    handleSubmit(e) {
        e.preventDefault();
        const { boleta, password } = this.state;
        const { dispatch } = this.props;
        console.log("AIUDAA",boleta);
        if (boleta && password) {
            dispatch(userActions.login(boleta, password));
        }
    }
  render() {
    let style ={display:'block'}
    const close= ()=> {document.getElementById("login").style.display="none"}
    if(!this.props.show){
      this.style= {
        display:'none'
      }
    } 
    else{
      this.style = {
        display:'block'
      }
    }
    const { loggedIn, error } = this.props;
    let reDirect = loggedIn ? <Redirect to="/" push /> : '';
    const { boleta, password } = this.state;
    console.log(this.props);
    return (
          <div id ="login" className="modallogin" style = {this.style}>
            <Form className="modal-content animate"  onSubmit={this.handleSubmit} method="post">
                <div className="tittlelogincontainer">
                <span className="close" title="Close Modal" onClick={close}>&times;</span>
                <h1 style={{font_size: '25px', font_weight: 'bold'}}>Inicio de sesión</h1>
                </div>
                <div className="logincontainer" style={{text_align: 'center', color: 'black'}}>
                <label for="uname"><b>Usuario</b></label><br/>
                <FormControl type="text" name="boleta" value ={boleta } onChange={this.handleChange} required/><br/>
                {/* <!--Hay que validar que sólo se puedan ingresar números--> */}
                <label for="psw"><b>Contraseña</b></label><br/>
                <FormControl type="password" name="password" value= {password} onChange={this.handleChange} required/><br/>
                <label>
                    <input type="checkbox" checked="checked" name="remember"/> Recordar cuenta
                </label>
                </div>
                <div className="logincontainer" style={{background_color:'#f1f1f1'}}>
                <button id="fpass" type="button">Olvidé la contraseña</button>
                <Button bsStyle="primary" type="submit">Iniciar sesion</Button>
                                    {' '}or{' '}<Link to="/signup">Register</Link>
                {/* <button id="sesion" type="submit">Iniciar sesión</button> */}
                </div>
            </Form>
            </div>
    );
  }
}
function mapStateToProps(state) {
  const { loggedIn, error } = state.authentication;
  return {
      loggedIn,
      error
  };
}
const connectedLoginForm = withRouter(connect(mapStateToProps)(ModalLogin));
export { connectedLoginForm as  ModalLogin };