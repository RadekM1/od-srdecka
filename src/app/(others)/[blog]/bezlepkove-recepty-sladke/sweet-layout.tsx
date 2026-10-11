import BlogArticleList from '@/components/UI/blogArticleList';
import React from 'react';
import Gallery from '@/components/gallery';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  articleList: {
    id: number;
    slug: string;
    title: string;
    thumbnailSrc: string;
    thumbnailAlt: string;
  }[];
}

const SweetLayout = ({ children, articleList }: Props) => {
  return (
    <>
      <section className="mx-3 mb-10 flex w-full max-w-[1000px] flex-col items-center justify-center px-1 text-center">
        {children}
        <BlogArticleList
          section="bezlepkove-recepty-sladke"
          blogList={articleList}
        />
      </section>
      <Gallery />
    </>
  );
};

export default SweetLayout;
