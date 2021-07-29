import ActivityCardItem from './ActivityCardItem';

const Card = ({ data }) => {
  return (
    <div className="mt-5 mx-auto">
      {data.slice(0, 6).map((item, index) => {
        if (index % 2 === 0) {
          return (
            <ActivityCardItem item={item} key={index} fadeLeft={true} fadeLeft2={false} reversed={false} />
          )
        } else {
          return (
            <ActivityCardItem item={item} key={index} fadeLeft={false} fadeLeft2={true} reversed={true} />
          )
        }
      })}
    </div>
  )
};

export default Card;

{/* <div className="mx-auto mt-5 lg:grid lg:grid-rows-3 lg:grid-cols-2 lg:grid-flow-col lg:gap-0 lg:w-10/12 lg:gap-y-10 xl:grid-cols-3 xl:grid-rows-2 xl:gap-y-10 xl:w-10/12">
  {data.slice(0, 6).map((item, index) => (
    <div key={index} className="w-11/12 mx-auto mt-5 flex gap-3 justify-between sm:w-8/12 lg:w-11/12 lg:m-0 lg:bg-blue-100 xl:gap-5 xl:justify-start filter drop-shadow-sm">
      <div className="container relative h-20 min-w-2/5 max-w-2/5 sm:h-32 lg:h-36 lg:max-w-36 lg:min-w-36 xl:min-h-40 xl:min-w-40">
        <Image
          alt="Thumbnail"
          src={item.coverpicture.formats.small.url}
          objectFit="cover"
          layout="fill"
        />
      </div>
      <div className="w-7/12 flex flex-col justify-center xl:w-1/2">
        <h3 className="font-bold text-sm">{item.title.toUpperCase()}</h3>
        <Link passHref href={`/activity/${item.slug}`}>
          <div>
            <span className="text-sm text-blue-500 hover:text-blue-700 cursor-pointer mt-1">Baca selengkapnya</span>
          </div>
        </Link>
      </div>
    </div>
  ))}
</div> */}