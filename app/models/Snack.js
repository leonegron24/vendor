import { AppState } from "../AppState.js"

export class Snack {
    constructor(data) {
       this.name = data.name
       this.price = data.price
       this.imgUrl = data.imgUrl
       this.showButton = false
    }

    get SnacksTemplateCard(){
        return /*html*/ `
            <div class ='card bg-success col-2 p-4 m-4'>
              <div class="card-body fw-bold">
                  ${this.name}: $${this.price}
              </div>
              <button class="btn btn-warning m-3 ${this.showButton ? '': 'd-none'}" onclick="app.SnacksController.purchaseSnack('${this.name}')" > Purchase </button>
              <img src=${this.imgUrl}>

            </div>
            `
      }
    
    static get BankTemplateCard(){
        return /*html*/ `
            <span> $${AppState.money} </span>
        `
    }

 }