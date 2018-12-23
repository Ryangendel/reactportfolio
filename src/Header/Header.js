import React from 'react'
import {Navbar, NavItem, Icon} from "react-materialize"

const NavBar = () => (
    <div>
    <Navbar brand='logo' right>
    <NavItem href='get-started.html'><Icon>search</Icon></NavItem>
     <NavItem href='get-started.html'><Icon>view_module</Icon></NavItem>
     <NavItem href='get-started.html'><Icon>refresh</Icon></NavItem>
     <NavItem href='get-started.html'><Icon>more_vert</Icon></NavItem>
    </Navbar>
</div>
)

export default NavBar