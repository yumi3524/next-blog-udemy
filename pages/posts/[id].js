import Layout from "@/components/Layout";
import { getAllPostIds, getPostData } from "@/lib/post";
import utilStyls from "@/styles/utils.module.css"
import Head from 'next/head'

export async function getStaticPaths() {
  //ブログ投稿データのファイル名(id)を取得。
  const paths = getAllPostIds();

  return {
    paths, //どのパスが事前にレンダリングされるのか決める。
    fallback: false, //あとで説明。(falseにすると、上のpathsに含まれてないあらゆるパスはアクセスすると404ページになる。)
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id); //あとでasyncとawaitをつける。

  console.log(postData);
  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>
          {postData.title}
        </title>
      </Head>
      <article>
        <h1 className={utilStyls.headingXl}>
          {postData.title}
        </h1>
        <div className={utilStyls.lightText}>
          {postData.date}
        </div>
        <div dangerouslySetInnerHTML={{__html: postData.blogContentHtml }} />
      </article>
    </Layout>


  );
}
