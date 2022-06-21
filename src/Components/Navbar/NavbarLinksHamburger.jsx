import React, { useState } from 'react'
import styled from 'styled-components/macro'
import Hamburger from 'hamburger-react'

const HamburgerContainer = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    width: 100%;
`
const Links = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    display: none;
    @media (max-width: 990px) {
        display: block;
        width: 100%;
        margin-left: 20px;
        margin-right: 10px;
    }
`

const Buttons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 12px 0px;
    border-top: .5px solid #dfdfdf;
`
const Button = styled.div``
const SubButton = styled.div`
    padding-left: 20px;
`
const NavbarLinksHamburger = () => {
    const [isHomeOpen, setHomeOpen] = useState(false)
    const [isJobOpen, setJobOpen] = useState(false)
    const [isCandidatesOpen, setCandidatesOpen] = useState(false)
    const [isPagesOpen, setPagesOpen] = useState(false)
    const [isBlogs, setBlogs] = useState(false)


    const toggleHome = () => {
        setHomeOpen(!isHomeOpen);
    };
    const toggleJobs = () => {
        setJobOpen(!isJobOpen);
    };
    const toggleCandidates = () => {
        setCandidatesOpen(!isCandidatesOpen);
    };
    const togglePages = () => {
        setPagesOpen(!isPagesOpen);
    };
    const toggleBlogs = () => {
        setBlogs(!isBlogs);
    };

    return (
        <HamburgerContainer>
            <Links>
                <Buttons onClick={toggleHome}>
                    <Button>Home</Button>
                    <Hamburger toggled={isHomeOpen} />
                </Buttons>
                {
                    isHomeOpen ?
                        <>
                            <Buttons>
                                <SubButton>Home Page 1</SubButton>
                            </Buttons>
                            <Buttons>
                                <SubButton>Home Page 2</SubButton>
                            </Buttons>
                            <Buttons>
                                <SubButton>Home Page 3</SubButton>
                            </Buttons>
                        </>
                        :
                        <></>
                }
                <Buttons>About</Buttons>
                <Buttons onClick={toggleJobs}>
                    Jobs
                    <Hamburger toggled={isJobOpen} />
                </Buttons>
                {
                    isJobOpen ?
                        <>
                            <Buttons>
                                <SubButton>Job List</SubButton>
                            </Buttons>
                            <Buttons>
                                <SubButton>Favourite Jobs</SubButton>
                            </Buttons>
                            <Buttons>
                                <SubButton>Job Details</SubButton>
                            </Buttons>
                            <Buttons>
                                <SubButton>Post A Job</SubButton>
                            </Buttons>
                        </>
                        :
                        <></>
                }
                <Buttons onClick={toggleCandidates}>
                    Candidates
                    <Hamburger toggled={isCandidatesOpen} />
                </Buttons>
                {
                    isCandidatesOpen ?
                        <>
                            <Buttons>
                                <SubButton>Candidate List</SubButton>
                            </Buttons>
                            <Buttons>
                                <SubButton>Candidate Details</SubButton>
                            </Buttons>
                            <Buttons>
                                <SubButton>Single Resume</SubButton>
                            </Buttons>
                            <Buttons>
                                <SubButton>Submit Resume</SubButton>
                            </Buttons>
                            <Buttons>
                                <SubButton>Pricing</SubButton>
                            </Buttons>
                            <Buttons>
                                <SubButton>Candidate dashboard</SubButton>
                            </Buttons>
                        </>
                        :
                        <></>
                }
                <Buttons onClick={togglePages}>
                    Pages
                    <Hamburger toggled={isPagesOpen} />
                </Buttons>
                <Buttons onClick={toggleBlogs}>
                    Blogs
                    <Hamburger toggled={isBlogs} />
                </Buttons>
                {
                    isBlogs ?
                        <>
                            <Buttons>
                                <SubButton>Blog</SubButton>
                            </Buttons>
                            <Buttons>
                                <SubButton>Blog Details</SubButton>
                            </Buttons>
                        </>
                        :
                        <></>
                }
                <Buttons>Contact</Buttons>
            </Links>
        </HamburgerContainer>
    )
}

export default NavbarLinksHamburger