import React, { Component } from 'react';

import '../style/main.css'
import ModalRegistro from './ModalRegistro';
import ModalProtocolo from './ModalProtocolo';

class Home extends Component{
    // var subtitle;
    state = {
        show: false
      };
      showModal = e => {
        console.log("HOLIII")
        this.setState({
          show: !this.state.show
        });
      };
    render(){
        return (
            <div  className="body-inner">
            <section id="banner">
                <h2>TRABAJOS TERMINALES</h2>
                <p>REGISTRO Y SEGUIMIENTO</p>
                <ul className="actions special">
                    <li><a className="button primary"  onClick={e => {this.showModal();}} style={{width:'auto'}}>REGISTRAR PROTOCOLO</a></li>
                    <li><a className="button"  onClick={e => {this.showModal();}} style={{width:'auto'}}>REGISTRAR ALUMNO</a></li>
                </ul>
            </section>
            {/* <!--/ Slider end --> */}

            {/* <!-- Formulario de login --> */}
            {/* <ModalLogin onClose={this.showModal} show={this.state.show}/> */}

            {/* <!-- Modal de registro --> */}
            <ModalRegistro show={this.state.show}/>
            {/* <!-- Formulario de protocolo --> */}
            {/* <ModalProtocolo onClose={this.showModal} show={this.state.show}/> */}
        </div>
    );
    }
}

export default Home;