import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useYoutubeApi } from '../Context/YoutubeApiContext';
import VideoCard from './VideoCard';

function RelatedVideos({ id }) {
  const { youtube } = useYoutubeApi();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(['related', id], () => youtube.RelatedVideos(id));

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong!!!!</p>}
      {videos && (
        <ul>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} type='list' />
          ))}
        </ul>
      )}
    </>
  );
}

export default RelatedVideos;
