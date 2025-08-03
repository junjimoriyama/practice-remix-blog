import { Link, Outlet, useLoaderData } from "@remix-run/react";
import { getPosts } from "~/models/post.server";

export const loader = async () => {
  return {
    posts: await getPosts()
  }
}

export default function PostAdmin() {

  const { posts } = useLoaderData<typeof loader>();
  
  return (
  <div className="mx-auto max-w-4xl">
    <h1 className="my-6 mb-2 border-b-2 text-center text-3xl">Blog Admin</h1>
    <div className="grid md:grid-cols-2">
      <nav>
        <ul>
           {posts.map((post) => (
                  <li key={post.slug}>
                    <Link
                    to={"/posts/" + post.slug}
                    className='text-blue-600 underline'
                    >{post.title}</Link>
                  </li>
                ))}
        </ul>
      </nav>
      <main>
        <Outlet/>
      </main>
    </div>
  </div>
  )
}
