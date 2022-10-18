const React = require('react')
const Navbar = require('../components/Navbar')

class Edit extends React.Component {
    render(){
        console.log('from edit page', this.props.blog)
        const {blog} = this.props
        return(
            <div>
                <Navbar/>
                <h1>Edit Page</h1>
                <form action="">
                    Title: <input type="text" name='title' defaultValue={blog.title}/><br />
                    Body: <input type="text" name="body" defaultValue={blog.body}/><br />
                    Author: <input type="text" name="author" defaultValue={blog.author}/><br />
                    Sponsored: {blog.sponsored? <input type="checkbox" name="sponsored" defaultChecked /> : <input type='checkbox' name='sponsored'/>} <br />
                    <input type="submit" value="Update Blog" />
                </form>
            </div>
        )
        
    }
}

module.exports = Edit