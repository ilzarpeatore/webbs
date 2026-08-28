import Link from 'next/link'
import type { BlogCategory } from '@/utils/blogApi'

type BlogCategoryFilterProps = {
  categories: BlogCategory[]
  activeSlug?: string
}

const chipClass = (isActive: boolean) => `rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${isActive ? 'border-default-900 bg-default-900 text-white' : 'border-default-200 text-default-700 hover:border-default-400 bg-white'}`

const BlogCategoryFilter = ({ categories, activeSlug }: BlogCategoryFilterProps) => {
  if (categories.length === 0) return null

  return (
    <div className="mb-10 flex flex-wrap justify-center gap-2.5 lg:mb-15">
      <Link href="/blog" className={chipClass(!activeSlug)}>
        Todos
      </Link>

      {categories.map((category) => (
        <Link key={category.id} href={`/blog?category=${category.slug}`} className={chipClass(category.slug === activeSlug)}>
          {category.title} <span className="opacity-60">({category.post_count})</span>
        </Link>
      ))}
    </div>
  )
}

export default BlogCategoryFilter
