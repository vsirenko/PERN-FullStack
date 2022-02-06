import React, { useContext, useEffect, useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import ChatItem from './ChatItem';
import { io } from "socket.io-client";
import { Context } from '..';
import jwt_decode from 'jwt-decode';

const socket = io("http://localhost:5000");

const Chat = () => {
  const { user } = useContext(Context);
  const [text, setText] = useState('');
  const [messages, setMessages] = useState([])
  useEffect(() => {
    socket.on('takeAllMessage', (mess) => {
        setMessages(prev => [...prev, mess])
        console.log(mess);
    })
  }, [])
  const email = user.users.email;
  const sendMessage = () => {
    socket.emit("sendMessage", {text, email});
    setMessages(prev => [...prev, {email, text}])
    setText('')
  }

  return (
      <Card className='mt-4 d-flex justify-content-end' style={{height: '500px'}}>
        <div style={{width: '100%', height: '100%', padding: '15px', boxSizing: 'border-box', display: 'flex' , flexDirection: 'column'}}>
          {messages.map((item, key) =>  <div key={item.text + key} className='d-flex align-items-center'><p style={{marginRight: '10px'}}>{item.email} </p> <ChatItem text={item.text}/> </div> )}
        </div>
        <div style={{display: 'flex'}}>
            <Form.Control className='d-flex' onChange={e => setText(e.target.value)}/>
            <Button style={{width: '200px'}} onClick={sendMessage}>Send</Button>
        </div>
      </Card>
  );
};

export default Chat;
