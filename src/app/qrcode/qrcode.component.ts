import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-qrcode",
  templateUrl: "./qrcode.component.html",
  styleUrls: ["./qrcode.component.css"]
})
export class QrcodeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  userInput = "123";

  widths = [100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600];
  selectedWidth = this.widths[3];

  fontSizes = [1, 2, 3, 4, 5];
  selectedFontSize = this.fontSizes[0];

  margins = [0, 5, 10, 12, 14, 16, 18, 20];
  selectedMargins = this.margins[0];

  colorDark = "#000000ff"; 
  colorLight = "#ffffffff";
}
