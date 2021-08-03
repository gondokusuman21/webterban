import { Fade } from 'react-reveal';
import Image from 'next/image';
import Link from 'next/link';

const ActivityCardItem = ({ item, fadeLeft, fadeLeft2, reversed }) => {
  let fadeRight = fadeLeft ? false : true;
  let fadeRight2 = fadeLeft2 ? false : true;
  let flexRowReverse = reversed ? "flex-row-reverse" : null;
  let classNames = `${flexRowReverse}` + " w-11/12 md:w-8/12 mb-10 md:mb-5 mx-auto lg:flex lg:gap-x-20 overflow-hidden"
  let src = item.coverpicture.formats?.large?.url || item.coverpicture.formats?.medium?.url || item.coverpicture.formats?.small?.url;

  return (
    <div className={classNames}>
      <Fade left={fadeLeft} right={fadeRight}>
        <div className="relative w-full h-60 lg:h-80 lg:w-96 xl:h-96 xl:w-128">
          <Image
            alt="Thumbnail"
            src={src}
            objectFit="cover"
            layout="fill"
          />
        </div>
      </Fade>
      <Fade left={fadeLeft2} right={fadeRight2}>
        <div className="w-full flex flex-col gap-y-2 justify-center lg:w-7/12 xl:w-7/12">
          <h3 className="mt-2 font-bold text-md lg:text-2xl">{item.title}</h3>
          <p className="text-base">{item.description}</p>
          <Link passHref href={`/activity/${item.slug}`}>
            <div className="my-3">
              <span className="text-sm text-white bg-blue-500 py-3 px-6 rounded-full hover:bg-blue-700 cursor-pointer">Lihat selengkapnya</span>
            </div>
          </Link>
        </div>
      </Fade>
    </div>
  )
};

export default ActivityCardItem;