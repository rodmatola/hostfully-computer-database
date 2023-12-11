/// <reference types="cypress" />

import { addNewComputerPage } from "../support/pageElements/computerDatabase.elements"
import { ComputerInfo } from "./types/ComputerInfo"

declare global {
  namespace Cypress {
    interface Chainable {
      fillNewComputer(info: ComputerInfo): Chainable<void>
    }
  }
}

Cypress.Commands.add('fillNewComputer', (info) => {
  cy.get(addNewComputerPage.computerInfo.computerNameField).type(info.computerName)
  cy.get(addNewComputerPage.computerInfo.introducedField).type(info.introduced)
  cy.get(addNewComputerPage.computerInfo.discontinuedField).type(info.discontinued)
  cy.get(addNewComputerPage.computerInfo.companyDropDown).select(info.companyIndex)
 })
