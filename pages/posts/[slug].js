import Head from 'next/head';
import Link from 'next/link';
import parse from 'html-react-parser';

// to tell Nextjs how many html pages needed to be made base on our data (remote api)
export const getStaticPaths = async () => {
  const response = await fetch('http://localhost:1337/posts');
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
  const response = await fetch(`http://localhost:1337/posts?slug=${slug}`);
  const data = await response.json();
  const post = data[0];

  return {
    props: { post },
  };
};

const BlogPage = ({ post }) => {
  return (
    <div>
      <div className='my-2 cursor-pointer hover:font-bold'>
        <Link href='/' passHref>
          <div className='flex'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M10 19l-7-7m0 0l7-7m-7 7h18'
              />
            </svg>
            <a className='mx-2'>Back to Home</a>
          </div>
        </Link>
      </div>

      <div>
        <Head>
          <title>{post.title}</title>
        </Head>

        <main>
          <h1 className='py-2 font-bold text-center'>{post.title}</h1>
          <p>{post.content}</p>
        </main>
      </div>
    </div>
  );
};

export default BlogPage;
