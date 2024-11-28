import { AppState } from "../AppState.js"
import { Snack } from "../models/Snack.js"
import { snacksService } from "../services/SnacksService.js"

export class SnacksController {
  constructor() {
    console.log('This is the Snacks Controller')
    this.drawSnacks()
  }
  drawSnacks(){
    const snacksElm = document.getElementById('snacks-container')
    const snacks = AppState.snacks
    let snacksContent = ''
    snacks.forEach((snacks) => snacksContent += snacks.SnacksTemplateCard)
    snacksElm.innerHTML = snacksContent
  }

  addQuarter(){
    snacksService.addQuarter()
  }

  drawBank(){
    const bankElm = document.getElementById('bank')
    const Availablemoney = AppState.money
    let bankContent = ''
    bankContent += Availablemoney.(Snack.BankTemplateCard)
    bankElm?.innerHTML = bankContent
  }

}