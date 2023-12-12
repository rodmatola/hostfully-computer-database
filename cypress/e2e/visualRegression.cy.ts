import { computersListPage } from "../support/pageElements/computerDatabase.elements"

describe('Computer database Visual Regression', () => {
  beforeEach(() => {
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
