function getRumour () {
  fetch('https://00xzeci8z8.execute-api.eu-west-1.amazonaws.com')
    .then(response => {
      console.log(response)
      document.getElementById('rumour').innerHTML = response
    })
    .catch(err => console.error(err))
  };
(function () {
  getRumour()
})()