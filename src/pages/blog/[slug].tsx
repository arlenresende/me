import { client } from '@/services/prismic'
import { SingleContainer } from '@/styles/pages/single'
import { GetServerSideProps } from 'next'
import { RichText } from 'prismic-dom'

import Head from 'next/head'
import Image from 'next/legacy/image'

import { ParsedUrlQuery } from 'querystring'

interface PostProps {
  post: {
    slug: string
    title: string
    description: string
    cover: string
    updatedAt: string
    last_publication_date: string
  }
}

interface IParams extends ParsedUrlQuery {
  slug: string
}

export default function Post({ post }: PostProps) {
  console.log(post)
  return (
    <>
      <Head>
        <title>Blog - Arlen Resende</title>
      </Head>
      <SingleContainer>
        <h1>{post.title}</h1>
        <div className="info_block">
          <div className="info dev">{post.updatedAt} </div>
        </div>
        <div>
          <div className="last_update">
            Last updated {post.last_publication_date}
          </div>
        </div>
        <div className="img-title">
          <Image
            quality={70}
            src={post.cover}
            width={720}
            height={410}
            alt={post.title}
            className=""
          />
        </div>
        <div
          className="content-post"
          dangerouslySetInnerHTML={{ __html: post.description }}
        ></div>
      </SingleContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { slug } = params as IParams

  const response = await client.getByUID('posts', String(slug))

  if (!response) {
    return {
      redirect: {
        destination: '/blog',
        permanent: false,
      },
    }
  }

  console.log(JSON.stringify(response, null, 2))

  const post = {
    slug,
    title: response.data.title[0].text,
    cover: response.data.image.url,
    description: RichText.asHtml(response.data.content),
    updatedAt: new Date(response.last_publication_date).toLocaleDateString(
      'en',
      {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      },
    ),
    last_publication_date: new Date(
      response.last_publication_date,
    ).toLocaleDateString('en', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    }),
  }

  return {
    props: {
      post,
    },
  }
}
