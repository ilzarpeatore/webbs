import { API_BASE_URL } from '@/config/constants'

// Mismas formas de datos que bsa/api/blog.ts (la app) -- es el mismo backend
// (bckbs) y los mismos endpoints (post-list, post-detail, blog-category-list),
// para que el blog de la web y el de la app muestren siempre el mismo contenido.

export type BlogCategory = {
  id: number
  title: string
  slug: string
  post_count: number
}

export type BlogListItem = {
  id: number
  title: string
  slug: string
  description: string
  content: string
  post_image: string | null
  datetime: string
  status: string
  is_featured: boolean
  blog_category_id: number | null
  blog_category: { id: number; title: string; slug: string } | null
  tags_name: { id: number; title: string }[] | null
  category_name: { id: number; title: string }[] | null
  created_at: string
  updated_at: string
}

export type BlogDetailItem = BlogListItem & {
  bibliography: string | null
}

export type BlogListResponse = {
  data: BlogListItem[]
  pagination: {
    total_items: number
    per_page: number
    currentPage: number
    totalPages: number
  }
}

export type BlogCategoryListResponse = {
  data: BlogCategory[]
}

// El backend cachea 5 min server-side (Next.js fetch cache) -- suficiente
// margen para que una publicación nueva del admin aparezca casi al momento
// sin pegarle a la API en cada visita.
const REVALIDATE_SECONDS = 300

export type GetPostListParams = {
  page?: number
  category?: string
  search?: string
}

export async function getPostList({ page = 1, category, search }: GetPostListParams = {}): Promise<BlogListResponse> {
  let categories: BlogCategory[] = []
  if (category) {
    categories = (await getBlogCategories()).data
  }
  const blogCategoryId = category ? categories.find((c) => c.slug === category)?.id : undefined

  // Slug de categoría desconocido (URL manipulada a mano) -- vacío, no "todos".
  if (category && !blogCategoryId) {
    return { data: [], pagination: { total_items: 0, per_page: 0, currentPage: 1, totalPages: 1 } }
  }

  const url = new URL(`${API_BASE_URL}/post-list`)
  url.searchParams.set('page', String(page))
  if (blogCategoryId) url.searchParams.set('blog_category_id', String(blogCategoryId))
  if (search) url.searchParams.set('search', search)

  const res = await fetch(url, { next: { revalidate: REVALIDATE_SECONDS } })
  if (!res.ok) {
    throw new Error(`post-list respondió ${res.status}`)
  }
  return res.json()
}

export async function getPostBySlug(slug: string): Promise<BlogDetailItem | null> {
  const url = new URL(`${API_BASE_URL}/post-detail`)
  url.searchParams.set('slug', slug)

  // El slug se manda tanto en la query string como en el body: post-detail
  // es un POST, y si el backend lee el payload con $request->post()/input()
  // sobre el body (en vez de la query string), mandarlo solo en la URL
  // hace que nunca encuentre el post -- devuelve "no encontrado" para
  // cualquier slug (bug real observado: 404 en todos los artículos).
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ slug }),
    next: { revalidate: REVALIDATE_SECONDS },
  })
  if (!res.ok) {
    throw new Error(`post-detail respondió ${res.status}`)
  }

  const body = await res.json()
  // El backend responde 200 con { message: '...' } cuando no encuentra el
  // post, en vez de un 404 -- json_message_response() en bckbs.
  if (!body?.data) {
    return null
  }
  return body.data
}

export async function getBlogCategories(): Promise<BlogCategoryListResponse> {
  const res = await fetch(`${API_BASE_URL}/blog-category-list`, { next: { revalidate: REVALIDATE_SECONDS } })
  if (!res.ok) {
    throw new Error(`blog-category-list respondió ${res.status}`)
  }
  return res.json()
}
