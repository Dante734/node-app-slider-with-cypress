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

describe('Swiper Gallery Description Test', function () {
  const slides = [
    { title: 'Rome', description: 'Italy' },
    { title: 'United Kingdom', description: 'London' },
    { title: 'Paris', description: 'France' }
  ];

  it('Checks if each slide displays the correct title and description', function () {
    // Krok 1: Odwiedzenie strony galerii
    cy.visit('http://localhost:3000');

    slides.forEach((slide, index) => {
      if (index > 0) {
        cy.get('.swiper-button-next').click(); // Kliknięcie "Następny slajd" dla kolejnych slajdów
        cy.wait(1000); // Krótkie oczekiwanie na przejście slajdu
      }

      // Krok 2: Sprawdzenie, czy tytuł i opis są widoczne
      cy.get('.swiper-slide-active').should('contain', slide.title);
      cy.get('.swiper-slide-active').should('contain', slide.description);
    });
  });
});
