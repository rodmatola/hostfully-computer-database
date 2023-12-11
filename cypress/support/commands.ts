/// <reference types="cypress" />

import { computersListPage, addNewComputerPage } from "../support/pageElements/computerDatabase.elements"
import { ComputerInfo } from "./types/ComputerInfo"

declare global {
  namespace Cypress {
    interface Chainable {
      fillComputerInfo(info: ComputerInfo): Chainable<void>
      // computersBeforeAndAfter(computersBefore: number, computersAfter: number): Chainable<void>
    }
  }
}

Cypress.Commands.add('fillComputerInfo', (info) => {
  cy.get(addNewComputerPage.computerInfo.computerNameField).type(info.computerName)
  cy.get(addNewComputerPage.computerInfo.introducedField).type(info.introduced)
  cy.get(addNewComputerPage.computerInfo.discontinuedField).type(info.discontinued)
  cy.get(addNewComputerPage.computerInfo.companyDropDown).select(info.companyIndex)
})

// Cypress.Commands.add('computersBeforeAndAfter', (computersBefore, computersAfter) => {
//   cy.get(computersListPage.computersFound).invoke('text').then(text => {
//     let computersAfter = parseInt(text.toString().split(' ')[0])

//     cy.get('@computersBefore').then(text => {
//       let computersBefore = parseInt(text.toString().split(' ')[0])
//       expect(computersAfter).to.equal(computersBefore - 1)
//     })
//   })
// })
