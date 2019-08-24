import ShowBlogs from './components/ShowBlogs'
import AddBlog from './components/AddBlog'
import ListBlogs from './components/ListBlogs'
import SingleBlog from './components/SingleBlog'
export default [
    { path: "/", component: ShowBlogs },
    { path: "/add", component: AddBlog },
    { path: "/list", component: ListBlogs },
    { path: "/blog/:id", component: SingleBlog },
]