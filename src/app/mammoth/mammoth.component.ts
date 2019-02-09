import { Component } from '@angular/core';
import * as mammoth from '../../../node_modules/mammoth/mammoth.browser';

@Component({
  selector: 'cvs-mammoth',
  templateUrl: './mammoth.component.html',
  styleUrls: ['./mammoth.component.scss']
})
export class MammothComponent  {

  constructor() { }

  onFileChange = (event: any) =>{
    const me = this;
    let file = event.target.files[0];
    let reader = new FileReader();
    
    reader.onload = function(loadEvent) {
        const arrayBuffer = reader.result as ArrayBuffer;
        me.renderDocx(arrayBuffer);
    };
    
    reader.readAsArrayBuffer(file);
  }

  renderDocx = (arrayBuffer) => {
    mammoth.convertToHtml({arrayBuffer: arrayBuffer})
        .then((result) => {
          document.getElementById("output").innerHTML = result.value;
        
          var messageHtml = result.messages.map(function(message) {
              return '<li class="' + message.type + '">' + message.message + "</li>";
          }).join("");
          
          document.getElementById("messages").innerHTML = "<ul>" + messageHtml + "</ul>";
        })
        .done();
  }

  textAreaFocusOut = (event: any) =>{
    const base64Str = event.target.value;
    if(!base64Str){
      return false;
    }
    const raw = window.atob(base64Str);
    const rawLength = raw.length;
    const array = new Uint8Array(new ArrayBuffer(rawLength));

    for(let i = 0; i < rawLength; i++) {
      array[i] = raw.charCodeAt(i);
    }
    this.renderDocx(array);
  }
}
