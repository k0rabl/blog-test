import React, { Component } from 'react'
import ArticleProps from '../../interfaces/Article'

class Article extends Component<ArticleProps> {
  constructor(props: ArticleProps){
    super(props)
  }

  render() {
    const { date, name, desc } = this.props
    
    return (
      <div className="container">
        <div className="top">
          <div className="title">{name}</div>
          <div className="date">{date.toDateString()}</div>
        </div>
        <div className="bottom">
          <div className="image"></div>
          <div className="descr">{desc}</div>
        </div>
      </div>
    )
  }
}

export default Article