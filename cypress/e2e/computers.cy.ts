import { computersListPage, addNewComputerPage } from "../support/pageElements/computerDatabase.elements"
import { computerInfo } from "../fixtures/computerInfo"
import { ComputerInfo } from "../support/types/ComputerInfo"

describe('Computer database', () => {
  beforeEach(() => {
    cy.step('Given I am on computers page')
    cy.visit('/')
  })

  it('adds a new computer', () => {
    cy.step('And I have a number of computers found')
    cy.get(computersListPage.computersFound).invoke('text').as('computersBefore')

    cy.step('When I add a new computer')
    cy.get(computersListPage.addNewComputerBtn).click()
    cy.fillNewComputer(computerInfo as ComputerInfo)
    cy.get(addNewComputerPage.createComputerBtn).click()

    cy.step('Then I should see an addition success message')
    cy.get(computersListPage.alertMessage).should('contain', 'created')

    cy.step('And the number of computers found should be increased by 1')
    cy.get(computersListPage.computersFound).invoke('text').then(text => {
      let computersAfter = parseInt(text.toString().split(' ')[0])

      cy.get('@computersBefore').then(text => {
        let computersBefore = parseInt(text.toString().split(' ')[0])
        expect(computersAfter).to.equal(computersBefore + 1)
      })
    })
  })
})
