import React from 'react'
import styled from 'styled-components/macro'
import IMAGES from '../IMAGES/Image/AccountArea'
import cv from '../IMAGES/Image/AccountArea/cv.svg'
import customerService from '../IMAGES/Image/AccountArea/customer-service.svg'
import approved from '../IMAGES/Image/AccountArea/approved.svg'

const AccountArea = styled.div`
    background-color: #4cce5b;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 100px;
    width: 1140px;
    @media (max-width: 1200px){
        width: 920px;
    }
    @media (max-width: 990px){
        width: 720px;
    }
    @media (max-width: 770px) {
        padding: 100px 0px;
        width: 400px;
    }
    @media (max-width: 575px) {
        width: 100%;
        padding: 20px;
    }

`
const Wrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    @media (max-width: 770px) {
        width: 400px;
    }
    @media (max-width: 575px) {
        flex-direction: row;
        width: 100px;
        width: 100%;
    }
`
const Center = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 770px) {
        width: 220px;
    }

`
const Border = styled.div`
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin: 8px 75px 25px;
    background-color: #e7e7e77a;
    transition: background-color .5s;


    &:hover{
        background-color: #e7e7e730;
    }

`
const ItemDiv = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media (max-width: 990px){
        width: 280px;
        margin-bottom: 30px;
    }
    @media (max-width: 770px) {
        width: 200px;
    }
    @media (max-width: 575px) {
        width: 230px;
    }
`
const Hr = styled.hr`
    width: 150px;
    height: 10px;
    border: 0px;
    background-color: #e7e7e77a;
    margin: 0px;
    padding: 0px;
    position: absolute;
    right: -150px;

    @media (max-width: 990px){
        display: none;
    }
`
const Item = styled.div`
    padding: 20px;
    background-color: white;
    color: #3bbe4b;
    box-sizing: initial;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color ease-in-out 0.5s, color ease-in-out 0.5s;

    @media (max-width: 990px){
        font-size: 14px;
        padding: 15px 20px;
    }
    @media (max-width: 770px){
        width: 90%;
    }
    &:hover{
        background-color: #000000;
        color: white;
    }
`
const Img = styled.img`
    height: 30px;
    width: 30px;
    padding: 20px;
    color: white;
    background-color: white;
    box-sizing: initial;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Span = styled.span`
    color: white;
`

const CV = () => {
    return (
        <AccountArea >
            <Container>
                <Wrap>
                    <ItemDiv>
                        <Center>
                            <Border>
                                <Img src={approved} />
                                <Hr />
                            </Border>
                        </Center>
                        <Span>Register Your Account</Span>
                    </ItemDiv>
                    <ItemDiv>
                        <Center>
                            <Border>
                                <Img src={cv} />
                                <Hr />
                            </Border>
                        </Center>
                        <Span>Register Your Account</Span>
                    </ItemDiv>
                    <ItemDiv>
                        <Center>
                            <Border>
                                <Img src={customerService} />
                            </Border>
                        </Center>
                        <Span>Register Your Account</Span>
                    </ItemDiv>
                </Wrap>
                <Wrap style={{ gap: "20px", marginTop: "75px" }}>
                    <Item>Create Your Profile</Item>
                    <Item>Upload Your CV</Item>
                </Wrap>
            </Container>
        </AccountArea>

    )
}

export default CV