import array from 'lodash/array';
import NavbarFixed from '../../../components/NavbarFixed';
import Footer from '../../../components/Footer';
import PostsCard from '../../../components/PostsCard';
import EventCard from '../../../components/EventCard';
import { useRouter } from 'next/router';
import { useState } from 'react';

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
	const router = useRouter();
	const [searchArticleInput, setSearchArticleInput] = useState("");

	const handleSearchArticleInput = (e) => {
		setSearchArticleInput(e.target.value);
	}

	const handleSearchButtonClick = (e) => {
		e.preventDefault();
		router.push(`/posts/search?keyword=${searchArticleInput}`);
	}

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
							<div className="w-full flex justify-center mt-5">
								<div className="pt-2 relative w-56 text-gray-600">
									<input onChange={handleSearchArticleInput} className="border-2 border-gray-300 bg-white h-10 pl-2 pr-9 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent" type="search" name="search" placeholder="Coba kata kunci lain..."></input>
									<button onClick={handleSearchButtonClick} type="submit" className="absolute top-18px right-1">
										<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
											<path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
										</svg>
									</button>
								</div>
							</div>
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