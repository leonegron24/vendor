import { AppState } from "../AppState.js"
import { Snack } from "../models/Snack.js"
import { snacksService } from "../services/SnacksService.js"

export class SnacksController {
  constructor() {
    console.log('This is the Snacks Controller')
    this.availableSnacks()
  }
  drawSnacks(){
    const snacksElm = document.getElementById('snacks-container')
    const snacks = AppState.snacks
    let snacksContent = ''
    snacks.forEach((snacks) => snacksContent += snacks.SnacksTemplateCard)
    snacksElm.innerHTML = snacksContent
  }
  
  drawBank(){
    const bankElm = document.getElementById('bank')
    let bankContent = ''
    bankContent += Snack.BankTemplateCard
    bankElm.innerHTML = bankContent
  }

  addQuarter(){
    console.log('clicked AddQuarter Button')
    snacksService.addQuarter()
    this.drawBank()
    this.availableSnacks()
  }

  purchaseSnack(snackName){
    console.log('clicked purchase', snackName)
    snacksService.purchaseSnack(snackName)
    this.drawBank()
    this.availableSnacks()
  }

  availableSnacks(){
    console.log('Observing snack options based on money available')
    snacksService.availableSnacks()
    this.drawSnacks()
  }

}