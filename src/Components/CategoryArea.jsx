import React, { useState } from 'react'
import styled from 'styled-components/macro'
import JobSeeker from './JobSeeker'
import Radium, { Style } from 'radium';

const colors = {
    one: {
        key: 1,        
        colorname: "orange",
        name: 'Technical Support',
        color: '#c63',
        bgcolor: '#f5e0d6',
        icon: <i class="fa-solid fa-gear"></i>
    },
    two: {
        key: 2,
        name: 'Business Development',
        colorname: "purple",
        color: '#7264e5',
        bgcolor: '#dad7f2',
        icon:<i class="fa-solid fa-layer-group"></i>
    },
    three: {
        key: 3,
        name: 'Real Estate Business',
        colorname: "green",
        color: '#50cc59',
        bgcolor: '#dbf5de',
        icon:<i class="fa-solid fa-house-chimney-window"></i>
    },
    four: {
        key: 4,
        name: 'Share Maeket Analysis',
        colorname: "yellow",
        color: '#daa91f',
        bgcolor: '#ece5d1',
        icon:<i class="fa-solid fa-magnifying-glass-chart"></i>
    },
    five: {
        key: 5,
        name: 'Weather & Environment',
        colorname: "blue",
        color: '#1e27f9',
        bgcolor: '#ccceff',
        icon: <i class="fa-regular fa-sun"></i>
    },
    six: {
        key: 6,
        name: 'Finance & Banking Service',
        colorname: "grey",
        color: '#726f6f',
        bgcolor: '#ccc',
        icon:<i class="fa-solid fa-hand-holding-dollar"></i>
    },
    seven: {
        key: 7,
        name: 'IT & Networing Sevices',
        colorname: "sky",
        color: '#1783b6',
        bgcolor: '#ccf1ff',
        icon:<i class="fa-solid fa-network-wired"></i>
    },
    eight: {
        key: 8,
        name: 'Restaurant Services',
        colorname: "pink",
        color: '#c455bf',
        bgcolor: '#fccffa',
        icon:<i class="fa-solid fa-bowl-food"></i>
    },
    nine: {
        key: 9,
        name: 'Defence & Fire Service',
        colorname: "darkorange",
        color: '#c66',
        bgcolor: '#f5cccc',
        icon:<i class="fa-solid fa-fire-flame-curved"></i>
    },
    ten: {
        key: 10,
        colorname: "darkgreen",
        name: 'Home Delivery Services',
        color: '#116e18',
        bgcolor: '#d0e6d2',
        icon: <i class="fa-solid fa-truck-moving"></i>
    },
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    margin: 100px 0px;
    position: relative;

    @media (max-width: 990px) {
        top: 50px
    }
    @media (max-width: 575px) {
        top: 250px
    }
`
const Contains = styled.div`
    width: 1140px;
    margin-top: 100px;

    @media (max-width:1200px) {
        width: 960px;
    }
`
const Title = styled.h2`
    font-size: 38px;

    @media (max-width: 1200px){
        font-size: 30px;
    }
    @media (max-width: 990px){
        font-size: 26px;
    }
    @media (max-width: 770px) {
        font-size: 20px;
    }
`
const Boxes = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
`
const Box = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    background-color: white;
    padding: 30px 0px;
    width: 204px;
    height: 128px;
    margin: 12px;
    font-weight: bold;
    @media (max-width:1200px) {
        width: 168px;
    }
    @media (max-width: 990px){
        padding: 25px 0px;
        width: 217px;
    }
    @media (max-width: 770px){
        width: 156px;
        align-items: center;
    }
    @media (max-width: 575px){
        width: 100%;
        align-items: center;
    }


    &:hover{
        cursor: pointer;
    }
`
const Icon = styled.div`
    height: 60px;
    width: 60px;
    margin: 0px 72px 20px;
    background-color: aliceblue;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    font-size: 30px;
    @media (max-width:1200px) {
        margin: 0px 54px 20px;
    }
    @media (max-width:990px) {
        margin: 0px 78px 20px;
    }
    @media (max-width:770px) {
        margin: 0px 48px 20px;
    }

`
const IconTitle = styled.a`
    margin: 0px 30px;
    font-size: 16px;
    font-weight: 600;
    color: #333333;

    @media (max-width:1200px) {
        margin: 0px 11.5px;
    }
    @media (max-width: 770px) {
        font-size: 14px;
        margin: 0px;
    }
`

const CategoryArea = () => {

    const [hoverId, setHoverId] = useState()
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = (id) => {
        setIsHovering(true);
        // setHoverId(id)
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };


    return (
        <Container>
            <Contains>
                <Title>Choose Your Desire Category</Title>
                <Boxes>
                    {
                        Object.values(colors).map(obj => (
                            <Box key={obj.key}>
                                <Icon style={{ backgroundColor: obj.bgcolor, color: obj.color }}>{obj.icon}</Icon>
                                <div className={"category-area-icon-title " + obj.colorname}>
                                    {obj.name}
                                </div>
                            </Box>
                        ))
                    }
                </Boxes>
            </Contains>
            {/* <JobSeeker /> */}
        </Container>
    )
}

export default CategoryArea