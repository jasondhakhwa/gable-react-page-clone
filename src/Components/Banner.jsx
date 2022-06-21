import React from 'react'
import styled from 'styled-components/macro'
import banner from '../IMAGES/Image/Banner/banner.jpg'
import JobSeeker from './JobSeeker'
// import recruit from '../IMAGES/Image/Banner/recruit.svg'
// import seek from '../IMAGES/Image/Banner/seek.svg'

const Container = styled.div`
    background-image: url(${banner});
    background-repeat: no-repeat;
    background-position: center;
    height: 790px;
    position: relative;
    width: 100%;
    display: flex;
    background-size: cover;
    justify-content: center;
    align-items: center;
`
// Banner CSS
const Overlay = styled.div`
    background: #00000083;
    width  : 100% ;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    position: relative;
`
const Contains = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 575px) {
        width: 100%;
    }
`
const BannerTittle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 1100px;
    color: white;
    transition: width .5s, font-size .5s;
    @media (max-width: 1200px){
        width: 920px;
    }
    @media (max-width: 990px){
        width: 720px;
    }
    @media (max-width: 770px) {
        width: 540px;
    }
    @media (max-width: 575px) {
        width: 100%;
    }
`
const Search = styled.div`
    background-color: #c4c4c4b7;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1140px;
    transition: width .5s;
    @media (max-width: 1200px){
        width: 920px;
    }
    @media (max-width: 990px){
        width: 720px;
    }
    @media (max-width: 770px) {
        width: 540px;
    }
    @media (max-width: 575px) {
        width: 100%;
    }
`
const SearchInputContainer = styled.div`
    margin: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;    
    flex-grow: 1;
    transition: width .5s;

    @media (max-width: 990px){
        flex-direction: column;
        padding: 5px 15px;
        margin: 5px;
    }
`
const SearchInputIcon = styled.div`
    font-size: 25px;
`
const SearchInputs = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    /* flex-grow: 1; */
    width: 100%;
`
const SearchInput = styled.input`
    padding: 6px 0px 6px 30px;
    height: 35px;
    border: solid white;
    flex-grow: 1;
    &:focus{
        outline: none;
    }
`
const SearchSelect = styled.select`
    padding: 6px 30px 6px 30px;
    height: 35px;
    border: solid white;
    flex-grow: 1;
    margin-right: 30px;
`
const Vr = styled.hr`
    height: 45px;
    margin-left: 20px;
    border: 0px;
    width: 1px;
    background-color: #ff7777;
    @media (max-width: 990px){
        display: none;
    }
`
const SearchButton = styled.div`
    padding: 21px 45px;
    /* height: 67px; */
    border: 0.5px solid #51e663;
    background-color: #51e663;
    color: #ffffff;
    font-size: 18px;
    @media (max-width: 990px){
        width: 100%;
        height: 100%;
        padding: 10px 0px 10px 0px;
        margin: 15px 30px 20px 30px;
    }
`

const Banner = () => {
    return (
        <div>
            <Container>
                <Overlay>
                    <Contains>
                        <BannerTittle>
                            <h1 className='banner-title-h2' >Get Your <span style={{ color: "#51e663" }}>Prefered</span> Job</h1>
                            <h4 className='banner-title-h4' >Jobs, Employement & future Career and Opportunities</h4>
                        </BannerTittle>
                        <Search>
                            <SearchInputContainer>
                                <SearchInputs >
                                    <SearchInput type="text" placeholder='Job Title' />
                                    <SearchInputIcon><i class="fa-solid fa-magnifying-glass" style={{ color: "#51e663" }}></i></SearchInputIcon>
                                </SearchInputs>
                                <Vr />
                                <SearchInputs >
                                    <SearchInput type="text" placeholder='City or State' />
                                    <SearchInputIcon><i class="fa-solid fa-location-dot" style={{ color: "#51e663" }}></i></SearchInputIcon>
                                </SearchInputs>
                                <Vr />
                                <SearchInputs >
                                    <SearchSelect type="text" placeholder='Job Category' >
                                        <option selected disabled >Job Category </option>
                                        <option >ICT</option>
                                        <option >Finance</option>
                                        <option >Production</option>
                                        <option >Bank</option>
                                        <option >Marketing</option>
                                    </SearchSelect>
                                </SearchInputs>
                                <SearchButton type='submit'>Search</SearchButton>
                            </SearchInputContainer>
                        </Search>
                    </Contains>
                    <JobSeeker />
                </Overlay>
            </Container>
        </div>
    )
}

export default Banner