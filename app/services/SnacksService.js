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

    }

    availableSnacks(){
        console.log('Money Available', AppState.money)
        const snacksAvailable = AppState.snacks.find(snack =>  AppState.money >= snack.price)
        console.log('Available Snack', snacksAvailable)
        if (!snacksAvailable){
            return
        }
        console.log('button value' + snacksAvailable.showButton)
        snacksAvailable.showButton = !snacksAvailable.showButton
    
        
    }
}

export const snacksService = new SnacksService()