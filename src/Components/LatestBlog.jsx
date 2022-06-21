import React, {useState} from 'react'
import styled from 'styled-components/macro'
import IMAGES from '../IMAGES/Image/LatestBlog';

const blogs = {
  one: {
    heading: 'The next genaration IT will change the world',
    image: IMAGES.one,
    date: '21 May, 2020'
  },
  two: {
    heading: 'It is the most important sector in the world',
    image: IMAGES.two,
    date: '22 May, 2020'
  },
  three: {
    heading: 'Nowadays IT is being most popular',
    image: IMAGES.three,
    date: '23 May, 2020'
  },

}

const LatestBlogContainer = styled.div`
  padding: 100px 0px;
  padding-bottom: 150px;
  position: relative;
  background-color: white;
`
const Title = styled.h2`
  font-size: 38px;
`
const SliderContainer = styled.div``
const Slider = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  column-gap: 20px;
  margin: 50px;
`
const Date = styled.div`
  position: absolute;
  bottom: -8px;
  padding: 10px 20px;
  background-color: white;
  opacity: 0;
  color: #3bbe4b;
  transition: bottom ease-out 1s, opacity ease-out .6s;
`
const SliderItem = styled.div`
  background-color: white;
  box-shadow: 0px 0px 10px 0px #96969630;
  position: relative;
  top: 0px;
  width: 350px;
  transition: top ease .5s;
  
  &:hover{
    top: -10px;
    cursor: pointer;
  }

  &:hover ${Date}{
    bottom: 0px;
    opacity: 1;
  }
`
const ImageDiv = styled.div`
  position: relative;

  `
const Image = styled.img`
  margin: 0px;
  position: relative;
  width: 350px;
`
const Heading = styled.a`
  font-size: 20px;
  font-weight: bold;
  text-align: left;
  padding: 10px;
  padding-bottom: 0px;
`
const CardDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 20px;
  height: 110px;
  width: 330px;
  background-color: #ffffff;
`
const InfoDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`
const UserInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px;
  margin: 0px;
`
const UserImage = styled.img`
  margin: 15px;
  margin-left: 10px;
  align-items: flex-start;
`
const Username = styled.div`
`
const ReadMore = styled.div`
`

const LatestBlog = () => {
  return (
    <LatestBlogContainer>
      <Title>Our Latest Blog</Title>
      <SliderContainer>
        <Slider>
          {
            Object.values(blogs).map((blog) => (
              <SliderItem>
                <ImageDiv>
                  <Image src={blog.image} />
                  <Date>{blog.date}</Date>
                </ImageDiv>
                <CardDiv>
                  <Heading>{blog.heading}</Heading>
                  <InfoDiv>
                    <UserInfoContainer>
                      <UserImage src={IMAGES.pp} />
                      <Username>Akkin World</Username>
                    </UserInfoContainer>
                    <ReadMore style={{color:"#3bbe4b"}}>Read More ></ReadMore>
                  </InfoDiv>
                </CardDiv>
              </SliderItem>
            ))
          }
        </Slider>
      </SliderContainer>
    </LatestBlogContainer>
  )
}

export default LatestBlog