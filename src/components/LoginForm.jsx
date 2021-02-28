import { useState } from 'react'
import axios from 'axios'

const LoginForm = () => {
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        const authObject = { 'Project-ID' : "dd3f0a8e-df89-469d-88b7-b7dc766763e9", 'User-Name' : username, 'User-Secret' : password  }


        try {
            axios.get('https://api.chatengine.io/chats', { headers: authObject })

            localStorage.setItem('username', username)
            localStorage.setItem('password', password)

            window.location.reload()
        } catch (error) {
            setError('Oops, incorrect Credentials')
            
        }
    }

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setusername(e.target.value)}  className="input" placeholder="Username" required />
                    <input type="password" value={password} onChange={(e) => setpassword(e.target.value)}  className="input" placeholder="Password" required />

                    <div align="center">
                        <button type ="submit" className="button">
                            <span>Start Chatting</span>
                        </button>

                    </div>
                    <h2 className="error">{error}</h2>
                </form>
            </div>
        </div>
    )
}

export default LoginForm
