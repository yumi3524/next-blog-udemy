import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/Layout'
import utilStyls from "../styles/utils.module.css"
import { getPostsData } from "@/lib/post"

const inter = Inter({ subsets: ['latin'] })

// SSGの場合
export async function getStaticProps() {
  const allPostsData = getPostsData();
  console.log(allPostsData);

  return {
    props: {
      allPostsData,
    },
  };
}
// SSRの場合
// export async function getSrverSideProps(context){
//   return {
//     props: [
//       // コンポーネントに渡すためのprops
//     ]
//   }
// }

export default function Home({allPostsData}) {
  return (
    <>
    <Layout home>
      <section className={utilStyls.headingMd}>
        <p>私はシステムエンジニアです.デザインにも興味があります。
        </p>
      </section>
      <section>
        <h1>📝エンジニアのブログ</h1>
        <div className={styles.grid}>
          {allPostsData.map(({ id, title, date, thumbnail }) => (
            <article key={id}>
              <Link href={`/posts/${id}`}>
                <Head>
                  <title>
                    {siteTitle}
                  </title>
                </Head>
                <img
                  src={`${thumbnail}`}
                  className={`${styles.thumbnailImage}`}
                />
              </Link>
              <Link href={`/posts/${id}`} className={utilStyls.boldText}>
                {title}
              </Link>
              <br />
              <small className={utilStyls.lightText}>{date}</small>
            </article>
          ))}
        </div>
      </section>
    </Layout>
    </>
  )
}
