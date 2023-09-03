import axios from 'axios';

export default class FakeYoutubeClient {
  // mock 데이터 읽기

  async search({ params }) {
    return axios.get(
      `/videos/${params.relatedVideoToVideoId ? 'related' : 'search'}.json`
    );
  }

  async videos() {
    return axios.get('/videos/popular.json');
  }

  async channels() {
    return axios.get('/videos/channel.json');
  }
}
