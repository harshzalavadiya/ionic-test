import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  someArray = [];

  constructor(public navCtrl: NavController) {
    this.someArray = ['foo', 'bar', 'baz'];
  }

  ionViewDidLoad() {
  }

}
