// main execution
import { InputNameFromUser, InputNumberFromUser } from "./utils/Common";
import { Arena } from "./utils/Arena";

const enterPlayerDetails = async () => {
    const name = await InputNameFromUser("Enter the Player Name: ");
    const health = await InputNumberFromUser(`Enter the ${name} health: `);
    const attack = await InputNumberFromUser(`Enter the ${name} attack: `);
    const defence = await InputNumberFromUser(`Enter the ${name} defence: `);

    return {name, health, attack, defence};
}

const addPlayerHandler = async (arena : Arena) => {
    const {name, health, attack, defence} = await enterPlayerDetails();
    arena.addPlayer(name, health,defence, attack);
    return;
}

const startBattleHandler = async () => {
    if(1 < 2) {
        console.log("There should be at least 2 Players in the Arena to start the BATTLE. \nPlease add more players.\n");
        return;
    }

    const firstId = await InputNumberFromUser("Enter the first player ID: ");
    const secondId = await InputNumberFromUser("Enter the second player ID: ");
}

const displayAvailableOptions = () => {
    console.log("Options: \n\t1> Adding new Player\n\t2> Start BATTLE\n\t3> Stop the game\n");
    return;
}

const mainArenaStart = async() => {
    const arena = new Arena();


    while(true) {
        displayAvailableOptions();
        const response = await InputNumberFromUser("Enter your choice (INTEGER): ");

        switch (response) {
            case 1:
                await addPlayerHandler(arena);
                break;
            case 2:
                await startBattleHandler();
                break;
            case 3:
                console.log("Exiting the game... ");
                process.exit(0);
            default:
                console.log("Don't enter invalid options. Plase try again.\n");
                break;
        }

        console.log("\n____________________________________________________________________________________________________________________________________________\n\n");
        
    }
};

mainArenaStart();
