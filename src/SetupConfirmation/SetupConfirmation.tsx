import React from 'react'

import { Text, Button, Icon } from '@habx/ui-core'

import { getCurrentStepDetails } from '../Setup/utils/getCurrentStepDetails'
import { translateExposures } from '../SetupExposures/utils/translateExposures'

import {
  SetupConfirmationWrapper,
  SetupFormHeader,
  SetupFormContent,
  SetupFormFooter,
  Dot,
} from './SetupConfirmation.style'

const SetupTypologies = ({ setup, currentStep, setCurrentStep }) => (
  <SetupConfirmationWrapper
    position={getCurrentStepDetails(currentStep).position}
  >
    <SetupFormHeader>
      <Text type="emphasis">
        {getCurrentStepDetails(currentStep).description}
      </Text>
    </SetupFormHeader>

    <SetupFormContent>
      <Text type="large">
        <Dot /> Budget:&nbsp;{Number(setup.budget).toLocaleString()}€
      </Text>
      <Text type="large">
        <Dot /> Surface:&nbsp;{setup.surface}m2
      </Text>
      <Text type="large">
        <Dot /> Exposition:&nbsp;
        {setup?.exposures?.length
          ? setup.exposures.map((exposure: string) => (
              <span key={exposure}>
                {translateExposures[exposure]}&nbsp;|&nbsp;
              </span>
            ))
          : `Pas de préférences `}
      </Text>

      <Text type="large">
        <Dot /> Nombre de pièces:&nbsp;{setup.typology}
      </Text>
    </SetupFormContent>

    <SetupFormFooter>
      <Button
        onClick={() => currentStep > 1 && setCurrentStep(currentStep - 1)}
        elementLeft={<Icon icon="arrow-west" />}
        ghost
      >
        Retour
      </Button>
      <Button type="submit">Valider</Button>
    </SetupFormFooter>
  </SetupConfirmationWrapper>
)

export default SetupTypologies
