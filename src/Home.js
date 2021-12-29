import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: "My first website", body: "lorem ipsum...", author: "John", id: 1 },
        { title: "My second website", body: "lorem ipsum...", author: "Wick", id: 2 },
        { title: "My website", body: "lorem ipsum...", author: "John Wick", id: 3 }
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id)
        setBlogs(newBlogs);
    }

    return (
        <div className="home">
            <BlogList
                blogs={blogs}
                title="All Blogs!"
                handleDelete={handleDelete}
            />
        </div>
    );
}

export default Home;