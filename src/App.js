import { ChatEngine } from "react-chat-engine";

import './App.css';

import ChatFeed from './components/ChatFeed'
import LoginForm from "./components/LoginForm";

const App = () => {

    if(!localStorage.getItem('username')) return <LoginForm />

    return(
        <ChatEngine
            height="100vh"
            projectID="dd3f0a8e-df89-469d-88b7-b7dc766763e9"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed { ...chatAppProps}/> }
        />
    )
}

export default App;