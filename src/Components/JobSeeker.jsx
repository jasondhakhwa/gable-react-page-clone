import React from 'react'
import styled from 'styled-components/macro'

//Job Seeker Area CSS
const JobSeekerArea = styled.div`
    z-index: 10;
    
    bottom: -120px;
    left:0;
    right:0;
    margin-left:auto;
    margin-right:auto;
    position: absolute;
    color: white;
    font-weight: bold;
    display: flex;
    justify-content: center;

    @media (max-width: 990px){
        bottom: -222px;
    }
    @media (max-width: 575px) {
        bottom: -400px;
    }
`
const Border = styled.div`
    background-color: #c4c4c4b7;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1140px;
    transition: width .5s;
    
    @media (max-width:1200px) {
        width: 960px;
    }
    @media (max-width: 990px) {
        width: 720px;
    }
    @media (max-width: 770px) {
        width: 540px;
    }
    @media (max-width: 575px) {
        width: 100%;
    }
`
const Seeks = styled.div`
    background-color: #b8b8b839;
    display: flex;
    gap: 25px;
    justify-content: space-between;
    padding: 35px;
    width: 100%;
    @media (max-width: 575px) {
        flex-direction: column;
    }
`
const JobContainer = styled.div`
    background-color: #51e663;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 2rem;
    height: 152px;
    flex-grow: 1; 
`
const Icon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;
    padding-right: 20px;
`
const RightArrow = styled.div`
    margin: 0px;
    padding: 0px;
    padding-left: 5px;
    `

const Right = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;

    @media (max-width:990px){
        display: table;
        text-align: left;
    }
`
const JobQ = styled.span`
    margin: 0px;
    padding: 0px;
    text-align: left;
    font-size: 16px;
    font-weight: 500;
    @media (max-width: 990px) {
        font-size: 13px;
        display: table-header-group;
    }  
`
const JobQH = styled.h3`
    margin: 0px;
    text-align: left;
    font-size: 20px;
    
    @media (max-width: 1200px) {
        font-size: 19px;
    }
    @media (max-width: 990px) {
        font-size: 14px;
        margin: 15px 0px;
    }
    @media (max-width:575px){
        font-size: 16px;
    }
`
const JobQBtnRight = styled.div`
    margin: 0px;
    padding: 0px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    text-align: right;    
    width: 100%;

    @media (max-width:990px){
        display: table-footer-group;
    }
`
const JobQBtn = styled.div`
    margin: 0px;
    padding: 0px;
    display: flex;
    align-items: center;
    transition: color 0.5s;

    @media (max-width: 990px) {
        font-size: 13px;
    }
    @media (max-width:770px){
        font-size: 11px;
    }  
    
    &:hover{
        color: black;
        cursor: pointer;
    }
`

const JobSeeker = () => {
    return (
        <JobSeekerArea>
            <Border>
                <Seeks>
                    <JobContainer>
                        <Icon>
                            <i class="fa-solid fa-people-line"></i>
                        </Icon>
                        <Right>
                            <JobQ>Jobseeker</JobQ>
                            <JobQBtnRight>
                                <JobQBtn>Apply now <RightArrow><i class="fa-solid fa-arrow-right"></i></RightArrow></JobQBtn>
                            </JobQBtnRight>
                            <JobQH>Looking for a job?</JobQH>
                        </Right>
                    </JobContainer>
                    <JobContainer>
                        <Icon>
                            <i class="fa-solid fa-people-line"></i>
                        </Icon>
                        <Right>
                            <JobQ>Recruiter</JobQ>
                            <JobQBtnRight>
                                <JobQBtn>Post a job <RightArrow><i class="fa-solid fa-arrow-right"></i></RightArrow></JobQBtn>
                            </JobQBtnRight>
                            <JobQH>Are you recruiting?</JobQH>
                        </Right>
                    </JobContainer>
                </Seeks>
            </Border>
        </JobSeekerArea>
    )
}

export default JobSeeker