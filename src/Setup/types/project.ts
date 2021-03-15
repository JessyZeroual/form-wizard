/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: project
// ====================================================

export interface Range {
  min: Number
  max: Number
}

export interface project_project {
  __typename: "Project";
  id: string | null;
  name: string | null;
  properties: {
    priceRange: Range
    surfaceRange: Range
    exposures: String[]
    typologies: Number[]
  }   
}

export interface project {
  project: project_project | null;
}


