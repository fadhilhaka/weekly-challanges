function tugasDOM() {
  var idfillMe = document.getElementById('fill-me')
  var classChangeAllOfMe = document.getElementsByClassName('change-all-of-me')
  var tagH2 = document.getElementsByTagName('h2')

  idfillMe.innerHTML = 'HALO'

  for (var a = 0; a < classChangeAllOfMe.length; a++) {
    classChangeAllOfMe[a].innerHTML = 'HALO JUGA'
  }

  for (var b = 0; b < tagH2.length; b++) {
    tagH2[b].innerHTML = 'Apa Kabar!'
  }
}