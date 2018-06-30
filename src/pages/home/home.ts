import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

declare let Swiper;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  ngAfterViewInit() {
    var swiper = new Swiper('.swiper-container', {
      effect: 'coverflow',
      centeredSlides: true,
      slidesPerView: 1.2,
      spaceBetween: 80,
      activeIndex: 1,
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: false,
      },
    });
  }

}
