import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Footer from "../../components/Footer";
import Navbar from '../../components/Navbar';

const STRAPI_URL = "https://strapi-gk.herokuapp.com";

export const getStaticPaths = async () => {
  const response = await fetch(`${STRAPI_URL}/categories`);
  const data = await response.json();
  const paths = data.map((category) => {
    return {
      params: {
        name: category.name.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ name }) => {
  const response = await fetch(`${STRAPI_URL}/categories`);
  const data = await response.json();
  const categoryData = data[0].name;

  return {
    props: { categoryData }
  }
}

const CategoriesArticlePage = () => {
  return (
    <>
      <Head>

      </Head>

      <nav>
        <Navbar />
      </nav>


    </>
  )
}

export default CategoriesArticlePage;