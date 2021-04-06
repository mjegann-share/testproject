/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type CreateTaxCreditNotesInput = {
  id?: string | null;
  internalId?: string | null;
  irc41Category?: string | null;
  notes?: string | null;
};

export type ModelTaxCreditNotesConditionInput = {
  internalId?: ModelStringInput | null;
  irc41Category?: ModelStringInput | null;
  notes?: ModelStringInput | null;
  and?: Array<ModelTaxCreditNotesConditionInput | null> | null;
  or?: Array<ModelTaxCreditNotesConditionInput | null> | null;
  not?: ModelTaxCreditNotesConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type TaxCreditNotes = {
  __typename: "TaxCreditNotes";
  id?: string;
  internalId?: string | null;
  irc41Category?: string | null;
  notes?: string | null;
  createdAt?: string;
  updatedAt?: string;
};

export type UpdateTaxCreditNotesInput = {
  id: string;
  internalId?: string | null;
  irc41Category?: string | null;
  notes?: string | null;
};

export type DeleteTaxCreditNotesInput = {
  id?: string | null;
};

export type CreateProjectAssetBudgetInput = {
  id?: string | null;
  internalId?: string | null;
  budgetHours?: number | null;
  budgetAmount?: number | null;
  taxCreditPercent?: number | null;
  taxCreditHours?: number | null;
  taxCreditAmount?: number | null;
  totalTaxCredit?: number | null;
};

export type ModelProjectAssetBudgetConditionInput = {
  internalId?: ModelStringInput | null;
  budgetHours?: ModelFloatInput | null;
  budgetAmount?: ModelFloatInput | null;
  taxCreditPercent?: ModelFloatInput | null;
  taxCreditHours?: ModelFloatInput | null;
  taxCreditAmount?: ModelFloatInput | null;
  totalTaxCredit?: ModelFloatInput | null;
  and?: Array<ModelProjectAssetBudgetConditionInput | null> | null;
  or?: Array<ModelProjectAssetBudgetConditionInput | null> | null;
  not?: ModelProjectAssetBudgetConditionInput | null;
};

export type ModelFloatInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type ProjectAssetBudget = {
  __typename: "ProjectAssetBudget";
  id?: string;
  internalId?: string | null;
  budgetHours?: number | null;
  budgetAmount?: number | null;
  taxCreditPercent?: number | null;
  taxCreditHours?: number | null;
  taxCreditAmount?: number | null;
  totalTaxCredit?: number | null;
  createdAt?: string;
  updatedAt?: string;
};

export type UpdateProjectAssetBudgetInput = {
  id: string;
  internalId?: string | null;
  budgetHours?: number | null;
  budgetAmount?: number | null;
  taxCreditPercent?: number | null;
  taxCreditHours?: number | null;
  taxCreditAmount?: number | null;
  totalTaxCredit?: number | null;
};

export type DeleteProjectAssetBudgetInput = {
  id?: string | null;
};

export type CreateProjectAssetInput = {
  id?: string | null;
  internalId?: string | null;
  type?: string | null;
  name?: string | null;
  projectID?: string | null;
  projectAssetProjectAssetBudgetId?: string | null;
  projectAssetTaxCreditNotesId?: string | null;
};

export type ModelProjectAssetConditionInput = {
  internalId?: ModelStringInput | null;
  type?: ModelStringInput | null;
  name?: ModelStringInput | null;
  projectID?: ModelIDInput | null;
  and?: Array<ModelProjectAssetConditionInput | null> | null;
  or?: Array<ModelProjectAssetConditionInput | null> | null;
  not?: ModelProjectAssetConditionInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ProjectAsset = {
  __typename: "ProjectAsset";
  id?: string;
  internalId?: string | null;
  type?: string | null;
  name?: string | null;
  projectID?: string | null;
  ProjectAssetBudget?: ProjectAssetBudget;
  TaxCreditNotes?: TaxCreditNotes;
  createdAt?: string;
  updatedAt?: string;
};

export type UpdateProjectAssetInput = {
  id: string;
  internalId?: string | null;
  type?: string | null;
  name?: string | null;
  projectID?: string | null;
  projectAssetProjectAssetBudgetId?: string | null;
  projectAssetTaxCreditNotesId?: string | null;
};

export type DeleteProjectAssetInput = {
  id?: string | null;
};

export type CreateProjectInput = {
  id?: string | null;
  internalId?: string | null;
  name?: string | null;
  contactName?: string | null;
  clientID?: string | null;
};

export type ModelProjectConditionInput = {
  internalId?: ModelStringInput | null;
  name?: ModelStringInput | null;
  contactName?: ModelStringInput | null;
  clientID?: ModelIDInput | null;
  and?: Array<ModelProjectConditionInput | null> | null;
  or?: Array<ModelProjectConditionInput | null> | null;
  not?: ModelProjectConditionInput | null;
};

export type Project = {
  __typename: "Project";
  id?: string;
  internalId?: string | null;
  name?: string | null;
  contactName?: string | null;
  clientID?: string | null;
  ProjectAssets?: ModelProjectAssetConnection;
  createdAt?: string;
  updatedAt?: string;
};

export type ModelProjectAssetConnection = {
  __typename: "ModelProjectAssetConnection";
  items?: Array<ProjectAsset | null> | null;
  nextToken?: string | null;
};

export type UpdateProjectInput = {
  id: string;
  internalId?: string | null;
  name?: string | null;
  contactName?: string | null;
  clientID?: string | null;
};

export type DeleteProjectInput = {
  id?: string | null;
};

export type CreateClientInput = {
  id?: string | null;
  internalId?: string | null;
  name?: string | null;
  street?: string | null;
  city?: string | null;
  zip?: string | null;
  country?: string | null;
  state?: string | null;
};

export type ModelClientConditionInput = {
  internalId?: ModelStringInput | null;
  name?: ModelStringInput | null;
  street?: ModelStringInput | null;
  city?: ModelStringInput | null;
  zip?: ModelStringInput | null;
  country?: ModelStringInput | null;
  state?: ModelStringInput | null;
  and?: Array<ModelClientConditionInput | null> | null;
  or?: Array<ModelClientConditionInput | null> | null;
  not?: ModelClientConditionInput | null;
};

export type Client = {
  __typename: "Client";
  id?: string;
  internalId?: string | null;
  name?: string | null;
  street?: string | null;
  city?: string | null;
  zip?: string | null;
  country?: string | null;
  Projects?: ModelProjectConnection;
  state?: string | null;
  createdAt?: string;
  updatedAt?: string;
};

export type ModelProjectConnection = {
  __typename: "ModelProjectConnection";
  items?: Array<Project | null> | null;
  nextToken?: string | null;
};

export type UpdateClientInput = {
  id: string;
  internalId?: string | null;
  name?: string | null;
  street?: string | null;
  city?: string | null;
  zip?: string | null;
  country?: string | null;
  state?: string | null;
};

export type DeleteClientInput = {
  id?: string | null;
};

export type ModelTaxCreditNotesFilterInput = {
  id?: ModelIDInput | null;
  internalId?: ModelStringInput | null;
  irc41Category?: ModelStringInput | null;
  notes?: ModelStringInput | null;
  and?: Array<ModelTaxCreditNotesFilterInput | null> | null;
  or?: Array<ModelTaxCreditNotesFilterInput | null> | null;
  not?: ModelTaxCreditNotesFilterInput | null;
};

export type ModelTaxCreditNotesConnection = {
  __typename: "ModelTaxCreditNotesConnection";
  items?: Array<TaxCreditNotes | null> | null;
  nextToken?: string | null;
};

export type ModelProjectAssetBudgetFilterInput = {
  id?: ModelIDInput | null;
  internalId?: ModelStringInput | null;
  budgetHours?: ModelFloatInput | null;
  budgetAmount?: ModelFloatInput | null;
  taxCreditPercent?: ModelFloatInput | null;
  taxCreditHours?: ModelFloatInput | null;
  taxCreditAmount?: ModelFloatInput | null;
  totalTaxCredit?: ModelFloatInput | null;
  and?: Array<ModelProjectAssetBudgetFilterInput | null> | null;
  or?: Array<ModelProjectAssetBudgetFilterInput | null> | null;
  not?: ModelProjectAssetBudgetFilterInput | null;
};

export type ModelProjectAssetBudgetConnection = {
  __typename: "ModelProjectAssetBudgetConnection";
  items?: Array<ProjectAssetBudget | null> | null;
  nextToken?: string | null;
};

export type ModelProjectAssetFilterInput = {
  id?: ModelIDInput | null;
  internalId?: ModelStringInput | null;
  type?: ModelStringInput | null;
  name?: ModelStringInput | null;
  projectID?: ModelIDInput | null;
  and?: Array<ModelProjectAssetFilterInput | null> | null;
  or?: Array<ModelProjectAssetFilterInput | null> | null;
  not?: ModelProjectAssetFilterInput | null;
};

export type ModelProjectFilterInput = {
  id?: ModelIDInput | null;
  internalId?: ModelStringInput | null;
  name?: ModelStringInput | null;
  contactName?: ModelStringInput | null;
  clientID?: ModelIDInput | null;
  and?: Array<ModelProjectFilterInput | null> | null;
  or?: Array<ModelProjectFilterInput | null> | null;
  not?: ModelProjectFilterInput | null;
};

export type ModelClientFilterInput = {
  id?: ModelIDInput | null;
  internalId?: ModelStringInput | null;
  name?: ModelStringInput | null;
  street?: ModelStringInput | null;
  city?: ModelStringInput | null;
  zip?: ModelStringInput | null;
  country?: ModelStringInput | null;
  state?: ModelStringInput | null;
  and?: Array<ModelClientFilterInput | null> | null;
  or?: Array<ModelClientFilterInput | null> | null;
  not?: ModelClientFilterInput | null;
};

export type ModelClientConnection = {
  __typename: "ModelClientConnection";
  items?: Array<Client | null> | null;
  nextToken?: string | null;
};

export type CreateTaxCreditNotesMutation = {
  __typename: "TaxCreditNotes";
  id: string;
  internalId?: string | null;
  irc41Category?: string | null;
  notes?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateTaxCreditNotesMutation = {
  __typename: "TaxCreditNotes";
  id: string;
  internalId?: string | null;
  irc41Category?: string | null;
  notes?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteTaxCreditNotesMutation = {
  __typename: "TaxCreditNotes";
  id: string;
  internalId?: string | null;
  irc41Category?: string | null;
  notes?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateProjectAssetBudgetMutation = {
  __typename: "ProjectAssetBudget";
  id: string;
  internalId?: string | null;
  budgetHours?: number | null;
  budgetAmount?: number | null;
  taxCreditPercent?: number | null;
  taxCreditHours?: number | null;
  taxCreditAmount?: number | null;
  totalTaxCredit?: number | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateProjectAssetBudgetMutation = {
  __typename: "ProjectAssetBudget";
  id: string;
  internalId?: string | null;
  budgetHours?: number | null;
  budgetAmount?: number | null;
  taxCreditPercent?: number | null;
  taxCreditHours?: number | null;
  taxCreditAmount?: number | null;
  totalTaxCredit?: number | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteProjectAssetBudgetMutation = {
  __typename: "ProjectAssetBudget";
  id: string;
  internalId?: string | null;
  budgetHours?: number | null;
  budgetAmount?: number | null;
  taxCreditPercent?: number | null;
  taxCreditHours?: number | null;
  taxCreditAmount?: number | null;
  totalTaxCredit?: number | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateProjectAssetMutation = {
  __typename: "ProjectAsset";
  id: string;
  internalId?: string | null;
  type?: string | null;
  name?: string | null;
  projectID?: string | null;
  ProjectAssetBudget?: {
    __typename: "ProjectAssetBudget";
    id: string;
    internalId?: string | null;
    budgetHours?: number | null;
    budgetAmount?: number | null;
    taxCreditPercent?: number | null;
    taxCreditHours?: number | null;
    taxCreditAmount?: number | null;
    totalTaxCredit?: number | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  TaxCreditNotes?: {
    __typename: "TaxCreditNotes";
    id: string;
    internalId?: string | null;
    irc41Category?: string | null;
    notes?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateProjectAssetMutation = {
  __typename: "ProjectAsset";
  id: string;
  internalId?: string | null;
  type?: string | null;
  name?: string | null;
  projectID?: string | null;
  ProjectAssetBudget?: {
    __typename: "ProjectAssetBudget";
    id: string;
    internalId?: string | null;
    budgetHours?: number | null;
    budgetAmount?: number | null;
    taxCreditPercent?: number | null;
    taxCreditHours?: number | null;
    taxCreditAmount?: number | null;
    totalTaxCredit?: number | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  TaxCreditNotes?: {
    __typename: "TaxCreditNotes";
    id: string;
    internalId?: string | null;
    irc41Category?: string | null;
    notes?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteProjectAssetMutation = {
  __typename: "ProjectAsset";
  id: string;
  internalId?: string | null;
  type?: string | null;
  name?: string | null;
  projectID?: string | null;
  ProjectAssetBudget?: {
    __typename: "ProjectAssetBudget";
    id: string;
    internalId?: string | null;
    budgetHours?: number | null;
    budgetAmount?: number | null;
    taxCreditPercent?: number | null;
    taxCreditHours?: number | null;
    taxCreditAmount?: number | null;
    totalTaxCredit?: number | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  TaxCreditNotes?: {
    __typename: "TaxCreditNotes";
    id: string;
    internalId?: string | null;
    irc41Category?: string | null;
    notes?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateProjectMutation = {
  __typename: "Project";
  id: string;
  internalId?: string | null;
  name?: string | null;
  contactName?: string | null;
  clientID?: string | null;
  ProjectAssets?: {
    __typename: "ModelProjectAssetConnection";
    items?: Array<{
      __typename: "ProjectAsset";
      id: string;
      internalId?: string | null;
      type?: string | null;
      name?: string | null;
      projectID?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateProjectMutation = {
  __typename: "Project";
  id: string;
  internalId?: string | null;
  name?: string | null;
  contactName?: string | null;
  clientID?: string | null;
  ProjectAssets?: {
    __typename: "ModelProjectAssetConnection";
    items?: Array<{
      __typename: "ProjectAsset";
      id: string;
      internalId?: string | null;
      type?: string | null;
      name?: string | null;
      projectID?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteProjectMutation = {
  __typename: "Project";
  id: string;
  internalId?: string | null;
  name?: string | null;
  contactName?: string | null;
  clientID?: string | null;
  ProjectAssets?: {
    __typename: "ModelProjectAssetConnection";
    items?: Array<{
      __typename: "ProjectAsset";
      id: string;
      internalId?: string | null;
      type?: string | null;
      name?: string | null;
      projectID?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateClientMutation = {
  __typename: "Client";
  id: string;
  internalId?: string | null;
  name?: string | null;
  street?: string | null;
  city?: string | null;
  zip?: string | null;
  country?: string | null;
  Projects?: {
    __typename: "ModelProjectConnection";
    items?: Array<{
      __typename: "Project";
      id: string;
      internalId?: string | null;
      name?: string | null;
      contactName?: string | null;
      clientID?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  state?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateClientMutation = {
  __typename: "Client";
  id: string;
  internalId?: string | null;
  name?: string | null;
  street?: string | null;
  city?: string | null;
  zip?: string | null;
  country?: string | null;
  Projects?: {
    __typename: "ModelProjectConnection";
    items?: Array<{
      __typename: "Project";
      id: string;
      internalId?: string | null;
      name?: string | null;
      contactName?: string | null;
      clientID?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  state?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteClientMutation = {
  __typename: "Client";
  id: string;
  internalId?: string | null;
  name?: string | null;
  street?: string | null;
  city?: string | null;
  zip?: string | null;
  country?: string | null;
  Projects?: {
    __typename: "ModelProjectConnection";
    items?: Array<{
      __typename: "Project";
      id: string;
      internalId?: string | null;
      name?: string | null;
      contactName?: string | null;
      clientID?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  state?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type GetTaxCreditNotesQuery = {
  __typename: "TaxCreditNotes";
  id: string;
  internalId?: string | null;
  irc41Category?: string | null;
  notes?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListTaxCreditNotessQuery = {
  __typename: "ModelTaxCreditNotesConnection";
  items?: Array<{
    __typename: "TaxCreditNotes";
    id: string;
    internalId?: string | null;
    irc41Category?: string | null;
    notes?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type GetProjectAssetBudgetQuery = {
  __typename: "ProjectAssetBudget";
  id: string;
  internalId?: string | null;
  budgetHours?: number | null;
  budgetAmount?: number | null;
  taxCreditPercent?: number | null;
  taxCreditHours?: number | null;
  taxCreditAmount?: number | null;
  totalTaxCredit?: number | null;
  createdAt: string;
  updatedAt: string;
};

export type ListProjectAssetBudgetsQuery = {
  __typename: "ModelProjectAssetBudgetConnection";
  items?: Array<{
    __typename: "ProjectAssetBudget";
    id: string;
    internalId?: string | null;
    budgetHours?: number | null;
    budgetAmount?: number | null;
    taxCreditPercent?: number | null;
    taxCreditHours?: number | null;
    taxCreditAmount?: number | null;
    totalTaxCredit?: number | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type GetProjectAssetQuery = {
  __typename: "ProjectAsset";
  id: string;
  internalId?: string | null;
  type?: string | null;
  name?: string | null;
  projectID?: string | null;
  ProjectAssetBudget?: {
    __typename: "ProjectAssetBudget";
    id: string;
    internalId?: string | null;
    budgetHours?: number | null;
    budgetAmount?: number | null;
    taxCreditPercent?: number | null;
    taxCreditHours?: number | null;
    taxCreditAmount?: number | null;
    totalTaxCredit?: number | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  TaxCreditNotes?: {
    __typename: "TaxCreditNotes";
    id: string;
    internalId?: string | null;
    irc41Category?: string | null;
    notes?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListProjectAssetsQuery = {
  __typename: "ModelProjectAssetConnection";
  items?: Array<{
    __typename: "ProjectAsset";
    id: string;
    internalId?: string | null;
    type?: string | null;
    name?: string | null;
    projectID?: string | null;
    ProjectAssetBudget?: {
      __typename: "ProjectAssetBudget";
      id: string;
      internalId?: string | null;
      budgetHours?: number | null;
      budgetAmount?: number | null;
      taxCreditPercent?: number | null;
      taxCreditHours?: number | null;
      taxCreditAmount?: number | null;
      totalTaxCredit?: number | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    TaxCreditNotes?: {
      __typename: "TaxCreditNotes";
      id: string;
      internalId?: string | null;
      irc41Category?: string | null;
      notes?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type GetProjectQuery = {
  __typename: "Project";
  id: string;
  internalId?: string | null;
  name?: string | null;
  contactName?: string | null;
  clientID?: string | null;
  ProjectAssets?: {
    __typename: "ModelProjectAssetConnection";
    items?: Array<{
      __typename: "ProjectAsset";
      id: string;
      internalId?: string | null;
      type?: string | null;
      name?: string | null;
      projectID?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListProjectsQuery = {
  __typename: "ModelProjectConnection";
  items?: Array<{
    __typename: "Project";
    id: string;
    internalId?: string | null;
    name?: string | null;
    contactName?: string | null;
    clientID?: string | null;
    ProjectAssets?: {
      __typename: "ModelProjectAssetConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type GetClientQuery = {
  __typename: "Client";
  id: string;
  internalId?: string | null;
  name?: string | null;
  street?: string | null;
  city?: string | null;
  zip?: string | null;
  country?: string | null;
  Projects?: {
    __typename: "ModelProjectConnection";
    items?: Array<{
      __typename: "Project";
      id: string;
      internalId?: string | null;
      name?: string | null;
      contactName?: string | null;
      clientID?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  state?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListClientsQuery = {
  __typename: "ModelClientConnection";
  items?: Array<{
    __typename: "Client";
    id: string;
    internalId?: string | null;
    name?: string | null;
    street?: string | null;
    city?: string | null;
    zip?: string | null;
    country?: string | null;
    Projects?: {
      __typename: "ModelProjectConnection";
      nextToken?: string | null;
    } | null;
    state?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type OnCreateTaxCreditNotesSubscription = {
  __typename: "TaxCreditNotes";
  id: string;
  internalId?: string | null;
  irc41Category?: string | null;
  notes?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateTaxCreditNotesSubscription = {
  __typename: "TaxCreditNotes";
  id: string;
  internalId?: string | null;
  irc41Category?: string | null;
  notes?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteTaxCreditNotesSubscription = {
  __typename: "TaxCreditNotes";
  id: string;
  internalId?: string | null;
  irc41Category?: string | null;
  notes?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateProjectAssetBudgetSubscription = {
  __typename: "ProjectAssetBudget";
  id: string;
  internalId?: string | null;
  budgetHours?: number | null;
  budgetAmount?: number | null;
  taxCreditPercent?: number | null;
  taxCreditHours?: number | null;
  taxCreditAmount?: number | null;
  totalTaxCredit?: number | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateProjectAssetBudgetSubscription = {
  __typename: "ProjectAssetBudget";
  id: string;
  internalId?: string | null;
  budgetHours?: number | null;
  budgetAmount?: number | null;
  taxCreditPercent?: number | null;
  taxCreditHours?: number | null;
  taxCreditAmount?: number | null;
  totalTaxCredit?: number | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteProjectAssetBudgetSubscription = {
  __typename: "ProjectAssetBudget";
  id: string;
  internalId?: string | null;
  budgetHours?: number | null;
  budgetAmount?: number | null;
  taxCreditPercent?: number | null;
  taxCreditHours?: number | null;
  taxCreditAmount?: number | null;
  totalTaxCredit?: number | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateProjectAssetSubscription = {
  __typename: "ProjectAsset";
  id: string;
  internalId?: string | null;
  type?: string | null;
  name?: string | null;
  projectID?: string | null;
  ProjectAssetBudget?: {
    __typename: "ProjectAssetBudget";
    id: string;
    internalId?: string | null;
    budgetHours?: number | null;
    budgetAmount?: number | null;
    taxCreditPercent?: number | null;
    taxCreditHours?: number | null;
    taxCreditAmount?: number | null;
    totalTaxCredit?: number | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  TaxCreditNotes?: {
    __typename: "TaxCreditNotes";
    id: string;
    internalId?: string | null;
    irc41Category?: string | null;
    notes?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateProjectAssetSubscription = {
  __typename: "ProjectAsset";
  id: string;
  internalId?: string | null;
  type?: string | null;
  name?: string | null;
  projectID?: string | null;
  ProjectAssetBudget?: {
    __typename: "ProjectAssetBudget";
    id: string;
    internalId?: string | null;
    budgetHours?: number | null;
    budgetAmount?: number | null;
    taxCreditPercent?: number | null;
    taxCreditHours?: number | null;
    taxCreditAmount?: number | null;
    totalTaxCredit?: number | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  TaxCreditNotes?: {
    __typename: "TaxCreditNotes";
    id: string;
    internalId?: string | null;
    irc41Category?: string | null;
    notes?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteProjectAssetSubscription = {
  __typename: "ProjectAsset";
  id: string;
  internalId?: string | null;
  type?: string | null;
  name?: string | null;
  projectID?: string | null;
  ProjectAssetBudget?: {
    __typename: "ProjectAssetBudget";
    id: string;
    internalId?: string | null;
    budgetHours?: number | null;
    budgetAmount?: number | null;
    taxCreditPercent?: number | null;
    taxCreditHours?: number | null;
    taxCreditAmount?: number | null;
    totalTaxCredit?: number | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  TaxCreditNotes?: {
    __typename: "TaxCreditNotes";
    id: string;
    internalId?: string | null;
    irc41Category?: string | null;
    notes?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateProjectSubscription = {
  __typename: "Project";
  id: string;
  internalId?: string | null;
  name?: string | null;
  contactName?: string | null;
  clientID?: string | null;
  ProjectAssets?: {
    __typename: "ModelProjectAssetConnection";
    items?: Array<{
      __typename: "ProjectAsset";
      id: string;
      internalId?: string | null;
      type?: string | null;
      name?: string | null;
      projectID?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateProjectSubscription = {
  __typename: "Project";
  id: string;
  internalId?: string | null;
  name?: string | null;
  contactName?: string | null;
  clientID?: string | null;
  ProjectAssets?: {
    __typename: "ModelProjectAssetConnection";
    items?: Array<{
      __typename: "ProjectAsset";
      id: string;
      internalId?: string | null;
      type?: string | null;
      name?: string | null;
      projectID?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteProjectSubscription = {
  __typename: "Project";
  id: string;
  internalId?: string | null;
  name?: string | null;
  contactName?: string | null;
  clientID?: string | null;
  ProjectAssets?: {
    __typename: "ModelProjectAssetConnection";
    items?: Array<{
      __typename: "ProjectAsset";
      id: string;
      internalId?: string | null;
      type?: string | null;
      name?: string | null;
      projectID?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateClientSubscription = {
  __typename: "Client";
  id: string;
  internalId?: string | null;
  name?: string | null;
  street?: string | null;
  city?: string | null;
  zip?: string | null;
  country?: string | null;
  Projects?: {
    __typename: "ModelProjectConnection";
    items?: Array<{
      __typename: "Project";
      id: string;
      internalId?: string | null;
      name?: string | null;
      contactName?: string | null;
      clientID?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  state?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateClientSubscription = {
  __typename: "Client";
  id: string;
  internalId?: string | null;
  name?: string | null;
  street?: string | null;
  city?: string | null;
  zip?: string | null;
  country?: string | null;
  Projects?: {
    __typename: "ModelProjectConnection";
    items?: Array<{
      __typename: "Project";
      id: string;
      internalId?: string | null;
      name?: string | null;
      contactName?: string | null;
      clientID?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  state?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteClientSubscription = {
  __typename: "Client";
  id: string;
  internalId?: string | null;
  name?: string | null;
  street?: string | null;
  city?: string | null;
  zip?: string | null;
  country?: string | null;
  Projects?: {
    __typename: "ModelProjectConnection";
    items?: Array<{
      __typename: "Project";
      id: string;
      internalId?: string | null;
      name?: string | null;
      contactName?: string | null;
      clientID?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  state?: string | null;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateTaxCreditNotes(
    input: CreateTaxCreditNotesInput,
    condition?: ModelTaxCreditNotesConditionInput
  ): Promise<CreateTaxCreditNotesMutation> {
    const statement = `mutation CreateTaxCreditNotes($input: CreateTaxCreditNotesInput!, $condition: ModelTaxCreditNotesConditionInput) {
        createTaxCreditNotes(input: $input, condition: $condition) {
          __typename
          id
          internalId
          irc41Category
          notes
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateTaxCreditNotesMutation>response.data.createTaxCreditNotes;
  }
  async UpdateTaxCreditNotes(
    input: UpdateTaxCreditNotesInput,
    condition?: ModelTaxCreditNotesConditionInput
  ): Promise<UpdateTaxCreditNotesMutation> {
    const statement = `mutation UpdateTaxCreditNotes($input: UpdateTaxCreditNotesInput!, $condition: ModelTaxCreditNotesConditionInput) {
        updateTaxCreditNotes(input: $input, condition: $condition) {
          __typename
          id
          internalId
          irc41Category
          notes
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateTaxCreditNotesMutation>response.data.updateTaxCreditNotes;
  }
  async DeleteTaxCreditNotes(
    input: DeleteTaxCreditNotesInput,
    condition?: ModelTaxCreditNotesConditionInput
  ): Promise<DeleteTaxCreditNotesMutation> {
    const statement = `mutation DeleteTaxCreditNotes($input: DeleteTaxCreditNotesInput!, $condition: ModelTaxCreditNotesConditionInput) {
        deleteTaxCreditNotes(input: $input, condition: $condition) {
          __typename
          id
          internalId
          irc41Category
          notes
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteTaxCreditNotesMutation>response.data.deleteTaxCreditNotes;
  }
  async CreateProjectAssetBudget(
    input: CreateProjectAssetBudgetInput,
    condition?: ModelProjectAssetBudgetConditionInput
  ): Promise<CreateProjectAssetBudgetMutation> {
    const statement = `mutation CreateProjectAssetBudget($input: CreateProjectAssetBudgetInput!, $condition: ModelProjectAssetBudgetConditionInput) {
        createProjectAssetBudget(input: $input, condition: $condition) {
          __typename
          id
          internalId
          budgetHours
          budgetAmount
          taxCreditPercent
          taxCreditHours
          taxCreditAmount
          totalTaxCredit
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateProjectAssetBudgetMutation>(
      response.data.createProjectAssetBudget
    );
  }
  async UpdateProjectAssetBudget(
    input: UpdateProjectAssetBudgetInput,
    condition?: ModelProjectAssetBudgetConditionInput
  ): Promise<UpdateProjectAssetBudgetMutation> {
    const statement = `mutation UpdateProjectAssetBudget($input: UpdateProjectAssetBudgetInput!, $condition: ModelProjectAssetBudgetConditionInput) {
        updateProjectAssetBudget(input: $input, condition: $condition) {
          __typename
          id
          internalId
          budgetHours
          budgetAmount
          taxCreditPercent
          taxCreditHours
          taxCreditAmount
          totalTaxCredit
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateProjectAssetBudgetMutation>(
      response.data.updateProjectAssetBudget
    );
  }
  async DeleteProjectAssetBudget(
    input: DeleteProjectAssetBudgetInput,
    condition?: ModelProjectAssetBudgetConditionInput
  ): Promise<DeleteProjectAssetBudgetMutation> {
    const statement = `mutation DeleteProjectAssetBudget($input: DeleteProjectAssetBudgetInput!, $condition: ModelProjectAssetBudgetConditionInput) {
        deleteProjectAssetBudget(input: $input, condition: $condition) {
          __typename
          id
          internalId
          budgetHours
          budgetAmount
          taxCreditPercent
          taxCreditHours
          taxCreditAmount
          totalTaxCredit
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteProjectAssetBudgetMutation>(
      response.data.deleteProjectAssetBudget
    );
  }
  async CreateProjectAsset(
    input: CreateProjectAssetInput,
    condition?: ModelProjectAssetConditionInput
  ): Promise<CreateProjectAssetMutation> {
    const statement = `mutation CreateProjectAsset($input: CreateProjectAssetInput!, $condition: ModelProjectAssetConditionInput) {
        createProjectAsset(input: $input, condition: $condition) {
          __typename
          id
          internalId
          type
          name
          projectID
          ProjectAssetBudget {
            __typename
            id
            internalId
            budgetHours
            budgetAmount
            taxCreditPercent
            taxCreditHours
            taxCreditAmount
            totalTaxCredit
            createdAt
            updatedAt
          }
          TaxCreditNotes {
            __typename
            id
            internalId
            irc41Category
            notes
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateProjectAssetMutation>response.data.createProjectAsset;
  }
  async UpdateProjectAsset(
    input: UpdateProjectAssetInput,
    condition?: ModelProjectAssetConditionInput
  ): Promise<UpdateProjectAssetMutation> {
    const statement = `mutation UpdateProjectAsset($input: UpdateProjectAssetInput!, $condition: ModelProjectAssetConditionInput) {
        updateProjectAsset(input: $input, condition: $condition) {
          __typename
          id
          internalId
          type
          name
          projectID
          ProjectAssetBudget {
            __typename
            id
            internalId
            budgetHours
            budgetAmount
            taxCreditPercent
            taxCreditHours
            taxCreditAmount
            totalTaxCredit
            createdAt
            updatedAt
          }
          TaxCreditNotes {
            __typename
            id
            internalId
            irc41Category
            notes
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateProjectAssetMutation>response.data.updateProjectAsset;
  }
  async DeleteProjectAsset(
    input: DeleteProjectAssetInput,
    condition?: ModelProjectAssetConditionInput
  ): Promise<DeleteProjectAssetMutation> {
    const statement = `mutation DeleteProjectAsset($input: DeleteProjectAssetInput!, $condition: ModelProjectAssetConditionInput) {
        deleteProjectAsset(input: $input, condition: $condition) {
          __typename
          id
          internalId
          type
          name
          projectID
          ProjectAssetBudget {
            __typename
            id
            internalId
            budgetHours
            budgetAmount
            taxCreditPercent
            taxCreditHours
            taxCreditAmount
            totalTaxCredit
            createdAt
            updatedAt
          }
          TaxCreditNotes {
            __typename
            id
            internalId
            irc41Category
            notes
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteProjectAssetMutation>response.data.deleteProjectAsset;
  }
  async CreateProject(
    input: CreateProjectInput,
    condition?: ModelProjectConditionInput
  ): Promise<CreateProjectMutation> {
    const statement = `mutation CreateProject($input: CreateProjectInput!, $condition: ModelProjectConditionInput) {
        createProject(input: $input, condition: $condition) {
          __typename
          id
          internalId
          name
          contactName
          clientID
          ProjectAssets {
            __typename
            items {
              __typename
              id
              internalId
              type
              name
              projectID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateProjectMutation>response.data.createProject;
  }
  async UpdateProject(
    input: UpdateProjectInput,
    condition?: ModelProjectConditionInput
  ): Promise<UpdateProjectMutation> {
    const statement = `mutation UpdateProject($input: UpdateProjectInput!, $condition: ModelProjectConditionInput) {
        updateProject(input: $input, condition: $condition) {
          __typename
          id
          internalId
          name
          contactName
          clientID
          ProjectAssets {
            __typename
            items {
              __typename
              id
              internalId
              type
              name
              projectID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateProjectMutation>response.data.updateProject;
  }
  async DeleteProject(
    input: DeleteProjectInput,
    condition?: ModelProjectConditionInput
  ): Promise<DeleteProjectMutation> {
    const statement = `mutation DeleteProject($input: DeleteProjectInput!, $condition: ModelProjectConditionInput) {
        deleteProject(input: $input, condition: $condition) {
          __typename
          id
          internalId
          name
          contactName
          clientID
          ProjectAssets {
            __typename
            items {
              __typename
              id
              internalId
              type
              name
              projectID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteProjectMutation>response.data.deleteProject;
  }
  async CreateClient(
    input: CreateClientInput,
    condition?: ModelClientConditionInput
  ): Promise<CreateClientMutation> {
    const statement = `mutation CreateClient($input: CreateClientInput!, $condition: ModelClientConditionInput) {
        createClient(input: $input, condition: $condition) {
          __typename
          id
          internalId
          name
          street
          city
          zip
          country
          Projects {
            __typename
            items {
              __typename
              id
              internalId
              name
              contactName
              clientID
              createdAt
              updatedAt
            }
            nextToken
          }
          state
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateClientMutation>response.data.createClient;
  }
  async UpdateClient(
    input: UpdateClientInput,
    condition?: ModelClientConditionInput
  ): Promise<UpdateClientMutation> {
    const statement = `mutation UpdateClient($input: UpdateClientInput!, $condition: ModelClientConditionInput) {
        updateClient(input: $input, condition: $condition) {
          __typename
          id
          internalId
          name
          street
          city
          zip
          country
          Projects {
            __typename
            items {
              __typename
              id
              internalId
              name
              contactName
              clientID
              createdAt
              updatedAt
            }
            nextToken
          }
          state
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateClientMutation>response.data.updateClient;
  }
  async DeleteClient(
    input: DeleteClientInput,
    condition?: ModelClientConditionInput
  ): Promise<DeleteClientMutation> {
    const statement = `mutation DeleteClient($input: DeleteClientInput!, $condition: ModelClientConditionInput) {
        deleteClient(input: $input, condition: $condition) {
          __typename
          id
          internalId
          name
          street
          city
          zip
          country
          Projects {
            __typename
            items {
              __typename
              id
              internalId
              name
              contactName
              clientID
              createdAt
              updatedAt
            }
            nextToken
          }
          state
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteClientMutation>response.data.deleteClient;
  }
  async GetTaxCreditNotes(id: string): Promise<GetTaxCreditNotesQuery> {
    const statement = `query GetTaxCreditNotes($id: ID!) {
        getTaxCreditNotes(id: $id) {
          __typename
          id
          internalId
          irc41Category
          notes
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetTaxCreditNotesQuery>response.data.getTaxCreditNotes;
  }
  async ListTaxCreditNotess(
    filter?: ModelTaxCreditNotesFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListTaxCreditNotessQuery> {
    const statement = `query ListTaxCreditNotess($filter: ModelTaxCreditNotesFilterInput, $limit: Int, $nextToken: String) {
        listTaxCreditNotess(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            internalId
            irc41Category
            notes
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListTaxCreditNotessQuery>response.data.listTaxCreditNotess;
  }
  async GetProjectAssetBudget(id: string): Promise<GetProjectAssetBudgetQuery> {
    const statement = `query GetProjectAssetBudget($id: ID!) {
        getProjectAssetBudget(id: $id) {
          __typename
          id
          internalId
          budgetHours
          budgetAmount
          taxCreditPercent
          taxCreditHours
          taxCreditAmount
          totalTaxCredit
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetProjectAssetBudgetQuery>response.data.getProjectAssetBudget;
  }
  async ListProjectAssetBudgets(
    filter?: ModelProjectAssetBudgetFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListProjectAssetBudgetsQuery> {
    const statement = `query ListProjectAssetBudgets($filter: ModelProjectAssetBudgetFilterInput, $limit: Int, $nextToken: String) {
        listProjectAssetBudgets(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            internalId
            budgetHours
            budgetAmount
            taxCreditPercent
            taxCreditHours
            taxCreditAmount
            totalTaxCredit
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListProjectAssetBudgetsQuery>response.data.listProjectAssetBudgets;
  }
  async GetProjectAsset(id: string): Promise<GetProjectAssetQuery> {
    const statement = `query GetProjectAsset($id: ID!) {
        getProjectAsset(id: $id) {
          __typename
          id
          internalId
          type
          name
          projectID
          ProjectAssetBudget {
            __typename
            id
            internalId
            budgetHours
            budgetAmount
            taxCreditPercent
            taxCreditHours
            taxCreditAmount
            totalTaxCredit
            createdAt
            updatedAt
          }
          TaxCreditNotes {
            __typename
            id
            internalId
            irc41Category
            notes
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetProjectAssetQuery>response.data.getProjectAsset;
  }
  async ListProjectAssets(
    filter?: ModelProjectAssetFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListProjectAssetsQuery> {
    const statement = `query ListProjectAssets($filter: ModelProjectAssetFilterInput, $limit: Int, $nextToken: String) {
        listProjectAssets(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            internalId
            type
            name
            projectID
            ProjectAssetBudget {
              __typename
              id
              internalId
              budgetHours
              budgetAmount
              taxCreditPercent
              taxCreditHours
              taxCreditAmount
              totalTaxCredit
              createdAt
              updatedAt
            }
            TaxCreditNotes {
              __typename
              id
              internalId
              irc41Category
              notes
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListProjectAssetsQuery>response.data.listProjectAssets;
  }
  async GetProject(id: string): Promise<GetProjectQuery> {
    const statement = `query GetProject($id: ID!) {
        getProject(id: $id) {
          __typename
          id
          internalId
          name
          contactName
          clientID
          ProjectAssets {
            __typename
            items {
              __typename
              id
              internalId
              type
              name
              projectID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetProjectQuery>response.data.getProject;
  }
  async ListProjects(
    filter?: ModelProjectFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListProjectsQuery> {
    const statement = `query ListProjects($filter: ModelProjectFilterInput, $limit: Int, $nextToken: String) {
        listProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            internalId
            name
            contactName
            clientID
            ProjectAssets {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListProjectsQuery>response.data.listProjects;
  }
  async GetClient(id: string): Promise<GetClientQuery> {
    const statement = `query GetClient($id: ID!) {
        getClient(id: $id) {
          __typename
          id
          internalId
          name
          street
          city
          zip
          country
          Projects {
            __typename
            items {
              __typename
              id
              internalId
              name
              contactName
              clientID
              createdAt
              updatedAt
            }
            nextToken
          }
          state
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetClientQuery>response.data.getClient;
  }
  async ListClients(
    filter?: ModelClientFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListClientsQuery> {
    const statement = `query ListClients($filter: ModelClientFilterInput, $limit: Int, $nextToken: String) {
        listClients(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            internalId
            name
            street
            city
            zip
            country
            Projects {
              __typename
              nextToken
            }
            state
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListClientsQuery>response.data.listClients;
  }
  OnCreateTaxCreditNotesListener: Observable<
    SubscriptionResponse<OnCreateTaxCreditNotesSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateTaxCreditNotes {
        onCreateTaxCreditNotes {
          __typename
          id
          internalId
          irc41Category
          notes
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateTaxCreditNotesSubscription>>;

  OnUpdateTaxCreditNotesListener: Observable<
    SubscriptionResponse<OnUpdateTaxCreditNotesSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateTaxCreditNotes {
        onUpdateTaxCreditNotes {
          __typename
          id
          internalId
          irc41Category
          notes
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateTaxCreditNotesSubscription>>;

  OnDeleteTaxCreditNotesListener: Observable<
    SubscriptionResponse<OnDeleteTaxCreditNotesSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteTaxCreditNotes {
        onDeleteTaxCreditNotes {
          __typename
          id
          internalId
          irc41Category
          notes
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteTaxCreditNotesSubscription>>;

  OnCreateProjectAssetBudgetListener: Observable<
    SubscriptionResponse<OnCreateProjectAssetBudgetSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateProjectAssetBudget {
        onCreateProjectAssetBudget {
          __typename
          id
          internalId
          budgetHours
          budgetAmount
          taxCreditPercent
          taxCreditHours
          taxCreditAmount
          totalTaxCredit
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateProjectAssetBudgetSubscription>>;

  OnUpdateProjectAssetBudgetListener: Observable<
    SubscriptionResponse<OnUpdateProjectAssetBudgetSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateProjectAssetBudget {
        onUpdateProjectAssetBudget {
          __typename
          id
          internalId
          budgetHours
          budgetAmount
          taxCreditPercent
          taxCreditHours
          taxCreditAmount
          totalTaxCredit
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateProjectAssetBudgetSubscription>>;

  OnDeleteProjectAssetBudgetListener: Observable<
    SubscriptionResponse<OnDeleteProjectAssetBudgetSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteProjectAssetBudget {
        onDeleteProjectAssetBudget {
          __typename
          id
          internalId
          budgetHours
          budgetAmount
          taxCreditPercent
          taxCreditHours
          taxCreditAmount
          totalTaxCredit
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteProjectAssetBudgetSubscription>>;

  OnCreateProjectAssetListener: Observable<
    SubscriptionResponse<OnCreateProjectAssetSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateProjectAsset {
        onCreateProjectAsset {
          __typename
          id
          internalId
          type
          name
          projectID
          ProjectAssetBudget {
            __typename
            id
            internalId
            budgetHours
            budgetAmount
            taxCreditPercent
            taxCreditHours
            taxCreditAmount
            totalTaxCredit
            createdAt
            updatedAt
          }
          TaxCreditNotes {
            __typename
            id
            internalId
            irc41Category
            notes
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateProjectAssetSubscription>>;

  OnUpdateProjectAssetListener: Observable<
    SubscriptionResponse<OnUpdateProjectAssetSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateProjectAsset {
        onUpdateProjectAsset {
          __typename
          id
          internalId
          type
          name
          projectID
          ProjectAssetBudget {
            __typename
            id
            internalId
            budgetHours
            budgetAmount
            taxCreditPercent
            taxCreditHours
            taxCreditAmount
            totalTaxCredit
            createdAt
            updatedAt
          }
          TaxCreditNotes {
            __typename
            id
            internalId
            irc41Category
            notes
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateProjectAssetSubscription>>;

  OnDeleteProjectAssetListener: Observable<
    SubscriptionResponse<OnDeleteProjectAssetSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteProjectAsset {
        onDeleteProjectAsset {
          __typename
          id
          internalId
          type
          name
          projectID
          ProjectAssetBudget {
            __typename
            id
            internalId
            budgetHours
            budgetAmount
            taxCreditPercent
            taxCreditHours
            taxCreditAmount
            totalTaxCredit
            createdAt
            updatedAt
          }
          TaxCreditNotes {
            __typename
            id
            internalId
            irc41Category
            notes
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteProjectAssetSubscription>>;

  OnCreateProjectListener: Observable<
    SubscriptionResponse<OnCreateProjectSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateProject {
        onCreateProject {
          __typename
          id
          internalId
          name
          contactName
          clientID
          ProjectAssets {
            __typename
            items {
              __typename
              id
              internalId
              type
              name
              projectID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateProjectSubscription>>;

  OnUpdateProjectListener: Observable<
    SubscriptionResponse<OnUpdateProjectSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateProject {
        onUpdateProject {
          __typename
          id
          internalId
          name
          contactName
          clientID
          ProjectAssets {
            __typename
            items {
              __typename
              id
              internalId
              type
              name
              projectID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateProjectSubscription>>;

  OnDeleteProjectListener: Observable<
    SubscriptionResponse<OnDeleteProjectSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteProject {
        onDeleteProject {
          __typename
          id
          internalId
          name
          contactName
          clientID
          ProjectAssets {
            __typename
            items {
              __typename
              id
              internalId
              type
              name
              projectID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteProjectSubscription>>;

  OnCreateClientListener: Observable<
    SubscriptionResponse<OnCreateClientSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateClient {
        onCreateClient {
          __typename
          id
          internalId
          name
          street
          city
          zip
          country
          Projects {
            __typename
            items {
              __typename
              id
              internalId
              name
              contactName
              clientID
              createdAt
              updatedAt
            }
            nextToken
          }
          state
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateClientSubscription>>;

  OnUpdateClientListener: Observable<
    SubscriptionResponse<OnUpdateClientSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateClient {
        onUpdateClient {
          __typename
          id
          internalId
          name
          street
          city
          zip
          country
          Projects {
            __typename
            items {
              __typename
              id
              internalId
              name
              contactName
              clientID
              createdAt
              updatedAt
            }
            nextToken
          }
          state
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateClientSubscription>>;

  OnDeleteClientListener: Observable<
    SubscriptionResponse<OnDeleteClientSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteClient {
        onDeleteClient {
          __typename
          id
          internalId
          name
          street
          city
          zip
          country
          Projects {
            __typename
            items {
              __typename
              id
              internalId
              name
              contactName
              clientID
              createdAt
              updatedAt
            }
            nextToken
          }
          state
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteClientSubscription>>;
}
