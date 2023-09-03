import axios from 'axios';

export default class FakeYoutubeClient {
  // mock 데이터 읽기
  async search() {
    return axios.get('/videos/search.json');
  }

  async videos() {
    return axios.get('/videos/popular.json');
  }
}
