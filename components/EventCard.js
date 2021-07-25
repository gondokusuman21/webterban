import Link from 'next/link';
import eventEmptyStateIllustration from '../public/undraw_void_3ggu.svg';
import Image from 'next/image';

const Card = ({ data }) => {

  const getCurrentDate = () => {
    let d = new Date();
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    let year = d.getFullYear();

    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;

    return [year, month, day].join('-');
  }

  const getDateDetails = (inputDate) => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agt', 'Sept', 'Okt', 'Nov', 'Des'];
    const day = inputDate.substring(inputDate.length - 2, inputDate.length);
    const monthIndex = inputDate.substring(5, 7).indexOf("0") == 0 ? inputDate.substring(5, 7).substring(1) : inputDate.substring(5, 7);
    const month = months[monthIndex - 1];

    return {
      day,
      month
    }
  }

  const filteredData = () => {
    let currentDate = getCurrentDate();
    let filteredEventsData = data.filter((item) => {
      return item.date >= currentDate;
    });

    return filteredEventsData;
  }

  const sortedData = () => {
    let filteredEventsData = filteredData();
    let sortedEventsData = filteredEventsData.sort(compare);
    return sortedEventsData;
  }

  const compare = (object1, object2) => {
    if (object1.date > object2.date) return 1
    if (object1.date < object2.date) return -1
    return 0;
  }

  if (data.length > 0) {
    return (
      <>
        <div>
          {sortedData().map((item, index) => {
            let dateDetails = getDateDetails(item.date);
            let day = dateDetails.day;
            let month = dateDetails.month;
            return (
              <div key={index} className="flex mt-5 justify-start h-20 items-center w-4/5">
                <div className="bg-blue-200 border border-blue-200 flex justify-center items-center flex-col max-w-20 min-w-20 h-20">
                  <h5 className="text-xl font-black">{day}</h5>
                  <h5>{month}</h5>
                </div>
                <div className="w-4/5 flex items-center border-r border-t border-b border-blue-200 h-full">
                  <h3 className="font-bold text-sm ml-2">{item.title}</h3>
                </div>
              </div>
            )
          })}
        </div>
        <Link passHref href={`/article`}>
          <button className="mt-5 lg:mt-10 xl:w-5/6 p-1 text-xs lg:text-base border border-gray-400 w-full z-20 hover:font-bold">Lihat Lebih Banyak</button>
        </Link>
      </>
    )
  } else {
    return (
      <div className="mt-10">
        <div className="flex justify-center w-full items-center flex-col">
          <div className="w-36 h-36">
            <Image
              alt="Empty state"
              src={eventEmptyStateIllustration}
              width={150}
              height={150}
              layout="responsive"
            />
          </div>
          <h5 className="text-sm font-medium mt-4">Belum ada event untuk saat ini.</h5>
        </div>
      </div>
    )
  }

};

export default Card;