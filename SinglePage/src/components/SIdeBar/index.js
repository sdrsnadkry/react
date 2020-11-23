import React from 'react'
import {
    SideBarContainer,
    Icon,
    CloseIcon,
    SideBarWrapper,
    SideBarMenu,
    SideBarLink,
    SideBtnWrap,
    SideBarRoutes
} from './SideBarElements'

const SideBar = ({ toggleSidebar, isOpen }) => {
    return (
        <SideBarContainer isOpen={isOpen} onClick={toggleSidebar}>
            <Icon onClick={toggleSidebar}>
                <CloseIcon />
            </Icon>

            <SideBarWrapper>
                <SideBarMenu>
                    <SideBarLink onClick={toggleSidebar} to="about">About</SideBarLink>
                    <SideBarLink onClick={toggleSidebar} to="discover">Discover</SideBarLink>
                    <SideBarLink onClick={toggleSidebar} to="services">Services</SideBarLink>
                    <SideBarLink onClick={toggleSidebar} to="signup">Sign Up</SideBarLink>
                </SideBarMenu>
            </SideBarWrapper>

            <SideBtnWrap>
                <SideBarRoutes to="/signin">
                    Sign In
                </SideBarRoutes>
            </SideBtnWrap>
        </SideBarContainer>
    )
}

export default SideBar
