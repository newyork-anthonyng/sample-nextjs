// @flow
import React, { Component } from 'react';
import T from 'prop-types';
import throttle from 'lodash.throttle';

class InViewport extends Component {
  constructor() {
    super();

    this.hasOutstandingCall = true;

    this.throttledHandleScroll = throttle(this.handleScroll, 100);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.throttledHandleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.throttledHandleScroll);
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.isActive && this.props.isActive) {
      this.hasOutstandingCall = true;
    }
  }

  handleScroll = () => {
    if (!this.props.isActive) return;

    const rect = this.container.getBoundingClientRect();

    const isInView: boolean = (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= window.innerHeight &&
      rect.right <= window.innerWidth
    );

    if (isInView && this.hasOutstandingCall) {
      this.props.onScreenEnter();
      this.hasOutstandingCall = false;
    }
  }

  render() {
    return (
      <div ref={container => {this.container = container; }}>
        <style jsx>{`
          div {
            border: 5px solid red;
            bottom: 250px;
            height: 50px;
            position: absolute;
            width: 50px;
          }
        `}</style>
      </div>
    );
  }
}

InViewport.propTypes = {
  onScreenEnter: T.func,
  isActive: T.bool,
};

export default InViewport;
