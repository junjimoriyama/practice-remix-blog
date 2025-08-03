import { Link, useLoaderData } from '@remix-run/react';
import React from 'react'
import { getPosts } from '~/models/post.server';

export const loader = async () => {
 return {
  posts: await getPosts()
 } 
};


const posts = () => {

  const { posts } = useLoaderData<typeof loader>();
  console.log(posts)

  return (
    <main>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
        <li key={post.slug}>
          <Link
          to={post.slug}
          className='text-blue-600 underline'
          >{post.title}</Link>
        </li>
      ))}
      </ul>
      <Link to="admin" className='text-red-500 underline'>Admin</Link>
    </main>
  )
}

export default posts