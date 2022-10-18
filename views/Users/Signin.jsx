const react = require('react')
const Navbar = require('../components/Navbar')

class Signin extends React.Component {
    render(){
        return(
            <div>
                <Navbar/>
                <h1>Sign in Page</h1>
                <form action="/user/signin" method='POST'>
                    <fieldset>
                        <legend>Signin to Your Account</legend>
                        <label htmlFor="email" name='email'>Email</label>
                        <br />
                        <input type="text" name='email'/>
                        <br />
                        <label htmlFor="password" name='password'>Password</label>
                        <br />
                        <input type="password" name='password'/>
                        <br />
                        <input type="submit" value="Signin" />
                    </fieldset>
                </form>
            </div>
        )
    }
}

module.exports = Signin

