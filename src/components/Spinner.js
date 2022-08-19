import React, { Component } from 'react'
// simport "./cssfile/img";
import inner from './inner.gif'
export default class Spinner extends Component {
  render() {
    return (
      <img src={inner} alt="spinner" style={{display: "flex",
        width: "2%",
        justifyContent: "center",
        marginLeft: "auto",
        marginRight: "auto"}} />
    )
  }
}
