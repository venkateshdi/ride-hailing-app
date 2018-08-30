import * as React from 'react';
import "./style.scss";

export interface HeaderState {
  /* empty */
}

export class Header extends React.Component<HeaderState> {

  render() {
    return (
      <header>
        <h1>Ride Hailing App</h1>
      </header>
    );
  }
}

export default Header;