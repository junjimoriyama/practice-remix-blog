import { ActionFunctionArgs, redirect } from '@remix-run/node'
import { Form, useNavigate, useNavigation } from '@remix-run/react'
import React from 'react'
import { createPost } from '~/models/post.server';

export const action = async ({ request }: ActionFunctionArgs) => {


  await new Promise(resolve => setTimeout(resolve, 1000))
  
  const formData = await request.formData();
  const title = formData.get("title") as string;
  const slug = formData.get("slug") as string;
  const markdown = formData.get("markdown") as string;

  await createPost({title, slug, markdown})

  return redirect("/posts/admin")
}

const NewPost = () => {

  const navigation = useNavigation()
  const isCreating = Boolean(navigation.state === "submitting")

  return (
   <Form method="post">
    <div>
      <label>Post title</label>
      <input 
      name="title"
      className="w-full rouded border border-gray-500 px-2 py-1 text-lg" />
    </div>
    <div>
      <label>Post slug</label>
      <input 
      name="slug"
      className="w-full rouded border border-gray-500 px-2 py-1 text-lg" />
    </div>
    <div>
      <label>mark down</label>
      <br />
      <textarea 
      id="markdown"
      name="markdown"
      rows={20}
      className="w-full rouded border border-gray-500 px-2 py-1 text-lg" />
    </div>

    <div className='test-right'>
      <button 
      type="submit"
      className='rounded bg-blue-500 py-2 px-4 text-white'>
        { isCreating ? "送信中..." : "create post"}
      </button>
    </div>
   </Form>
  )
}

export default NewPost