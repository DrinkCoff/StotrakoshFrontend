import { Component } from '@angular/core';

@Component({
  selector: 'app-stotrakosh-toolbar',
  templateUrl: './stotrakosh-toolbar.component.html',
  styleUrls: ['./stotrakosh-toolbar.component.css']
})
export class StotrakoshToolbarComponent {
  languages = [ 'devanagari', 'english', 'kannada', 'gujarati', 'telugu'];
  selectedLanguage = 'itrans';

  languageChange(value?: string){
      if(value === 'english'){
        this.selectedLanguage = 'itrans';
      }
      else{
         this.selectedLanguage = String(value);
        }

//     this.processStotraForDisplay();
  }

}
