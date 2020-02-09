import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { QrcodeComponent } from "./qrcode/qrcode.component";
import { BarcodeComponent } from "./barcode/barcode.component";
// import { DemoMaterialModule } from "./material-module";

import { QRCodeModule } from "angularx-qrcode";
import { NgxBarcode6Module } from "ngx-barcode6";
import { ColorPickerModule } from "ngx-color-picker";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgxBarcode6Module,
    QRCodeModule,
    ColorPickerModule,
    // DemoMaterialModule
  ],
  declarations: [AppComponent, QrcodeComponent, BarcodeComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
