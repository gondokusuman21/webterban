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

  if (data.length > 0) {
    return (
      data.map((post, index) => {
        return (
          <Link key={index} passHref href={`/posts/${post.slug}`}>
            <div className="flex gap-2 lg:gap-5 h-36 mt-5 cursor-pointer">
              <div className="w-8/12 flex flex-col justify-center gap-y-2 lg:gap-y-1">
                <h5 className="text-xs lg:text-sm text-gray-500">Artikel oleh <span className="text-black font-medium">{post.author.username}</span></h5>
                <div>
                  <h2 className="font-black text-base lg:text-xl">{post.title}</h2>
                  <h2 className="text-gray-600 text-xs lg:text-base">{post.description}</h2>
                </div>
                <div>
                  <h5 className="text-xs text-gray-500">
                    <span>{convertDate(post.date)}</span>
                    <span> · </span>
                    <span className="border rounded-full px-1 bg-gray-200">{getReadingTime(post.content)} menit membaca</span>
                  </h5>
                </div>
              </div>
              <div className="container relative w-48">
                <Image alt="Image" src={post.picture.formats.small.url} objectFit="cover"
                  layout="fill"></Image>
              </div>
            </div>
          </Link>
        )
      })
    )
  }
}

export default PostsCard;