describe("Mi Aplicación", () => {
    it("Debería cargar la página principal", () => {
      cy.visit("/"); // Abre la página base de tu aplicación
      cy.contains("Bienvenido"); // Verifica que aparece un texto esperado
    });
  });
  