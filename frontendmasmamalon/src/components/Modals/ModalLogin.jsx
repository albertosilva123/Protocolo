import React from "react";
import classnames from "classnames";

// reactstrap components
import {
  FormGroup,
  Form,
  Input,
  InputGroup,
  Button,
  InputGroupAddon,
  InputGroupText,
  Label,
} from "reactstrap";

class ModalLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      demoModal: this.props.show
    };
    console.log(this.state.demoModal);
  }
  toggleModal = modalState => {
    this.setState({
      [modalState]: !this.state[modalState]
    });
  };
  render() {
    return (
      <div>
        {this.props.children}
        <div className="modal-body">
          <Form role="form">
            <FormGroup className="mb-3">
              <InputGroup
                className={classnames("input-group-alternative", {
                  "input-group-focus": this.state.emailFocus
                })}
              >
                <InputGroupAddon addonType="prepend">
                  <InputGroupText style={{ color: 'black' }}>
                    <i class="fas fa-user"></i>
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder="Usuario"
                  type="text"
                  title="Número de boleta, número de empleado"
                  onFocus={e => this.setState({ emailFocus: true })}
                  onBlur={e => this.setState({ emailFocus: false })}
                />
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <InputGroup
                className={classnames("input-group-alternative", {
                  "input-group-focus": this.state.passwordFocus
                })}
              >
                <InputGroupAddon addonType="prepend">
                  <InputGroupText style={{ color: 'black' }}>
                    <i class="fas fa-lock"></i>
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder="Contraseña"
                  type="password"
                  onFocus={e => this.setState({ passwordFocus: true })}
                  onBlur={e => this.setState({ passwordFocus: false })}
                />
              </InputGroup>
            </FormGroup>
            <FormGroup check className="mt-3">
              <Label check>
                <Input defaultChecked type="checkbox" style={{ color: 'black' }} />
                <span className="form-check-sign">
                  Recordarme
                      </span>
              </Label>
            </FormGroup>
            <div className="text-center">
              <Button className="my-4" color="default" type="button">
                Iniciar sesión
                    </Button>
            </div>
          </Form>
        </div>
        {/*
        <div className="modal-footer">
          <Button color="default" type="button">
            Iniciar sesión
          </Button>
          <Button
            color="danger"
            type="button"
            onClick={() => this.toggleModal("demoModal")}
          >
            Cerrar
          </Button>
        </div>
        */}
      </div>
    );
  }
}

export default ModalLogin;