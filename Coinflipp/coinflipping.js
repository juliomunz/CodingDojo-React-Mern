import { resolve } from "bluebird";

function tossCoin() {
        return Math.random() > 0.5 ? "heads" : "tails";
    }
function fiveHeadsSync() {
    return new Promise((resolve, reject) => {
        let headsCount = 0;
        let attempts = 0;
        while(headsCount < 5) {
            attempts++;
            let result = tossCoin();
            console.log(`${result} was flipped`);
            if(result === "heads") {
                headsCount++;
            } else {
                headsCount = 0;
            
        }
        if (attempts > 100){
            reject("Se superaron los 100 intentos");
        }
        
    }
        resolve(`Lo has logrado, con ${attempts} intentos para obtener 5 caras de la moneda`);
    });
}
    fiveHeads()
        .then( res => console.log(res) )
        .catch( err => console.log(err) );
    console.log( "When does this run now?" );