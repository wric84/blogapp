const express = require('express')
const BlogModel = require('../models/BlogSchema')

const router = express.Router()

router.use((req, res, next) =>{
    if (req.session.loggedIn){
        next()
    }else{
        res.redirect('/user/signin')
    }

})

router.get('/', async (req, res) => {
    try{
        const blogs = await BlogModel.find({})
        res.render("Blogs/Bogs", {blogs: blogs, loggedInUser: req.session.username})
    } catch(error){
        console.log(error)
        res.status(403).send("Cannot Get")
    }
})

router.get('/:id', async (req, res)=>{
    try {
        const blog = await BlogModel.findById(req.params.id, req.body, {'returnDocument': "after"})
        res.send(blog)
    } catch (error) {
        console.log(error)
        res.status(403).send("Cannot Find By Id")
    }
})

router.put('/:id', async (req, res)=>{
    try {
        const updatedBlog = await BlogModel.findByIdAndUpdate(req.params.id)
        res.send(updatedBlog)
    } catch (error) {
        console.log(error)
        res.status(403).send("Cannot Find By Id")
    }
})

router.post('/', async (req, res) => {
    // Create a new blog
    try{
        if(req.body.sponsored === "on"){
            req.body.sponsored = true
        }else {
            req.body.sponsored = false
        }
        req.body.author = req.session.username
        const newBlog = await BlogModel.create(req.body)
        res.redirect('/blog')
    } catch(error){
        console.log(error)
        res.status(403).send("Cannot create")
    }
    
})


router.delete('/:id', async (req, res)=>{
    try{
        await BlogModel.findByIdAndRemove(req.params.id)
        res.send("Blog Deleted")
    } catch(error){
        console.log(error)
        res.status(403).send("Cannot create")
    }
})



module.exports = router;