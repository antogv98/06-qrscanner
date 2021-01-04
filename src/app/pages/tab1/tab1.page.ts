import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { DataLocalService } from '../../services/data-local.service';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  swiperOpts={
    allowSlidePrev:false,
    allowSlideNext:false
  };

  constructor(private barcodeScanner: BarcodeScanner,
    private dataLocalService:DataLocalService,
    private storage: Storage) {

    

    }

  ionViewWillEnter(){
    this.cargarDarkmode();
    this.scan();
  }

  async cargarDarkmode(){
    const darkOn = await this.storage.get('darkOnrStorage') || false;  
    if(darkOn){
      document.body.setAttribute('color-theme','dark');
    }else{
      document.body.setAttribute('color-theme','');
    }
  }


  scan(){

    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
      if(!barcodeData.cancelled){
        this.dataLocalService.guardarRegistro(barcodeData.format,barcodeData.text);
      }

     }).catch(err => {
         console.log('Error', err);
        // this.dataLocalService.guardarRegistro('QRcode', 'https://www.twitch.tv/');
        // this.dataLocalService.guardarRegistro('QRcode', 'geo:40.73151796986687,-74.06087294062502');
         
         
     });

  }



}
