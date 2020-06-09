import React from 'react';

import './LegalStyles.css';

class Link extends React.Component {
  render() {
    if (this.props.email) {
      return (
        <a href={"mailto:" + this.props.src} rel="noopener noreferrer" target="_blank">{this.props.src}</a>
      )
    } else if (this.props.jump) {
      return (
        <a href={"#" + this.props.src}>{this.props.src}</a>
      )
    }
    return (
      <a href={this.props.src} rel="noopener noreferrer" target="_blank">{this.props.src}</a>
    )
  }
}

class TitledParagraph extends React.Component {
  render() {
    if (this.props.noindent) {
      return (
        <p>
          <span class="bold">{this.props.header}</span> {this.props.content}
        </p>
      )
    }
    return (
      <p>
        &emsp;&emsp;&emsp;&emsp;<span class="bold">{this.props.header}</span> {this.props.content}
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
          <h2 class="header-bold">&emsp;{this.props.content}</h2>
          <br />
          <br />
        </div>

      )
    }
    return (
      <li class="list-clause-header bold">
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