import { useLoaderData } from '@remix-run/react'
import React from 'react'
import { Article } from '~/services/cms/articles/types';
import { client } from '~/services/cms/client'

export const loader = async () => {

  const now = new Date().toISOString();

  return {
    blogs: await client.get({
    endpoint: "blog",
    queries: {
      limit: 1,
      orders: "-publishedAt",
      filters: `endDate[greater_than]${now}`
    }
  })
  }
}

const blogs = () => {

  const { blogs } = useLoaderData<typeof loader>();

  console.log(blogs.contents); 

  return (
       <ul>
      {blogs.contents.map((blog: Article) => (
        <li key={blog.id}>
          <h2>{blog.title}</h2>
          {/* HTMLをそのまま描画 */}
          <div dangerouslySetInnerHTML={{ __html: blog.body }} />
        </li>
      ))}
    </ul>
  )
}

export default blogs