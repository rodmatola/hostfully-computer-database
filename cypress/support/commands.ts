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
  cy.get(addNewComputerPage.computerNameField).type(info.computerName)
  cy.get(addNewComputerPage.introducedField).type(info.introduced)
  cy.get(addNewComputerPage.discontinuedField).type(info.discontinued)
  cy.get(addNewComputerPage.companyDropDown).select(info.companyIndex)
 })
