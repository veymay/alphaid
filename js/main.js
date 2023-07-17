let login = prompt('Matn kiriting'),
  letters = 'abcdefghijklmnopqrstuvwxyz',
  list = document.querySelector('ul')
login = login.toLowerCase()
if (isNaN(login)) {
  login = login.split('')
  letters = letters.split('')
  for (let i = 0; i < letters.length; i++) {
    if (letters.includes(login[i])) {
      document.write();
      list.innerHTML += `<li><span class="meta">${login[i]}</span><span class="data">${letters.indexOf(login[i]) + 1}</span></li> `
    }
  }
} else {
  alert('Faqat matn kiriting!Sonlar mumkin emas')
}