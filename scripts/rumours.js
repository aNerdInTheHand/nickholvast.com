function getRumour () {
  fetch('https://00xzeci8z8.execute-api.eu-west-1.amazonaws.com')
    .then(response => {
      response.json()
        .then(rumour => {
          document.getElementById('rumour').innerHTML = rumour.replace(/"/g, "'")
        })
    })
    .catch(err => console.error(err))
  };
(function () {
  getRumour()
})()