import React, { Component } from 'react'
import { tns } from 'tiny-slider/src/tiny-slider'

export default class Slider extends Component {
  componentDidMount() {
    this.slider = tns({
      container: '.my-slider',
      items: 3,
      slideBy: 'page',
      autoplay: true
    });
  }
  render() {
    return (
      <div className="my-slider" />
    )
  }
}
