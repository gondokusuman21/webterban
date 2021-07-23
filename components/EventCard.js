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
    const year = inputDate.substring(0, 4);
    const monthIndex = inputDate.substring(5, 7).indexOf("0") == 0 ? inputDate.substring(5, 7).substring(1) : inputDate.substring(5, 7);
    const month = months[monthIndex - 1];

    return {
      day,
      year,
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

  return (
    <div className="">
      {sortedData().map((item) => {
        let dateDetails = getDateDetails(item.date);
        let day = dateDetails.day;
        let monthAndYear = `${dateDetails.month} ${dateDetails.year}`;
        return (
          <div className="" key={item.id}
          >
            <div className="flex gap-3 w-4/5">
              <div className="bg-blue-200 p-3 max-w-20 min-w-20 h-20 mb-3">
                <h5 className="text-xl font-black text-center">{day}</h5>
                <h5>{monthAndYear}</h5>
              </div>
              <h3 className="font-bold text-sm">{item.title.toUpperCase()}</h3>
            </div>
          </div>
        )
      })}
    </div>
  )
};

export default Card;