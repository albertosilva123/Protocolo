import React from "react";
import classnames from "classnames";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
// reactstrap components
import {

} from "reactstrap";

import IndexNavbar from "../Navbars/IndexNavbar.jsx";
import Footer from "../Footer/Footer.jsx";

class Profesor extends React.Component {
  render() {
    return (
      <>
        <IndexNavbar />
        <Footer />
      </>
    );
  }
}
export default Profesor;
