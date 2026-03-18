import { validatePassword } from "../utils/password";
describe("Password Validator - White Box Testing", () => {
    // Test initial pour initialiser le rapport de couverture
    // Ce test ne couvre que la première ligne de la fonction (Branch 1)
    it("devrait rejeter un mot de passe vide", () => {
        const result = validatePassword("", 25);
        expect(result).toBe(false);
    });
    it("devrait rejeter un mot de passe plus petit que 8 caractères", () => {
        const result = validatePassword("dkeoxls", 25);
        expect(result).toBe(false);
    });
    it("devrait rejeter un mot de passe plus grand que 20 caractères", () => {
        const result = validatePassword("dkeoxlszocndjsldocldo", 25);
        expect(result).toBe(false);
    });
    it("devrait accepter un mot de passe d'enfant avec que des minuscules", () => {
        const result = validatePassword("minuscules", 9);
        expect(result).toBe(true);
    });
    it("devrait rejeter un mot de passe d'enfant avec que des majuscules", () => {
        const result = validatePassword("MAJUSCULES", 9);
        expect(result).toBe(false);
    });
    it("devrait rejeter un mot de passe d'adulte avec que des minuscules", () => {
        const result = validatePassword("minuscules", 25);
        expect(result).toBe(false);
    });
   it("devrait rejeter un mot de passe d'adulte avec que des majuscules", () => {
        const result = validatePassword("MAJUSCULES", 25);
        expect(result).toBe(false);
    });
    it("devrait rejeter un mot de passe d'adulte sans chiffre", () => {
        const result = validatePassword("PasDeChiffres", 25);
        expect(result).toBe(false);
    });
    it("devrait rejeter un mot de passe d'adulte sans caractère spécial", () => {
        const result = validatePassword("PasDeCaracSpe123", 25);
        expect(result).toBe(false);
    });
    it("devrait accepter un mot de passe d'adulte parfait ", () => {
        const result = validatePassword("Parfait123!", 25);
        expect(result).toBe(true);
    });
    it("devrait rejeter un mot de passe de senior qui n'a pas de majuscules et de chiffre", () => {
        const result = validatePassword("minuscules!", 75);
        expect(result).toBe(false);
    });
    it("devrait accepter un mot de passe de senior si chiffre mais pas majuscules", () => {
        const result = validatePassword("minuscules123!", 75);
        expect(result).toBe(true);
    });
    it("devrait accepter un mot de passe de senior si majuscules mais pas chiffre", () => {
        const result = validatePassword("Majuscule!", 75);
        expect(result).toBe(true);
    });
});
