import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '../../components/Footer';
import NavbarFixed from '../../components/NavbarFixed';

const STRAPI_URL = "https://strapi-gk.herokuapp.com";

export const getStaticProps = async () => {
  const postsResponse = await fetch(`${STRAPI_URL}/posts`);
  const postsData = await postsResponse.json();

  const singlePostResponse = await fetch(`${STRAPI_URL}/posts?_sort=published_at:ASC&_limit=1`);
  const singlePostJson = await singlePostResponse.json();
  const singlePostData = singlePostJson[0];

  const categoryResponse = await fetch(`${STRAPI_URL}/categories`);
  const categoryData = await categoryResponse.json();

  return {
    props: { postsData, singlePostData, categoryData },
    revalidate: 3600
  }
}

const Article = ({ postsData, singlePostData, categoryData }) => {

  const getImage = (object) => {
    let width = object.picture.formats?.large?.width || object.picture.formats?.medium?.width || object.picture.formats?.small?.width;
    let height = object.picture.formats?.large?.height || object.picture.formats?.medium?.height || object.picture.formats?.small?.height;
    let url = object.picture.formats?.large?.url || object.picture.formats?.medium?.url || object.picture.formats?.small?.url;
    return {
      width, height, url
    }
  }

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

  let mainImage = getImage(singlePostData);

  return (
    <>
      <Head>
        <title>Artikel</title>
      </Head>

      <nav>
        <NavbarFixed />
      </nav>

      <main className="w-11/12 mx-auto mt-5 lg:flex lg:flex-row-reverse lg:w-11/12 lg:justify-between xl:w-3/4">
        <aside className="my-5 lg:mb-0 lg:mt-5 lg:w-1/4">
          <div className="pt-2 relative w-56 text-gray-600">
            <input className="border-2 border-gray-300 bg-white h-10 pl-2 pr-9 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent" type="search" name="search" placeholder="Search"></input>
            <button type="submit" className="absolute top-18px right-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          <h4 className="text-sm font-bold mb-2">TOPIK LAINNYA</h4>
          {categoryData.map((category, index) => {
            return (
              <Link passHref href={`/category/${category.name}`} key={index}>
                <span className="mr-3 z-20 text-sm lg:text-base text-gray-700 hover:text-blue-500 cursor-pointer">#{category.name}</span>
              </Link>
            )
          })}
        </aside>
        <hr className="my-5 lg:hidden"></hr>
        <section className="lg:w-8/12 mt-5">
          <Link passHref href={`/posts/${singlePostData.slug}`}>
            <div className="cursor-pointer hover:scale-150">
              <div>
                <Image
                  alt="Main image"
                  src={mainImage.url}
                  width={mainImage.width}
                  height={mainImage.height}
                  layout="responsive"
                />
              </div>
              <div className="mt-3 flex flex-col gap-y-2">
                <div>
                  <h5 className="text-xs lg:text-sm text-gray-500">Artikel oleh <span className="text-black font-bold">{singlePostData.author.username}</span></h5>
                  {
                    singlePostData.categories.map((category, index) => {
                      return (
                        <Link key={index} href={`/category/${category.name}`} passHref>
                          <span className="mr-1 z-20 text-xs lg:text-sm text-gray-500 hover:text-blue-500 cursor-pointer" key={index}>#{category.name}</span>
                        </Link>
                      )
                    })
                  }
                </div>
                <h3 className="font-black text-lg">{singlePostData.title}</h3>
                <p className="text-base text-gray-600">{singlePostData.description}</p>
                <h5 className="text-xs sm:text-sm text-gray-500">
                  <span>{convertDate(singlePostData.date)}</span>
                  <span> · </span>
                  <span>{getReadingTime(singlePostData.content)} menit membaca</span>
                </h5>
              </div>
            </div>
          </Link>
          <h4 className="text-sm font-bold mt-10 -mb-5">ARTIKEL LAINNYA</h4>
          {
            postsData.slice(1, postsData.length).map((post, index) => {
              let url = post.picture.formats?.large?.url || post.picture.formats?.medium?.url || post.picture.formats?.small?.url;
              return (
                <>
                  <Link key={index} passHref href={`/posts/${post.slug}`}>
                    <div className="flex w-full gap-4 lg:gap-0 lg:w-full xl:w-5/6 justify-between h-36 mt-10 cursor-pointer">
                      <div className="w-8/12 lg:w-7/12 xl:w-8/12 flex flex-col justify-center gap-y-2 lg:gap-y-1">
                        <h5 className="text-xs lg:text-sm text-gray-500">Artikel oleh <span className="text-black font-bold">{post.author.username}</span></h5>
                        <div>
                          <h2 className="font-black text-base lg:text-xl">{post.title}</h2>
                          <h2 className="text-gray-600 text-xs lg:text-base">{post.description}</h2>
                        </div>
                        <div>
                          <h5 className="text-xxs sm:text-xs text-gray-500">
                            <span>{convertDate(post.date)}</span>
                            <span> · </span>
                            <span>{getReadingTime(post.content)} menit membaca</span>
                            <span> · </span>
                            {
                              post.categories.map((category, index) => {
                                return <span className="ml-1 border rounded-full px-1 bg-gray-200" key={index}>{category.name}</span>
                              })
                            }
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
}

export default Article;