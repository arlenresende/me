import { client } from '@/services/prismic'
import { CardContainer, CardPost } from '@/styles/pages/blog'

import { GetStaticProps } from 'next'

import Head from 'next/head'
import Link from 'next/link'

interface IBLog {
  slug: string
  title: string
  type: string
  description: string
  link: string
  thumbnail: string
  updateAt: string
  category: string
}

interface BLogProps {
  projetos: IBLog[]
}

export default function Blog({ projetos }: BLogProps) {
  return (
    <>
      <Head>
        <title>Blog - Arlen Resende</title>
      </Head>
      <CardContainer>
        {projetos.map((post) => (
          <CardPost key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              <div className="card-body">
                <p
                  className={`blog-hashtag
                ${post.category === 'Desenvolvimento' ? 'dev' : ''}
                ${post.category === 'Cotidiano' ? 'popular' : ''}
                ${post.category === 'Projeto' ? 'project' : ''}
                `}
                >
                  #{post.category}
                </p>
                <h2 className="blog-title">{post.title}</h2>
                <p className="blog-description">{post.description}</p>

                <div className="card-profile">
                  <div className="card-profile-info">
                    <h3 className="profile-name">Arlen Resende</h3>
                    <p className="profile-followers">{post.updateAt}</p>
                  </div>
                </div>
              </div>
            </Link>
          </CardPost>
        ))}
      </CardContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await client.getAllByType('posts', {
    orderings: {
      field: 'document.first_publication_date',
      direction: 'desc',
    },
    fetchLinks: ['posts.title', 'posts.description'],
    pageSize: 5,
  })

  console.log(posts)

  const projetos = posts?.map((projeto) => ({
    slug: projeto.uid,
    title: projeto.data.title[0].text,
    description:
      projeto.data.content.find((content: any) => content.type === 'paragraph')
        ?.text ?? '',
    updateAt: new Date(projeto.last_publication_date).toLocaleDateString('en', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    }),
    category: projeto.data.tags,
  }))

  return {
    props: {
      projetos,
    },
  }
}
