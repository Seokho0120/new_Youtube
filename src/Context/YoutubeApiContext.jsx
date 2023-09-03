import React, { createContext, useContext } from 'react';
import Youtube from '../api/youtube';
import FakeYoutube from '../api/fakeyoutubeClient';
import YoutubeClient from '../api/youtubeClient';

export const YoutubeApiContext = createContext();

// mock데이터 or 진짜 데이터
// const youtube = new FakeYoutube();
const client = new YoutubeClient();
const youtube = new Youtube(client);

export function YoutubeApiProvider({ children }) {
  return (
    <YoutubeApiContext.Provider value={{ youtube }}>
      {children}
    </YoutubeApiContext.Provider>
  );
}

export function useYoutubeApi() {
  return useContext(YoutubeApiContext);
}
