import React, { useState, useEffect } from 'react';
import './App.css';

import { Button, FormControl, InputLabel, Input, FormHelperText, Card, CardContent } from '@material-ui/core'
import Messages from './Messages';
import db from './firebase';

import firebase from 'firebase'

import FlipMove from 'react-flip-move';

import SendIcon from '@material-ui/icons/Send';

import { IconButton } from '@material-ui/core';


function App() {

    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);
    const [username, setUsername] = useState('');

    useEffect(() => {
        db.collection('messages')
            .orderBy('timestamp', 'desc')
            .onSnapshot(snapshot => {
                setMessages(snapshot.docs.map(doc => ({ id: doc.id, message: doc.data() })))
            })
    }, [])

    useEffect(() => {
        setUsername(prompt('Please enter your name'));

    }, [])

    const sendMessage = (e) => {
        e.preventDefault();

        console.log(username, input)

        db.collection('messages').add({
            message: input,
            username: username,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        setInput('')

    }

    return (
        <div className="App">
            <img src="https://scontent.fktm10-1.fna.fbcdn.net/v/t39.8562-6/37794079_285442762012286_2170626851641229312_n.png?_nc_cat=1&_nc_sid=6825c5&_nc_ohc=5_e2NohomjEAX8Avg5-&_nc_ht=scontent.fktm10-1.fna&oh=72d19af9da93e52f851a042a09834d53&oe=5F52610C" alt="brand-img" />
            <h1>Messenger</h1>
            <h3>Welcome {username}</h3>
            <div className="app__cards">
                <FlipMove>
                    {
                        messages.map(({ id, message }, i) => (
                            <Messages
                                key={id}
                                username={username}
                                message={message}
                            />
                        ))
                    }
                </FlipMove>

                <form className="app__form">
                    <FormControl className="app__formControl">
                        <Input
                            className="app__input"
                            placeholder="Type a message"
                            type="text"
                            name="input"
                            value={input}
                            onChange={e => setInput(e.target.value)}
                        />

                        <IconButton
                            className="app__iconButton"
                            variant="contained"
                            color="primary"
                            type="submit"
                            onClick={sendMessage}
                            disabled={!input}
                        >
                            <SendIcon />
                        </IconButton>
                    </FormControl>
                </form>
            </div>
        </div>
    );
}

export default App;
