import React from 'react'
import styled from 'styled-components/macro'


const Links = styled.div`
    display: flex;
    justify-content: space-between;
    text-align: center;
    align-items: center;
    /* margin: 3rem; */
    @media (max-width: 990px) {
        display: none;
    }
`

const DropdownHome = styled.div`
    position: absolute;
    display: flex;
    width: max-content;
    justify-content: center;
    flex-direction: column;
    padding: 10px;
    background-color: whtie;
    color: white;
    top: 80px;
    visibility: hidden;
    background-color: black;
    opacity: 0;
    transition: visibility ease-in .5s, top .5s, opacity .4s;
    border-radius: 5px;
`

const Buttons = styled.div`
    padding: 15px 12px;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    font-weight: 800;
    color: #333333;
    transition: color 0.3s ease-in-out;

    @media (max-width: 1200px) {
        padding: 14px 11px;
        font-size: 15px;
    }
    &:hover ${DropdownHome}{
        visibility: visible;
        top: 50px;
        color: white;
        opacity: 1;
    }
    &:hover{
        color: #4BCC5A;
        cursor: pointer;
        visibility: visible;
    }
`
const Ul = styled.div`
    display: flex;
    justify-content: flex-start;
    text-align: left;
    flex-direction: column;
    padding: 20px;
    gap: 20px;
    width: 200px;
`

const NavbarLinks = () => {
  return (
    <Links>
        <Buttons style={{color:"#4BCC5A"}}>Home <i class="fa-solid fa-angle-down"></i>
            <DropdownHome>
                <Ul>
                    <div>Home Page 1</div>
                    <div>Home Page 2</div>
                    <div>Home Page 3</div>
                </Ul>
            </DropdownHome></Buttons>
        <Buttons>About</Buttons>
        <Buttons>Jobs <i class="fa-solid fa-angle-down"></i>
            <DropdownHome>
                <Ul>
                    <div>Job List</div>
                    <div>Favourite Jobs</div>
                    <div>Job Details</div>
                    <div>Post A Job</div>
                </Ul>
            </DropdownHome>
        </Buttons>
        <Buttons>Candidates <i class="fa-solid fa-angle-down"></i>
            <DropdownHome>
                <Ul>
                    <div>Candidate List</div>
                    <div>Candidate Details</div>
                    <div>Single Resume</div>
                    <div>Submit Resume</div>
                    <div>Pricing</div>
                    <div>Candidate Dashboard</div>
                </Ul>
            </DropdownHome>
        </Buttons>
        <Buttons>Pages <i class="fa-solid fa-angle-down"></i>
            <DropdownHome>
                <Ul>
                    <div>Company List</div>
                    <div>Company Details</div>
                    <div>Login Page</div>
                    <div>Create Account Page</div>
                    <div>Profile</div>
                    <div>Single Profile</div>
                    <div>404</div>
                    <div>FAQ</div>
                    <div>Terms And Conditions</div>
                    <div>Privacy Policy</div>
                </Ul>
            </DropdownHome>
        </Buttons>
        <Buttons>Blogs &nbsp;<i class="fa-solid fa-angle-down"></i>
            <DropdownHome>
                <Ul>
                    <div>Blog</div>
                    <div>Blog Details</div>
                </Ul>
            </DropdownHome>
        </Buttons>
        <Buttons>Contact</Buttons>
    </Links>
  )
}

export default NavbarLinks