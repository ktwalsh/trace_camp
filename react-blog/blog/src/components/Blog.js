import React, {useState} from 'react'



function Blog(props) {
    const [bloglist, setBloglist] = useState({})
    const [title,setTitle] = useState(["Title"])
    const [body,setBody] = useState(["Body"])
    const[bvalue, setbValue] = useState("")
    const[tvalue, settValue] = useState("")

    function handlebChange(event) {
        setbValue(event.target.value)        
    }

    function handletChange(event) {
        settValue(event.target.value)        
    }

    function addItem(e) {
        e.preventDefault()
        setBody(body.concat(bvalue));
        setTitle(title.concat(tvalue));
        setbValue("");
        settValue("");
    }

    console.log(body)
    console.log(title)
    return(
        <div>
            <h1>Blogs</h1>
            <ul>
                
            </ul>
            <form onSubmit={addItem}>
                <input type="text" placeholder="title" value={tvalue} onChange={handletChange}/>
                <input type="text" placeholder="body" value={bvalue} onChange={handlebChange}/>
                <input type="submit" value="Create Blog Post" />
            </form>
        </div>
    )
}

export default Blog;
// ASSIGNMENT: Create A React Blog
// Minimum goal is to accomplish steps 1 and 3
//    1. Create a State that holds a list of blog posts. Blog post will include a title and text
//    2. Include starter blog posts for testing
//    3. Create a Form that creates blog posts
//    4. Add seperate pages for Home page and page that lists and creates posts(Routers)
//    5. Create a Page that Lists The Blog Posts (Context Api)

// When done finish portfolio