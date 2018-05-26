//[Exercises 3] Highest Score

//Logic Challenge: Highest Score

function highestScore (students) {
  // Code disini
  //cari biggest
  var highClass = {}
  for (var a = 0; a < students.length; a++) {
    highClass[students[a].class] = {
      name: students[a].name,
      score:  students[a].score,
    }
  }
  for (var b = 0; b < students.length; b++) {
    if (students[b].score > highClass[students[b].class].score) {
      highClass[students[b].class] = {
      name: students[b].name,
      score:  students[b].score,
    }
    }
  } 
  return highClass
}

// TEST CASE
console.log(highestScore([
  {
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
  },
  {
    name: 'Alexei',
    score: 85,
    class: 'wolves'
  },
  {
    name: 'Sergei',
    score: 74,
    class: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
  }
]));

// {
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }


console.log(highestScore([
  {
    name: 'Alexander',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Alisa',
    score: 76,
    class: 'wolves'
  },
  {
    name: 'Vladimir',
    score: 92,
    class: 'foxes'
  },
  {
    name: 'Albert',
    score: 71,
    class: 'wolves'
  },
  {
    name: 'Viktor',
    score: 80,
    class: 'tigers'
  }
]));

// {
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }


console.log(highestScore([])); //{}