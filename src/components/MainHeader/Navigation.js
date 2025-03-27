import Button from '../UI/Button'
import './Navigation.css'

import AuthContext from '../../store/auth-context'

const Navigation = (props) => {
    return (
        <AuthContext.Consumer>
            {(context) => {
                return (
                    <nav className='nav'>
                        <ul>
                            <li>
                                <a href='/'>Users</a>
                            </li>
                            <li>
                                <a href='/'>Admin</a>
                            </li>
                            {context.loggedIn && (
                                <li>
                                    <Button onClick={context.onLogout}>Logout</Button>
                                </li>
                            )}
                        </ul>
                    </nav>
                )
            }}
        </AuthContext.Consumer>
    )
}

export default Navigation