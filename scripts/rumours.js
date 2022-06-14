function getRumour () {
  fetch('https://00xzeci8z8.execute-api.eu-west-1.amazonaws.com')
    .then(response => {
      response.json()
        .then(jsonr => document.getElementById('rumour').innerHTML = JSON.parse(jsonr.body).replace(/"/g, "'"))
    })
    .catch(err => console.error(err))
  };
(function () {
  getRumour()
})()