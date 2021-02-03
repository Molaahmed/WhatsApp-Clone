import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, InsertEmoticon, MoreVert, SearchOutlined } from '@material-ui/icons';
import MicIcon from '@material-ui/icons/Mic';
import React, { useEffect, useState}from 'react'


import "./Chat.css";

function Chat() {

    const [seed, setSeed] = useState("");
    const [input, setInput] = useState("");

    useEffect(() => {
        setSeed(Math.floor(Math.random()*5000));
    }, [])


    const sendMessage = (e) => {
        e.preventDefault();
        console.log(input);

        
        setInput("");
    }


    return (
        <div className="chat"> 
            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />                

                <div className="chat__headerInfo">
                    <h3>Room name</h3>
                    <p>Last seen at ...</p>

                </div>
                
                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>

            </div>

            <div className="chat__body">
                <p className={`chat__message ${false && `chat_reciever` } `}>
                <span className="chat__name"> Redzhep </span>

                Hello everyone
                <span className="chat__timestamp">
                    3:53pm 
                </span>
                </p>
          
            </div>

            <div className="chat__footer">
                <InsertEmoticon />
                <form>
                    <input
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    placeholder="Type a message.." 
                    type="text"/>

                    <button 
                    type="submit"
                    onClick={sendMessage}>
                    </button>
                </form>
                <MicIcon />
            </div>

        </div>
    )
}

export default Chat
