import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap,
} from "./Sidebar.styles";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink
          to="home"
          spy={true}
          smooth={true}
          offset={0}
          duration={800}
          onClick={toggle}
        >
          Home
        </SidebarLink>
        <SidebarLink
          to="about"
          spy={true}
          smooth={true}
          offset={0}
          duration={800}
          onClick={toggle}
        >
          About
        </SidebarLink>
        <SidebarLink
          to="work"
          spy={true}
          smooth={true}
          offset={0}
          duration={800}
          onClick={toggle}
        >
          Works
        </SidebarLink>
      </SidebarMenu>
      <SideBtnWrap>
        <SidebarRoute
          to="contact"
          spy={true}
          smooth={true}
          offset={0}
          duration={800}
          onClick={toggle}
        >
          Contact Me
        </SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;
