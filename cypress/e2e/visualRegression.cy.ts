import { computersListPage, addNewComputerPage, editComputerPage } from "../support/pageElements/computerDatabase.elements"
import { computerRandomInfo, myComputerInfo } from "../fixtures/computerInfo"
import { ComputerInfo } from "../support/types/ComputerInfo"

describe('Computer database', () => {
  beforeEach(() => {
    cy.step('Given I am on computers page')
    cy.visit('/')
  })

  it('verifies computers page', () => {
    cy.get(computersListPage.computersFound).should('be.visible')
    cy.percySnapshot()
  })

  it('verifies adds a new computer page', () => {
    cy.get(computersListPage.addNewComputerBtn).click()
    cy.percySnapshot()
  })

  it('verifies delete a computer page', () => {
    cy.get(computersListPage.tableComputerNames).first().click()
    cy.percySnapshot()
  })
})
