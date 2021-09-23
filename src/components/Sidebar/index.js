import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper,SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute, SidebarLogo} from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <SidebarLogo to="/" onClick={toggle}>Kalani.</SidebarLogo>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
                    <SidebarLink to="service" onClick={toggle}>Service</SidebarLink>
                    <SidebarLink to="menu" onClick={toggle}>Menu</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/signin">Sign In</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
