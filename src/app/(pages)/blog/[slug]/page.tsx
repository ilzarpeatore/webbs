import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import RichText from '@/components/blog/RichText'
import { getPostBySlug } from '@/utils/blogApi'

type BlogPostPageProps = {
  params: Promise<{ slug: string }>
}

const formatDate = (iso: string) => new Date(iso).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) return {}

  return {
    title: post.title,
    description: post.description,
    openGraph: post.post_image ? { images: [{ url: post.post_image }] } : undefined,
  }
}

const Page = async ({ params }: BlogPostPageProps) => {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) notFound()

  return (
    <article className="pt-32.5 pb-15 md:pt-36 md:pb-25 lg:pt-50 lg:pb-32.5">
      <div className="container">
        <div className="mx-auto max-w-3xl">
          <Link href="/blog" className="text-default-600 hover:text-default-900 mb-7.5 inline-flex items-center gap-1.5 text-sm font-medium">
            ← Volver al blog
          </Link>

          {post.blog_category ? <span className="text-primary-8 mb-2.5 block text-sm font-medium">{post.blog_category.title}</span> : null}

          <h1 className="text-default-900 mb-5 text-3xl font-medium tracking-tight md:text-5xl">{post.title}</h1>

          <p className="text-default-500 mb-10 text-sm">{formatDate(post.datetime)}</p>

          {post.post_image ? (
            <div className="relative mb-10 aspect-video w-full overflow-hidden rounded-2xl lg:rounded-3xl">
              <Image src={post.post_image} alt={post.title} fill sizes="(min-width: 1024px) 768px, 100vw" className="object-cover" priority />
            </div>
          ) : null}

          <RichText html={post.content} />

          {post.bibliography ? (
            <div className="border-default-200 mt-15 border-t pt-7.5">
              <h2 className="text-default-900 mb-2.5 text-lg font-medium">Bibliografía</h2>
              <RichText html={post.bibliography} className="prose-sm" />
            </div>
          ) : null}
        </div>
      </div>
    </article>
  )
}

export default Page
