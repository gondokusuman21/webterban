import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import postEmptyStateIllustration from '../../../public/post_empty_state.svg';
import Footer from "../../../components/Footer";
import NavbarFixed from '../../../components/NavbarFixed';

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

export const getStaticProps = async ({ params }) => {
  const { name } = params;
  const response = await fetch(`${STRAPI_URL}/categories?name=${name}`);
  const data = await response.json();
  const categoryData = data[0].posts
  // const categoryData = [];

  return {
    props: { categoryData, name }
  }
}

const CategoriesArticlePage = ({ categoryData, name }) => {

  const getReadingTime = (content) => {
    let str = content.replace(/(^\s*)|(\s*$)/gi, "").replace(/[ ]{2,}/gi, " ").replace(/\n /, "\n");
    return Math.ceil(str.split(' ').length / 250) + 1;
  }

  const convertDate = (date) => {
    const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
    const day = date.substring(date.length - 2, date.length);
    const monthIndex = date.substring(5, 7).indexOf("0") == 0 ? date.substring(5, 7).substring(1) : date.substring(5, 7);
    const month = months[monthIndex - 1];

    return `${day} ${month}`;
  }

  const capitalizeFirstLetter = (string) => {
    let firstChar = string[0].toUpperCase();
    let restOfChar = string.slice(1, string.length);
    return firstChar + restOfChar;
  }

  if (categoryData.length > 0) {
    return (
      <>
        <Head>
          <title>Artikel Untuk Topik: {capitalizeFirstLetter(name)}</title>
        </Head>

        <nav>
          <NavbarFixed />
        </nav>

        <main className=" min min-h-9/10-screen w-11/12 mx-auto lg:flex lg:flex-row-reverse lg:w-11/12 lg:justify-between xl:w-3/4">
          <aside className="lg:w-1/4">

          </aside>
          <section className="my-5 md:my-10 lg:w-8/12">
            <h4 className="text-lg font-medium -mb-5">Artikel untuk topik <span className="font-bold">{name}</span></h4>
            {
              categoryData.map((post, index) => {
                let url = post.picture.formats?.large?.url || post.picture.formats?.medium?.url || post.picture.formats?.small?.url;
                return (
                  <>
                    <Link key={index} passHref href={`/posts/${post.slug}`}>
                      <div className="flex w-full gap-4 lg:gap-0 lg:w-full xl:w-5/6 justify-between h-36 mt-10 cursor-pointer">
                        <div className="w-8/12 lg:w-7/12 xl:w-8/12 flex flex-col justify-center gap-y-2 lg:gap-y-1">
                          <div>
                            <h2 className="font-bold text-base lg:text-xl">{post.title}</h2>
                            <h2 className="hidden text-xs md:block md:text-sm lg:text-base">{post.description}</h2>
                          </div>
                          <div>
                            <h5 className="text-xxs sm:text-xs">
                              <span>{convertDate(post.date)}</span>
                              <span> · </span>
                              <span>{getReadingTime(post.content)} menit membaca</span>
                            </h5>
                          </div>
                        </div>
                        <div className="container relative w-48">
                          <Image alt="Image" src={url} objectFit="cover"
                            layout="fill"></Image>
                        </div>
                      </div>
                    </Link>
                  </>
                )
              })
            }
          </section>
        </main>

        <footer>
          <Footer />
        </footer>
      </>
    )
  } else {
    <>
      <Head>
        <title>Artikel Untuk Topik: {capitalizeFirstLetter(name)}</title>
      </Head>

      <nav>
        <NavbarFixed />
      </nav>

      <main className=" min min-h-9/10-screen w-11/12 mx-auto lg:flex lg:flex-row-reverse lg:w-11/12 lg:justify-between xl:w-3/4">
        <aside className="lg:w-1/4">

        </aside>
        <section className="my-5 md:my-10 lg:w-8/12">
          <h4 className="text-lg font-medium -mb-5">Artikel untuk topik <span className="font-bold">{name}</span></h4>
          <div className="mt-10">
            <div className="flex justify-center w-full items-center flex-col">
              <div className="w-36 h-36">
                <Image
                  alt="Empty state"
                  src={postEmptyStateIllustration}
                  width={150}
                  height={150}
                  layout="responsive"
                />
              </div>
              <h5 className="text-sm font-medium mt-4">Belum ada artikel yang bisa ditampilkan.</h5>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  }
}

export default CategoriesArticlePage;