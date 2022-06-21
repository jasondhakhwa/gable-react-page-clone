import React from 'react'
import styled from 'styled-components/macro'
import IMAGES from '../IMAGES/Image/FeaturedProfile'

import Carousel from 'react-elastic-carousel'

const companies = {
    one: {
        name: 'Jerry Hudson',
        position: 'Business Consultant',
        image: IMAGES.one
    },
    two: {
        name: 'Jac Jacson',
        position: 'Web Consultant',
        image: IMAGES.two
    },
    three: {
        name: 'Tom Potter',
        position: 'UI/UX Consultant',
        image: IMAGES.three
    },
    four: {
        name: 'Shane Marc',
        position: 'SEO Consultant',
        image: IMAGES.four
    },
    five: {
        name: 'Jerry Hudson',
        position: 'Business Consultant',
        image: IMAGES.five
    },
    six: {
        name: 'Jac Jacson',
        position: 'Web Consultant',
        image: IMAGES.six
    },
    seven: {
        name: 'Tom Potter',
        position: 'UI/UX Consultant',
        image: IMAGES.seven
    },
    eight: {
        name: 'Shane Marc',
        position: 'SEO Consultant',
        image: IMAGES.eight
    },
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
    background-color: white;
  `
const FeaturedProfileContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 100px 0px;
    @media (max-width: 1200px) {
        width: 960px;
    }
    @media (max-width: 990px) {   
    width: 696px;
    }  

    @media (max-width: 770px) {   
    width: 540px;
    } 
`
const Title = styled.h1``
const SliderContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 1140px;
    align-items: center;
    @media (max-width: 1200px) {
        width: 960px;
    }
    @media (max-width: 990px) {   
    width: 696px;
    }  

    @media (max-width: 770px) {   
    width: 540px;
    } 
`
const SliderFour = styled.div`
width: 1140px;
display: flex;
justify-content: center;
align-items: center;
    @media (max-width: 1200px) {
        /* width: 960px; */
    }
    @media (max-width: 990px) {   
    width: 696px;
    display : none;
    }  

    @media (max-width: 770px) {   
    width: 540px;
    display : none;
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
    display: none;
    display: none;
    @media (max-width: 990px) {  
        width: 696px;   
        display : block;
    }
    @media (max-width: 575px) {  
        display : none;
    } 
`
const Slider = styled.div`
display: none;
@media (max-width: 575px) {  
    display : block;
  } 
`
const InfoContainer = styled.div`
    background-color: #ffffff;
    position: absolute;
    z-index: 10;
    top: 260px;
    padding: 30px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    flex-wrap: wrap;
    row-gap: 18px;
    width: 170px;
    box-shadow: 0px 0px 20px 0px #c4c4c49d;
    transition: width ease-out 0.4s;

`
const SliderItem = styled.div`
    /* width: 230px; */
    margin: 50px;
    height: 400px;
    margin: 10px;
    
    &:hover ${InfoContainer}{
        width: 190px;
    }
`
const ImageDiv = styled.div``
const Image = styled.img`
    position: relative;
    width: 250px;
    position: relative;
    z-index: 1;
    user-drag: none; 
user-select: none;
-moz-user-select: none;
-webkit-user-drag: none;
-webkit-user-select: none;
-ms-user-select: none;
`
const InfoContains = styled.div`

`
const InfoName = styled.h4`
    padding: 0px;
    margin: 0px;
`
const InfoPosition = styled.p`
    padding: 0px;
    margin: 0px;
    font-weight: lighter;
`
const ViewProfileDiv = styled.p`
    padding: 0px;
    margin: 0px;
    width: 100%;
    color: #4BCC5A;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const ViewProfile = styled.div`
    letter-spacing: 0px; 
    transition: letter-spacing ease-out .4s;
    margin: 2px;
    &:hover{
        letter-spacing: 1px;
        cursor: pointer;
    }
`

const FeaturedProfile = () => {

    return (
        <Container>
            <FeaturedProfileContainer>
                <Title>Featured Profile</Title>
                <SliderContainer>
                    <SliderFour>
                        <Carousel itemsToShow={4} enableAutoPlay autoPlaySpeed={3000} >
                            {
                                Object.values(companies).map(company => (
                                    <SliderItem>
                                        <InfoContains>
                                            <InfoContainer>
                                                <InfoName>{company.name}</InfoName>
                                                <InfoPosition>{company.position}</InfoPosition>
                                                <ViewProfileDiv>
                                                    <ViewProfile>View Profile <i class="fa-solid fa-arrow-right"></i></ViewProfile>
                                                    <i class="fa-solid fa-heart"></i>
                                                </ViewProfileDiv>
                                            </InfoContainer>
                                        </InfoContains>
                                        <ImageDiv>
                                            <Image src={company.image} />
                                        </ImageDiv>
                                    </SliderItem>
                                ))
                            }
                        </Carousel>
                    </SliderFour>
                    <SliderTwo>
                        <Carousel itemsToShow={2} enableAutoPlay autoPlaySpeed={3000} >
                            {
                                Object.values(companies).map(company => (
                                    <SliderItem>
                                        <InfoContains>
                                            <InfoContainer>
                                                <InfoName>{company.name}</InfoName>
                                                <InfoPosition>{company.position}</InfoPosition>
                                                <ViewProfileDiv>
                                                    <ViewProfile>View Profile <i class="fa-solid fa-arrow-right"></i></ViewProfile>
                                                    <i class="fa-solid fa-heart"></i>
                                                </ViewProfileDiv>
                                            </InfoContainer>
                                        </InfoContains>
                                        <ImageDiv>
                                            <Image src={company.image} />
                                        </ImageDiv>
                                    </SliderItem>
                                ))
                            }
                        </Carousel>
                    </SliderTwo>
                    <Slider>
                        <Carousel itemsToShow={1} enableAutoPlay autoPlaySpeed={3000} >
                            {
                                Object.values(companies).map(company => (
                                    <SliderItem>
                                        <InfoContains>
                                            <InfoContainer>
                                                <InfoName>{company.name}</InfoName>
                                                <InfoPosition>{company.position}</InfoPosition>
                                                <ViewProfileDiv>
                                                    <ViewProfile>View Profile <i class="fa-solid fa-arrow-right"></i></ViewProfile>
                                                    <i class="fa-solid fa-heart"></i>
                                                </ViewProfileDiv>
                                            </InfoContainer>
                                        </InfoContains>
                                        <ImageDiv>
                                            <Image src={company.image} />
                                        </ImageDiv>
                                    </SliderItem>
                                ))
                            }
                        </Carousel>
                    </Slider>
                </SliderContainer>
            </FeaturedProfileContainer >
        </Container>
    )
}

export default FeaturedProfile