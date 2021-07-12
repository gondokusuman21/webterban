import Head from 'next/head';
import Link from 'next/link';
import { blogPosts } from '../../lib/data';

// to tell Nextjs how many html pages needed to be made base on our data (remote api)
export const getStaticPaths = async () => {
  return {
    paths: blogPosts.map((item) => {
      return { params: { slug: item.slug } };
    }),
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  // console.log(context);
  const { params } = context;

  return {
    props: blogPosts.find((item) => item.slug == params.slug),
  };
};

const BlogPage = ({ title, date, content }) => {
  return (
    <>
      <div className='my-2 cursor-pointer hover:underline'>
        <Link href='/'>
          <div className='flex'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              class='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M10 19l-7-7m0 0l7-7m-7 7h18'
              />
            </svg>
            <a className='mx-2'>Back to Home</a>
          </div>
        </Link>
      </div>

      <div>
        <Head>
          <title>{title}</title>
        </Head>

        <main>
          <h1 className='py-2 font-bold text-center'>{title}</h1>
          <p>{content}</p>
        </main>
      </div>
    </>
  );
};

export default BlogPage;
