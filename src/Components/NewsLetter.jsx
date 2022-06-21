import React from 'react'
import styled from 'styled-components/macro'

const NewsLetterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 0;
    right: 0;
    top: -100px;
`
const NewsLetterContains = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: white;
    padding: 20px 0px;
    width: 1140px;
    margin: 12px;
    box-shadow: 0px 0px 20px 5px #bdbdbd90;
    @media (max-width: 1200px) {
        width: 960px;
    }   
    @media (max-width: 990px) {
        width: 696px;
    } 
    @media (max-width: 770px) {
        width: 516px;
    }
    @media (max-width: 575px) {
        width: 100%;
    }
`
const Title = styled.h2`
    font-size: 38px;
    padding: 0px;
    margin: 0px;
    @media (max-width: 1200px) {
        font-size: 30px;
    }   
    @media (max-width: 990px) {
        font-size: 28px;
    } 
    @media (max-width: 770px) {
        font-size: 20px
    }
`
const InputDiv = styled.div`
    padding: 0px;
    margin-top: 50px;
    display: flex;

`
const InputBox = styled.div`
    padding: 15px 30px;
    padding-right: 0px;
    height: 20px;
    border: 0.5px solid #3bbe4b;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Input = styled.input`
    width: 480px;
    height: 20px;
    border: 0px;
    
    @media (max-width: 1200px) {
        width: 450px;
    }   
    @media (max-width: 990px) {
        width: 450px;
    } 
    @media (max-width: 770px) {
        width: 300px;
    }
    @media (max-width: 575px) {
        width: 100%;

    }
`
const Submit = styled.div` 
    padding: 15px 30px;
    height: 20px;
    width: 80px;
    border: 0.5px solid #51e663;
    background-color: #51e663;
    color: #ffffff;
`

const NewsLetter = () => {
    return (
        <NewsLetterContainer>
            <NewsLetterContains>
                <Title>Subscribe Newsletter</Title>
                <InputDiv>
                    <InputBox>
                        <Input placeholder="Enter your Email" />
                    </InputBox>
                    <Submit>Subscribe</Submit>
                </InputDiv>
            </NewsLetterContains>
        </NewsLetterContainer>
    )
}

export default NewsLetter