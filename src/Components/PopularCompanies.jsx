import React, { useState } from 'react'
import styled from 'styled-components/macro'
import IMAGES from '../IMAGES/Image/PopularCompanies';
import Carousel from 'react-elastic-carousel'

import 'swiper/css';

const companies = {
  one: {
    name: 'Winbrains.com',
    location: 'Quadra, Victoria Canada',
    image: IMAGES.one
  },
  two: {
    name: 'Infinizia.com',
    location: 'North Strees, California',
    image: IMAGES.two
  },
  three: {
    name: 'Bizotic.com',
    location: 'Barming Road, UK',
    image: IMAGES.three
  },
  four: {
    name: 'Glovibo.com',
    location: 'Washington, New York',
    image: IMAGES.four
  },
  five: {
    name: 'Winbrains.com',
    location: 'Quadra, Victoria Canada',
    image: IMAGES.one

  },
  six: {
    name: 'Infinizia.com',
    location: 'North Strees, California',
    image: IMAGES.two
  },
  seven: {
    name: 'Bizotic.com',
    location: 'Barming Road, UK',
    image: IMAGES.three
  },
  eight: {
    name: 'Glovibo.com',
    location: 'Washington, New York',
    image: IMAGES.four
  },
  nine: {
    name: 'Winbrains.com',
    location: 'Quadra, Victoria Canada',
    image: IMAGES.one

  },
  ten: {
    name: 'Infinizia.com',
    location: 'North Strees, California',
    image: IMAGES.two
  },
  eleven: {
    name: 'Bizotic.com',
    location: 'Barming Road, UK',
    image: IMAGES.three
  },
  twelve: {
    name: 'Glovibo.com',
    location: 'Washington, New York',
    image: IMAGES.four
  },
}
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  `
const PopularCompaniesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  margin: 100px 0px;

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
        margin: 0px 20px;
        width: 90%;
    }
`
const Title = styled.h1`
  text-align: center;
`
const SliderContainer = styled.div`
  display: flex;
  width: 100%;

  /* @media (max-width: 1200px) {
    width: 960px;
  }
  @media (max-width: 990px) {
    width: 720px;
  }
  @media (max-width: 770px) {
    width: 540px;
  }
  @media (max-width: 575px) {
      margin: 0px 20px;
      width: 90%;
  } */
`
const SliderFour = styled.div`
  width: 1140px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 100px;

  @media (max-width: 1200px) {
      width: 960px;
  }
  @media (max-width: 990px) {   
    width: 696px;
    display : none;
  }  
`
const SliderTwo = styled.div`
  width: 1140px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 100px;
  display: none;

  @media (max-width: 990px) {  
    width: 720px;   
    display : block;
  }
  @media (max-width: 575px) {  
    display : none;
  }  
`
const SliderOne = styled.div`
  width: 1140px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 100px;
  display: none;

  @media (max-width: 575px) {  
    display : block;
  }   
`
const SliderItem = styled.div`
  background-color: #ffffff;
  padding: 30px 20px;
  margin: 15px;
  width: 210px;
  height: 220px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  transition: box-shadow ease 1s;

  &:hover{
    box-shadow: 0px 0px 15px 0px #adadadae;
  }
  /* @media (max-width: 1200px) {
  }
  @media (max-width: 990px) { 
    width: 250px;     
  }
  @media (max-width: 770px) {  
    width: 220px;
  } */
`
const Image = styled.img`
  width: 60px;
  height: 60px;
  align-items: flex-start;
`
const Link = styled.div`
  padding: 0px;
  font-weight: bolder;
  
  @media (max-width: 1200px) {
    font-size: 18px;
  }
  @media (max-width: 990px) {
      
  }
`
const Location = styled.div`
  font-size: 14px;
  
  @media (max-width: 1200px) {
    font-size: 14px;
    margin: 0px 14px;
  }
  @media (max-width: 990px) {
      
  }
`
const HiringButton = styled.div`
  padding: 12px;
  height: 20px;
  width: 80px;
  border: 0.5px solid #3bbe4b;
  box-shadow: inset 0 0 0 0 #3bbe4b;
  transition: box-shadow ease-out 0.4s, color ease 0.6s;

  &:hover{
      color: white;
      box-shadow: inset 120px 0 0 0 #3bbe4b;
      cursor: pointer;
  }
`

const PopularCompanies = () => {
  return (
    <Container>
      <PopularCompaniesContainer>

        <Title>Popular Companies</Title>


        <SliderContainer>
          <SliderFour>
            <Carousel itemsToShow={4} enableAutoPlay autoPlaySpeed={3000}>
              {
                Object.values(companies).map(company => (
                  <SliderItem>
                    <Image src={company.image} />
                    <Link>{company.name}</Link>
                    <Location><i class="fa-solid fa-location-dot"></i> {company.location}</Location>
                    <HiringButton>Hiring</HiringButton>
                  </SliderItem>
                ))
              }
            </Carousel>
          </SliderFour>
          <SliderTwo>
            <Carousel itemsToShow={2} enableAutoPlay autoPlaySpeed={3000}>
              {
                Object.values(companies).map(company => (
                  <SliderItem>
                    <Image src={company.image} />
                    <Link>{company.name}</Link>
                    <Location><i class="fa-solid fa-location-dot"></i> {company.location}</Location>
                    <HiringButton>Hiring</HiringButton>
                  </SliderItem>
                ))
              }
            </Carousel>
          </SliderTwo>
          <SliderOne>
            <Carousel itemsToShow={1} enableAutoPlay autoPlaySpeed={3000}>
              {
                Object.values(companies).map(company => (
                  <SliderItem>
                    <Image src={company.image} />
                    <Link>{company.name}</Link>
                    <Location><i class="fa-solid fa-location-dot"></i> {company.location}</Location>
                    <HiringButton>Hiring</HiringButton>
                  </SliderItem>
                ))
              }
            </Carousel>
          </SliderOne>
        </SliderContainer>

      </PopularCompaniesContainer>
    </Container>
  )
}

export default PopularCompanies