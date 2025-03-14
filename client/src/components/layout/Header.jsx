import React from 'react'
import { Box, AppBar, Toolbar, Typography, IconButton, Tooltip } from '@mui/material'
import { orange } from '../../constants/color'
import { Add as AddIcon, Menu as MenuIcon, Search as SearchIcon} from '@mui/icons-material'

const Header = () => {

  const handleMobile = ()=>{
    console.log("Mobile")
  }

  const openSearchDialogue = ()=>{
    console.log("search dialogue opened")
  }

  const openNewGroup = ()=>{
    console.log("opened new group")
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
              <IconButton color="inherit" onClick={handleMobile}>
                <MenuIcon/>
              </IconButton>
            </Box>

            <Box sx={{flexGrow:1}}></Box>
            <Box>Final</Box>
              <Tooltip title="Search">
                <IconButton color="inherit" size="large" onClick={openSearchDialogue}>
                  <SearchIcon/>
                </IconButton>
              </Tooltip>

              <Tooltip title="Create New Group">
                <IconButton color="inherit" size="large" onClick={openNewGroup}>
                  <AddIcon/>
                </IconButton>
              </Tooltip>
                
          </Toolbar>
      </AppBar>
    </Box>
    </>
  )
}

export default Header