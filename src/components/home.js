import React, { Component } from 'react';

// import '../style/main.css'
import ModalRegistro from './ModalRegistro';
import ModalProtocolo from './ModalProtocolo';

class Home extends Component{
    // var subtitle;
    state = {
        show: false,
        showR: false
      };
      showModal = e => {
        this.setState({
          show: !this.state.show
        });
      };
      showModalR = e => {
        this.setState({
          showR: !this.state.showR
        });
      };
    render(){
        return (
            <div  className="body-inner">
            <section id="banner">
                <h2>TRABAJOS TERMINALES</h2>
                <p>REGISTRO Y SEGUIMIENTO</p>
                <ul className="actions special">
                    <li><a className="button primary"  onClick={e => {this.showModalR();}} style={{width:'auto'}}>REGISTRAR PROTOCOLO</a></li>
                    <li><a className="button"  onClick={e => {this.showModal();}} style={{width:'auto'}}>REGISTRAR ALUMNO</a></li>
                </ul>
            </section>
            {/* <!--/ Slider end --> */}

            {/* <!-- Formulario de login --> */}
            {/* <ModalLogin onClose={this.showModal} show={this.state.show}/> */}

            {/* <!-- Modal de registro --> */}
            <ModalRegistro onClose={this.showModal} show={this.state.show}/>
            {/* <!-- Formulario de protocolo --> */}
            <ModalProtocolo onClose={this.showModalR} show={this.state.showR}/>
        </div>
    );
    }
}

export default Home;