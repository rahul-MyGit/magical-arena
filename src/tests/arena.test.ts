// battle, input edge cases test
import { Arena } from "../utils/Arena";
import { beforeEach, describe, expect, it } from "vitest";

describe('Checking everything in Arena' , () => {

    describe("Testing for adding players in Arena ", ()=>{
        let arena : Arena;
    
        beforeEach(()=>{
            arena = new Arena();
        });
    
        it('A players health can\'t be in neative or zero', ()=>{
            expect(arena.addPlayer('code1', -1, 30,20)).toBe(-1);
            expect(arena.addPlayer('code2', 0, 30, 20)).toBe(-1);
        });
    
        it('A players attack  can\'t be in neative', ()=>{
            expect(arena.addPlayer('code1', 100, -30, 20)).toBe(-1);
            expect(arena.addPlayer('code2', 100, 0, -20)).toBe(-1);
        });
    
        it('A players defence  can\'t be in neative', ()=>{
            expect(arena.addPlayer('code1', 100, 30, -20)).toBe(-1);
            expect(arena.addPlayer('code2', 100, 30, 0)).toBe(-1);
        });
    
        it("Player adding in Arena should work correctly", ()=>{
            expect(arena.isPresent(arena.addPlayer('code1', 100, 30, 20))).toBe(true);
        });
    
        it('Total Players present in an Arena should increase when new Player get\'s added', () => {
            const prevCount = arena.getPlayerCount();
            arena.addPlayer('code1', 100, 30, 20);
            const newCount = arena.getPlayerCount();
            expect(newCount).toBe(prevCount + 1);
        });
    });
    
    
    describe("Testing for Deleting players from Arena", () => {
        let arena : Arena;

        beforeEach(()=>{
            arena = new Arena();
        });

        it("Deleted player should not be present inside Arena", ()=>{
            expect(arena.isPresent(arena.deletePlayerById(arena.addPlayer('code1', 100, 30, 20)))).toBe(false);
        });

        it('Cannot delete from ID if it\'s ID is absent from the Arena', ()=>{
            expect(arena.deletePlayerById(100)).toBe(-1);
        });

        it("Total Players in arena should decrease after deletion of one Player", ()=>{
            const id = arena.addPlayer('code1', 100, 30, 20);
            const prevCount = arena.getPlayerCount();

            arena.deletePlayerById(id);
            const newCount = arena.getPlayerCount();
            expect(newCount).toBe(prevCount - 1);
        });
    });


    describe('Testing the Magical Battle Arena function', ()=>{
        let arena : Arena;

        beforeEach(()=>{
            arena = new Arena();
        });

        it('Starting a WAR with 0 Players present in Arena', ()=>{
            expect(arena.magicalBattle(0,1)).toEqual({});
        });

        it('Starting a WAR with the same ID\'s ', ()=>{
            const id1 = arena.addPlayer('code1', 100, 30, 20);
            const id2 = arena.addPlayer('code2', 100, 20, 30);
            expect(arena.magicalBattle(id2, id2)).toEqual({});
        });

        it('Player id is not present in Arena', ()=>{
            const id1 = arena.addPlayer('code1', 100, 30, 20);
            expect(arena.magicalBattle(id1, 100)).toEqual({});
        });

        it('magicalBattle OutCome', ()=> {
            const id1 = arena.addPlayer('code1', 100, 30, 20);
            const id2 = arena.addPlayer('code2', 100, 30, 20);

            const resultArray = [{winner: id1, loser: id2}, {winner: id2, loser: id1}];
            const response = arena.magicalBattle(id1, id2);

            expect(resultArray).toContainEqual(response);
            
            if(response.winner && response.loser){
                expect(arena.isPresent(response.winner)).toBe(true);
                expect(arena.isPresent(response.loser)).toBe(false);
            }
        });
    });
    
})

