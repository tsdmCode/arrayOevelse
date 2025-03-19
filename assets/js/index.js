console.log('Dø i helvede');

let arr = [
  'Diller',
  'penis',
  'Javertus',
  'PIK',
  'tissemand',
  'sjover',
  'lem',
  'kæp',
  'spyd',
  'stang',
  'jern',
  'kødfløjte',
  'big poppa',
];

arr.forEach((i) => {
  const list = document.getElementById('piklist');
  const li = document.createElement('li');
  li.innerText = i;

  console.log(li);

  list.appendChild(li);
});
