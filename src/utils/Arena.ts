//arena class and related functions
import { Player } from "./Player";

export class Arena {
    playerId : number;
    players: Map<number, Player>;

    constructor(){
        this.playerId = 0;
        this.players = new Map();
        console.log("WELCOME TO DEATH-MATCH ARENA !!!");
    }

    //TODO: addPlayer , deletePlayer, dislayPlayer, Battle.
    addPlayer(name: string, health: number, defence: number, attack: number) {
        if(health <= 0 || defence <= 0 || attack <= 0) {
            console.log("HEALTH, STRENGTH, and ATTACK should be a Positive Integer");
            return;
        }

        const idAssign = this.playerId++;
        const newPlayer = new Player(idAssign, name, health, defence, attack);
        this.players.set(idAssign, newPlayer);

        // console.log([...this.players.entries()]);
        return;
    }

    deletePlayer(id: number){
        if(this.players.has(id)){
            this.players.delete(id);
        }else{
            console.log(`The player id ${id} doesn't exists`);
            
        }
        console.log([...this.players.entries()]);
    }

    disPlayAllPlayers() {
        if(this.players.size > 0){
            for(const [id, player] of this.players){
                const {name, health, defence, attack} = player;
                console.log(`|\t${id}\t|\t${name}\t|\t${health}\t|\t${defence}\t|\t${attack}\t|`);
            }
        }else{
            console.log("NO PLAYER EXISTS IN THE ARENA !!! COMEON REGISTER");
        }
        console.log('\n');
    }

}