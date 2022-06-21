import React from 'react'
import styled from 'styled-components/macro'
import IMAGES from '../IMAGES/Image/PopularArea'

const PopularAreaAllignment = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    padding: 100px 0px;
    position: relative;
`
const PopularAreaContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1140px;
    height: 480px;

    position: relative;
    @media (max-width: 1200px){
        width: 960px;
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
        width: 100%;
    }
`
const ImageContainer = styled.div`
    display: flex;
    width: 50%;
    
    @media (max-width: 990px){
      flex-direction: column;
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
        width: 516px;
    }
    @media (max-width: 575px) {
        width: 100%;
    }
    
`
const ImageDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const Image2 = styled.img`
    width: 210px;
    height: 100%;
    margin: 0px 12px;  
    object-fit: cover;  

    
    @media (max-width: 1200px){
        width: 176px;
    }
    @media (max-width: 990px){
        width: 696px;
    }
    @media (max-width: 770px) {
        width: 516px;
    }
    @media (max-width: 575px) {
        width: 100%;
    }
`

const PortalContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 50px 12px;

  @media (max-width: 990px){
    width: 696px;
  }
  @media (max-width: 770px){
    width: 516px;
  }
    @media (max-width: 575px) {
      width: 551px;
    }
`
const TextArea = styled.div``
const CountsArea = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    position: relative;

`
const Counts = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  /* margin: 10px; */
  padding: 0px 0px;
  margin-left: 0px;
  width: 274px;
  font-size: 15px;
  font-weight: 600;

  @media (max-width: 1200px){
    font-size: 13px;
  width: 228px;
    }
    @media (max-width: 990px){
      width: 348px;
    }
    @media (max-width: 770px) {
      width: 258px;
    }
    @media (max-width: 575px) {

    }
`
const Hr = styled.hr`
  position: absolute;
  background-color: #dadada8a;
  border: 0px;
  width: 105%;
  height: 1px;
  margin: auto;
  left: -2.5%;
  top: 0;
  bottom: 0;

  @media (max-width: 575px) {
    display: none;
    }
`
const Vr = styled.hr`
  position: absolute;
  background-color: #dadada8a;
  border: 0px;
  height: 100%;
  width: 1px;
  margin: auto;
  left: 0px;
  right: 0;

  @media (max-width: 575px) {
    display: none;
  }
`
const Fig = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  background-color: #c0f3c6;
  margin: 10px;
  padding: 10px;
  font-size: 20px;
  width: 30px;
  height: 30px;
  border-radius: 10px;
`

const PopularArea = () => {
  return (
    <PopularAreaAllignment>
      <PopularAreaContainer>
        <ImageContainer>
          <Image1 src={IMAGES.one}></Image1>
          <ImageDiv>
            <Image2 src={IMAGES.two}></Image2>
            <Image2 src={IMAGES.three}></Image2>
          </ImageDiv>
        </ImageContainer>
        <PortalContainer>
          <TextArea>
            <h1 style={{ margin: "25px 0px", fontSize: "2.2em" }}>Why We are Most Popular</h1>
            <p style={{ textAlign: "left", margin: "25px 0px", marginTop: "50px" }}>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Quis ipsum suspendisse ultrices gravida</p>
          </TextArea>
          <CountsArea>
            <Counts><Fig><i class="fa-solid fa-file-image"></i></Fig>Trusted & Quality Job</Counts>
            <Hr />
            <Vr />
            <Counts><Fig><i class="fa-solid fa-hospital"></i></Fig>Top Companies</Counts>
            <Counts><Fig><i class="fa-solid fa-money-bills"></i></Fig>No Extra Charge</Counts>
            <Counts><Fig><i class="fa-solid fa-people-line"></i></Fig>International Job</Counts>
          </CountsArea>

        </PortalContainer>
      </PopularAreaContainer>
    </PopularAreaAllignment>
  )
}

export default PopularArea