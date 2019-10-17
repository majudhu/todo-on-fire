
const txt = document.getElementById('txt');
const add = document.getElementById('add');
const get = document.getElementById('get');
const list = document.getElementById('list');
const API_URL = (location.hostname == 'localhost')
  ? 'http://localhost:5001/todo-on-fire-c660e/asia-east2/'
  : 'https://asia-east2-' + location.hostname.split('.')[0] + '.cloudfunctions.net/';

get.addEventListener('click', async e => {
  let todos = (await await fetch(API_URL + 'get').json());
  for (todo in  todos) {
    let p = document.createElement('p');
    p.textContent = todos[todo].text;
    list.appendChild(p);
  }
});

add.addEventListener('click', async e =>
  fetch(API_URL + 'add',
    { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: "text=" + txt.value })
    .then(() => fetch(API_URL + 'get')
      .then(response => response.json())
      .then(json => {
        list.innerHTML = '';
        for (todo in json) {
          let p = document.createElement('p');
          p.textContent = json[todo].text;
          list.appendChild(p);
        }
      }))
);