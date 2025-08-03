import {LoaderFunctionArgs} from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { marked } from 'marked';
import invariant from 'tiny-invariant';
import { getPost } from '~/models/post.server';
export const loader = async ({params}: LoaderFunctionArgs) => {
    const slug = params.slug;

    invariant(slug, "")

    const post = await getPost(slug)

    invariant(post, "Post not found")

    const markdown = post?.markdown
    console.log(markdown)

    const html = await marked(markdown)

    return {post, html}
}

export default function PostSlug() {

  const {post, html} = useLoaderData<typeof loader>();

  return (
    <main className="mx-auto max-w-4xl">
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{__html: html}}></div>
    </main>
  )
}