import array from 'lodash/array';
import NavbarFixed from '../../../components/NavbarFixed';
import Footer from '../../../components/Footer';
import PostsCard from '../../../components/PostsCard';
import EventCard from '../../../components/EventCard';

const STRAPI_URL = "https://strapi-gk.herokuapp.com";

export const getServerSideProps = async ({ query }) => {
	const { keyword } = query;
	if (!keyword) {
		return {
			redirect: {
				destination: '/',
				permanent: false,
			}
		}
	}
	const keywordFromTitleResponse = await fetch(`${STRAPI_URL}/posts?title_contains=${keyword}`);
	const dataFromTitle = await keywordFromTitleResponse.json();

	const keywordFromContentResponse = await fetch(`${STRAPI_URL}/posts?content_contains=${keyword}`);
	const dataFromContent = await keywordFromContentResponse.json();

	const uniqueResult = array.uniqBy([...dataFromTitle, ...dataFromContent], 'id');

	const eventsResponse = await fetch(`${STRAPI_URL}/events`);
	const eventsData = await eventsResponse.json();

	return {
		props: { postsData: uniqueResult, eventsData, query: keyword }
	}
};

const Search = ({ postsData, eventsData, query }) => {
	if (postsData.length > 0) {
		return (
			<>
				<NavbarFixed />
				<main className="min-h-9/10-screen">
					<div className="lg:w-10/12 mt-10 lg:flex lg:justify-between lg:mx-auto">
						<div className="w-11/12 sm:w-8/12 xl:w-11/12 mx-auto lg:w-3/5 lg:mx-0">
							<div className="-mb-5 flex justify-start w-full lg:w-11/12 text-lg tracking-tight">
								<h5>Hasil pencarian untuk <span className="font-bold ">&ldquo;{query}&ldquo;</span></h5>
							</div>
							<PostsCard showButton={false} data={postsData} />
						</div>

						<div className="w-11/12 mt-5 lg:mt-0 sm:w-8/12 lg:w-2/6 mx-auto lg:mx-0">
							<div className="flex justify-center font-serif w-11/12 mx-auto text-lg font-bold tracking-tight">
								<h5>Event Terbaru</h5>
							</div>
							<div>
								<EventCard data={eventsData} />
							</div>
						</div>
					</div>
				</main>
				<Footer />
			</>
		)
	} else {
		return (
			<>
				<NavbarFixed />
				<main className="min-h-9/10-screen">
					<div className="lg:w-10/12 mt-10 lg:flex lg:justify-between lg:mx-auto">
						<div className="w-11/12 sm:w-8/12 xl:w-11/12 mx-auto lg:w-3/5 lg:mx-0">
							<div className="flex justify-start w-full lg:w-11/12 text-lg tracking-tight">
								<h5>Hasil pencarian untuk <span className="font-bold ">&ldquo;{query}&ldquo;</span></h5>
							</div>
							<PostsCard showButton={false} data={postsData} />
						</div>

						<div className="w-11/12 mt-5 lg:mt-0 sm:w-8/12 lg:w-2/6 mx-auto lg:mx-0">
							<div className="flex justify-center font-serif w-11/12 mx-auto text-lg font-bold tracking-tight">
								<h5>Event Terbaru</h5>
							</div>
							<div>
								<EventCard data={eventsData} />
							</div>
						</div>
					</div>
				</main>
				<Footer />
			</>
		)
	}

};

export default Search;