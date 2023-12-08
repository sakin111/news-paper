import { useEffect, useState } from "react";
import axios from 'axios';

const Trending = () => {
  const [trend, setTrend] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchTrendingArticles();
  }, []);

  const fetchTrendingArticles = async () => {
    try {
      const response = await axios.get('http://localhost:5000/trend');
      setTrend(response.data);
    } catch (error) {
      console.error('Error fetching trending articles:', error);
    }
  };

  async function updateViewCount(trendId, updatedViews) {
    try {
      const response = await axios.patch(`http://localhost:5000/trend/${trendId}/view`, {
        views: updatedViews
      });
  
      if (response.status === 200) {
        console.log('View count updated successfully');
        // Handle any other actions after successful update if needed
      } else {
        console.error('Failed to update view count');
        // Handle error scenarios
      }
    } catch (error) {
      console.error('Error updating view count:', error);
      // Handle any network errors or other issues
    }
  }

  return (
    <div className="grid grid-cols-2 gap-6">
      {trend.map(item => (
        <div key={item._id}>
          <div className="card w-full bg-base-100 shadow-xl rounded-none">
            <figure className="px-10 pt-10">
              <img src={item.image_url} alt="Shoes" className="h-72 w-full" />
            </figure>
            <div className="card-body items-center text-center">
              <h3 className="text-3xl font-custom font-Noticia">{item.title}</h3>
              <div className="card-actions">
                <button
                  className="btn btn-primary"
                  onClick={() => updateViewCount(item._id, item.views + 1)} // Update view count
                  disabled={loading}
                >
                  View Article
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Trending;
