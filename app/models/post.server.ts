import { prisma } from "~/db.server";
import { Post } from "@prisma/client"

// type Post = {
//   slug: string,
//   title: string
// }

export async function getPosts(): Promise<Post[]> {
  return prisma.post.findMany();
}

export async function getPost(slug: string) {
  return prisma.post.findUnique({
    where: {
      slug,
    }
  });
}

export async function createPost(post: Pick<Post, "title" | "slug" | "markdown">) {
  return prisma.post.create({ data: post })
}