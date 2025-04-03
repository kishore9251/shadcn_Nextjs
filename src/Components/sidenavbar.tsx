"use client"
import React, { useState, useEffect } from 'react'
import { Nav } from './ui/nav'
import {
  ChevronRight,
  ChevronLeft,
  LayoutDashboard,
  Settings,
  ShoppingCart,
  UsersRound,
} from "lucide-react"
import { Button } from './ui/button'
import { useWindowWidth } from '@react-hook/window-size'

const SideNavbar = () => {
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth < 768;
  const [isCollapsed, setIsCollapsed] = useState(isMobile);

  // Update collapsed state when screen size changes
  useEffect(() => {
    setIsCollapsed(isMobile);
  }, [isMobile]);

  function toggleSidebar() {
    setIsCollapsed(prev => !prev);
  }

  return (
    <div className={`relative border-r px-3 pb-10 pt-24 transition-all duration-300 ${isCollapsed ? 'min-w-[80px] max-w-[80px]' : 'min-w-[240px] max-w-[240px]'}`}>
      {!isMobile && (
        <div className='absolute right-[-20px] top-7 z-10'>
          <Button onClick={toggleSidebar} variant='secondary' className='rounded-full p-2'>
            {isCollapsed ? <ChevronRight /> : <ChevronLeft />}
          </Button>
        </div>
      )}
      <Nav
        isCollapsed={isCollapsed}
        links={[
          {
            title: "Dashboard",
            href: "/",
            icon: LayoutDashboard,
            variant: "default",
          },
          {
            title: "Users",
            href: "/users",
            icon: UsersRound,
            variant: "ghost",
          },
          {
            title: "Orders",
            href: "/orders",
            icon: ShoppingCart,
            variant: "ghost",
          },
          {
            title: "Settings",
            href: "/settings",
            icon: Settings,
            variant: "ghost",
          },
        ]}
      />
    </div>
  )
}

export default SideNavbar;