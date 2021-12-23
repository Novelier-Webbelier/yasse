# YASSE - JavaScript

### 이곳에 YASSE 내의 모든 JavaScript 파일들이 있습니다

## Principle

[HTML](../index.html)의 body 태그 안에 [main.js](main.js) 만 script 태그 안에 src 속성으로 넣은 뒤, 그 [main.js](main.js) 가 모든 JavaScript 파일들을 임포트하는 원리 입니다.

[index.html](../index.html)

```html
  <script type="module" src="./js/main.js"></script>
```

[main.js](main.js)

```javascript

// Components
import * as ... from "...";
...

// Screens
import * as ... from "...";
...

// Classes
import * as ... from "...";
...

```

## And...

### composition

  저는 항상 JavaScript 파일들을 Components, Screens, Class 라는 세가지 폴더를 만들어 저장해 둡니다. 각각의 폴더들을 이름처럼, Component 들에 들어가는 기능, Screen 들에 들어가는 기능, 그리고 정의할 여러가지 Class 들을 관리하는 파일들이 담겨져 있습니다.
