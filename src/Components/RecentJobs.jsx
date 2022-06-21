import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import IMAGES from '../IMAGES/Image/JobImages'
import { AnimatePresence, motion } from "framer-motion"

const jobs = {
    one: {
        name: 'UI/UX Designer',
        site: 'Winbrans.com',
        image: IMAGES.one,
        categories: ['all', 'new', 'featured']
    },
    two: {
        name: 'Android Developer',
        site: 'Infiniza.com',
        image: IMAGES.two,
        categories: ['all', 'new', 'featured']
    },
    three: {
        name: 'Senior Manager',
        site: 'Glovibo.com',
        image: IMAGES.three,
        categories: ['all', 'recent', 'partTime']
    },
    four: {
        name: 'Product Designer',
        site: 'Bizotic.com',
        image: IMAGES.four,
        categories: ['all', 'recent', 'fullTime']
    },
    five: {
        name: 'Digital Marketer',
    site: 'Hotelzo.com',
        image: IMAGES.five,
        categories: ['all', 'new', 'partTime']
    },
    six: {
        name: 'Sales Manager',
        site: 'Gozuto.com',
        image: IMAGES.six,
        categories: ['all', 'new', 'featured']
    },
    seven: {
        name: 'Web Developer',
        site: 'Udiza.com',
        image: IMAGES.seven,
        categories: ['all', 'featured', 'fullTime']
    },
    eight: {
        name: 'SEO',
        site: 'Oqota.com',
        image: IMAGES.eight,
        categories: ['all', 'new', 'recent']
    },
}

const Container = styled.div`
    background-color: white;
    padding: 100px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
`

const Title = styled.h2`
    font-size: 38px;
    font-weight: bolder;
`

// Filter Box CSS
const FilterContains = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
    width: 770px;

    @media (max-width: 990px){
        width: 720px;
    }
    @media (max-width: 770px){
        /* align-items: none; */
        width: 516px;
    }
    @media (max-width: 575px) {
        width: 90%;
    }
`

const Filters = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 25px;
    background-color: white;
    gap: 10px;
    font-size: 16px;
    flex-wrap: wrap;
    box-shadow: 0px 0px 20px 1px #dadada;
    @media (max-width: 770px){
        /* align-items: none; */
        width: 516px;
    }
    @media (max-width: 770px){
        /* align-items: none; */
        width: 516px;
    }
`


const Filter = styled.button`
    padding: 10px 25px;
    border: 0.5px solid #3bbe4b;
    background-color: white;
`
const JobsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;  
    @media (max-width:1200px) {
        width: 960px;        
    }
    @media (max-width:990px) {
        width: 720px;
    }  
    @media (max-width:770px) {
        width: 516px;
    }
    @media (max-width:575px) {
        width: 100%;
    }
`
const Jobs = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 1140px;
    @media (max-width:1200px) {
        width: 960px;        
    }
    @media (max-width:990px) {
        width: 720px;
    }
    @media (max-width:770px) {
        width: 516px;
    }
    @media (max-width:575px) {
        width: 90%;
    }
`
const Job = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 0.5px solid #cacaca;
    background-color: #ffffff;
    display: flex;
    padding: 30px;
    margin: 10px;
    width: 488px;
    @media (max-width:1200px) {
        width: 395px;        
    }
    @media (max-width:990px) {
        width: 700px;
        padding: 11.5px;
    }
    @media (max-width:770px) {
        width: 495px;
    }
    @media (max-width:575px) {
        width: 100%;
        padding: 15px;
    }
`
const Logo = styled.img`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`

// Infos
const RightBox = styled.div`
    margin-left: 180px;
`
const Infos = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    padding-left: 35px;
    padding-right: 15px;
    text-align: left;
    flex-grow: 1;
    @media (max-width:990px) {
        padding-left: 15px;
    }
    @media (max-width:990px) {
        padding-left: 15px;
    }
`
const JobTitle = styled.div`
    font-size: 22px;
    font-weight: bolder;
    margin: 0px 0px 8px;
    flex-grow: 1;
    @media (max-width:990px) {
        font-size: 13px;
    }
`
const Site = styled.div`
    font-size: 16px;
    color: #4BCC5A;
    font-weight: bold;
`
const Info = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    text-align: left;
    margin: 10px 0px 0px;
    font-size: 14px;

    color: black;
    @media (max-width:990px) {
        font-size: 13px;
    }
    @media (max-width:575px) {
        width: 90%;
    }
`

const Text = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color:black;
    margin: 0px;
    padding: 0px;
    width: auto;
`

// Buttons
const Buttons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;

`
const Apply = styled.div`
    padding: 10px 0px;
    height: 20px;
    width: 80px;
    font-size: 14px;
    border: 0.5px solid #3bbe4b;
    @media (max-width:990px) {
        width: 150px;
    }
    @media (max-width:770px) {
        width: 93px;
    }
`
const FullTime = styled.div`
    border: 0.5px solid #51e663;
    background-color: #51e663;
    color: #ffffff;
    padding: 10px 0px;
    height: 20px;
    width: 80px;
    font-size: 14px;
    @media (max-width:990px) {
        width: 150px;
    }
    @media (max-width:770px) {
        width: 93px;
    }
`
const RecentJobs = () => {
    const [filter, setFilter] = useState();
    return (
        <Container>
            <Title>Recent Jobs</Title>
            <FilterContains>
                <Filters>
                    <button
                        className={
                            filter == null ?
                                'RecentJobsFilter active'
                                :
                                filter === 'all' ?
                                    'RecentJobsFilter active'
                                    :
                                    'RecentJobsFilter'
                        }
                        onClick={() => setFilter('all')}
                        value='all'
                    >
                        All
                    </button>
                    <button
                        className={filter === 'new' ? 'RecentJobsFilter active' : 'RecentJobsFilter'}
                        onClick={() => setFilter('new')}
                        value='new' >
                        New
                    </button>
                    <button
                        className={filter === 'featured' ? 'RecentJobsFilter active' : 'RecentJobsFilter'}
                        onClick={() => setFilter('featured')}
                        value='featured' >
                        Featured
                    </button>
                    <button
                        className={filter === 'recent' ? 'RecentJobsFilter active' : 'RecentJobsFilter'}
                        onClick={() => setFilter('recent')}
                        value='recent' >
                        Recent
                    </button>
                    <button
                        className={filter === 'fullTime' ? 'RecentJobsFilter active' : 'RecentJobsFilter'}
                        onClick={() => setFilter('fullTime')}
                        value='fullTime' >
                        Full Time
                    </button>
                    <button
                        className={filter === 'partTime' ? 'RecentJobsFilter active' : 'RecentJobsFilter'}
                        onClick={() => setFilter('partTime')}
                        value='partTime' >
                        Part Time
                    </button>
                </Filters>
            </FilterContains>
            <JobsContainer>
                <motion.div
                    layout
                >
                    <AnimatePresence>
                        <Jobs>
                            {
                                Object.values(jobs).map(obj => (
                                    (filter) ?
                                        obj.categories.map((category) => (
                                            <motion.div layout animate={{ opacity: 1 }} >
                                                <AnimatePresence>
                                                    {
                                                        (filter === category) ?
                                                            <Job>
                                                                <Logo src={obj.image} />
                                                                <Infos>
                                                                    <JobTitle>{obj.name}</JobTitle>
                                                                    <Site>{obj.site}</Site>
                                                                    <Info><i class="fa-solid fa-sack-dollar" style={{ color: " #3bbe4b", width: "20px", marginTop: "2px" }} />$20k - $25k</Info>
                                                                    <Info><i class="fa-solid fa-location-dot" style={{ color: " #3bbe4b", width: "20px", marginTop: "2px", marginLeft: "2px" }}></i>Location 210-27 Quadra, Market Street, Victoria Canada</Info>
                                                                </Infos>
                                                                <Buttons>
                                                                    <Apply>Apply</Apply>
                                                                    <FullTime>Full Time</FullTime>
                                                                </Buttons>
                                                            </Job>
                                                            :
                                                            <></>
                                                    }
                                                </AnimatePresence>
                                            </motion.div>
                                        ))
                                        :
                                        <motion.div
                                            layout
                                        >
                                            <Job>
                                                <Logo src={obj.image} />
                                                <Infos>
                                                    <JobTitle>{obj.name}</JobTitle>
                                                    <Site>{obj.site}</Site>
                                                    <Info><i class="fa-solid fa-sack-dollar" style={{ color: " #3bbe4b", width: "20px", marginTop: "2px" }} ></i> $20k - $25k</Info>
                                                    <Info><i class="fa-solid fa-location-dot" style={{ color: " #3bbe4b", width: "20px", marginTop: "2px", marginLeft: "2px" }}></i>Location 210-27 Quadra, Market Street, Victoria Canada</Info>
                                                </Infos>
                                                <Buttons>
                                                    <Apply>Apply</Apply>
                                                    <FullTime>Full Time</FullTime>
                                                </Buttons>
                                            </Job>
                                        </motion.div>
                                ))
                            }
                        </Jobs>
                    </AnimatePresence>
                </motion.div>
            </JobsContainer>
        </Container >
    )
}

export default RecentJobs