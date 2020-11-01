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

class ModalAlum extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      demoModal: this.props.show,
      nombre:'',
      apellidoP:'',
      apellidoM:'',
      usuario:'',
      boleta:'',
      correo:'',
      pass:'',
    };
    console.log(this.state.demoModal);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  toggleModal = modalState => {
    this.setState({
      [modalState]: !this.state[modalState]
    });
  }
    handleChange(e) {
      const { name, value } = e.target;
      console.log(name,value);
      this.setState({ [name]: value });
  }

  handleSubmit(event){ 
      event.preventDefault();
      const searchParams = Object.keys(this.state).map((key) => {
          return encodeURIComponent(key) + '=' + encodeURIComponent(this.state[key]);
        }).join('&');          
      console.log(searchParams)
       fetch('http://protocolo-env.eba-9bvnhbdx.us-east-1.elasticbeanstalk.com/database/search?boleta=20185')
      .then(ress => ress.json())
      .then(ress => console.log(ress.data))
      fetch('http://protocolo-env.eba-9bvnhbdx.us-east-1.elasticbeanstalk.com/add', {
          method: 'POST',
          // mode: 'cors',
          // body: JSON.stringify({
          //     nombre: this.state.nombre,
          //     apellidoP:this.state.apellidoP,
          //     apellidoM:this.state.apellidoM,
          //     Usuario:this.state.usuario,
          //     boleta:this.state.boleta,
          //     pass:this.state.pass,
          //     correo:this.state.correo,

          // }),
          body:searchParams,
          headers: {"Content-Type": 'application/x-www-form-urlencoded'}
      })
      .then(ress => ress.json())
      .then(ress=> console.log(ress))
      // .then(ress=> ress.data.length?alert("El usuario ya esta registrado"):alert("Usuario registrado con exito"));
  }
    render() { 
      let style ={display:'block'}
      const close= ()=> {document.getElementById("regis").style.display="none";}
      const onClose = e => {
          this.props.onClose && this.props.onClose(e);
        };
      
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
    return (
      <div id="regis">
        {this.props.children}
        <div className="modal-body">

          <Form role="form" onSubmit={this.handleSubmit}>
            <FormGroup className="mb-3">
              <InputGroup
                className={classnames("input-group-alternative", {
                  "input-group-focus": this.state.emailFocus
                })}
              >
                <InputGroupAddon addonType="prepend">
                  <InputGroupText style={{ color: 'black' }}>
                    <i class="fas fa-user" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder="Nombre completo"
                  type="text"
                  title="Incluye solamente letras (mayúsculas y minúsculas)."
                  maxLength="100;"
                  minLength="10;"
                  pattern="[A-Za-zñÑáéíóúÁÉÍÓÚ\s]+"
                  onFocus={e => this.setState({ emailFocus: true })}
                  onBlur={e => this.setState({ emailFocus: false })}
                  onChange={this.handleChange} required
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
                    <i class="fas fa-id-card"></i>
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder="Número de boleta"
                  type="text"
                  title="Número de boleta conformado por 10 dígitos numéricos."
                  minLength="10"
                  maxLength="10"
                  pattern="[0-9]+"
                  onChange={this.handleChange} required
                  onFocus={e => this.setState({ passwordFocus: true })}
                  onBlur={e => this.setState({ passwordFocus: false })}
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
                    <i class="fas fa-envelope"></i>
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder="Correo electrónico"
                  type="email"
                  title="Ingrese un correo electrónico válido."
                  onChange={this.handleChange} required
                  onFocus={e => this.setState({ passwordFocus: true })}
                  onBlur={e => this.setState({ passwordFocus: false })}
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
                  id="pass"
                  placeholder="Contraseña"
                  type="password"
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  minLength="8"
                  maxLength="12"
                  title="La contraseña debe incluir al menos 8 dígitos, entre ellos una mayúscula, un número, una minúscula y un máximo de 12 caracteres."
                  readonly
                  onChange={this.handleChange} required
                  onFocus={e => this.setState({ passwordFocus: true })}
                  onBlur={e => this.setState({ passwordFocus: false })}
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
                  id="pass0"
                  placeholder="Confirmar contraseña"
                  type="password"
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  minLength="8"
                  maxLength="12"
                  title="La contraseña debe incluir al menos 8 dígitos, entre ellos una mayúscula, un número, una minúscula y un máximo de 12 caracteres."
                  readonly
                  onChange={this.handleChange} required
                  onFocus={e => this.setState({ passwordFocus: true })}
                  onBlur={e => this.setState({ passwordFocus: false })}
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
                    <i class="fas fa-folder-open"></i>
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder="Número de protocolo"
                  type="text"
                  minLength="1"
                  maxLength="2"
                  pattern="[0-9]+"
                  onChange={this.handleChange} required
                  onFocus={e => this.setState({ passwordFocus: true })}
                  onBlur={e => this.setState({ passwordFocus: false })}
                />
              </InputGroup>
            </FormGroup>
            <div className="text-center">
              <Button className="my-4" color="default" type="submit">
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

export default ModalAlum;