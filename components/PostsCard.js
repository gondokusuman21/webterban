import Link from 'next/link';
import Image from 'next/image';
import postEmptyStateIllustration from '../public/post_empty_state.svg';
import Fade from 'react-reveal';

const PostsCard = ({ data, showButton }) => {

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

  const sortedData = () => {
    let filteredEventsData = data;
    let sortedEventsData = filteredEventsData.sort(compare);
    return sortedEventsData;
  }

  const compare = (object1, object2) => {
    if (object1.date > object2.date) return -1
    if (object1.date < object2.date) return 1
    return 0;
  }

  if (data.length > 0) {
    return (
      <>
        {
          sortedData().map((post, index) => {
            let url = post.picture.formats?.large?.url || post.picture.formats?.medium?.url || post.picture.formats?.small?.url;
            return (
              <>
                <Fade>
                  <Link key={index} passHref href={`/posts/${post.slug}`}>
                    <div className="flex w-full gap-4 lg:gap-0 lg:w-full xl:w-5/6 justify-between h-36 mt-10 cursor-pointer">
                      <div className="w-8/12 lg:w-7/12 xl:w-8/12 flex flex-col justify-center gap-y-2 lg:gap-y-1">
                        <div>
                          {
                            post.categories.map((category, index) => {
                              return (
                                <Link key={index} href={`/category/${category.name}`} passHref>
                                  <span className=" z-20 text-xs inline lg:text-sm mr-2 font-bold">#{category.name}</span>
                                </Link>
                              )
                            })
                          }
                        </div>
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
                </Fade>
              </>
            )
          })
        }
        {
          showButton &&
          <Link passHref href={`/posts`}>
            <button className="mt-5 lg:mt-10 xl:w-5/6 p-1 text-xs lg:text-base border border-black w-full z-20 hover:font-bold">Lihat Lebih Banyak</button>
          </Link>
        }
      </>
    )
  } else {
    return (
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
    )
  }
}

export default PostsCard;