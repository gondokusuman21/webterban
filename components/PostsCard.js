import Link from 'next/link';
import Image from 'next/image';

const PostsCard = ({ data }) => {

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
      sortedData().map((post, index) => {
        let url = post.picture.formats?.large?.url || post.picture.formats?.medium?.url || post.picture.formats?.small?.url;
        return (
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
        )
      })
    )
  } else {
    <div className="flex justify-center items-center">Tidak ada artikel.</div>
  }
}

export default PostsCard;