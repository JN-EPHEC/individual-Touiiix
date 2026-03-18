import { validateUserREgistration } from "../utils/userValidator";

describe("User Registration Validator - tests", () => {
    it("doit lever une erreur si un utilisateur de plus de 120 ans", () => {
        expect(() => {
            validateUserREgistration(125, "user", "blabla@gmail.com");
        }).toThrow("Age invalide");
    });
    it("devrait lever une erreur si un utilisateur a un role inconnu", () => {
        expect(() => {
            validateUserREgistration(25, "bob", "blabla@gmail.com");
        }).toThrow("Role invalide");
    });
    it("devrait rejeter un utilisateur si l'email ne comporte pas de @ ", () => {
        const result = validateUserREgistration(25, "user", "blablabla.bla");
        expect(result).toBe(false);
    });
    it("devrait rejeter un utilisateur si l'email ne comporte pas de . ", () => {
        const result = validateUserREgistration(25, "user", "blabla@blabla");
        expect(result).toBe(false);
    });
    it("devrait accepter un adulte avec un role et un email valide", () => {
        const result = validateUserREgistration(25, "admin", "blabla@gmail.com");
        expect(result).toBe(true);
    });
    it("devrait rejeter un enfant s'il n'est pas stagiaire ", () => {
        const result = validateUserREgistration(15, "user", "blabla@gmail.com");
        expect(result).toBe(false);
    });
    it("devrait accepter un enfant s'il est stagiaire ", () => {
        const result = validateUserREgistration(15, "stagiaire", "blabla@gmail.com");
        expect(result).toBe(true);
    });

})