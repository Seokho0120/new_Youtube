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
  } = useQuery(['playlists', id], () => youtube.channelPlaylists(id), {
    staleTime: 1000 * 60 * 5,
  });

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
