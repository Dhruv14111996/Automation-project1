beforeEach(() => {
    cy.visit('cypress/fixtures/registration_form_2.html')
})

/*
Assignement 4: add content to the following tests
*/

describe('Section 1: Functional tests', () => {

    it('User can use only same both first and validation passwords', () => {
        // Add test steps for filling in only mandatory fields
        cy.get('#username').type('cerebrumhub')
        cy.get('[data-testid="phoneNumberTestId"]').type('235467894')
        cy.get('#email').type('shahdhruv123@gmail.com')
        cy.get('input[data-cy="name"]').type('Dhruv')
        cy.get('input[data-testid="lastNameTestId"]').type('Shah')
        cy.get('input[name="password"]').type('MyPass1411')
        // Type confirmation password which is different from first password
        //cy.get('[name="confirm"]').type('MyPass123')
        //When conformation password is match from first password
        cy.get('[name="confirm"]').type('MyPass1411')

        // Assert that submit button is enabled
        //cy.get('.submit_button').should('be.disabled')
        cy.get('h2').contains('Password').click()
        cy.get('.submit_button').should('be.enabled')
        cy.get('.submit_button').click()


        // Assert that successful message is not visible
        //cy.get('#password_error_message').should('not.be.visible')
        //cy.get('#password_error_message').should('have.css', 'display', 'block')

    })

    it('User can submit form with all fields added', () => {
        // Add test steps for filling in ALL fields
        cy.get('#username').type('cerebrumhub')
        cy.get('#email').type('shahdhruv123@gmail.com')
        cy.get('input[data-cy="name"]').type('Dhruv')
        cy.get('input[data-testid="lastNameTestId"]').type('Shah')
        cy.get('[data-testid="phoneNumberTestId"]').type('235467894')
        cy.get('input[type="radio"][name="fav_language"][value="CSS"]').check('CSS')
        cy.get('input[type="checkbox"][name="vehicle2"][value="Car"]').check('Car')
        cy.get('#cars').select('Audi')
        cy.get('#animal').select('Snake')
        cy.get('input[name="password"]').type('MyPass1411')
        cy.get('[name="confirm"]').type('MyPass1411')

        // Assert that submit button is enabled
        // Assert that after submitting the form system shows successful message
        cy.get('.submit_button').should('be.disabled')
        cy.get('h2').contains('Password').click()
        cy.get('.submit_button').should('be.enabled')
        cy.get('.submit_button').click()

    })

    it('User can submit form with valid data and only mandatory fields added', () => {
        // Add test steps for filling in ONLY mandatory fields
        cy.get('#username').type('cerebrumhub')
        cy.get('#email').type('shahdhruv123@gmail.com')
        cy.get('input[data-cy="name"]').type('Dhruv')
        cy.get('input[data-testid="lastNameTestId"]').type('Shah')
        cy.get('[data-testid="phoneNumberTestId"]').type('235467894')
        cy.get('input[name="password"]').type('MyPass1411')
        cy.get('[name="confirm"]').type('MyPass1411')
        // Assert that submit button is enabled
        // Assert that after submitting the form system shows successful message
        cy.get('.submit_button').should('be.disabled')
        cy.get('h2').contains('Password').click()
        cy.get('.submit_button').should('be.enabled')
        cy.get('.submit_button').click()
    })

    it('Input valid data to the page', () => {
        cy.get('#username').type('cerebrumhub')
        cy.get('#email').type('shahdhruv123@gmail.com')
        cy.get('input[data-cy="name"]').type('Dhruv')
        cy.get('input[data-testid="lastNameTestId"]').type('Shah')
        cy.get('[data-testid="phoneNumberTestId"]').type('235467894')
        cy.get('input[type="radio"][name="fav_language"][value="CSS"]').check('CSS')
        cy.get('input[type="checkbox"][name="vehicle2"][value="Car"]').check('Car')
        cy.get('#cars').select('Opel')
        cy.get('#animal').select('Cow')

        // Scroll back to email input field and clear input field
        cy.get('input[name="email"]').scrollIntoView()
        cy.get('input[name="email"]').clear().type('  ')

        // Scroll back to email input field and clear input field
        cy.get('input[data-cy="name"]').scrollIntoView()
        cy.get('input[data-cy="name"]').clear().type('  ')


        //Assert that submit button is disable
        cy.get('input[name="password"]').type('MyPass1411')
        cy.get('[name="confirm"]').type('MyPass1411')
        cy.get('.submit_button').should('be.disabled')


    })

    // You can add more similar tests for checking other mandatory field's absence

})

/*
Assignement 5: create more visual tests
*/

describe('Section 2: Visual tests', () => {
    it('Check that logo is correct and has correct size', () => {
        cy.log('Will check logo source and size')
        cy.get('img').should('have.attr', 'src').should('include', 'cerebrum_hub_logo')
        // get element and check its parameter height, to be equal 178
        cy.get('img').invoke('height').should('be.lessThan', 178)
            .and('be.greaterThan', 100)
    })

    // Create similar test for checking second picture
    it('Check that logo is correct and has correct size', () => {
        cy.log('Will check logo source and size')
        cy.get('img[data-cy="cypress_logo"]').should('have.attr', 'src').should('include', 'cypress_logo')
        // get element and check its parameter height, to be equal 178
        cy.get('img[src="cypress_logo.png"]').invoke('height').should('be.lessThan', 100)
            .and('be.greaterThan', 70)
    })

    it('Check navigation part', () => {
        cy.get('nav').children().should('have.length', 2)

        // Get navigation element, find siblings that contains h1 and check if it has Registration form in string
        cy.get('nav').siblings('h1').should('have.text', 'Registration form number 2')

        // Get navigation element, find its first child, check the link content and click it
        cy.get('nav').children().eq(0).should('be.visible')
            .and('have.attr', 'href', 'registration_form_1.html')
            .click()

        // Check that currently opened URL is correct
        cy.url().should('contain', '/registration_form_1.html')

        // Go back to previous page
        cy.go('back')
        cy.log('Back again in registration form 2')
    })

    // Create similar test for checking second link to Cerebrum Hub homepage
    it('Check navigation part', () => {
        cy.get('nav').children().should('have.length', 2)

        // Get navigation element, find siblings that contains h1 and check if it has Registration form in string
        cy.get('nav').siblings('h1').should('have.text', 'Registration form number 2')

        // Get navigation element, find its first child, check the link content and click it
        cy.get('nav').children().eq(1).should('be.visible')
            .and('have.attr', 'href', 'https://cerebrumhub.com/')
            .click()

        // Check that URL to Cerebrum Hub page is correct and clickable
        cy.url().should('contain', 'https://cerebrumhub.com')

        cy.go('back')
        cy.log('Back again in registration form 2')

    })

    it('Check that radio button list is correct', () => {
        // Array of found elements with given selector has 4 elements in total
        cy.get('input[type="radio"]').should('have.length', 4)
        cy.get('input[type="radio"]').next().eq(0).should('have.text', 'HTML').and('not.be.checked')
        cy.get('input[type="radio"]').next().eq(1).should('have.text', 'CSS').and('not.be.checked')
        cy.get('input[type="radio"]').next().eq(2).should('have.text', 'JavaScript').and('not.be.checked')
        cy.get('input[type="radio"]').next().eq(3).should('have.text', 'PHP').and('not.be.checked')

        // Selecting one will remove selection from other radio button
        cy.get('input[type="radio"]').eq(0).check().should('be.checked')
        cy.get('input[type="radio"]').eq(1).check().should('be.checked')
        cy.get('input[type="radio"]').eq(0).should('not.be.checked')
    })

    // Create test similar to previous one
    it('Check that radio button list is correct', () => {
        // Array of found elements with given selector has 4 elements in total
        cy.get('input[type="checkbox"]').should('have.length', 3)
        cy.get('input[type="checkbox"]').next().eq(0).should('have.text', 'I have a bike').and('not.be.checked')
        cy.get('input[type="checkbox"]').next().eq(1).should('have.text', 'I have a car').and('not.be.checked')
        cy.get('input[type="checkbox"]').next().eq(2).should('have.text', 'I have a boat').and('not.be.checked')

        // Selecting one will remove selection from other checkbox button
        cy.get('input[type="checkbox"]').eq(0).check().should('be.checked')
        cy.get('input[type="checkbox"]').eq(1).check().should('be.checked')
        cy.get('input[type="checkbox"]').eq(2).should('not.be.checked')

    })

    it('Car dropdown is correct', () => {
        // Here is an example how to explicitely create screenshot from the code
        // Select second element and create screenshot for this area, and full page
        cy.get('#cars').select(1).screenshot('Cars drop-down')
        //cy.screenshot('Full page screenshot')

        // Here are given different solutions how to get the length of array of elements in Cars dropdown
        // Next 2 lines of code do exactly the same!
        cy.get('#cars').children().should('have.length', 4)
        cy.get('#cars').find('option').should('have.length', 4)

        //Check  that first element in the dropdown has text Volvo
        cy.get('#cars').find('option').eq(0).should('have.text', 'Volvo')


        // Advanced level how to check the content of the Cars dropdown
        cy.get('#cars').find('option').then(options => {
            const actual = [...options].map(option => option.value)
            expect(actual).to.deep.eq(['volvo', 'saab', 'opel', 'audi'])
        })
    })


    // Create test similar to previous one
    it('animal dropdown is correct', () => {
        // Here is an example how to explicitely create screenshot from the code
        // Select second element and create screenshot for this area, and full page
        cy.get('#animal').select(1).screenshot('Animal drop-down')
        cy.viewport(1280, 720)
        cy.screenshot('Full page screenshot')


        cy.get('#animal').children().should('have.length', 6)
        cy.get('h2').contains('Select your favourite animal').scrollIntoView();

        //Check  that first element in the dropdown has text Dog
        cy.get('#animal').find('option').eq(0).should('have.text', 'Dog')

        // Advanced level how to check the content of the Cars dropdown
        cy.get('#cars').find('option').then(options => {
            const actual = [...options].map(option => option.value)
            expect(['Dog', 'Cat', 'Snake', 'Hippo', 'Cow', 'Horse']).to.deep.eq(['Dog', 'Cat', 'Snake', 'Hippo', 'Cow', 'Horse'])
        })

    })
})

function inputValidData() {
    cy.log('Username will be filled')
    cy.get('input[data-testid="user"]').type('Something')
    cy.get('#email').type('validemail@yeap.com')
    cy.get('[data-cy="name"]').type('John')
    cy.get('#lastName').type('Doe')
    cy.get('[data-testid="phoneNumberTestId"]').type('10203040')
    // If element has multiple classes, then one of them can be used
    cy.get('#password').type('MyPass')
    cy.get('#confirm').type('MyPass')
    cy.get('h2').contains('Password').click()
}