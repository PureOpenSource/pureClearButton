# Pure Clear Button
Bootstrap + JQuery, Input Clear Button

## 시작하기
Clear Button이 필요한 input에 `data-pure-clear-button`을 추가한다.
```html
<input type="text" data-pure-clear-button>
<input type="text" data-pure-clear-button="true">
```

## Supported Input Type
+ text
+ password
+ email
+ url
+ search
+ tel
+ number
+ datetime

## Method
+ __.pureClearButtn('create')__

Clear Button을 생성한다.
```javascript
$("#inputText").pureClearButton('create');
```
+ __.pureClearButtn('destroy')__

Clear Button을 제거한다.
```javascript
$("#inputText").pureClearButton('destroy');
```

+ __.pureClearButtn('show')__

Clear Button을 화면에 표시한다.
```javascript
$("#inputText").pureClearButton('show');
```

+ __.pureClearButtn('hide')__

Clear Button을 화면에 표시하지 않는다.
```javascript
$("#inputText").pureClearButton('hide');
```
