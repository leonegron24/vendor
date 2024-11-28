import { AppState } from "../AppState.js";
import { Snack } from "../models/Snack.js";

class SnacksService {

    addQuarter(){
        AppState.money += 0.25
        console.log(AppState.money)
    }
}

export const snacksService = new SnacksService()