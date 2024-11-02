import React from 'react'
import { Sidebar } from '../components/Sidebar'
import menuItems from '../config/menuItems'

export const SidebarMenu = () => {
  return (
    <Sidebar menuItems={menuItems}/>
  )
}
