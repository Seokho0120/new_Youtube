import React from 'react';
import { formatAgo } from '../util/date';

function VideoCard({ video }) {
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;

  return (
    <li>
      <img src={thumbnails.medium.url} alt={title} />
      <div>
        <p>{title}</p>
        <p>{channelTitle}</p>
        <p>{formatAgo(publishedAt)}</p>
      </div>
    </li>
  );
}

export default VideoCard;
