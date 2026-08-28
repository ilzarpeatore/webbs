import Image from 'next/image'
import Link from 'next/link'
import type { BlogListItem } from '@/utils/blogApi'

const formatDate = (iso: string) => new Date(iso).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })

const BlogGrid = ({ posts }: { posts: BlogListItem[] }) => {
  if (posts.length === 0) {
    return <p className="text-default-600 py-15 text-center">Todavía no hay publicaciones en esta categoría.</p>
  }

  return (
    <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <Link key={post.id} href={`/blog/${post.slug}`} className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-xl">
          <div className="bg-default-100 relative aspect-video w-full overflow-hidden">
            {post.post_image ? <Image src={post.post_image} alt={post.title} fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover transition-transform duration-300 group-hover:scale-105" /> : null}
          </div>

          <div className="flex flex-1 flex-col p-5 lg:p-7.5">
            {post.blog_category ? <span className="text-primary-8 mb-2.5 text-sm font-medium">{post.blog_category.title}</span> : null}

            <h2 className="text-default-900 mb-2.5 text-lg font-medium tracking-tight lg:text-xl">{post.title}</h2>

            <p className="text-default-600 mb-5 line-clamp-3 text-sm lg:text-base">{post.description}</p>

            <span className="text-default-500 mt-auto text-sm">{formatDate(post.datetime)}</span>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default BlogGrid
