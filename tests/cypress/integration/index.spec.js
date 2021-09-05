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
      'Carol Fritsch',
    );
  });

  it('should sort from newest to oldest', () => {
    cy.get('.post-sort__select').select('Newest');

    cy.get('.post__header:first > div > .post__author').should(
      'have.text',
      'Ms. Dianna Murazik',
    );
  });

  it('should sort from oldest to newest', () => {
    cy.get('.post-sort__select').select('Oldest');

    cy.get('.post__header:first > div > .post__author').should(
      'have.text',
      'Harriet Ziemann',
    );
  });

  it('should search for a given term', () => {
    cy.get('.search-input').type('ca');
    cy.get('.search-input__button').click();

    cy.get('.post__header:first > div > .post__author').should(
      'have.text',
      'Carol Fritsch',
    );
  });

  it('should search and sort the same search request', () => {
    cy.get('.post-sort__select').select('Oldest');
    cy.get('.search-input').type('ca');
    cy.get('.search-input__button').click();

    cy.get('.post__header:first > div > .post__author').should(
      'have.text',
      'Harriet Ziemann',
    );
  });

  it('should open a posts page once a read more button is clicked', () => {
    cy.get('.post__read-more:first').click();
    cy.url().should('include', '/posts/1');
  })
});
