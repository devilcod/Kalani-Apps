import React from 'react'
import { MenuContainer, MenuH1, MenuWrapper, MenuCard , MenuIcon, MenuH2, MenuP} from './MenuElements'
import Icon1 from '../../Images/menu-1.jpg'
import Icon2 from '../../Images/menu-2.jpg'
import Icon3 from '../../Images/menu-3.jpg'

const Menu = () => {
    return (
        <MenuContainer id="Menu">
            <MenuH1>Our Menu's</MenuH1>
            <MenuWrapper>
                <MenuCard>
                    <MenuIcon src={Icon3}/>
                    <MenuH2>Our Foods Menu</MenuH2>
                    <MenuP>Description Menu One</MenuP>
                </MenuCard>
                <MenuCard>
                    <MenuIcon src={Icon2}/>
                    <MenuH2>Our Beverages Menu</MenuH2>
                    <MenuP>Description Menu Two</MenuP>
                </MenuCard>
                <MenuCard>
                    <MenuIcon src={Icon1}/>
                    <MenuH2>Our Snacks Menu</MenuH2>
                    <MenuP>Description Menu Three</MenuP>
                </MenuCard>
            </MenuWrapper>
        </MenuContainer>
    )
}

export default Menu
