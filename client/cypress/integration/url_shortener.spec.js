/// <reference types="cypress" />

describe("shorten urls", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("displays page with title", () => {
    cy.get("[data-cy=title]").should("have.text", "URL Shortener");
  });

  it("enters invalid url and receives error", () => {
    cy.get("[data-cy=url-input]").type("abc");
    cy.get("[data-cy=url-submit]").click();
    cy.get("[data-cy=url-error]").should("have.text", "Invalid URL");
    cy.get("[data-cy=url-input]").clear();
    cy.get("[data-cy=url-input]").type("http://");
    cy.get("[data-cy=url-error]").should("have.text", "Invalid URL");
    cy.get("[data-cy=url-input]").clear();
    cy.get("[data-cy=url-input]").type("http://google.com");
    cy.get("[data-cy=url-error]").should("not.have.text", "Invalid URL");
  });

  it("enters valid url and gets new copyable short url", () => {
    cy.get("[data-cy=url-input]").type("http://google.com");
    cy.get("[data-cy=url-submit]").click();

    cy.get("[data-cy=new-short-url]")
      .invoke("text")
      .then((url) => {
        cy.get("[data-cy=new-short-url-button]").within((_) => {
          cy.get("[data-cy=url-copy-button]")
            .click()
            .then((_) => {
              cy.window().then((win) => {
                win.navigator.clipboard.readText().then((text) => {
                  expect(text).to.eq(url);
                });
              });
            });
        });
      });
  });

  it("shows multiple URLs and can copy the last one", () => {
    cy.get("[data-cy=url-input]").type("http://google.com");
    cy.get("[data-cy=url-submit]").click();
    cy.get("[data-cy=url-input]").clear();
    cy.get("[data-cy=new-short-url]")
      .invoke("text")
      .then((url) => {
        cy.get("[data-cy=urls-table")
          .find("tbody")
          .find("td")
          .then((tds) => {
            expect(tds[0]).to.contain(url);
            expect(tds[1]).to.contain("http://google.com");
          });
      });
    cy.get("[data-cy=url-input]").type("http://www.stord.com");
    cy.get("[data-cy=url-submit]").click();
    cy.get("[data-cy=urls-table")
      .find("tbody")
      .find("td")
      .then((tds) => {
        expect(tds[1]).to.contain("http://www.stord.com");
      });
  });

  it("redirects a link to the original url", () => {
    cy.get("[data-cy=url-input]").type("http://google.com");
    cy.get("[data-cy=url-submit]").click();
    cy.get("[data-cy=new-short-url]")
      .invoke("text")
      .then((url) => {
        cy.visit(url);
        cy.url().should("contain", "google.com");
      });
  });
});
