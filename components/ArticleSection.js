import PostsCard from "./PostsCard";
import EventCard from "./EventCard";

const ArticleSection = ({ postsData, eventsData }) => {
    return (
        <section className="bg-dark-blue lg:container py-10 lg:w-10/12 lg:flex lg:justify-between lg:mx-auto">
            <div className="w-11/12 sm:w-8/12 xl:w-11/12 mx-auto lg:w-3/5 lg:mx-0">
                <div className="text-white flex justify-center font-serif w-full lg:w-11/12 text-lg lg:text-3xl font-bold tracking-tight">
                    <h5>Artikel Terbaru</h5>
                </div>
                <PostsCard data={postsData} />
            </div>

            <div className="w-11/12 mt-5 lg:mt-0 sm:w-8/12 lg:w-2/6 mx-auto lg:mx-0">
                <div className="flex justify-center font-serif w-11/12 mx-auto text-lg lg:text-3xl font-bold tracking-tight">
                    <h5>Event Terbaru</h5>
                </div>
                <div>
                    <EventCard data={eventsData} />
                </div>
            </div>
        </section>
    )
};

export default ArticleSection;