import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SideBarWrapper, SidebarMenu,
SidebarRoute,SidebarLink,SideBtnWrap } from './SidebarElements';

const Sidebar = () => {
  return (
    <SidebarContainer>
        <Icon>
             <CloseIcon />  
        </Icon>

        <SideBarWrapper>
                <SidebarMenu>
                    
                    <SidebarLink to="about">
                             About 
                    </SidebarLink>

                    <SidebarLink to="discover">
                             Discover 
                    </SidebarLink>

                    <SidebarLink to="services">
                             Services
                    </SidebarLink>

                    <SidebarLink to="sign-up">
                             Sign Up
                    </SidebarLink>

                </SidebarMenu>

                    <SideBtnWrap>
                        
                        <SidebarRoute to = "signin">
                            Sign In
                        </SidebarRoute>

                    </SideBtnWrap>

        </SideBarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar