import array from 'lodash/array';

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

    const tempArray = array.uniqBy([...dataFromTitle, ...dataFromContent], 'id');

    return {
        props: { data: tempArray }
    }
};

const Search = ({ data }) => {
    return (
        <div>{data.length}</div>
    )
};

export default Search;