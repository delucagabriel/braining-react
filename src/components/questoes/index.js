import React from 'react'
import ApiServices from '../../services/apiServices'
import { useParams, Link } from 'react-router-dom'

function Questoes () {
  const [questoes, setQuestoes] = React.useState([])
  const { id } = useParams()

  React.useEffect(() => {
    ApiServices.ListaQuestoes(id)
      .then(data => {
        setQuestoes(data)
      })
  }, [id])

  return (
    <>
      {questoes.map(questao => <h2 className="center-align" key={questao.id}>{questao.title}</h2>)}
      <div className="container">
        <div className="collection">
          {questoes.map(
            questao => questao.questions.map(
              questao => <Link key={ questao.id }
                to={`/questoes/${questao.id.toString()}`}
                className="collection-item flow-text center-align">{questao.description}
              </Link>
            )
          )}
        </div>

      </div>
    </>
  )
}

export default Questoes
