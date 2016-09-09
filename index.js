import React, { Component } from 'react'
import DOMPurify from 'dompurify'

class FuckXSS extends Component {

  createMarkup() {
    return {__html: DOMPurify.sanitize(this.props.html)}
  }


  render() {

    const { html, ...other} = this.props
    return (
      <div
        {...other} 
        dangerouslySetInnerHTML={this.createMarkup()}  
      />
    )
  }
}

export default FuckXSS
