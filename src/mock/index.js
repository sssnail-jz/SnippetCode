const fs = require('fs')
const path = require('path')
const Mock = require('mockjs')
const JSON5 = require('json5')

function getJsonFile (filePath) {
  var json = fs.readFileSync(path.resolve(__dirname, filePath), 'utf-8')
  return JSON5.parse(json)
}

module.exports = function (app) {
  app.get('/snippet/snippet-list', function (rep, res) {
    var json = getJsonFile('./snippet-list.json5')
    res.json(Mock.mock(json))
  })
  app.get('/snippet/snippet-tag-cloud', function (rep, res) {
    var json = getJsonFile('./snippet-tag-cloud.json5')
    res.json(Mock.mock(json))
  })
  app.get('/user/user-list', function (rep, res) {
    var json = getJsonFile('./user-list.json5')
    res.json(Mock.mock(json))
  })
}
