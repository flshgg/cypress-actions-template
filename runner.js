const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjRkMDAwODdiLWNiMWQtNGY4OS05OTY2LTRkZDc3OTVhNTExMS0xNzc3NDAwNTM3ODQxIiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiZDUwOWRiYjktMDMyOC00YWNlLWEyYzItMTUyNzBhZDk2ZDJjIiwidHlwZSI6InQifQ.bczNHwTmPpRYFk7p13C9t96xzRZ7DMjlE404UfYYgX4'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
