import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap'


class HeaderComponent extends Component {
  constructor(ops) {
    super(ops)

    this.state = {
      navOpen: false,
      dropdownOpen: false,
    }
  }


  componentDidMount() {
    const { Account: { auth: { loggedIn } } } = this.props
    console.log('User is logged in? ', loggedIn)
  }

  toggle(item) {
    this.setState({
      [item]: !this.state[item]
    })
  }

  render() {
    const { navOpen, dropdownOpen } = this.state

    return (
      <div>
      <Navbar color="primary" light>
        <NavbarBrand href="/" className="mr-auto">
        <img width={"10%"} src={"/favicon.ico"} /> | Ṛta Yoga
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle.bind(this, 'navOpen')} className="mr-2" />
        <Collapse isOpen={navOpen} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink onClick={() => { alert('I am clicked!') }}>Upcoming Events</NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={() => { alert('I am clicked!') }}>Sign Up!</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      </div>
    );
  }

}

const mapStoreToProps = (store, props) => {
  return {
    Account: store.Account,
  }
}

const Header = connect(mapStoreToProps)(HeaderComponent)

export default Header
