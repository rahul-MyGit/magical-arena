//arena class and related functions
import { Player } from "./Player";
import { rollDice } from "./Common";

export class Arena {
    playerId : number;
    players: Map<number, Player>;

    constructor(){
        this.playerId = 0;
        this.players = new Map();
        console.log("WELCOME TO DEATH-MATCH ARENA !!!");
    }


    addPlayer(name: string, health: number, defence: number, attack: number) {
        if(health <= 0 || defence <= 0 || attack <= 0) {
            console.log("HEALTH, STRENGTH, and ATTACK should be a Positive Integer");
            return -1;
        }

        const idAssign = this.playerId++;
        const newPlayer = new Player(idAssign, name, health, defence, attack);
        this.players.set(idAssign, newPlayer);

        // console.log([...this.players.entries()]);
        return idAssign;
    }

    deletePlayerById(id: number){
        if(this.players.has(id)){
            console.log(`PLAYER WITH ID: ${id} HAS BEEN DELETED`);
            this.players.delete(id);
            return id;
        }else{
            console.log(`NO PLAYER WITH ID: ${id} EXISTS IN ARENA`);  
        }
        return -1;
    }

    disPlayAllPlayers() {
        if(this.players.size > 0){
            console.log(`|\tid\t|\tname\t|\thealth\t|\tdefence\t|\tattack\t|`);
            for(const [id, player] of this.players){
                const {name, health, defence, attack} = player;
                console.log(`|\t${id}\t|\t${name}\t|\t${health}\t|\t${defence}\t|\t${attack}\t|`);
            }
        }else{
            console.log("NO PLAYER EXISTS IN THE ARENA !!! COMEON REGISTER noobs");
        }
        console.log('\n');
    }

    getPlayerCount (): number {
        return this.players.size;
    }

    isPresent (id: number) {
        return this.players.has(id);
    }

    magicalBattle (firstId: number, secondId: number) {
        if(firstId === secondId){
            console.log("Both the IDs cannot be same to start a WAR stupid");
            return {};
        }

        if(!this.players.has(firstId) || !this.players.has(secondId)){
            console.log("NOOB!!! .Don't enter the invalid IDs");
            return {};
        }

        let attacker = this.players.get(firstId);
        let defender = this.players.get(secondId);

        
        if(defender && attacker &&  defender.health <= attacker.health){
            [attacker, defender] = [defender, attacker];
        }

        if(defender && attacker){
            console.log("\n_____________WAR STARTED _________________\n");
            
            console.log(`\n____________${attacker.name} v/S ${defender.name}____________\n`);

            let count = 0;
            while(defender.health > 0){
             // Logic to battle
                const totalAttackerPowerToAttack = attacker.attack * rollDice();
                const totalDefenderPowerToDefend = defender.defence * rollDice();

                console.log(`Attacker ${attacker.name} attack to ${defender.name} with power of: ${totalAttackerPowerToAttack} \n`);

                if(totalAttackerPowerToAttack <= totalDefenderPowerToDefend){
                    console.log(`OMG: ${defender.name} has deflected his attack successfully \n`);
                }else{
                    const damageTaken = totalAttackerPowerToAttack - totalDefenderPowerToDefend;
                    defender.health = Math.max(0, defender.health - (damageTaken))
                    console.log(`OMG: ${defender.name} has taken ${damageTaken} damage now \n`);
                }
                
                if(defender.health > 0){
                    [attacker, defender] = [defender, attacker]
                    count++;
                    if(count % 2 == 0){
                        console.log("HEALTH AFTER EXCHANGES BLOWS ARE: ");
                        console.log("-----------------------------------------------------------------------");
                        console.log(`${defender.name}'s heath: ${defender.health} \n`);
                        console.log(`${attacker.name}'s heath: ${attacker.health} \n`);
                        console.log("------------------------------------------------------------------------");
                    }
                }
            }

            console.log(`${attacker.name} has emerged VICTORIOUS!!! \n`);
            this.deletePlayerById(defender.id);

            return {winner: attacker.id, loser: defender.id}
        }else{
            console.log("ERROR in starting the war Please try again");
            return {}; 
        }
    }
}