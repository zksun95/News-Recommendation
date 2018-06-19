import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
//import _ from 'lodash';

import loadingSVG from './Pacman-1s-200px.svg';

class LoadingAni extends Component {

  render(){
    if(this.props.loading){
      return(
        <div>
          <img src={loadingSVG} alt="loading" />
        </div>
      );
    }else{
      return(
        <div>
        </div>
      );
    }
  }
}

export default LoadingAni;
