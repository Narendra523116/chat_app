import React, { useState } from 'react'
import { Container, Paper, Typography, TextField, Button, Stack, Avatar, IconButton} from '@mui/material'
import { CameraAlt as CameraAltIcon } from '@mui/icons-material'
import { VisuallyHiddenInput } from '../components/styles/StyledComponents'
import { useFileHandler, useInputValidation, useStrongPassword } from "6pp"
import { usernameValidator } from '../utils/validators'

function Login() {

  const [isLogin, setIsLogin] = useState(true)
  const toggleLogin = () => setIsLogin(!isLogin)
  const name = useInputValidation("")
  const bio = useInputValidation("")
  const password = useStrongPassword()
  const username = useInputValidation("", usernameValidator)
  const avatar = useFileHandler("single")

  const handleLogin = (e)=>{
    e.preventDefault()
  }

  const handleSignUp = (e)=>{
    e.preventDefault()
  }

  return (

    <div style={{
      backgroundImage: "linear-gradient(120deg, #f6d365 0%, #fda085 100%)",
    }}>
      <Container component="main" maxWidth="xs" sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Paper elevation={3} sx={{
          padding: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          {isLogin ? (
            <>
              <Typography variant='h5'>Login</Typography>
              <form style={{
                width: '100%',
                marginTop: '1rem',
              }} onSubmit={handleLogin}>
                <TextField
                required
                fullWidth
                label="Username"
                variant="outlined"
                sx={{mt : 2}}
                value = {username.value}
                onChange = {username.changeHandler}
                />
                <TextField
                required
                fullWidth
                label="password"
                type="password"
                variant="outlined"
                sx={{mt : 2}}
                value = {password.value}
                onChange = {password.changeHandler}
                />

                <Button type="submit" variant="contained" color="primary" fullWidth sx={{mt : 2}}>
                  Login
                </Button>

                <Typography textAlign={"center"} m={"1rem"}>Or</Typography>

                <Button type="submit" variant="text"  fullWidth  onClick={toggleLogin}>
                  Sign Up Instead
                </Button>

              </form>
            </>
          ) : (
            <>
              <Typography variant='h5'>Sign Up</Typography>
              <form style={{
                width: '100%',
                marginTop: '1rem',
              }} onSubmit={handleSignUp}>

                <Stack 
                position={"relative"}
                spacing={2} 
                width={"10rem"}
                margin={"auto"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                >
                  <Avatar sx={{
                    width: "10rem",
                    height: "10rem",
                    objectFit: "contain"
                  }}
                  src={avatar.preview}/>

                  {
                  avatar.error && (
                    <Typography m={"1rem"} width={"fitcontent"} display={"block"} color="error" variant="caption">
                      {avatar.error}
                    </Typography>
                  )

                } 

                  <IconButton sx={{
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    color: "white",
                    backgroundColor: "rgb(0, 0, 0, 0.5)",
                    ":hover" : {
                      bgcolor: "rgb(0, 0, 0, 0.7)"
                    }
                  }}
                  component="label"
                  >
                    <CameraAltIcon/>
                    <VisuallyHiddenInput type="file" accept="image/*" id="icon-button-file" onChange={avatar.changeHandler}/>
                  </IconButton>


                </Stack>

                <TextField
                required
                fullWidth
                label="Name"
                variant="outlined"
                sx={{mt : 2}}
                value={name.value}
                onChange={name.changeHandler}
                />

                <TextField
                required
                fullWidth
                label="username"
                variant="outlined"
                sx={{mt : 2}}
                value={username.value}
                onChange={username.changeHandler}
                />

                {
                  username.error && (
                    <Typography color="error" variant="caption">
                      {username.error}
                    </Typography>
                  )

                }

                <TextField
                required
                fullWidth
                label="Bio"
                variant="outlined"
                sx={{mt : 2}}
                value={bio.value}
                onChange={bio.changeHandler}
                />
                <TextField
                required
                fullWidth
                label="Password"
                type="password"
                variant="outlined"
                sx={{mt : 2}}
                value={password.value}
                onChange={password.changeHandler}
                />

                {
                  password.error && (
                    <Typography color="error" variant="caption">
                      {password.error}
                    </Typography>
                  )

                }

                <Button type="submit" variant="contained" color="primary" fullWidth sx={{mt : 2}}>
                  Sign Up
                </Button>

                <Typography textAlign={"center"} m={"1rem"}>Or</Typography>

                <Button type="submit" variant="text"  fullWidth  onClick={toggleLogin}>
                  Login Instead
                </Button>

              </form>
            </>
          )}
        </Paper>
      </Container>
    </div>
  )
}

export default Login
