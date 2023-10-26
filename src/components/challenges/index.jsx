import { useState } from 'react'
import styles from './style.module.css'

export default function Challenges (){

  const plans = [
    {
      "name": "X1000",
      "description": "Desconto de até 33%",
      "benefits": [
        {
          "description": "Desafio com até 8 mini contratos"
        },
        {
          "description": "Meta Aprovação R$800,00"
        },
        {
          "description": "Start com 8 mini contratos"
        },
        {
          "description": "Perda Diária / Draedowns R$400,00"
        },
        {
          "description": "Perda Total / Draedowns R$800,00"
        }
      ],
      "platform": [
        {
          "name": "Profit One"
        },
        {
          "name": "Profit Plus"
        },
        {
          "name": "Profit Pro"
        }
      ],
      "repasse": "81%",
      "planLink": "http://..."
    },
    {
      "name": "X500",
      "description": "Desconto de até 33%",
      "benefits": [
        {
          "description": "Desafio com até 8 mini contratos"
        },
        {
          "description": "Meta Aprovação R$800,00"
        },
        {
          "description": "Start com 8 mini contratos"
        },
        {
          "description": "Perda Diária / Draedowns R$400,00"
        },
        {
          "description": "Perda Total / Draedowns R$800,00"
        }
      ],
      "platform": [
        {
          "name": "Profit One"
        },
        {
          "name": "Profit Plus"
        },
        {
          "name": "Profit Pro"
        }
      ],
      "repasse": "81%",
      "planLink": "http://..."
    },
  ]

  const [selectedPlans, setSelectedPlans] = useState([]);
  const [filtersChallenges, setFiltersChallenges] = useState([]);
  const [challenges, setChallenges] = useState([]);

  const filterAction = [
    {
      "name": "Prop X",
      "challenges": [
        {
          "name": "X500"
        },
        {
          "name": "X1000"
        }
      ]
    },
    {
      "name": "Prop Extended",
      "challenges": [
        {
          "name": "X500"
        },
        {
          "name": "X1000"
        }
      ]
    }
  ]

  const filterFuture = [
    {
      "name": "Prop Free",
      "challenges": [
        {
          "name": "One"
        },
        {
          "name": "Plus"
        },
        {
          "name": "Pro"
        }
      ]
    },
    {
      "name": "Prop X",
      "challenges": [
        {
          "name": "One"
        },
        {
          "name": "Plus"
        },
        {
          "name": "Pro"
        }
      ]
    }
  ]

  const filterForexx = [
    {
      "name": "forex",
      "challenges": [
        {
          "name": "40.000 USD"
        },
        {
          "name": "80.000 USD"
        },
        {
          "name": "800.000 USD"
        }
      ]
    }
  ]

  function handleClickFilter(filter) {
    setChallenges(filter.challenges)
  }

  function handleSelectedPlan(challenge){
    const plan = plans.filter(plan => plan.name === challenge.name);

    setSelectedPlans(plan)
  }

  function handleClickSelectedChallenge(filter) {
    setFiltersChallenges(filter)

    setChallenges([])
  }

  return (
    <div className={styles.content}>   
      <h1>Escolha seu Desafio</h1>
      
      <ul className={styles.typeChallenge}>
        <li onClick={() => handleClickSelectedChallenge(filterAction)}>AÇÕES</li>
        <li onClick={() => handleClickSelectedChallenge(filterFuture)}>FUTUROS</li>
        <li onClick={() => handleClickSelectedChallenge(filterForexx)}>FOREX</li>
      </ul>
      
      <ul className={styles.filterChallenge}>
        {filtersChallenges.map( (filter) => (
          <li key={filter.name} onClick={() => handleClickFilter(filter)}>{filter.name}</li>
        ))}
      </ul>
      
      <ul className={styles.challenges}>
        {challenges.map( (challenge) => (
          <li key={challenge.name} onClick={() => handleSelectedPlan(challenge)}>{challenge.name}</li>
        ))}
      </ul>

      <div className={styles.selectedChallenge}>
        {selectedPlans.map( (plan) => (
          <div key={plan.name} className={styles.challenge}>
            <h1>{plan.name}</h1>
            <span>{plan.description}</span>
            
            <ul>
              {plan.benefits.map( (benefit) => 
                <li key={benefit.description} >{benefit.description}</li>
              )}
            </ul>

            <select type="text" placeholder="plataforma">
              {plan.platform.map( (platform) => 
                <option key={platform.name} value={platform.name}>{platform.name}</option>
              )}
            </select>

            <span>Repasse {plan.repasse}</span>

            <a href={plan.planLink}>ADESÃO AO DESAFIO</a>
          </div>
        ))}
      </div>
    </div>
  )
}