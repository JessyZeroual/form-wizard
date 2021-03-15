import React, { useState } from 'react'

import { Text, Button } from '@habx/ui-core'

import { getCurrentStepDetails } from '../Setup/utils/getCurrentStepDetails'

import {
  SetupBudgetWrapper,
  SetupFormHeader,
  SetupFormContent,
  SetupFormFooter,
  InputBudget,
} from './SetupBudget.style'

const SetupBudget = ({
  budget,
  register,
  setValue,
  currentStep,
  setCurrentStep,
  error,
}) => {
  const [currentBudget, setCurrentBudget] = useState(budget.min)
  return (
    <SetupBudgetWrapper position={getCurrentStepDetails(currentStep).position}>
      <SetupFormHeader>
        <Text type="emphasis">
          {getCurrentStepDetails(currentStep).description}
        </Text>
      </SetupFormHeader>

      <SetupFormContent>
        <Text style={{ textAlign: 'center' }} type="veryLarge">
          {currentBudget?.toLocaleString()}€
        </Text>
        <InputBudget
          name="budget"
          type="range"
          min={budget.min}
          max={budget.max}
          ref={register({
            required: 'Ce champs est requis',
            min: {
              value: budget.min,
              message: `Les biens de ce projet demarre à ${budget.min}€`,
            },
            max: {
              value: budget.max,
              message: `Les biens de ce projet ne dépasse pas ${budget.max}€`,
            },
          })}
          onChange={(e) => {
            setCurrentBudget(Number(e.target.value))
            setValue('budget', Number(e.target.value))
          }}
        />

        {error && <Text color="red">{error.message}</Text>}
      </SetupFormContent>

      <SetupFormFooter>
        <Button
          style={{ marginLeft: 'auto' }}
          onClick={() => !error && setCurrentStep(currentStep + 1)}
        >
          Suivant
        </Button>
      </SetupFormFooter>
    </SetupBudgetWrapper>
  )
}

export default SetupBudget
