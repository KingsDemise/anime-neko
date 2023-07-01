import React, { Component } from 'react'
import { Image, Menu} from 'semantic-ui-react'
import {
    NavLink
} from "react-router-dom";

export default class NavbarComp extends Component {
    state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
  }
    render() {
        const { activeItem } = this.state
        return (
        <Menu inverted>
            <Menu.Item 
            as={NavLink} to="/"
            name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick} 
          style={{ fontSize: '20px' ,fontWeight: 'bold',fontFamily: "Helvetica, sans-serif" ,py:"10px"}}>
            <Image src="https://shorturl.at/kpITY" circular size='mini' />
                Anime Neko
            </Menu.Item>
            <Menu.Menu>
            <Menu.Item as={NavLink} to="/watchlist"
          name='watchlist'
          active={activeItem === 'watchlist'}
          onClick={this.handleItemClick}
          style={{ fontSize: '20px',fontFamily: "Helvetica, sans-serif"}}
          >
            Watchlist
          </Menu.Item>
            </Menu.Menu>
          
        </Menu>
        )
    }
}