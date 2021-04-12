import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SideBtnWrap, SidebarLink, SidebarRoute,SidebarWrapper, SidebarMenu } from './Sidebar.styles.jsx';

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="home" onClick={toggle}>
                        Home
                    </SidebarLink>
                    <SidebarLink to="aboutus" onClick={toggle}>
                        About Us
                    </SidebarLink>
                    <SidebarLink to="team" onClick={toggle}>
                        Team
                    </SidebarLink>
                    <SidebarLink to="events" onClick={toggle}>
                        Events
                    </SidebarLink>
                    <SidebarLink to="more" onClick={toggle}>
                        More
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/contactus">Contact Us</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;