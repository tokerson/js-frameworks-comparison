describe('all websites', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should render search input', () => {
    cy.get('.search-input').should(
      'have.attr',
      'placeholder',
      'Search for post',
    );
  });

  it('should render sort options select', () => {
    cy.get('.post-sort__select');
  });

  it('should render submit search button', () => {
    cy.get('.search-input__button');
  });

  it('should display first item from list as first', () => {
    cy.get('.post__header:first > div > .post__author').should(
      'have.text',
      'Lusa Halle',
    );
  });

  it('should sort from newest to oldest', () => {
    cy.get('.post-sort__select').select('Newest');

    cy.get('.post__header:first > div > .post__author').should(
      'have.text',
      'Hazel Kohn',
    );
  });

  it('should sort from oldest to newest', () => {
    cy.get('.post-sort__select').select('Oldest');

    cy.get('.post__header:first > div > .post__author').should(
      'have.text',
      'Christian Tee',
    );
  });

  it('should search for a given term', () => {
    cy.get('.search-input').type('ca');
    cy.get('.search-input__button').click();

    cy.get('.post__header:first > div > .post__author').should(
      'have.text',
      'Larine Cansdale',
    );
  });

  it('should search and sort the same search request', () => {
    cy.get('.post-sort__select').select('Oldest');
    cy.get('.search-input').type('ca');
    cy.get('.search-input__button').click();

    cy.get('.post__header:first > div > .post__author').should(
      'have.text',
      'Maggy Cantillon',
    );
  });
});
