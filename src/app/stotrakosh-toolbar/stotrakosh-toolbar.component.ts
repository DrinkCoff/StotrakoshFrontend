import { Component, OnInit } from '@angular/core';
import { ToolbarPropogateService } from './../toolbar-propogate.service';

@Component({
  selector: 'app-stotrakosh-toolbar',
  templateUrl: './stotrakosh-toolbar.component.html',
  styleUrls: ['./stotrakosh-toolbar.component.css']
})
export class StotrakoshToolbarComponent implements OnInit {
   public languages = [
      {"id": "devanagari", "name": "Sanskrit"},
      {"id": "itrans", "name": "English"},
      {"id": "kannada", "name": "Kannada"},
      {"id": "gujarati", "name": "Gujarati"},
      {"id": "telugu", "name": "Telugu"}
    ];
//     public languages = this.languages[1].id;

  selectedLanguage = this.languages[1].id;

  constructor(private toolbarPropogateService:ToolbarPropogateService) {
    this.selectedLanguage = this.languages[1].id;
   }

  ngOnInit() {
    this.selectedLanguage = this.languages[1].id;
  }

  languageChange(value?: string){
      if(value === 'english'){
        this.selectedLanguage = 'itrans';
      }
      else{
         this.selectedLanguage = String(value);
        }
    this.toolbarPropogateService.sendLanguageChangeEvent(this.selectedLanguage);
  }

  homeClicked() {
    this.toolbarPropogateService.sendHomeClickedEvent();
  }
}
