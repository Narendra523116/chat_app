import React, { Suspense, useState, lazy } from 'react'
import { useNavigate } from "react-router-dom"
import { Box, AppBar, Toolbar, Typography, IconButton, Tooltip, Backdrop } from '@mui/material'
import { orange } from '../../constants/color'
import { Add as AddIcon, Menu as MenuIcon, Search as SearchIcon, Group as GroupIcon, Logout as LogoutIcon, Notifications as NotificationsIcon} from '@mui/icons-material'

const Search = lazy(() => import("../specific/Search")) 
const Notification = lazy(() => import("../specific/Notification"))
const NewGroup = lazy(() => import("../specific/NewGroup"))

const Header = () => {

  const [isMobile, setIsMobile] = useState(false)
  const [isNewGroup, setIsNewGroup] = useState(false)
  const [isSearch, setIsSearch] = useState(false)
  const [isNotification, setIsNotification] = useState(false)

  const navigate = useNavigate();

  const handleMobile = ()=>{
    console.log("Mobile")
    setIsMobile(!isMobile)
  }

  const openSearch = ()=>{
    console.log("search dialogue opened")
    setIsSearch(!isSearch)
  }

  const openNewGroup = ()=>{
    console.log("opened new group")
    setIsNewGroup(!isNewGroup)
  }

  const navigateGroup = ()=>{
    navigate("/groups")
    console.log("navigated to new group")
  }

  const logoutHandler = ()=>{
    console.log("logout handler")
  }

  const openNotification = ()=>{
    console.log("notifications opened")
    setIsNotification(!isNotification)
  }

  const IconBtn = ({title, icon, onClick})=>{
    return(
      <Tooltip title={title}>
        <IconButton color="inherit" size='large' onClick={onClick}>
          {icon}
        </IconButton>
      </Tooltip>
    )
  }

  return (
    <>
    <Box sx={{flexGrow:1}} height={"4rem"}>
      <AppBar position="static" sx={{
        bgcolor: orange
      }}>
          <Toolbar>
            <Typography

              variant='h6'
              sx={{
                display: { xs: 'none', sm: 'block' },
              }}

            >Connect</Typography>

            <Box sx={{
              display: {xs: "block", sm: "none"},
            }}>
              <IconBtn title="menu" icon={<MenuIcon/>} onClick={handleMobile}/>
            </Box>

            <Box sx={{flexGrow:1}}></Box>
            <Box>
              Final
              <IconBtn title="search" icon={<SearchIcon/>} onClick={openSearch}/>
              <IconBtn title="create new group" icon={<AddIcon/>} onClick={openNewGroup}/>
              <IconBtn title="manage groups" icon={<GroupIcon/>} onClick={navigateGroup}/>
              <IconBtn title="notifications" icon={<NotificationsIcon/>} onClick={openNotification}/>
              <IconBtn title="Logout" icon={<LogoutIcon/>} onClick={logoutHandler}/>
            </Box>

          </Toolbar>
      </AppBar>
    </Box>

    {isSearch && (
      <Suspense fallback={<Backdrop open="true"/>}>
        <Search/>
      </Suspense>
    )}

    {isNewGroup && (
      <Suspense fallback={<Backdrop open="true"/>}>
        <NewGroup/>
      </Suspense>
    )}

    {isNotification && (
      <Suspense fallback={<Backdrop open="true"/>}>
        <Notification/>
      </Suspense>
    )}

    </>
  )
}

export default Header