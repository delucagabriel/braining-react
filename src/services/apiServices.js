const ApiServices = {
  ListaMaterias: () => {
    return fetch('http://delucagabriel.com/api/v1/materias')
      .then(response => response.json())
  },
  ListaQuestoes: materiaId => {
    return fetch(`http://delucagabriel.com/api/v1/materias/${materiaId}`)
      .then(response => response.json())
  },
  ListaAlternativas: questaoId => {
    return fetch(`http://delucagabriel.com/api/v1/questoes/${questaoId}`)
      .then(response => response.json())
  }
}
export default ApiServices
