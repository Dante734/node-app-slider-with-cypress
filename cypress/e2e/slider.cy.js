describe('Swiper Gallery Test', function () {
  it('Checks if second slide contains "United Kingdom"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if third slide contains "Paris"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Paris');
  });
});

describe('Swiper Gallery Navigation Test', function () {
  it('Should navigate through slides using "next" and "prev" buttons', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-slide-active').should('contain', 'Germany');
    cy.get('.swiper-button-next').click();  // Kliknięcie przycisku "Następny"
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom'); // Sprawdzenie, czy aktywny slajd zawiera "United Kingdom"

    // Krok 3: Kliknięcie przycisku "Poprzedni slajd"
    cy.get('.swiper-button-prev').click();  // Kliknięcie przycisku "Poprzedni"
    cy.get('.swiper-slide-active').should('contain', 'Germany'); // Sprawdzenie, czy powróciliśmy do "Germany"
  });
});
