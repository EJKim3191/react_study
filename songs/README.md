# REDUX 연습하기

## 폴더 구조 
./src
    ./components
        ./index.js
    ./actions
        ./App.js
    ./reducers
    ./index.js

### 왜 index.js 파일이 3개나 될까?
index.js는 각 파일의 부모 폴더(actions, components, reducers와 같은 root 폴더)의 기본 값으로 들어간다. import 할 때 하위 root를 지정하지 않을 경우 index.js를 자동으로 import 한다(webpack)

## actions
actions에서는 action creator를 담당한다.
예시와 같이 type과 payload를 리턴해준다.
- export 관련: export default는 전체적인 js파일을 리턴해준다. index의 경우 multiple 한 함수를 export하여 원하는 함수만 import시켜 사용하고자 한다. 이럴때는 export라는 키워드를 각 함수 앞에 사용하여 원하는(components/App.js)곳에서 curly braces({})를 활용하여 각 함수를 import 시켜준다.
## reducers