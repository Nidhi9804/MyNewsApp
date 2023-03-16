import React, { Component } from 'react'

export  class NewsItem extends Component {

    render() {

      let  {Title,description ,imageUrl ,newsurl ,date , author ,source}=this.props;
        return (
            <div>
                <div className="card" style={{width: "18rem"}}>
                    <img src={!imageUrl?  "http://www.team-bhp.com/themes/bhp/images/team-bhp-logo.png" :  imageUrl   } className="card-img-top" alt="..." />
                    <div className="card-body">

                        <h5 className="card-title">{Title}</h5> 
                        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {source}
    <span class="visually-hidden">unread messages</span>
  </span>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {!author ? "unknown" : author } on {date}</small></p>

                        <a href={newsurl} target="_blank" rel="noreferrer" className="btn btn-primary">Read More</a>
                    </div>
                </div>      </div>
        )
    }
}
export default NewsItem 