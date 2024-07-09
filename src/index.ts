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

const startBattleHandler = async (arena : Arena) => {
    if(arena.getPlayerCount() < 2) {
        console.log("There should be at least 2 Players in the Arena to start the BATTLE. \nPlease add more players.\n");
        return;
    }

    const firstId = await InputNumberFromUser("Enter the first player ID: ");
    const secondId = await InputNumberFromUser("Enter the second player ID: ");
    arena.magicalBattle(firstId, secondId);
}

const displayAvailableOptions = () => {
    console.log("Options: \n\t1> Display All Players\n\t2> Adding new Player\n\t3> DELETE Player By ID\n\t4> Start BATTLE\n\t5> Stop the game\n");
    return;
}

const deletePlayerHandler = async (arena : Arena) => {
    const id = await InputNumberFromUser("Enter the player ID to be DELETED OR ENTER (-1) TO GO BACK: ");
    if(id === -1) return;
    arena.deletePlayerById(id);
    return;
}

const mainArenaStart = async() => {
    const arena = new Arena();


    while(true) {
        
        displayAvailableOptions();
        const response = await InputNumberFromUser("Enter your choice (INTEGER): ");

        switch (response) {
            case 1:
                arena.disPlayAllPlayers();
                break;
            case 2:
                await addPlayerHandler(arena);
                break;
            case 3:
                await deletePlayerHandler(arena);
                break;
            case 4:
                await startBattleHandler(arena);
                break;
            case 5:
                console.log("Exiting the game... ");
                process.exit(0);
            default:
                console.log("Don't enter invalid options. Plase try again.\n");
                break;
        }

        console.log("\n__________________________________________________________________________________________________________________________________________________________________________\n\n");
        
    }
};

mainArenaStart();
