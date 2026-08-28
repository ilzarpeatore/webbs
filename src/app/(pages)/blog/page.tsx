import { Metadata } from 'next'
import { getBlogCategories, getPostList } from '@/utils/blogApi'
import BlogCategoryFilter from './components/BlogCategoryFilter'
import BlogGrid from './components/BlogGrid'
import BlogHero from './components/BlogHero'
import BlogPagination from './components/BlogPagination'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Artículos de tu coach sobre entrenamiento, nutrición y hábitos -- el mismo blog que ves en la app BeStronger.',
}

type BlogPageProps = {
  searchParams: Promise<{ page?: string; category?: string }>
}

const Page = async ({ searchParams }: BlogPageProps) => {
  const params = await searchParams
  const page = Number(params.page) > 0 ? Number(params.page) : 1
  const category = params.category

  const [postList, categoryList] = await Promise.all([getPostList({ page, category }), getBlogCategories()])

  return (
    <>
      <BlogHero />

      <section className="pb-15 md:pb-25 lg:pb-32.5">
        <div className="container">
          <BlogCategoryFilter categories={categoryList.data} activeSlug={category} />
          <BlogGrid posts={postList.data} />
          <BlogPagination pagination={postList.pagination} activeCategory={category} />
        </div>
      </section>
    </>
  )
}

export default Page
