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


@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent {
  @Input() book:Book|undefined;
  @Output() bookEvent=new EventEmitter();
  addBookToCart(){
    console.log(this.book);
    this.bookEvent.emit(this.book);
  }
}
