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
  const response = await fetch(`${STRAPI_URL}/posts`);
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
  const response = await fetch(`${STRAPI_URL}/posts?slug=${slug}`);
  const data = await response.json();
  const post = data[0];

  return {
    props: {
      post
    },
  };
};

const BlogPage = ({ post }) => {

  const { title, description, content, picture, author, published_at } = post;

  const getDate = () => {
    let date = new Date(published_at);
    const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
    const day = date.getDate();
    const year = date.getFullYear();
    const month = months[date.getMonth() - 1];

    return `${day} ${month} ${year}`;
  }

  const getReadingTime = () => {
    let str = content.replace(/(^\s*)|(\s*$)/gi, "").replace(/[ ]{2,}/gi, " ").replace(/\n /, "\n");
    return Math.ceil(str.split(' ').length / 250) + 1;
  }

  let width = picture.formats?.large?.width || picture.formats?.medium?.width || picture.formats?.small?.width;
  let height = picture.formats?.large?.height || picture.formats?.medium?.height || picture.formats?.small?.height;
  let url = picture.formats?.large?.url || picture.formats?.medium?.url || picture.formats?.small?.url;


  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>

      <nav>
        <NavbarFixed />
      </nav>

      <main>
        <section className="mx-auto text-sm px-2 lg:px-10 mt-5 lg:mt-10 flex justify-start items-center">
          <Link passHref href={`/`}>
            <div>Beranda‏‏‎ ‎‏‏‎ ‎{'>'}</div>
          </Link>
          <Link passHref href={`/`}>
            <div>‏‏‎ ‎‏‏‎ ‎Artikel‏‏‎ ‎‏‏‎ ‎{'>'}</div>
          </Link>
          <Link passHref href={`/`}>
            <div className="text-blue-500 font-semibold">‏‏‎ ‎‏‏‎ ‎{post.title}</div>
          </Link>
        </section>

        <div className="mt-5 mx-auto lg:w-7/12 md:w-10/12 w-11/12">
          <h1 className="font-serif text-3xl lg:text-6xl lg:mt-10 md:text-5xl sm:text-4xl text-center font-extrabold">{title}</h1>
          <h5 className="font-sans text-sm lg:text-xl lg:mb-10 md:text-lg sm:text-base text-center my-4">{description}</h5>
        </div>
        <div className="my-5 mx-auto lg:w-7/12 md:w-10/12 sm:w-11/12">
          <Image
            alt="Main image"
            layout="responsive"
            width={width}
            height={height}
            src={url}
          />
        </div>
        <div className="mx-auto lg:w-7/12 md:w-10/12 w-11/12">
          <div className="my-12">
            <h5 className="text-sm font-extrabold tracking-wide lg:text-base md:text-base sm:text-base">{author.username.toUpperCase()}</h5>
            <h5 className="text-sm font mt-1">{getDate()}<span> · {getReadingTime()} menit membaca</span></h5>
          </div>
          <article>
            <div className="prose-sm lg:prose-lg">
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

export default BlogPage;
