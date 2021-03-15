import React, { useState } from 'react'

import { Text, Button, Icon } from '@habx/ui-core'

import { getCurrentStepDetails } from '../Setup/utils/getCurrentStepDetails'

import {
  SetupTypologiesWrapper,
  SetupFormHeader,
  SetupFormContent,
  SetupFormFooter,
  TypologyGrid,
  TypologyItem,
} from './SetupTypologies.style'

const SetupTypologies = ({
  typologies,
  register,
  setValue,
  currentStep,
  setCurrentStep,
  error,
}) => {
  const [currentTypology, setTypology] = useState(typologies[0])

  return (
    <SetupTypologiesWrapper
      position={getCurrentStepDetails(currentStep).position}
    >
      <SetupFormHeader>
        <Text type="emphasis">
          {getCurrentStepDetails(currentStep).description}
        </Text>
      </SetupFormHeader>

      <SetupFormContent>
        <TypologyGrid>
          {typologies.map((typology) => (
            <TypologyItem
              key={typology}
              onClick={() => setTypology(typology)}
              current={currentTypology === typology}
            >
              <Text color={currentTypology === typology ? 'white' : '#9a4797'}>
                {typology === 1 ? `Studio` : `${typology} pièces`}
              </Text>
            </TypologyItem>
          ))}
        </TypologyGrid>

        <input
          style={{ display: 'none' }}
          name="typology"
          type="number"
          value={currentTypology}
          ref={register({
            required: 'Ce champs est requis',
            min: {
              value: typologies[0],
              message: `Les biens de ce projet ont ${typologies[0]} pièce minimum`,
            },
            max: {
              value: typologies[typologies.length - 1],
              message: `Les biens de ce projet ont ${
                typologies[typologies.length - 1]
              } pièce maximum`,
            },
          })}
          onChange={(e) => setValue('typology', Number(e.target.value))}
        />

        {error && <p>{error.message}</p>}
      </SetupFormContent>

      <SetupFormFooter>
        <Button
          onClick={() => currentStep > 1 && setCurrentStep(currentStep - 1)}
          elementLeft={<Icon icon="arrow-west" />}
          ghost
        >
          Retour
        </Button>
        <Button
          style={{ marginLeft: 'auto' }}
          onClick={() => !error && setCurrentStep(currentStep + 1)}
        >
          Suivant
        </Button>
      </SetupFormFooter>
    </SetupTypologiesWrapper>
  )
}

export default SetupTypologies
