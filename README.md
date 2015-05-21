# Pure Clear Button
Bootstrap + JQuery, Input Clear Button

## Getting Start
Load the script in your project.
```html
<script src="jquery.bootstrap-pureClearButton.js"></script>
```

Adding the `data-pure-clear-button` attribute to your text fields.
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

Create the clear button in HTML DOM.
```javascript
$("#inputText").pureClearButton('create');
```
+ __.pureClearButtn('destroy')__

Remove the clear button in HTML DOM.
```javascript
$("#inputText").pureClearButton('destroy');
```

+ __.pureClearButtn('show')__

show a clear button on the display. (css, display:block)
```javascript
$("#inputText").pureClearButton('show');
```

+ __.pureClearButtn('hide')__

Do not show a clear button on the display. (css, display:none)
```javascript
$("#inputText").pureClearButton('hide');
```
