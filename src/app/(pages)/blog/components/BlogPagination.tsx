import Link from 'next/link'
import type { BlogListResponse } from '@/utils/blogApi'

type BlogPaginationProps = {
  pagination: BlogListResponse['pagination']
  activeCategory?: string
}

const buildHref = (page: number, category?: string) => {
  const params = new URLSearchParams()
  if (page > 1) params.set('page', String(page))
  if (category) params.set('category', category)
  const qs = params.toString()
  return qs ? `/blog?${qs}` : '/blog'
}

const BlogPagination = ({ pagination, activeCategory }: BlogPaginationProps) => {
  const { currentPage, totalPages } = pagination
  if (totalPages <= 1) return null

  const isFirst = currentPage <= 1
  const isLast = currentPage >= totalPages

  return (
    <div className="mt-12.5 flex items-center justify-center gap-2.5 lg:mt-20">
      <Link href={buildHref(Math.max(1, currentPage - 1), activeCategory)} aria-disabled={isFirst} className={`border-default-200 text-default-800 rounded-full border bg-white px-5 py-2 text-sm font-medium ${isFirst ? 'pointer-events-none opacity-40' : 'hover:border-default-400'}`}>
        Anterior
      </Link>

      <span className="text-default-600 text-sm">
        Página {currentPage} de {totalPages}
      </span>

      <Link href={buildHref(Math.min(totalPages, currentPage + 1), activeCategory)} aria-disabled={isLast} className={`border-default-200 text-default-800 rounded-full border bg-white px-5 py-2 text-sm font-medium ${isLast ? 'pointer-events-none opacity-40' : 'hover:border-default-400'}`}>
        Siguiente
      </Link>
    </div>
  )
}

export default BlogPagination
