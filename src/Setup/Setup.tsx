import { useQuery, useMutation } from '@apollo/client'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

import { Loader, LoadingBar, Text } from '@habx/ui-core'

import SetupBudget from '../SetupBudget'
import SetupConfirmation from '../SetupConfirmation'
import SetupExposures from '../SetupExposures'
import SetupSurface from '../SetupSurface'
import SetupTypologies from '../SetupTypologies'

import { GET_PROJECT, UPSERT_SETUP } from './Setup.query'
import { SetupContainer, SetupTopBar, SetupForm } from './Setup.style'
import { FormData } from './types/formData'
import { project } from './types/project'
import { getCurrentStepDetails } from './utils/getCurrentStepDetails'

const Setup = () => {
  const projectResponse = useQuery<project>(GET_PROJECT)
  const [upsertSetup] = useMutation(UPSERT_SETUP)
  const [currentStep, setCurrentStep] = useState<number>(1)
  const {
    register,
    setValue,
    getValues,
    handleSubmit,
    errors,
  } = useForm<FormData>({
    mode: 'onChange',
  })

  if (projectResponse.loading) return <Loader colored size="medium" />

  const setup = getValues(['budget', 'surface', 'exposures', 'typology'])

  const onSubmit = handleSubmit(({ budget, surface, exposures, typology }) => {
    upsertSetup({
      variables: {
        setup: {
          budget: Number(budget),
          surface: Number(surface),
          exposures,
          typology: Number(typology),
        },
      },
    })
  })

  return (
    <SetupContainer>
      <SetupTopBar>
        <Text type="large" variation="title">
          Définir vos besoins:&nbsp;{getCurrentStepDetails(currentStep).title}
          &nbsp;
          <Text type="large" inline>{`(${currentStep}/${5})`}</Text>
        </Text>
      </SetupTopBar>
      <LoadingBar style={{ height: 3 }} loaded={currentStep} total={5} />
      <SetupForm onSubmit={onSubmit}>
        <SetupBudget
          budget={projectResponse.data.project.properties.priceRange}
          register={register}
          setValue={setValue}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          error={errors?.budget}
        />

        <SetupSurface
          surface={projectResponse.data.project.properties.surfaceRange}
          register={register}
          setValue={setValue}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          error={errors?.surface}
        />

        <SetupExposures
          exposures={projectResponse.data.project.properties.exposures}
          register={register}
          setValue={setValue}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
        />

        <SetupTypologies
          typologies={projectResponse.data.project.properties.typologies}
          register={register}
          setValue={setValue}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          error={errors?.typology}
        />

        <SetupConfirmation
          setup={setup}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
        />
      </SetupForm>
    </SetupContainer>
  )
}

export default Setup
