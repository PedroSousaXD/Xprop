import React, { useState, useEffect } from 'react';
import styles from './style.module.css';

import {Check} from 'phosphor-react'

export default function Challenges() {
 
  const plans = [
    {
      "name": "X 500K",
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
          "description": "Perda Diária / Drawdown R$400,00"
        },
        {
          "description": "Perda Total / Drawdown R$800,00"
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
      "name": "Extended 500K",
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
          "description": "Perda Diária / DrawDown R$400,00"
        },
        {
          "description": "Perda Total / DrawDown R$800,00"
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
      "name": "One",
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
          "description": "Perda Diária / Drawdown R$400,00"
        },
        {
          "description": "Perda Total / Drawdown R$800,00"
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
      "name": "Plus",
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
          "description": "Perda Diária / DrawDown R$400,00"
        },
        {
          "description": "Perda Total / DrawDown R$800,00"
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
      "name": "Pro",
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
          "description": "Perda Diária / Drawdown R$400,00"
        },
        {
          "description": "Perda Total / Drawdown R$800,00"
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
          "description": "Perda Diária / DrawDown R$400,00"
        },
        {
          "description": "Perda Total / DrawDown R$800,00"
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
          "description": "Perda Diária / Drawdown R$400,00"
        },
        {
          "description": "Perda Total / Drawdown R$800,00"
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
      "name": "X2500",
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
          "description": "Perda Diária / DrawDown R$400,00"
        },
        {
          "description": "Perda Total / DrawDown R$800,00"
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
      "name": "X5000",
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
          "description": "Perda Diária / Drawdown R$400,00"
        },
        {
          "description": "Perda Total / Drawdown R$800,00"
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
      "name": "X10000",
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
          "description": "Perda Diária / DrawDown R$400,00"
        },
        {
          "description": "Perda Total / DrawDown R$800,00"
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
      "name": "Extended X500",
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
          "description": "Perda Diária / Drawdown R$400,00"
        },
        {
          "description": "Perda Total / Drawdown R$800,00"
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
      "name": "Extended X1000",
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
          "description": "Perda Diária / DrawDown R$400,00"
        },
        {
          "description": "Perda Total / DrawDown R$800,00"
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
      "name": "Extended X2500",
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
          "description": "Perda Diária / Drawdown R$400,00"
        },
        {
          "description": "Perda Total / Drawdown R$800,00"
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
      "name": "Extended X5000",
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
          "description": "Perda Diária / DrawDown R$400,00"
        },
        {
          "description": "Perda Total / DrawDown R$800,00"
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
      "name": "Extended X10000",
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
          "description": "Perda Diária / Drawdown R$400,00"
        },
        {
          "description": "Perda Total / Drawdown R$800,00"
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
      "name": "PropFarm",
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
          "description": "Perda Diária / DrawDown R$400,00"
        },
        {
          "description": "Perda Total / DrawDown R$800,00"
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
      "name": "Z500",
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
          "description": "Perda Diária / Drawdown R$400,00"
        },
        {
          "description": "Perda Total / Drawdown R$800,00"
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
      "name": "Z1000",
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
          "description": "Perda Diária / DrawDown R$400,00"
        },
        {
          "description": "Perda Total / DrawDown R$800,00"
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
      "name": "Z2500",
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
          "description": "Perda Diária / Drawdown R$400,00"
        },
        {
          "description": "Perda Total / Drawdown R$800,00"
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
      "name": "Z5000",
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
          "description": "Perda Diária / DrawDown R$400,00"
        },
        {
          "description": "Perda Total / DrawDown R$800,00"
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
      "name": "Z10000",
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
          "description": "Perda Diária / Drawdown R$400,00"
        },
        {
          "description": "Perda Total / Drawdown R$800,00"
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
      "name": "40.000 USD",
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
          "description": "Perda Diária / DrawDown R$400,00"
        },
        {
          "description": "Perda Total / DrawDown R$800,00"
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
      "name": "80.000 USD",
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
          "description": "Perda Diária / Drawdown R$400,00"
        },
        {
          "description": "Perda Total / Drawdown R$800,00"
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
      "name": "800.000 USD",
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
          "description": "Perda Diária / DrawDown R$400,00"
        },
        {
          "description": "Perda Total / DrawDown R$800,00"
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
  const filterAction = [
    {
      "name": "Ações X",
      "challenges": [
        {
          "name": "X 500K"
        }
      ]
    },
    {
      "name": "Ações Extended",
      "challenges": [
        {
          "name": "Extended 500K"
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
          "name": "X500"
        },
        {
          "name": "X1000"
        },
        {
          "name": "X2500"
        },
        {
          "name": "X5000"
        },
        {
          "name": "X10000"
        }
      ]
    },
    {
      "name": "Prop Extended",
      "challenges": [
        {
          "name": "Extended X500"
        },
        {
          "name": "Extended X1000"
        },
        {
          "name": "Extended X2500"
        },
        {
          "name": "Extended X5000"
        },
        {
          "name": "Extended X10000"
        }
      ]
    },
    {
      "name": "Prop Farm",
      "challenges": [
        {
          "name": "PropFarm"
        }
      ]
    },
    {
      "name": "Prop Z",
      "challenges": [
        {
          "name": "Z500"
        },
        {
          "name": "Z1000"
        },
        {
          "name": "Z2500"
        },
        {
          "name": "Z5000"
        },
        {
          "name": "Z10000"
        }
      ]
    }
  ]

  const filterForex = [
    {
      "name": "Forex",
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
  function iniciarEduzzCheckout() {
    const onScriptLoad = () => {
      const load = () => {
        window.Eduzz.Checkout.init({
          contentId: 1840556,
          target: 'elements',
          errorCover: false,
        });
      };

      load();
      window.addEventListener('load', load);
    };

    const script = document.createElement('script');
    script.src = 'https://cdn.eduzzcdn.com/sun/bridge/bridge.js';
    script.onload = onScriptLoad;
    document.head.appendChild(script);
  }
  
  const [selectedChallenges, setSelectedChallenges] = useState([]);
  const [filtersChallenges, setFiltersChallenges] = useState([]);
  const [challenges, setChallenges] = useState([]);
  
  function handleClickFilter(filter) {
    setChallenges(filter.challenges);
  }

  function handleSelectedPlan(challenge) {
    if (selectedChallenges.includes(challenge.name)) {
      setSelectedChallenges(selectedChallenges.filter((name) => name !== challenge.name));
    } else {
      if (selectedChallenges.length < 3) {
        setSelectedChallenges([...selectedChallenges, challenge.name]);
      }
    }
  }

  function handleClickSelectedChallenge(filter) {
    setFiltersChallenges(filter);
    setChallenges([]);
  }

  return (
    <div className={styles.content}>
      <h1>Escolha seu Desafio</h1>

      <div className={styles.typeChallenge}>
      <input
        type="radio"
        id='AÇÕES'
        name='fav_language1'
        value="AÇÕES"
        onClick={() => handleClickSelectedChallenge(filterAction)}/>
      <label htmlFor="AÇÕES">AÇÕES</label>
      <input
        type="radio"
        id='FUTUROS'
        name='fav_language1'
        value="FUTUROS"
        onClick={() => handleClickSelectedChallenge(filterFuture)}/>
      <label htmlFor="FUTUROS">FUTUROS</label>
      <input 
        type="radio"
        id='FOREX'
        name='fav_language1'
        value="FOREX"
        onClick={() => handleClickSelectedChallenge(filterForex)}/>
      <label htmlFor="FOREX">FOREX</label>
      </div>

      <div className={styles.divFilterChallenges}>
        <ul className={styles.filterChallenge}>
          {filtersChallenges.map((filter) => (
            <li key={filter.name}>
                <input
                  id={filter.name}
                  type="radio"
                  name='fav_language'
                  value="filter.name"
                  onChange={() => handleClickFilter(filter)}
                />
              <label htmlFor={filter.name}>{filter.name}</label>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.divChallenges}>
        <ul className={styles.challenges}>
          {challenges.map((challenge) => (
            <li key={challenge.name}>
                <input
                  id={challenge.name}
                  type="checkbox"
                  value={challenge.name}
                  onChange={() => handleSelectedPlan(challenge)}
                  checked={selectedChallenges.includes(challenge.name)} 
                />
              <label htmlFor={challenge.name}>{challenge.name}</label>
            </li>
          ))}
        </ul>
      </div>
        {plans
            .filter((plan) => selectedChallenges.includes(plan.name))
            .map((selectedPlan) =>(
              <div className={styles.highlighted}>
                {selectedPlan.name === 'X10000' && (
                  <p>DESAFIO MAIS ADQUIRIDO</p>
                  )
                }
              </div>
          ))}
      <div >
          <div className={styles.selectedChallenge}>
            {plans
              .filter((plan) => selectedChallenges.includes(plan.name))
              .map((selectedPlan) => (
              <div
                key={selectedPlan.name}
                className={`${styles.challenge} ${
                selectedPlan.name === "X10000" ? styles.highlightedChallenge : ""
                }`}
              >
              
                <h2>{selectedPlan.name}</h2>
                <span>{selectedPlan.description}</span>

                <ul>
                  {selectedPlan.benefits.map((benefit) => (
                    <li key={benefit.description}><Check 
                    size={32} 
                    color='green' 
                    background-color="red"
                    border-radius="10rem"/>{benefit.description}</li>
                  ))}
                </ul>

                <select type="text" placeholder="plataforma">
                  {selectedPlan.platform.map((platform) => (
                    <option key={platform.name} value={platform.name}>
                      {platform.name}
                    </option>
                  ))}
                </select>

                <span>Repasse {selectedPlan.repasse}</span>

                <a onClick={iniciarEduzzCheckout} href={selectedPlan.planLink} >ADESÃO AO DESAFIO</a>
              </div>
              ))
              .slice(0, 3)
            }

          </div>
      </div>
      
    </div>
  );
  
}