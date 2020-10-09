import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  checkoutForm;
  shippingList: any = ['Postal', 'TwoDay', 'Overnight', 'Literally a Ship']

  constructor(
    private cartService: CartService,
    private formBuilder:FormBuilder,
  ) {
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: '',
      card: '',
      shipping: '',
      //order: this.cartService.getItems.toString(),
    });
   }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }

  onSubmit(customerData){
    console.warn(
      'Your order has been submitted',
      customerData,
      this.items
    );
    
    // Process checkout data here

    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }

}