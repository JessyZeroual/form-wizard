import React, { useState } from 'react'

import { Text, Button, Icon } from '@habx/ui-core'

import { getCurrentStepDetails } from '../Setup/utils/getCurrentStepDetails'

import {
  SetupSurfaceWrapper,
  SetupFormHeader,
  SetupFormContent,
  SetupFormFooter,
  InputSurface,
} from './SetupSurface.style'

const SetupSurface = ({
  surface,
  register,
  setValue,
  currentStep,
  setCurrentStep,
  error,
}) => {
  const [currentSurface, setCurrentSurface] = useState(surface.min)
  return (
    <SetupSurfaceWrapper position={getCurrentStepDetails(currentStep).position}>
      <SetupFormHeader>
        <Text type="emphasis">
          {getCurrentStepDetails(currentStep).description}
        </Text>
      </SetupFormHeader>
      <SetupFormContent>
        <Text style={{ textAlign: 'center' }} type="veryLarge">
          {currentSurface?.toLocaleString()}m2
        </Text>
        <InputSurface
          name="surface"
          type="range"
          min={surface.min}
          max={surface.max}
          defaultValue={surface.min}
          ref={register({
            required: true,
            min: {
              value: surface.min,
              message: `Les biens de ce projet ont une superficie minimum de ${surface.min}m2`,
            },
            max: {
              value: surface.max,
              message: `Les biens de ce projet ont une superficie maximum de ${surface.max}m2`,
            },
          })}
          onChange={(e) => {
            setCurrentSurface(Number(e.target.value))
            setValue('surface', Number(e.target.value))
          }}
        />

        {error && <Text color="red">{error.message}</Text>}
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
    </SetupSurfaceWrapper>
  )
}

export default SetupSurface
