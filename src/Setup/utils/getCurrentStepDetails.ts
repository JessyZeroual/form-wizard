interface CurrentStepDetails {
  position: number
  title: string
  description: string
}

export const getCurrentStepDetails = (
  currentStep: number
): CurrentStepDetails => {
  switch (currentStep) {
    case 1:
      return {
        position: 0,
        title: 'Budget',
        description: 'Définisssez votre budget en euro',
      }

    case 2:
      return {
        position: 100,
        title: 'Surface',
        description: 'Quelle surface vous faut-il ? (en m2)',
      }
    case 3:
      return {
        position: 200,
        title: 'Exposition',
        description: 'Choisir une exposition (plusieurs choix possible)',
      }
    case 4:
      return {
        position: 300,
        title: 'Typologie',
        description: 'Palons un peu de votre appartement. Vous cherchez ... ? ',
      }
    case 5:
      return {
        position: 400,
        title: 'Dernière étape',
        description: 'Confirmez-vous votre saisie ? ',
      }
  }
}
