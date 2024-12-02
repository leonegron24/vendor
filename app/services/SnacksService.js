import { AppState } from "../AppState.js";
import { Snack } from "../models/Snack.js";

class SnacksService {

    addQuarter(){
        AppState.money += 0.25
        console.log(AppState.money)
    }

    purchaseSnack(snackName){
        console.log(snackName)
        const snackToBuy = AppState.snacks.find(snack => snackName == snack.name)
        if (!snackToBuy){
            return
        }
        console.log(snackToBuy)
        if (AppState.money >= snackToBuy.price){
            AppState.money -= snackToBuy.price
            window.alert('Enjoy your ' + snackName)
        }else{
            window.alert('Not enough money for this Snack! ' + snackName + ' costs $' + snackToBuy.price+ '. Please add more money!')
        }
        if (snackToBuy.price > AppState.money){
            snackToBuy.showButton = false
        }

    }

    availableSnacks(){
        let snacksAvailable = AppState.snacks.filter(snack => AppState.money >= snack.price);
        snacksAvailable.forEach(snack => snack.showButton = true)
        let snacksNotAvailable = AppState.snacks.filter(snack => AppState.money < snack.price)
        snacksNotAvailable.forEach(snack => snack.showButton = false)
    }
}

export const snacksService = new SnacksService()