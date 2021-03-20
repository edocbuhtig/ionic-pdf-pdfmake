import { Component } from '@angular/core';

import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  pdfObj = null;

  constructor() {}

  pdfDownload(){
  

    const docDef = {
      // a string or { width: number, height: number }
      pageSize: 'A4',
    
      // by default we use portrait, you can change it to landscape if you wish
      pageOrientation: 'portrait',
    
      // [left, top, right, bottom] or [horizontal, vertical] or just a number for equal margins
      pageMargins: [ 20, 10, 40, 60 ],
      content: [
        {
          table:{
            body: [
              ['demo pdf column']
            ]
          }
        }
      ]
    }

    this.pdfObj = pdfMake.createPdf(docDef).download();

    

  }

}
