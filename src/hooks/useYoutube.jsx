import axios from 'axios';

export default function useYoutube() {
  const httpClient = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
  });

  const search = async (keyword) => {
    return keyword ? searchByKeyword(keyword) : mostPopular();
  };

  const searchByKeyword = async (keyword) => {
    const response = await httpClient.get('search', {
      params: {
        part: 'snippet',
        maxResults: 25,
        type: 'video',
        q: keyword,
      },
    });

    const items = response.data.items.map((item) => ({
      ...item,
      id: item.id.videoId,
    }));
    return items;
  };

  const mostPopular = async () => {
    const response = await httpClient.get('videos', {
      params: {
        part: 'snippet',
        maxResults: 25,
        chart: 'mostPopular',
      },
    });

    return response.data.items;
  };

  return { search };
}
