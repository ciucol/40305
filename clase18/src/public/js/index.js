const name = document.getElementById('name')
const email = document.getElementById('email')

const getCookiesButton = document.getElementById('getCookies')
const setCookieButton = document.getElementById('setCookie')

getCookiesButton.addEventListener('click', () => {
  fetch('/cookies')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
})

setCookieButton.addEventListener('click', () => {
  const url = '/cookies'
  const headers = {
    'Content-Type': 'application/json'
  }
  const method = 'POST'
  const body = {
    user: email.value
  }

  fetch(url, {
    headers,
    method,
    body: JSON.stringify(body)
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
})