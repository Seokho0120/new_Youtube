import axios from 'axios';

export default class YoutubeClient {
  constructor() {
    this.httpClient = axios.create({
      baseURL: 'https://www.googleapis.com/youtube/v3',
      params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
    });
  }

  async search(parmas) {
    return this.httpClient.get('search', parmas);
  }

  async videos(parmas) {
    return this.httpClient.get('videos', parmas);
  }

  async channels(parmas) {
    return this.httpClient.get('videos', parmas);
  }

  async playlists(parmas) {
    return this.httpClient.get('playlists', parmas);
  }
}
