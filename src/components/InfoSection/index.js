import React from 'react'
import { InfoContainer, InfoWrapper, InfoRow, Column1, TextWrapper, TopLine, HeadLine, Description, BtnWrap, Column2,ImgWrap, Img  } from './InfoElements'
import { Button } from '../ButtonElements'

const Info = ({lightBg, id, imgStart, topLine, lightText, headLine, darkText, description, buttonLabel, img, alt, primary, dark , dark2, align, justify, btnto}) => {
    return (
        <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                        <TextWrapper>
                            <TopLine data-aos="fade-left" align={align}>{topLine} </TopLine>
                            <HeadLine data-aos="fade-right" align={align} lightText={lightText} >{headLine}</HeadLine>
                            <Description data-aos="fade-left" align={align} darkText={darkText} >{description}</Description>
                            <BtnWrap justify={justify}>
                                <Button to={btnto} data-aos="zoom-out" smooth={true} duration={500} spy={true} exact="true" offset={-80} primary={primary ? 1 : 0} dark={dark ? 1 : 0} dark2={dark2 ? 1 : 0}>{buttonLabel}</Button>
                            </BtnWrap>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap > 
                            <Img data-aos="fade-up" src={img} alt={ alt }></Img>
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
    )
}

export default Info
