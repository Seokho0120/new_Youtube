import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import VideoCard from '../components/VideoCard';
import Youtube, { search } from '../api/youtube';
import FakeYoutube from '../api/fakeyoutubeClient';
import useYoutube from '../hooks/useYoutube';
import { useYoutubeApi } from '../Context/YoutubeApiContext';

function Videos() {
  const { keyword } = useParams();
  const { search } = useYoutube();
  const { youtube } = useYoutubeApi();

  // hooks 사용
  // const {
  //   isLoading,
  //   error,
  //   data: videos,
  // } = useQuery(['videos', keyword], () => {
  //   return search(keyword);
  // });

  // ContextApi 사용
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(['videos', keyword], () => youtube.search(keyword), {
    staleTime: 1000 * 60 * 1,
  });

  // Class 사용
  // const {
  //   isLoading,
  //   error,
  //   data: videos,
  // } = useQuery(['videos', keyword], () => {
  //   // const youtube = new Youtube();
  //   const youtube = new FakeYoutube();
  //   return youtube.search(keyword);
  // });

  return (
    <>
      <div>Videos {keyword ? `🔎${keyword}` : '🔥'}</div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong!!!!</p>}
      {videos && (
        <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 gap-y-4'>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </ul>
      )}
    </>
  );
}

export default Videos;
