import React from 'react'
import styled from 'styled-components/macro'
import logo from '../IMAGES/Image/logo-two.png'
import bg from '../IMAGES/Image/footer-bg.png'
import NewsLetter from './NewsLetter'

const FooterContains = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    padding-top: 150px;
    position: relative;
`

const FooterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0px 0px 0px 0px;
    color: white;
    max-width: 1140px;
    padding: 0;
    @media (max-width: 1200px) {
        width: 960px;
    }
    @media (max-width: 990px) {
        width: 720px;
    }
    @media (max-width: 770px) {
        width: 540px;
    }
    @media (max-width: 575px) {
        padding: 0px 20px;
        width: 100%;
    }
`
const Container = styled.div`
    display: flex;
    margin: 120px 0px;
    gap: 23px;
    padding: 0px ;
    justify-content:center;
    height: auto;
    flex-wrap: wrap;
    @media (max-width: 1200px) {
        width: 960px;
    }
    @media (max-width: 990px) {
        width: 720px;
    }
    @media (max-width: 770px) {
        width: 540px;
        gap: 15px;
    }
    @media (max-width: 575px) {
        padding: 0px 20px;
        width: 100%;
    }
`
const Logo = styled.img`
    margin: 25px 0px;
    margin-top: 10px;
`
const CompanyInfo = styled.div`
    text-align: left;
    margin: 0px 0px 20px;
    font-size: 15px;
    line-height: 25px;
`
const SocialHandles = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
`

const CategoryDiv = styled.div`
    text-align: left;
    padding: 0px;
    width: 261px;
    
    @media (max-width: 1200px) {
        width: 216px;
    }
    @media (max-width: 990px) {
        width: 348px;
    }
    @media (max-width: 770px) {
        width: 260px;
    }
    @media (max-width: 575px) {
        padding: 0px 20px;
        width: 100%;
    }
`
const Category = styled.div`
`
const Title = styled.h3`
    text-align: left;
    font-size: 22px;
`
const Ul = styled.ul`
    margin-left: 0px;
    padding-left: 0px;
    list-style-type: none;
    `
const ContactInfoDiv = styled.div``
const HoverBlack = styled.div`
    margin: 0px 10px;
&:hover{
    color: black;
    cursor: pointer;
}
`
const FootInfo = styled.div`
margin-left: 0px;
margin-top: 20px;
font-size: 15px;

transition: color ease-out 0.5s;

&:hover{
    color: black;
    cursor: pointer;
}
`
const FootContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 30px;
    
    @media (max-width: 990px) {
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin: 10px;
    }
`
const FootText = styled.div`
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const HrDiv = styled.div`
    display: flex;
    align-items: center;

`
const ThicHr = styled.hr`
    color: #ffffff;
    background-color: #ffffff;
    border: 0px;
    height: 3px;
    width: 20%;
    margin: 0px;
        
    `
const Hr = styled.hr`
    color: #cacaca;
    background-color: #c9c9c9;
    border: 0px;
    height: 1px;
    width: 100%;
    margin: 0px;
`

const Footer = () => {
    return (
        <FooterContains>
            <NewsLetter />

            <FooterContainer>
                <Container>
                    <CategoryDiv>
                        <Category>
                            <Logo src={logo} />
                            <CompanyInfo>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</CompanyInfo>
                            <SocialHandles>
                                <i class="fa-brands fa-youtube"></i>
                                <i class="fa-brands fa-facebook-f"></i>
                                <i class="fa-brands fa-instagram"></i>
                                <i class="fa-brands fa-twitter"></i>
                            </SocialHandles>
                        </Category>
                    </CategoryDiv>
                    <CategoryDiv>
                        <Category>
                            <Title>Category</Title>
                            <HrDiv>
                                <ThicHr />
                                <Hr />
                            </HrDiv>
                            <Ul>
                                <FootInfo><i class="fa-solid fa-angle-right"></i> Development</FootInfo>
                                <FootInfo><i class="fa-solid fa-angle-right"></i> Business</FootInfo>
                                <FootInfo><i class="fa-solid fa-angle-right"></i> Tech and It</FootInfo>
                                <FootInfo><i class="fa-solid fa-angle-right"></i> Finance</FootInfo>
                                <FootInfo><i class="fa-solid fa-angle-right"></i> Networking</FootInfo>
                            </Ul>

                        </Category>
                    </CategoryDiv>
                    <CategoryDiv>
                        <Category>
                            <Title>Quick Links</Title>
                            <HrDiv>
                                <ThicHr />
                                <Hr />
                            </HrDiv>
                            <Ul>
                                <FootInfo><i class="fa-solid fa-angle-right"></i> Home</FootInfo>
                                <FootInfo><i class="fa-solid fa-angle-right"></i> About us</FootInfo>
                                <FootInfo><i class="fa-solid fa-angle-right"></i> Blogs</FootInfo>
                                <FootInfo><i class="fa-solid fa-angle-right"></i> Companies</FootInfo>
                                <FootInfo><i class="fa-solid fa-angle-right"></i> Testimonials</FootInfo>
                            </Ul>

                        </Category>
                    </CategoryDiv>
                    <CategoryDiv>
                        <Category>
                            <Title>Find us</Title>
                            <HrDiv>
                                <ThicHr />
                                <Hr />
                            </HrDiv>
                            <ContactInfoDiv>
                                <FootInfo><i class="fa-solid fa-location-dot" style={{ marginRight: "5px" }}></i> 28/A Street, New York City</FootInfo>
                                <FootInfo><i class="fa-solid fa-phone" style={{ marginRight: "5px" }}></i> +88 0123 456 789</FootInfo>
                                <FootInfo><span style={{ fontWeight: "bold", marginRight: "5px" }}>@</span> hello@gable.com</FootInfo>
                            </ContactInfoDiv>

                        </Category>
                    </CategoryDiv>
                </Container>
                <Hr />
                <FootContainer>
                    <FootText>Copyright © 2022 Gable. Designed By <HoverBlack>HiBootstrap</HoverBlack></FootText>
                    <FootText><HoverBlack>Terms & Conditions</HoverBlack> - <HoverBlack>Privacy Policy</HoverBlack></FootText>
                </FootContainer>
            </FooterContainer>
        </FooterContains >
    )
}

export default Footer