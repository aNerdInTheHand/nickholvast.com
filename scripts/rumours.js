function getRumour () {
  const options = {
    headers: new Headers({ 'x-api-key': 'uw5ICBVlhV3Omu1b3NkQg1tw47WXDaK85bEfme7q' })
  }
  fetch('https://00xzeci8z8.execute-api.eu-west-1.amazonaws.com')
    .then(response => {
      console.log(response)
      response.json()
        .then(rumour => {
          console.log(rumour)
          document.getElementById('rumour').innerHTML = rumour.replace(/"/g, "'")
        })
    })
    .catch(err => console.error(err))
  };
(function () {
  getRumour()
})()