import { AppState } from "../AppState.js";
import { Snack } from "../models/Snack.js";

class SnacksService {

    addQuarter(){
        let money = AppState.money
        money += 0.25
    }
}

export const snacksService = new SnacksService()