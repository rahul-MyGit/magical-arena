//arena class and related functions
import { Player } from "./Player";

export class Arena {
    totalPlayers: number;
    Players: Map<number, Player>;

    constructor(){
        this.totalPlayers = 0;
        this.Players = new Map();
        console.log("WELCOME TO DEATH-MATH ARENA !!!");
    }

    //TODO: addPlayer , deletePlayer, dislayPlayer, Battle.
}