import { Component, OnInit } from '@angular/core';
import { DataLocalService } from '../../services/data-local.service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page{





  constructor(public dataLocalService:DataLocalService,
    private socialSharing: SocialSharing,
    private platform:Platform,
    private storage: Storage) {


    

    }


  enviarCorreo(){

    this.dataLocalService.enviarCorreo();
  }


  abrirRegistro(registro){

     this.dataLocalService.abrirRegistro(registro);

  }

  share(registro){

    if(this.platform.is('cordova')){

      this.socialSharing.share(
                registro.text,
                registro.created
            );

    }

  }

  delete(indice){
    this.dataLocalService.deleteRegistro(indice);
  }


  

  
    
}
    
  


