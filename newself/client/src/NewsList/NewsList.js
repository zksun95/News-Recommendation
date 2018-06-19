import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
import NewsInfo from '../NewsInfo/NewsInfo';
import LoadingAni from '../LoadingAni/LoadingAni';
import _ from 'lodash';

class NewsList extends Component {

  constructor(){
    super();
    this.state = {
      news: null,
      loading: true
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount(){
    this.loadMore(0);
    this.loadMore = _.debounce(this.loadMore, 2000);
    window.addEventListener("scroll", this.handleScroll);
  }

  loadMore(flag){
    // this.setState(
    //   {news:[
    //     {"imageUrl":"https://i2.cdn.turner.com/money/dam/assets/170607101808-musk-tesla-fortune-500-1024x576.jpg",
    //     "title":"Elon Musk: Tesla worker admitted to sabotage"},
    //     {"imageUrl":"https://i2.cdn.turner.com/money/dam/assets/180615142525-disney-box-office-gold-text-thumbnail-1024x576.jpeg",
    //     "title":"The Disney magic that made 'Incredibles 2' a hit: animation and superheroes"}
    //   ]}
    // );
    let req = new Request('http://localhost:3000/news/api/v1/more_news', 
                          {method: 'GET', cache: 'no-cache'});
    fetch(req).then((res) => res.json())
              .then((news) =>{
                this.setState({
                  news: this.state.news? this.state.news.concat(news): news,
                  loading: false
                });
              })
  }
  
  handleScroll(){
    let pos = window.scrollY ||window.pageYOffset || document.documentElement.scrollTop;
    if((window.innerHeight+pos)>(document.body.offsetHeight-60)){
      console.log("load more news");
      this.setState({loading: true});
      this.loadMore();
    }
  }

  renderNews() {
    let loading = this.state.loading;
    let newsList = this.state.news.map((news)=>{
      return(
        <div className='list-group-item'>
          <NewsInfo news={news} />
        </div>
      );
    })

    return (
      <div className="NewsList list-group">
        {newsList}
        <LoadingAni loading={loading} />
      </div>
    );
  }

  render(){
    if(this.state.news){
      return(
        <div>
        {this.renderNews()}
        </div>
      );
    }else{
      return(
        <div>
          <h1>Loading...</h1>
        </div>
      );
    }
  }
}

export default NewsList;
