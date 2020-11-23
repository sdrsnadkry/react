import React from 'react'
import { FaBars } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'

import {
    Nav,
    NavBarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLink,
    NavBtn,
    NavBtnLink
} from './NavBarElements'

const NavBar = ({ toggleSidebar }) => {
    const [scrollNav, setScrollNav] = React.useState(false)

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    React.useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop()
    }

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavBarContainer>
                    <NavLogo to="/" onClick={toggleHome}>
                        LOGO
                    </NavLogo>
                    <MobileIcon onClick={toggleSidebar}>
                        <FaBars />
                    </MobileIcon>

                    <NavMenu>
                        <NavItem>
                            <NavLink to="one"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                            >Section One
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="two"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                            >Section Two</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="three"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                            >Section Three</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="services"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                            >Services</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="four"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                            >Section Four</NavLink>
                        </NavItem>

                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/get-started">Get Started</NavBtnLink>
                    </NavBtn>
                </NavBarContainer>
            </Nav>
        </>
    )
}

export default NavBar
