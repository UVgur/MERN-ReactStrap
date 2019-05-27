import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, NavLink } from 'reactstrap';

export default class MyMenu extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        < DropdownToggle >
            <span className= "navbar-toggler-icon"></span>
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Visit my Pages:</DropdownItem>
          <DropdownItem>
              <NavLink href = "https://github.com/UVgur" style={{color: 'black'}}> GitHub </NavLink>
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem>
              <NavLink href = "https://www.linkedin.com/in/yuval-gur-863205159" style={{color: 'black'}}> LinkedIn </NavLink>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}

