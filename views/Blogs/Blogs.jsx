const React = require('react')
const Navbar = require('../components/Navbar')

class Blogs extends React.Component {
    render(){
        return(
        <div>
            <Navbar/>
            <h1>Blogs</h1>
        </div>)
    }
}

module.exports = Blogs