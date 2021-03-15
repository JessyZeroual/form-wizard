import React from 'react'

import { Text, Button, Icon } from '@habx/ui-core'

import { getCurrentStepDetails } from '../Setup/utils/getCurrentStepDetails'

import {
  SetupExposuresWrapper,
  SetupFormHeader,
  SetupFormContent,
  SetupFormFooter,
  InputExposures,
  InputWrapper,
} from './SetupExposures.style'
import { translateExposures } from './utils/translateExposures'

const SetupExposures = ({
  exposures,
  register,
  setValue,
  currentStep,
  setCurrentStep,
}) => {
  return (
    <SetupExposuresWrapper
      position={getCurrentStepDetails(currentStep).position}
    >
      <SetupFormHeader>
        <Text type="emphasis">
          {getCurrentStepDetails(currentStep).description}
        </Text>
      </SetupFormHeader>

      <SetupFormContent>
        {exposures.map((exposure) => (
          <InputWrapper key={exposure}>
            <InputExposures
              type="checkbox"
              name="exposures"
              value={exposure}
              ref={register}
              onChange={(e) => {
                setValue('exposure', e.target.value)
              }}
            />
            <Text type="large" style={{ lineHeight: '24px' }}>
              {translateExposures[exposure]}
            </Text>
          </InputWrapper>
        ))}
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
          onClick={() => {
            setCurrentStep(currentStep + 1)
          }}
        >
          Suivant
        </Button>
      </SetupFormFooter>
    </SetupExposuresWrapper>
  )
}

export default SetupExposures
