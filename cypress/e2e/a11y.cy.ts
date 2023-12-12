import { computersListPage } from "../support/pageElements/computerDatabase.elements"

describe('Computer database accessibility', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.injectAxe()
  })

  it('verifies computers page a11y', () => {
    cy.get(computersListPage.computersFound).should('be.visible')
    cy.checkA11y()
  })

  it('verifies adds a new computer page a11y', () => {
    cy.get(computersListPage.addNewComputerBtn).click()
    cy.injectAxe()
    cy.checkA11y()
  })

  it('verifies delete a computer page a11y', () => {
    cy.get(computersListPage.tableComputerNames).first().click()
    cy.injectAxe()
    cy.checkA11y()
  })
})
