import reactLogo from '../assets/react.svg'

export default function Navbar() {
    return (
        <div className = "nav-container">
            <div className='nav'>
                <img src = {reactLogo} width="30px" height="30px"></img>
                <h3 className = "react-facts">React Static Website</h3>
                <div className = "project">
                    <h3>Home</h3>
                    <h3>About</h3>
                    <h3>Service</h3>
                    <h3>Contact</h3>
                </div>
            </div>
            
        </div>
    )
}