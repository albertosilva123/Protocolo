/**
 * Created by adrian on 27/08/2018.
 */
import React, { Component } from 'react';
import { Form, FormGroup, FormControl, ControlLabel, Button, Grid, Row, Col } from 'react-bootstrap';
// import { userConstants } from '../constants/user'

class SignupForm extends Component {
    render() {
        const insert = () =>{
            console.log(document.getElementById("boleta"));
            fetch(`/database/add?boleta=${document.getElementById("boleta").value}&nombre=${document.getElementById("nombre").value}&email=${document.getElementById("email").value}&usuario=${document.getElementById("username").value}&pass=${document.getElementById("password").value}`)
            .then(this.getData)
            .catch(err=>console.error(err))
            // console.log(`https://localhost:4000/database/add?curp=${item.curp}&nombre=${item.nombre}&edad=${item.edad}&dir=${item.dir}&tel=${item.telefono}`)
          }
        return (
            <Grid>
                <Row className="show-grid">
                    <Col md={6}>
                        <Form horizontal>
                            <FormGroup>
                                <Col componentClass={ControlLabel} sm={2}>
                                    Boleta
                                </Col>
                                <Col sm={10}>
                                    <FormControl type="text" id="boleta" name="fullname" placeholder="Boleta" />
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Col componentClass={ControlLabel} sm={2}>
                                    Nombre
                                </Col>
                                <Col sm={10}>
                                    <FormControl type="text" id="nombre" name="username" placeholder="Nombre" />
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Col componentClass={ControlLabel} sm={2}>
                                    Email
                                </Col>
                                <Col sm={10}>
                                    <FormControl type="email" id="email" name="email" placeholder="Email" required />
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Col componentClass={ControlLabel} sm={2}>
                                    Usuario
                                </Col>
                                <Col sm={10}>
                                    <FormControl type="text" id="username" name="email" placeholder="Usuario" required />
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Col componentClass={ControlLabel} sm={2}>
                                    Password
                                </Col>
                                <Col sm={10}>
                                    <FormControl type="password" id="password" name="password" placeholder="Password" required />
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Col componentClass={ControlLabel} sm={2}>
                                    Repeat Password
                                </Col>
                                <Col sm={10}>
                                    <FormControl type="password" id="password_check" name="password_check" placeholder="Password" required />
                                </Col>
                            </FormGroup>

                            <FormGroup>
                                <Col smOffset={2} sm={10}>
                                    <Button bsStyle="primary" onClick={insert}>Sign up</Button>
                                    <Button>Cancel</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default SignupForm;