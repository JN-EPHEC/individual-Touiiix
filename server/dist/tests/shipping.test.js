import { calculateShipping } from "../utils/shipping";
const distanceCases = [
    //[Dist, Poids, Type, Attendu, Description]
    [0, 5, "standard", 10, "Limite basse tranche 1 (0km)"],
];
describe('Shipping Calculator - Tests Fonctionnels', () => {
    describe('1. Catalog and boudaries', () => {
        const validCases = [
            [0, 5, "standard", 10, "Distance 0 km -> prix 10€ (standard)"],
            [50, 5, "standard", 10, "Distance 50 km -> prix 10€ (standard)"],
            [51, 5, "standard", 25, "Distance 51 km -> prix 25€ (standard)"],
            [500, 5, "standard", 25, "Distance 500 km -> prix 25€ (standard)"],
            [501, 5, "standard", 50, "Distance 501 km -> prix 50€ (standard)"],
            [10, 9, "standard", 10, "Poids < 10kg -> prix 10€ (standard)"],
            [10, 10, "standard", 15, "Poids 10kg -> prix 15€ (standard)"],
            [10, 50, "standard", 15, "10 kg < Poids < 51kg -> prix 15€ (standard)"],
            [10, 5, "express", 20, "Express sans majoration"],
            [100, 20, "express", 75, "Express avec majoration"],
        ];
        test.each(validCases)('Distance %i km, Poids %i kg (%s) -> Doit couter %i€', (distance, poids, type, resultatAttendu) => {
            expect(calculateShipping(distance, poids, type)).toBe(resultatAttendu);
        });
        const errorCases = [
            //[Dist, Poids, Type, Description]
            [-1, 5, "standard", "distance invalide"],
            [10, 0, "standard", "poids invalide"],
            [10, -5, "standard", "poids invalide"],
            [10, 51, "standard", "poids invalide"],
        ];
        test.each(errorCases)('Entrée invalide (%i, %i) doit lever une erreur', (distance, poids, type) => {
            expect(() => {
                calculateShipping(distance, poids, type);
            }).toThrow();
        });
    });
    describe('2. Pairwise Combinations', () => {
        const PairWise = [
            //[Dist, Poids, Type, Attendu, Description]
            [10, 5, "standard", 10], //courte, leger, standard
            [10, 50, "express", 30], //courte, lourd, express
            [100, 5, "express", 50], //moyenne, leger, express
            [100, 50, "standard", 37.5], //moyenne, lourd, standard
            [600, 5, "express", 100], //longue, leger, express
            [600, 50, "standard", 75], //longue, lourd, standard
        ];
        test.each(PairWise)('Scénario : %i km, %i kg, %s -> Total %f €', (distance, poids, type, resultatAttendu) => {
            expect(calculateShipping(distance, poids, type)).toBe(resultatAttendu);
        });
    });
});
//# sourceMappingURL=shipping.test.js.map