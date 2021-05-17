//HOF MAP - OBJETIVO: retornar um novo array que tem como base um 
//array já existente porém com sua informação modificada

//Cria uma função responsável por criar um novo estudante, no formato de objeto, 
//recebendo como parâmetro nome e idade. 
let newStudent = (name, age) => {
  return { name, age }
}

//Cria-se um array aonde são feitas as inclusões dos alunos através do uso da função
//criada anteriormente. 
let students = [
  newStudent("Mario", 23),
  newStudent("Pedro", 45),
  newStudent("Joaquina", 29),
  newStudent("João", 35)
];

//Essa função será a responsável por transformar o array anterior em um novo array
//que contém ambas as informações dos alunos.
function infoStudent() {
  let infoStudent = [];

  //Para cada estudante dentro da lista de estudantes, vamos concatenar o nome e a idade
  //a outras strings. Para isso utilizamos template strings.
  //Por fim retornamos esse array alterado. 
  for (let student of students) {

    infoStudent.push(`${student.name} tem ${student.age} anos.`);
  }

  return infoStudent;
}

//Exibe ambos os arrays, mostrando que não houve alteração no array de referência.
console.log(students);
console.log(infoStudent());



