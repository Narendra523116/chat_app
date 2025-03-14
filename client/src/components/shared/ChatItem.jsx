import { Stack, Typography } from '@mui/material'
import React, { memo } from 'react'
import { Link } from '../styles/StyledComponents'

const ChatItem = ({
        avatar=[],
        _id,
        name, 
        groupChat=false,
        sameSender,
        isOnline,
        newMessageAlert, index=0,
        handleDeleteChatOpen})=>{

            console.log(`name : ${name} _id: ${_id}`)
    return (
        <Link 
            sx={{
                padding: "0"
            }}
            to={`/chat/${_id}`}
            onContextMenu={(e)=>{handleDeleteChatOpen(e, _id, groupChat)}}
        >
            <div style={{
                display:"flex",
                gap: "1rem",
                position: "relative",
                alignItems:"center",
                padding: '1rem',
                backgroundColor: sameSender? "black" : "unset",
                color: sameSender? "white" : "unset",
                borderBottom: "1px solid #f0f0f0",
                justifyContent: "space-between"
            }}>

                {/* { avatar card } */}

                <Stack>
                    <Typography>{name}</Typography>
                    {
                        newMessageAlert && (
                            <Typography>{newMessageAlert.count} New Message</Typography>
                        )
                    }
                </Stack>

                {
                    isOnline && (
                        <Box 
                            sx = {{
                                width: "10px",
                                height: "10px",
                                borderRadius: "50%",
                                backgroundColor: "green",
                                position: "absolute",
                                top: "50%",
                                right: "1rem",
                                transform: "translateY(-50%)"
                            }}
                        />
                    )
                }


            </div>
        </Link>
    )
}

export default memo(ChatItem);