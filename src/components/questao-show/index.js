import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ApiServices from '../../services/apiServices'

export default function QuestaoShow () {
  const [dados, setDados] = useState([])
  const { questaoId } = useParams()
  console.log(questaoId)

  useEffect(() => {
    ApiServices.ListaAlternativas(questaoId)
      .then(data => {
        setDados(data)
      })
  }, [questaoId])

  console.log(dados)

  return (
    <>
      <div className="valign-wrapper">
        {dados.map(questao => (
          <h1 key={questao.id} className="center-align">{questao.description}</h1>
        ))}
      </div>
      <p>
        <div>
          {dados.map(questao => questao.answers.map(resposta => (
            <button key={resposta.id}> {resposta.text} </button>
          ))
          )}
        </div>
      </p>
    </>
  )
}
