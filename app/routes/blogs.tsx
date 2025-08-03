import { useLoaderData } from '@remix-run/react'
import React from 'react'
import { client } from '~/services/cms/client'

export const loader = async () => {

  const now = new Date().toISOString();
  
  return {
    blogs: await client.get({
    endpoint: "blog",
    queries: {
      limit: 1,
      orders: "-publishedAt",
      filters: `visibleUntil[greater_than]${now}`
    }
  })
  }
}

const blogs = () => {

  const { blogs } = useLoaderData<typeof loader>();

  const display = blogs.contents

  console.log(display)

  return (
      <ul>{display.map((blog: any) => (
         <li key={blog.id}>{blog.title}</li>
        // <>
        // {
        //   blog.isShow && <>
           
        //     <li>{blog.isShow ? "表示" : "非表示"}</li>
        //   </>
        // }
        // </>
      ))}
      </ul>
  )
}

export default blogs