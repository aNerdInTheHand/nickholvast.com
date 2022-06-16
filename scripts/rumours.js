const localhostRumour = 'Bas Dost has been rumoured to be on his way to Newcastle. The Football Pink reported he can no longer resist the temptation of vegan sausage rolls.'

function getRumour () {
  fetch('https://00xzeci8z8.execute-api.eu-west-1.amazonaws.com')
    .then(response => {
      response.json()
        .then(rumour => {
          document.getElementById('rumour').innerHTML = rumour.replace(/"/g, "'")
        })
    })
    .catch(err => {
      // likely cors blocking localhost
      console.error(err)
      document.getElementById('rumour').innerHTML = localhostRumour
    })
  };
(function () {
  getRumour()
})()