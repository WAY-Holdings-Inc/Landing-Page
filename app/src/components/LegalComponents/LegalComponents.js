import React from 'react';

import './LegalStyles.css';

class Link extends React.Component {
  render() {
    if (this.props.email) {
      return (
        <a href={"mailto:" + this.props.src} rel="noopener noreferrer" target="_blank" className="way-blue">{this.props.src}</a>
      )
    } else if (this.props.jump) {
      return (
        <a href={"#" + this.props.src} id={this.props.id} className="way-blue">{(this.props.disp === undefined) ? this.props.src : this.props.disp}</a>
      )
    }
    return (
      <a href={this.props.src} rel="noopener noreferrer" target="_blank" className="way-blue">{this.props.src}</a>
    )
  }
}

class TitledParagraph extends React.Component {
  render() {
    if (this.props.noindent) {
      return (
        <p>
          <span className="bold">{this.props.header}</span> {this.props.content}
        </p>
      )
    }
    return (
      <p>
        &emsp;&emsp;&emsp;&emsp;<span className="bold">{this.props.header}</span> {this.props.content}
      </p>
    )
  }
}

class ListHeader extends React.Component {
  render() {
    if (this.props.large) {
      return (
        <div>
          <br />
          <h2 className="header-bold">&emsp;&nbsp;&nbsp;{this.props.content}</h2>
          <br />
        </div>

      )
    }
    return (
      <li className="no-list-style bold">
        <br />
        &emsp;&emsp;&emsp;&emsp;{this.props.content}
        <br />
        <br />
      </li>
    )
  }
}

export {
  Link,
  TitledParagraph,
  ListHeader
}