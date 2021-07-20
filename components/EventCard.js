import Link from 'next/link';
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

	return (
		<div className="
			mx-auto mt-5
    	lg:grid lg:grid-rows-3 lg:grid-cols-2 lg:grid-flow-col lg:gap-0 lg:w-10/12 lg:gap-y-10
      xl:grid-cols-3 xl:grid-rows-2 xl:gap-y-10 xl:w-10/12
    ">
			{filteredData().map((item) => {
				let dateDetails = getDateDetails(item.date);
				let day = dateDetails.day;
				let monthAndYear = `${dateDetails.month} ${dateDetails.year}`;
				return (
					<div className="
          w-11/12 mx-auto mt-5 flex gap-3 justify-between
          sm:w-8/12
          lg:w-11/12 lg:m-0 lg:bg-blue-100
          xl:gap-5 xl:justify-start
          filter drop-shadow-sm
        	" key={item.id}
					>
						<div className="
						w-7/12 flex 
            xl:w-1/2 
          ">
							<div className="bg-red-500 p-3 max-w-20 min-w-20 h-20">
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