import styled from "styled-components";
import {Link as LinkR} from "react-router-dom";
import {Link as LinkS} from "react-scroll";

export const Nav = styled.nav`
    background: ${({scrollNav}) => (scrollNav ? '#010606' : 'transparent')};
    margin-top: -80px;
    height: 80px;
    width:100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    top: 0;
    font-size: 1rem;
    color: #fff;
    z-index: 10;
    transition: all 0.3s ease-in-out;

    @media screen and (max-width: 960px){
        transition: all 0.3s ease-in-out;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    width: 100%;
    padding: 0 24px;
    z-index: 1;
    max-width: 1100px;
`

export const NavLogo = styled(LinkR)`
    color: #fff;
    display: flex;
    justify-self: flex-start;
    align-items: center;
    font-weight: bold;
    font-size: 2rem;
    margin-left: 24px;
    text-decoration: none;
`

export const NavMobileIcon = styled.div`
    display: none;

    @media screen and  (max-width: 768px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`

export const NavMenu = styled.div`
    display: flex; 
    align-items: center;
    list-style: none;
    text-align: center;
    margin-left: -22px;

    @media screen and (max-width: 768px){
        display: none;
    }
`

export const NavItem = styled.li`
    height: 80px;
`

export const NavLinks = styled(LinkS)`
    display: flex;
    align-items: center;
    color: #fff;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.3s ease-in-out;
    
    &:hover{
        color: salmon;
    }

    &:active{
        border-bottom: 2px solid salmon;
    }
`

export const NavButton = styled.div`
    display: flex;
    align-items:center;

    @media screen and (max-width: 768px){
        display: none;
    }
`

export const BtnLinks = styled(LinkR)`
    border-radius: 50px;
    white-space: nowrap;
    background: #8FC1D4;
    color: #fff;
    padding: 14px 28px;
    font-size: 18px;
    outline: none;
    border: none;
    text-decoration: none;
    cursor: pointer;
    transition: 0.3s ease-in-out;

    &:hover{
        background: #FCDEC0;
        color: #010606;
    }

    @media screen and (max-width: 768px){
        display: none;
    }
`