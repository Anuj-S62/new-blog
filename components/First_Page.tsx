import Link from "next/link";
import fs from "fs";
import matter from "gray-matter";
import { PostMetadata } from "@/components/PostMetadata";

const getPostMetadata = ():PostMetadata[]=>{
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((files)=>files.endsWith(".md"));

  let posts = markdownPosts.map((fileName)=>{
    let fileContents = fs.readFileSync(`posts/${fileName}`, 'utf-8')
    let matterResult = matter(fileContents)
    return {
      title: matterResult.data.title,
      date:matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      slug:fileName.replace(".md", ""),
    };
  })
  // sort posts by date
  posts.sort((a,b)=>{
    if(a.date < b.date) return -1;
    if(a.date > b.date) return 1;
    return 0;
  })

  return posts;

}

export default getPostMetadata;