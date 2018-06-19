import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'

class NewsInfo extends Component {

  // gotoNews(url){
  //   window.open(url, '_blank');
  // }

  render() {
    return (
      <div className="NewsInfo row">
        <div className="NewsInfo-header col s4">
          <img src={this.props.news.imageUrl} className="NewsInfo-image responsive-img" alt="img" />
        </div>
        <div className="col s8">
          <h5>{this.props.news.title}</h5>
        </div>
      </div>
    );
  }

}

export default NewsInfo;
