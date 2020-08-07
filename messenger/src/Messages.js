import React, { forwardRef } from 'react'
import { Card, CardContent, Typography, Button, CardHeader } from '@material-ui/core'

import './Message.css'

const Messages = forwardRef(({ message, username }, ref) => {
    const isUser = username === message.username;


    return (
        <div ref={ref} className={`message ${isUser && 'message__user'} `}>
            <span className="message__username">
                {!isUser && `${message.username || 'Unknown User'} `}
            </span>
            <Card className={isUser ? 'message__userCard' : 'message__guestCard'}>
                <CardContent className="">
                    <Typography
                        color="white"
                        component="h2"
                    >
                        {message.message}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
})

export default Messages
