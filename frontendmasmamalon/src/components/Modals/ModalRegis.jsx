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
} from "reactstrap";

class ModalRegis extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      regisModal: this.props.show,
      alumnos: [],
      alumnosc: 0
    };
    console.log(this.state.regisModal);
  }
  toggleModal = modalState => {
    this.setState({
      [modalState]: !this.state[modalState]
    });
  };
  addAlumn = _ => {
    var rows = this.state.alumnos
    if (rows.length < 4) {
      rows.push('Número de boleta ' + (this.state.alumnosc + 1))
      this.setState({ alumnos: rows })
      this.setState({ alumnosc: this.state.alumnosc + 1 })
    }
    // if(this.state.alumnos>3)this.setState({alumnos:3})
    console.log(this.state);
  }
  renderaddAlumno = (id) =>
    <tr>
      <labl>Alumno {id}</labl><input name={"boleta" + id} required />
    </tr>
  addrenders = _ => {
    for (let i = 0; i < this.state.alumnos; i++)this.renderaddAlumno(i + 1);
  }
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
                    <i class="fas fa-tag"></i>
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder="Nombre de protocolo"
                  type="nomProtocolo"
                  title="Nombre del protocolo"
                  onFocus={e => this.setState({ emailFocus: true })}
                  onBlur={e => this.setState({ emailFocus: false })}
                />
              </InputGroup>
              <InputGroup
                className={classnames("input-group-alternative", {
                  "input-group-focus": this.state.emailFocus
                })}
              >
                <InputGroupAddon addonType="prepend">
                  <InputGroupText style={{ color: 'black' }}>
                    <i class="fas fa-key"></i>
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder="Palabras claves"
                  type="text"
                  title="Keyword1,Keyword2,Keyword3"
                  onFocus={e => this.setState({ emailFocus: true })}
                  onBlur={e => this.setState({ emailFocus: false })}
                />
              </InputGroup>
            </FormGroup>
            <div>
              <input type="file" name="" id="" />
            </div>
            <div className="protcontainer" style={{ textAlign: 'center', color: 'black' }}>
              <table>
                <tr style={{ width: '100%', color: 'black' }}>
                  <td style={{ width: '800px' }}>
                    <br />
                    <label for="uname" onClick={this.addAlumn} title="Máximo 4 integrantes" style={{ cursor: 'pointer' }}>
                      Añadir alumno
                                        <i className="fas fa-user-plus" style={{ paddingLeft: '0px', marginLeft: '10px' }}></i>
                    </label>

                  </td>
                </tr>
                {this.state.alumnos.map((r) => (
                  <FormGroup style={{ width: '90%' }}>
                    <InputGroup
                      className={classnames("input-group-alternative", {
                        "input-group-focus": this.state.passwordFocus
                      })}
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText style={{ color: 'black' }}>
                          <i class="far fa-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        id="numAlumno"
                        placeholder={r}
                        type="text"
                        title="Número de boleta"
                      />
                      <span style={{ marginLeft: '5px' }}></span>
                      <i class="fas fa-minus-circle" style={{ color: 'red', marginTop: '10px' }}></i>
                    </InputGroup>
                  </FormGroup>
                ))}
              </table>
            </div>
            <div className="text-center">
              <Button className="my-4" color="default" type="button">
                Registrarse
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
            onClick={() => this.toggleModal("regisModal")}
          >
            Cerrar
          </Button>
        </div>
        */}
      </div>
    );
  }
}

export default ModalRegis;