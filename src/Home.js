import { useState } from "react";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: "My first website", body: "lorem ipsum...", author: "John", id: 1 },
        { title: "My second website", body: "lorem ipsum...", author: "Wick", id: 2 },
        { title: "My website", body: "lorem ipsum...", author: "John Wick", id: 3 }
    ]);

    return (
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by: {blog.author}</p>
                </div>
            ))}

        </div>
    );
}

export default Home;