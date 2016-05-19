# is-valid-path-with-extension
Returns true if a file path has valid characters and file extension matches.

Based on [is-valid-path] (https://www.npmjs.com/package/is-valid-path). Thanks [jonschlinkert](https://github.com/jonschlinkert).

Here is a way to tell if string is a valid path of a particular file type. It's essentially is-valid-path with a second argument for a regex pattern. 🙂

```javascript
import { default as isValid } from 'is-valid-path-with-extension'

isValid('img.jpg', /\.jpg/) // true
isValid('img.jpg', /\.png/) // null
isValid('img.jpg', /\.jpg|\.jpeg|\.png|\.svg/) // null
```
