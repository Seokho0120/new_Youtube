## Router Tree

라우터 트리 구조

```javascript
<APP>
  / <Videos>
  /videos <Videos>
  /videos/query <Videos>(search)
  /videos/watch/id <VideoDetail>
```

## fetch vs axios

#### fetch

단점

- 매번 response를 json으로 받아야됨
- 네트워크 문제가 있거나 소켓에 타임아웃되었거나 오프라인이거나 등등 이럴때는 catch로 에러를 받아서 핸들링 가능하지만, 백엔드에서 오류 status code(404, 400 등 400대 코드)를 주는데 fetch는 이런 오류 코드도 어찌됫건 받았기 때문에 성공케이스라고 판단하고 .then()으로 들어옴. 그래서 내가 200대면 성공, 200대가 아니라면 throw로 에러 처리를 해줘야함

#### axios

fetch의 단점을 해결할수 있는 방법 axios

- axios는 성공하면 response가 전달되고 json으로 변환해주지 않아도됨
- 실패 시 catch로 에러를 잡으면 됨. status code가 200대일 경우가 아니면 나머지는 전부 catch로 들어옴. 네트워크 통신 문제 뿐만 아니라 백엔드에서 처리를 잘못해도 catch로 들어와서 처리가 쉬움
