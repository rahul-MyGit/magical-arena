// main execution
import { InputNameFromUser, InputNumberFromUser } from "./utils/Common";

//TODO: functions to make: addPlayer to arena, start battle, display all member.
const mainArenaStart = async() => {
    const name = await InputNameFromUser("Enter the player's name: ");
    const health = await InputNumberFromUser(`Enter ${name}'s health: `);
    const attack = await InputNumberFromUser(`Enter ${name}'s attack: `);
    const defence = await InputNumberFromUser(`Enter ${name}'s strength: `);

    console.log(name , health, attack, defence)
}

mainArenaStart();
