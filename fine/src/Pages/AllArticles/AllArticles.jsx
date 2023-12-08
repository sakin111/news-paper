import { useInfiniteQuery } from "@tanstack/react-query";
import InfiniteScroll from 'react-infinite-scroll-component';


const getArticle = async ({ pageParams = 0 }) => {

    try {
      const res = await fetch(`http://localhost:5000/articles?limit=10&offset=${pageParams}`);
      const data = await res.json();
      console.log('Received data:', data); // Log the received data here
      return { ...data, prevOffset: pageParams };
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };
  





const AllArticles = () => {

  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({

    queryKey: ["articles"],
    queryFn: getArticle,
    getNextPageParam: (lastPage) => {

      if (lastPage.prevOffset + 10 > lastPage.articlesCount) {
        return false;
      }
      return lastPage.prevOffset + 10

    }

  })

  console.log(data);
  const articles = data?.pages.reduce((acc, page) => {
    if (Array.isArray(page.articles)) {
      return [...acc, ...page.articles];
    }
    return acc; // Return accumulator unchanged if page.articles is not an array
  }, []);

  return (
    <div>
      <InfiniteScroll
        dataLength={articles ? articles.length : 0}
        next={fetchNextPage}
        hasMore={hasNextPage}
        loading={<div>Loading....</div>}

      >
        <div className="w-11/12 mx-auto grid lg:grid-cols-3 md: grid-cols-2 gap-5 my-10">
        {
  articles &&
  articles.map((article, idx) => {
    return (
      <div className="border-2 bg-slate-500 rounded-md" key={idx}>
        {article.image && <img src={article.image} alt={`Image ${idx}`} />}
        {article.description && <p>{article.description}</p>}
      </div>
    );
  })
}

        </div>
      </InfiniteScroll>
    </div>
  );
};

export default AllArticles;