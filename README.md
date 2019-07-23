### jQuery插件-myToast.js

```html
<link rel="stylesheet" href="./myToast.css">
<script src="https://cdn.staticfile.org/jquery/3.4.1/jquery.js"></script>
<script src="./myToast.js"></script>
```

- 使用

  ```js
  $.myToast('hello myToast') // 默认显示3秒后消失
  $.myToast('hello myToast',5000) // 显示5秒后消失
  $.hideMyToast() // 手动控制立即消失
  ```

  

