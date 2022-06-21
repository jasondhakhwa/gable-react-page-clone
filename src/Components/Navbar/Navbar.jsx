import React, { useState } from 'react'
import styled from 'styled-components/macro'
import logo from '../../IMAGES/Image/logo.png'
import NavbarLinks from './NavbarLinks'
import Hamburger from 'hamburger-react'
import NavbarLinksHamburger from './NavbarLinksHamburger'

const Container = styled.div`
    display: flex;
    width: 1140px;
    transition: width .5s;
    @media (max-width: 1200px) {
        width: 960px;
    }
    @media (max-width: 990px) {
        
    }
`
const Contains = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;

    @media (max-width: 990px) {
        flex-direction: column;
    }

`
const LogoDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 990px) {
        background-color: black;
        width: 100%;
        justify-content: space-between;
    }
`
const Logo = styled.img`
    max-height: 50px;
    max-width: 100%;

    margin: 12px;
    &:hover{
        cursor: pointer;
    }
    @media (max-width: 990px) {
        max-height: 35px;
    }
`
const HamLogButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    width: 100%;
    display: none;

    @media (max-width: 990px) {
        display: block;
    }
`
const HamLogButtons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;

    @media (max-width: 990px) {
        padding: 10px 0px;
        background-color: white;

    }
    
`
const HamLogButton = styled.div`
    display: none;

    @media (max-width: 990px) {
        display: block;
        display: flex;
        justify-content: center;
        align-items: center;
    }    
`
const HamburgerSelf = styled.div`
    display: none;
    color: white;
    margin: 12px;


    @media (max-width: 990px) {
        display: block;
    }
    
`
const LogButtonContains = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`
const LogButtonContain = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    background-color: white;
`
const LogButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 990px) {
        display: none;

    }    
`

const Login = styled.div`
    padding: 12px;
    padding: 12px 0px;
    width: 120px;
    font-weight: 800;
    color: #333333;
    font-size: 16px;
    border: 0.5px solid #3bbe4b;
    box-shadow: inset 0 0 0 0 #3bbe4b;
    transition: box-shadow ease-out 0.4s, color ease 0.6s;
    
    @media (max-width: 1200px) {
        font-size: 14px;
        padding: 9px 0px;
    }

    &:hover{
        color: white;
        box-shadow: inset 120px 0 0 0 #3bbe4b;
        cursor: pointer;
    }
`
const SignUp = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    padding: 12px 0px;
    width: 120px;
    font-weight: 800;
    color: #ffffff;
    border: 0.5px solid #3bbe4b;
    box-shadow: inset 120px 0 0 0 #3bbe4b;
    transition: box-shadow ease-out 0.4s, color ease-out 0.6s;

    @media (max-width: 1200px) {
        font-size: 14px;
        padding: 9px 0px;
    }

    &:hover{
        color: #333333;
        box-shadow: inset 0 0 0 0 #90fc9cb2;
        cursor: pointer;
    }
`

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    const [isOpen, setOpen] = useState(false);
    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNavbar(true);
        }
        else {
            setNavbar(false)
        }
    }
    window.addEventListener('scroll', changeBackground);

    return (
        <div className={navbar ? "NavbarContainer active" : "NavbarContainer"}>
            <Container>
                <Contains>
                    <LogoDiv>
                        <Logo src={logo} alt="Logo" />
                        <HamburgerSelf>
                            <Hamburger toggled={isOpen} toggle={setOpen} />
                        </HamburgerSelf>
                    </LogoDiv>
                    <NavbarLinks />
                    <LogButton>
                        <Login><i class="fa-solid fa-square-plus"></i> Login</Login>
                        <SignUp><i class="fa-solid fa-user"></i> Sign Up</SignUp>
                    </LogButton>
                    <HamLogButtonContainer>
                        {
                            isOpen ?
                                // <LogButtonContains>
                                <LogButtonContain>
                                    <NavbarLinksHamburger />
                                    <HamLogButtons>
                                        <HamLogButton>
                                            <Login><i class="fa-solid fa-square-plus"></i> Login</Login>
                                            <SignUp><i class="fa-solid fa-user"></i> Sign Up</SignUp>
                                        </HamLogButton>
                                    </HamLogButtons>
                                </LogButtonContain>
                                // </LogButtonContains >    
                                :
                                <HamLogButtons>
                                    <HamLogButton>
                                        <Login><i class="fa-solid fa-square-plus"></i> Login</Login>
                                        <SignUp><i class="fa-solid fa-user"></i> Sign Up</SignUp>
                                    </HamLogButton>
                                </HamLogButtons>
                        }
                    </HamLogButtonContainer>
                </Contains>
            </Container>
        </div>
    )
}

export default Navbar