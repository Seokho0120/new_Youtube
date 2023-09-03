import React from 'react';
import { useYoutubeApi } from '../Context/YoutubeApiContext';
import { useQuery } from '@tanstack/react-query';

function ChannelInfo({ name, id }) {
  const { youtube } = useYoutubeApi();
  const { data: url } = useQuery(
    ['channel', id],
    () => youtube.channelImageURL(id),
    { staleTime: 1000 * 60 * 5 }
    // 이미지는 자주 바꾸지 않는 데이터이기 때문에 staleTime 5분으로 설정
  );

  return (
    <div className='flex my-4 mb-8 items-center'>
      {url && <img className='w-10 h-10 rounded-full' src={url} alt={name} />}
      <p className='text-lg font-medium ml-2'>{name}</p>
    </div>
  );
}

export default ChannelInfo;
