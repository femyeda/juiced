const store = require('mem-fs').create()
const editor = require('mem-fs-editor').create(store)

export default editor
