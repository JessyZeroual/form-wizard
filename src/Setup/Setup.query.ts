import gql from 'graphql-tag'

export const GET_PROJECT = gql`
  query project {
    project {
      id
      name
      properties {
        priceRange {
          min
          max
        }
        surfaceRange {
          min
          max
        }
        exposures
        typologies
      }
    }
  }
`

export const UPSERT_SETUP = gql`
  mutation upsertSetup($setup: SetupInput) {
    upsertSetup(setup: $setup) {
      typologies
    }
  }
`
