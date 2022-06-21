import React from 'react'
import styled from 'styled-components/macro'
import IMAGES from '../IMAGES/Image/AppArea'

const AppAreaAllignment = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: white;
    background-image: url(${IMAGES.bg});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    
    @media (max-width: 990px){
    background-image:none;
    }
`
const AppAreaContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1140px;
    height: 480px;
    @media (max-width: 1200px){
        width: 920px;
    }
    @media (max-width: 990px){
        flex-direction: column;
        width: 720px;
    height: auto;
    }
    @media (max-width: 770px) {
        width: 540px;
    }
    @media (max-width: 575px) {
        width: 100%;
    }
`
const ImageContainerParent = styled.div`
    display: flex;
    width: 50%;
    @media (max-width: 990px){
        width: 720px;
    }
    @media (max-width: 770px) {
        width: 540px;
    }
    @media (max-width: 575px) {
        width: 100%;
    }
`
const ImageContainer = styled.div`
    display: flex;
    width: 50%;
    align-items: center;
    position: relative;
    @media (max-width: 990px){
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 720px;
    }
`
const Straight = styled.img`
    height: 520px;
    margin: 0px 12px;
    position: relative;
    left: 270px;
    top: -50px;
    animation: MoveUpDown 5s linear infinite;
    @media (max-width: 1200px){
        height: 518px;
        left: 160px;
    }
    @media (max-width: 990px){
        position: relative;
        left: 0px;
        top: 0px;
    }
    @media (max-width: 770px) {
    }
    @media (max-width: 575px) {
    }
`
const Tilt = styled.img`
    height: 615px;
    margin: 0px 12px;
    left: -70px;
    position: absolute;
    animation: MoveRightLeft 5s linear infinite;
    @media (max-width: 1200px){
        left: -150px;
        height: 562px;
    }
    @media (max-width: 990px){
    position: relative;
        left: 0px;
        top: 0px;
    }
    @media (max-width: 770px) {
    }
    @media (max-width: 575px) {
    }
    
`
const PortalContainer = styled.div`
    width: 50%;
    @media (max-width: 990px){
        width: 720px;
    }
    @media (max-width: 770px) {
        width: 540px;
    }
    @media (max-width: 575px) {
        width: 100%;
    }
`
const TextArea = styled.div`
    display: flex;
    flex-direction: column;
    @media (max-width: 990px){
        color: black;
        width: 720px;
    }
    @media (max-width: 770px) {
        width: 540px;
    }
    @media (max-width: 575px) {
        width: 100%;
    }

`
const TextTitle = styled.h2`
    text-align: center;
    font-size: 38px;
    padding: 0px;
    margin: 0px;
    @media (max-width: 990px){
        color: black;
        width: 720px;
    }
    @media (max-width: 770px) {
        width: 540px;
    }
    @media (max-width: 575px) {
        width: 100%;
    }
`
const TextPara = styled.p`
    padding: 0px;
    margin: 20px 0px;
    
    @media (max-width: 990px){
        color: black;
        width: 720px;
    }
    @media (max-width: 770px) {
        width: 540px;
    }
    @media (max-width: 575px) {
        width: 100%;
    }
`

const StoreBlock = styled.div`
    display: flex;
`
const Store = styled.div`
    padding: 10px;
    margin: 10px;
    border-radius: 10px;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    
    @media (max-width: 990px){
        color: white;
    }
`
const Logo = styled.div`
`

const StoreDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px 10px;
`

const AppArea = () => {
    return (
        <AppAreaAllignment>
            <AppAreaContainer>
                <ImageContainerParent>
                    <ImageContainer>
                        <Tilt src={IMAGES.tilt}></Tilt>
                        <Straight src={IMAGES.straight}></Straight>
                    </ImageContainer>
                </ImageContainerParent>
                <PortalContainer>
                    <TextArea>
                        <TextTitle>Download The Glabe Mobile App</TextTitle>
                        <TextPara>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</TextPara>
                        <StoreBlock>
                            <Store>
                                <Logo>
                                    <i class="fa-brands fa-apple" style={{ fontSize: "40px" }}></i></Logo>
                                <StoreDiv>
                                    <p style={{ fontSize: "10px", margin: "0px", padding: "0px" }}>Download on the</p>
                                    <p style={{ margin: "0px", padding: "0px" }}>App Store</p>
                                </StoreDiv>
                            </Store>
                            <Store>
                                <Logo>
                                    <i class="fa-brands fa-google-play" style={{ fontSize: "35px" }}></i></Logo>
                                <StoreDiv>
                                    <p style={{ fontSize: "10px", margin: "0px", padding: "0px" }}>Andriod app store</p>
                                    <p style={{ margin: "0px", padding: "0px" }} >Google Play</p>
                                </StoreDiv>
                            </Store>
                        </StoreBlock>
                    </TextArea>
                </PortalContainer>
            </AppAreaContainer>
        </AppAreaAllignment>
    )
}

export default AppArea