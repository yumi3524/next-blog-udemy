import Head from "next/head";
import styles from "./layout.module.css"
import utilStyls from "../styles/utils.module.css"
import Link from 'next/link'

const name = 'Yumi Code';
export const siteTitle = "Next.js Blog"

function Layout({ children, home}) {
  return (
    <div className={styles.container}>
      <Head>
        <title title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <img
              src="/images/profile.png"
              className={`${utilStyls.borderCircle} ${styles.headerHomeImage}`}
            />
            <h1 className={utilStyls.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <img
              src="/images/profile.png"
              className={`${utilStyls.borderCircle}`}
            />
            <h1 className={utilStyls.heading2Xl}>{name}</h1>
          </>
        )}

      </header>
      <main>{children}</main>
      {!home && (
        <Link href="/">⇦ホームへ戻る</Link>
      )}
    </div>
  );
}

export default Layout;
