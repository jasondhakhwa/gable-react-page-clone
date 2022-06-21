import React from 'react'
import styled from 'styled-components/macro'
import IMAGES from '../IMAGES/Image/PortalArea'

const PortalAreaAllignment = styled.div`
    padding: 100px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    position: relative;
    
    /* @media (max-width: 770px) {
        padding: 30px 0px;
    } */
`
const PortalAreaContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1140px;
    height: 480px;
    @media (max-width: 1200px){
        width: 920px;
    }
    @media (max-width: 990px){
        height: auto;
        width: 720px;
        flex-direction: column;
    }
    @media (max-width: 770px) {
        width: 540px;
    }
    @media (max-width: 575px) {
        margin: 0px 20px;
        width: 90%;
    }
`
const ImageContainer = styled.div`
    display: flex;
    width: 50%;

    @media (max-width: 990px){
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 720px;
    }
    @media (max-width: 770px) {
        width: 540px;
    }
    @media (max-width: 575px) {
        
        margin: 0px 20px;
        width: 100%;
    }
`
const Image1 = styled.img`
    width: 310px;
    margin: 0px 12px;

    @media (max-width: 1200px){
        width: 256px;
    }
    @media (max-width: 990px){
        width: 696px;
    }
    @media (max-width: 770px) {
        width: 540px;
    }
    @media (max-width: 575px) {
        margin: 0px 20px;
        width: 100%;
    }
`
const Image2 = styled.img`
    width: 210px;
    margin: 0px 12px;
    @media (max-width: 1200px){
        width: 176px;
    }
    @media (max-width: 990px){
        width: 696px;
    }
    @media (max-width: 770px) {
        width: 540px;
    }
    @media (max-width: 575px) {
    margin: 0px 20px;
        width: 100%;
    }
`

const PortalContainer = styled.div`
    width: 50%;
    padding: 0px 60px;

    @media (max-width: 1200px){
    }
    @media (max-width: 990px){
        width: 720px;
    }
    @media (max-width: 770px) {
        width: 540px;
        padding: 0px;
    }
    @media (max-width: 575px) {
        margin: 0px 20px;
        width: 100%;
    }
`
const TextArea = styled.div`
    text-align: left;
    @media (max-width: 1200px){
    }
    @media (max-width: 990px){
    }
    @media (max-width: 770px) {
    }
    @media (max-width: 575px) {
        margin: 0px 20px;
        width: 90%;
    }
`
const TitleText = styled.h2`
    font-size: 38px;
    
    @media (max-width: 1200px){
        font-size: 30px;
        
    }
    @media (max-width: 990px){
        font-size: 20px;        
    }
    @media (max-width: 770px) {
        
    }
    @media (max-width: 575px) {
        
    }
`
const TitlePara = styled.p`
    font-size: 16px;
    margin: 30px 0px;
    width: 100%;
    text-align: left;
    
    @media (max-width: 1200px){
        
    }
    @media (max-width: 990px){
        font-size: 14px;        
    }
    @media (max-width: 770px) {
        
    }
    @media (max-width: 575px) {
        
    }
`

const CountsArea = styled.div`

    display: grid;
    grid-template-columns: auto auto auto auto auto auto;
`
const Counts = styled.div`
    margin: 30px 0px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const Center = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 0px;
    top: 325px;

    @media (max-width: 990px){
        position: relative;
        top: 0px;
        width: 720px;
    }
    @media (max-width: 770px) {
        width: 540px;
    }
    @media (max-width: 575px) {
    margin: 0px 20px;
        width: 100%;
    }
`
const Border = styled.div`
    padding: 10px;
    background-color: #bcccaa;
    display: flex;
    align-items: center;
    justify-content: center;
    
    @media (max-width: 770px) {
        width: 520px;
    }
    @media (max-width: 575px) {
        /* position: relative; */
        width: 100%;
    }

`
const ImageDiv = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
`
const Box = styled.span`
    font-weight: bold;
    height: 30px;
    font-size: 28px;
    padding: 20px 70px;
    width: max-content;
    background-color: #3bbe4b;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 990px){
        width: 536px;
    }
    @media (max-width: 575px) {
    padding: 20px auto;
        width: 100%;
    }
`
const Count = styled.div`
    color: #38a745;
    font-size: 28px;
    font-weight: bold;
`
const Label = styled.div``

const PortalArea = () => {
    return (
        <PortalAreaAllignment>
            <PortalAreaContainer>
                <ImageContainer>
                    <Image1 src={IMAGES.one}></Image1>
                    <ImageDiv>
                        <Image2 src={IMAGES.two}></Image2>
                        <Center>
                            <Border>
                                <Box>100% Trusted</Box>
                            </Border>
                        </Center>
                    </ImageDiv>
                </ImageContainer>
                <PortalContainer>
                    <TextArea>
                        <TitleText>Trusted & Popular Job Portal</TitleText>
                        <TitlePara>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur.</TitlePara>
                        </TextArea>
                    <CountsArea>
                        <Counts style={{ gridColumn: "1/3" }}>
                            <Count>14 k+</Count>
                            <Label>Job Available</Label>
                        </Counts>
                        <Counts style={{ gridColumn: "3/5" }}>
                            <Count>18 k+</Count>
                            <Label>Suubmitted CV</Label>
                        </Counts>
                        <Counts style={{ gridColumn: "5/7" }}>
                            <Count>9 k+</Count>
                            <Label>Company</Label>
                        </Counts>
                        <Counts style={{ gridColumn: "2/4" }}>
                            <Count>22 K+</Count>
                            <Label>Registered Member</Label>
                        </Counts>
                        <Counts style={{ gridColumn: "4/6" }}>
                            <Count>55 K+</Count>
                            <Label>Appointed to Job</Label>
                        </Counts>
                    </CountsArea>

                </PortalContainer>
            </PortalAreaContainer>
        </PortalAreaAllignment>
    )
}

export default PortalArea