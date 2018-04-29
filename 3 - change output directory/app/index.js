import { fromWebpack } from './domdom'

var markup = `Webpack 4 sayesinde; <strong> "ayar dosyasız" </strong> <a href="src/index.js">src/index.js'ten</a> geliyorum dostum!`

fromWebpack.insertAdjacentHTML('afterbegin', markup)
