import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Substitute';
  texto2 : string = ""
  texto1 : string = "";
  inputValue  : string = '';
  
  printOnTextArea (input : string){
    console.log('Aqui ', input);

    this.texto2 = input.replaceAll('bodySql.append("', "");
    this.texto2 = this.texto2.replaceAll('");', "");

  }

  copyToClipboard () {
    var copyText = document.getElementById("myOutput") as HTMLInputElement;
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
  }
  
}
  

