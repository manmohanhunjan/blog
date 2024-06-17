import { Appbar } from '../components/Appbar'
import { BlogCard } from '../components/BlogCard'
import { BlogsSkeleton } from '../components/BlogsSkeleton'
import { useBlogs } from '../hooks'

const Blogs = () => {
  const { loading, blogs } = useBlogs()

  if (loading) {
    return (
      <div>
        <Appbar />
        <div className="flex justify-center">
          <div>
            <BlogsSkeleton />
            <BlogsSkeleton />
            <BlogsSkeleton />
            <BlogsSkeleton />
            <BlogsSkeleton />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      <Appbar />
      <div className="flex justify-center">
        <div>
          {blogs.map((blog) => (
            <BlogCard
              authorName={blog.author.name || 'Anonymous'}
              title={blog.title}
              content={blog.content}
              id={blog.id}
              publishedDate="2nd Feb 2024"
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blogs
