import { FiArrowDown } from "react-icons/fi"
import styled from "styled-components"

export const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 800px;
    z-index: 1;
    padding: 0 30px;
    position: relative;

    :before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linier-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%),
        linier-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
        z-index: 2;
    }
`

export const HeroBg = styled.div`
    height: 100%;
    width:100%;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
    z-index: 1;
`

export const Overlay = styled.div`
    height: 100%;
    width:100%;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0,0,0,0.7);
    z-index: 2;
`

export const BgImg = styled.img`
    height: 100%;
    width: 100%;
    -o-object-fit: cover;
    object-fit:cover;
    /* filter: grayscale(100%); */
`

export const HeroContend = styled.div`
    position: absolute;
    z-index: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1200px;
    padding: 8px 24px;
`

export const HeroH1 = styled.h1`
    font-size: 128px;
    font-weight: 900;
    text-align: center;
    color: #F1ECC3;

    @media screen and (max-width: 768px){
        font-size: 96px;
    }

    @media screen and (max-width: 480px){
        font-size: 72px;
    }
`

export const HeroP = styled.p`
    font-size: 34px;
    color: #F1ECC3;
    margin-top: 32px;
    text-align: center;
    font-weight: 300;
    max-width: 800px;

    @media screen and (max-width: 768px){
        font-size: 28px;
    }

    @media screen and (max-width: 480px){
        font-size: 24px;
    }
`

export const IconWrap = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Icon = styled(FiArrowDown)`
    font-size: 4rem;
    color: white;
    cursor: pointer;
    animation: Bounce 0.8s infinite;
    
    @keyframes Bounce{
        from {transform: translateY(0);}
        50%{transform: translateY(10px);}
        to {transform: translateY(0);}
    }
`


