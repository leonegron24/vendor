import { Snack } from './models/Snack.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  // AppState.js
  snacks = [
    new Snack({
      name: 'Chocolate', 
      price: 2.00, 
      imgUrl: 'https://www.pngall.com/wp-content/uploads/15/Chocolate-Bar-PNG-Photo-300x225.png',
      payed: 0
    }),
    new Snack({
      name: 'Chips', 
      price: 2.50, 
      imgUrl: 'https://www.pngall.com/wp-content/uploads/4/Potato-Chips-PNG-Free-Image-300x225.png',
      payed: 0
    }),
    new Snack({
      name: 'Coca-Cola', 
      price: 3.00, 
      imgUrl: 'https://www.pngall.com/wp-content/uploads/8/Coca-Coal-Soda-PNG-Free-Download-300x225.png',
      payed: 0
    }),
    new Snack({
      name: 'Water', 
      price: 1.00, 
      imgUrl: 'https://www.pngall.com/wp-content/uploads/2016/04/Water-Bottle-Free-Download-PNG-300x225.png',
      payed: 0
    }),
    new Snack({
      name: 'Candy', 
      price: 1.25, 
      imgUrl: 'https://www.pngall.com/wp-content/uploads/15/Halloween-Candy-PNG-Pic-300x225.png',
      payed: 0
    }),
 ]
 
  money = 0

  purchasedSnacks = []





  /**@type {import('./models/Example.js').Example[]} */
  examples = []
}

export const AppState = createObservableProxy(new ObservableAppState())