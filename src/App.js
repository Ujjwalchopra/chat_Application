import React from "react";
import {ChatEngine} from "react-chat-engine"
import "./App.css";
import ChatFeed from "./components/chatFeed";

const App = () => {
    return(
        <ChatEngine
            height= "100vh"
            projectID= "01576a19-c031-43ec-a50e-68c4a652005f"
            userName= "ujjwal"
            userSecret= "123123"
            renderChatFeed= {(chatAppProps) => <ChatFeed {...chatAppProps}/>}

        />
    )
}



export default App;