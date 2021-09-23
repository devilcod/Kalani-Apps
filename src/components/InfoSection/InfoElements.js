import styled from 'styled-components'

export const InfoContainer = styled.div`
    color: #fff;
    background: #E7E0C9;

    @media screen and (max-width: 768px){
        padding: 40px 0;
    }
`

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 700px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px){
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 0;
`

export const TopLine = styled.p`
    color: #01bf71;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
    text-align: ${({align}) => (align ? 'left' : 'right')};
`

export const HeadLine = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: #010606;
    text-align: ${({align}) => (align ? 'left' : 'right')};

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`

export const Description = styled.p`
    max-width: 500px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: #010606;
    text-align: center;
    text-align: ${({align}) => (align ? 'left' : 'right')};
`

export const BtnWrap = styled.div`
    display: flex;
    justify-content: ${({justify}) => (justify ? 'flex-start' : 'flex-end')};
    
`

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
    display: flex;
    justify-content: center;
`

export const Img = styled.img`
    border-radius: 10px;
    -o-object-fit: cover;
    object-fit: cover;
    max-height: 400px;
    width: 100%;
    margin: 0 0 0 0;
    padding-right: 0;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.8), 0 6px 20px 0 rgba(0, 0, 0, 0.9);    
    cursor: pointer;
    transition: all 0.2s;

    &:hover{
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.8), 0 20px 24px 12px rgba(0, 0, 0, 0.9);    
    }
`


