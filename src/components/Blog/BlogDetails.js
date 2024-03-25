import { format, parseISO } from "date-fns";
import { fr } from "date-fns/locale";
import Link from "next/link";
import React from "react";
import { slug } from "github-slugger";

const BlogDetails = ({ blog, slug: blogSlug }) => {
  console.log(blog);
  return (
    <div className="px-2  md:px-10 bg-accent dark:bg-accentDark text-light dark:text-dark py-2 flex items-center justify-around flex-wrap text-lg sm:text-xl font-medium mx-5  md:mx-10 rounded-lg">
      <time className="m-3">
        {format(parseISO(blog.publishedAt), "d LLLL, yyyy", { locale: fr })}
      </time>

      <div className="m-3">
        {Math.round(blog.readingTime.minutes)} minutes de lecture
      </div>
      <Link href={`/categories/${slug(blog.tags[0])}`} className="m-3">
        #{blog.tags[0]}
      </Link>
    </div>
  );
};

export default BlogDetails;
