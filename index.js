import('./1.js')
  .then(console.log)
  .then(() => import('./2.js'))
  .then(console.log)
