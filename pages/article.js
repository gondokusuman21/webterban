import Head from 'next/head';
import Link from 'next/link';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const STRAPI_URL = "https://strapi-gk.herokuapp.com";

export const getStaticProps = async () => {
  const postsResponse = await fetch(`${STRAPI_URL}/posts`);
  const postsData = await postsResponse.json();

  return {
    props: postData,
    revalidate: 3600
  }
}

const Article = () => {
  return (
    <>
      <Head>
        <title>Artikel</title>
      </Head>

      <nav>
        <Navbar />
      </nav>

      <main>
        s
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default Article;