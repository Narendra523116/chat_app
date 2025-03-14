import React from 'react'
import Header from './Header'
import Title from '../shared/Title'
import { Grid } from '@mui/material'
import { orange } from '../../constants/color'
import ChatList from '../specific/ChatList.jsx'
import { chats } from '../../constants/sampledata'

const AppLayout = () => WrappedComponent => {
  return (props)=>{
    {console.log(props)}
    return(
        <>
            <Title/>
            <Header/>

            <Grid container height="calc(100vh - 4rem)">

                <Grid item sm={4} md={3} sx={{
                    display: { xs: 'none', sm: 'block' },
                }} height={"100%"}>
                    <ChatList chats={chats}
                        chatId={"1"}
                        newMessagesAlert={[
                            {
                                chatId: "1",
                                count: 3
                            },{
                                chatId: "0",
                                count: 999999
                            }
                        ]}
                    />
                </Grid>
                <Grid
                item
                xs={12}
                sm={8}
                md={5}
                lg={6}
                height="100%"
                bgcolor="primary.main"
                > 
                    <WrappedComponent {...props}/> 
                </Grid>

                <Grid
                item
                md={4}
                lg={3}
                sx={{
                    display:{xs : "none",sm : "block"},
                    padding: "2rem",
                    bgcolor: "rgba(7, 7, 7, 0.85)"
                }}
                height={"100%"}>
                 Third
                </Grid>

            </Grid>
        </>
    )
  }
}

export default AppLayout