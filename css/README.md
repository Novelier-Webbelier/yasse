# YASSE - CSS

### 이곳에 YASSE 내의 모든 CSS 파일들이 있습니다.

## Principle

[HTML](../index.html)의 head 태그 안에 [style.css](style.css) 만 link 한뒤, 그 [style.css](style.css) 이 모든 CSS 파일들을 임포트하는 원리 입니다.

[index.html](../index.html)

```html
  <link rel="stylesheet" href="./css/style.css">
```

[style.css](style.css)

```css
/* Basic */
@import "...";
...

/* Components */
@import "...";
...

/* Screens */
@import "...";
...

/* Animation */
@import "...";
...

/* Ect */
@import "...";
...
```

## And...

### reset.css

  우선, 스타일들을 제 마음대로 입히고 싶기 때문에, [reset.css](reset.css) 를 추가 했습니다. 2007에 만들어진 CSS 파일이며, [이곳](https://meyerweb.com/eric/tools/css/reset/)에서 그대로 복사 했습니다.

### font.css

  해당 폰트는 [Google Fonts](https://fonts.google.com/) 를 사용하며 사용한 폰트는 [Raleway](https://fonts.google.com/specimen/Raleway?query=Raleway), [Noto Sans KR](https://fonts.google.com/noto/specimen/Noto+Sans+KR?query=Noto+Sans+KR) 입니다.

### composition

  저는 항상 CSS 파일들을 Components, Screens, Animaion 라는 세가지 폴더를 만들어 저장해 둡니다. 각각의 폴더들은 이름처럼, Component 들에 들어가는 스타일, Screen 들에 들어가는 스타일, Animation 들에 들어가는 스타일를 관리하는 파일들이 담겨져 있습니다.
