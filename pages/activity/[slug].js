import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import marked from 'marked';
import parse from 'html-react-parser';
import NavbarFixed from '../../components/NavbarFixed';
import Footer from '../../components/Footer';

const STRAPI_URL = "https://strapi-gk.herokuapp.com";
// to tell Nextjs how many html pages needed to be made base on our data (remote api)
export const getStaticPaths = async () => {
  const response = await fetch(`${STRAPI_URL}/activities`);
  const data = await response.json();
  const paths = data.map((item) => {
    return {
      params: {
        slug: item.slug.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { slug } = params;
  const response = await fetch(`${STRAPI_URL}/activities?slug=${slug}`);
  const data = await response.json();
  const activities = data[0];

  return {
    props: { activities }
  };
};

const ActivityDetailsPage = ({ activities }) => {

  const { title, description, content, coverpicture, user, date, time } = activities;

  return (
    <>
      <Head>
        <title>Terban - {title}</title>
      </Head>

      <nav>
        <NavbarFixed />
      </nav>

      <main>
        <div className="mt-5 w-11/12 mx-auto lg:w-7/12 md:w-10/12">
          <h1 className="font-serif text-2xl lg:text-6xl lg:mt-10 md:text-5xl sm:text-4xl text-center font-extrabold">{title}</h1>
        </div>
        <div className="my-5 mx-auto lg:w-7/12 md:w-10/12 sm:w-11/12">
          <Image
            alt="Main image"
            layout="responsive"
            width={coverpicture.formats.large.width}
            height={coverpicture.formats.large.height}
            src={coverpicture.formats.large.url}
          />
        </div>
        <div className="w-11/12 mx-auto lg:w-7/12 md:w-10/12">
          <article>
            <div className="prose-sm lg:prose-lg">
              <h5 className="font-sans text-sm lg:text-xl lg:mb-10 md:text-lg sm:text-base my-4">{description}</h5>
              {parse(marked(content))}
            </div>
          </article>
        </div>
      </main>

      <footer>
        <Footer />
      </footer>

    </>
  );
};

export default ActivityDetailsPage;
