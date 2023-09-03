import React, { createContext, useContext } from 'react';
import Youtube from '../api/youtube';
import FakeYoutube from '../api/fakeyoutube';

export const YoutubeApiContext = createContext();

// mock데이터 or 진짜 데이터
// const youtube = new FakeYoutube();
const youtube = new Youtube();

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
