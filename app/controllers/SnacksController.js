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
    if (!snacksElm){
      return
    }
    snacksElm.innerHTML = snacksContent
  }
  
  drawBank(){
    const bankElm = document.getElementById('bank')
    let bankContent = ''
    bankContent += Snack.BankTemplateCard
    if (!bankElm){
      return
    }
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
    const purchasedSnackElm = document.getElementById('purchased-snacks')
    let purchasedSnacksContent = ''
    AppState.purchasedSnacks.forEach((snacks) => purchasedSnacksContent += snacks.SnacksTemplateCard)
    if (!purchasedSnackElm){
      return
    }
    purchasedSnackElm.innerHTML = purchasedSnacksContent
  }

  availableSnacks(){
    console.log('Observing snack options based on money available')
    snacksService.availableSnacks()
    this.drawSnacks()
  }

}