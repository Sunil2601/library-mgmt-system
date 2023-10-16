import { Component,EventEmitter,Input, Output } from '@angular/core';
interface Book {
  ISBN: number,
  title: string,
  author: string,
  summary: string,
  image: string,
  price: {
    currency: string,
    value: number,
    displayValue: string
  }
}
interface Cart{
  book:Book;
  quantity:number;
}


@Component({
  selector: 'app-cart-card',
  templateUrl: './cart-card.component.html',
  styleUrls: ['./cart-card.component.css']
})
export class CartCardComponent {
  @Input() cart:Cart|undefined;
  @Output() reduceEvent:EventEmitter<string>=new EventEmitter();
  @Output() increaseEvent:EventEmitter<string>=new EventEmitter();
  @Output() removeEvent:EventEmitter<string>=new EventEmitter();
  constructor(){
   
  }
  
  reduceQuantity(){
    this.reduceEvent.emit(this.cart?.book.title);    
  }
  increaseQuantity(){
    this.increaseEvent.emit(this.cart?.book.title);
  }
  removeBook(){
    console.log("remove book")
    this.removeEvent.emit(this.cart?.book.title);

  }


}
