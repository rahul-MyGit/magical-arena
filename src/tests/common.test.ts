// dice test
import { describe, expect, it } from "vitest";
import { rollDice } from "../utils/Common";

describe('Checking rollDice function', () => {
    it('should return a number between 1 and 6', ()=>{
        expect(rollDice()).toBeGreaterThan(1);
        expect(rollDice()).toBeLessThan(7);
    });

    it('should return an integer', ()=>{
        expect(typeof rollDice()).toBe('number');
    });
});
