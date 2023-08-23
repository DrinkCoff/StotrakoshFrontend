import { Component, OnInit } from '@angular/core';
import { Stotra } from '../stotra';
import { HEROES } from '../mock-heroes';
import { StotraService } from '../stotra.service';
import Sanscript from '@indic-transliteration/sanscript';
import { ToolbarPropogateService } from './../toolbar-propogate.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  // Variables at Startup
  stotras?: Stotra[];
  // Variables for Stotra Selection
  selectedStotra?: Stotra;
  isSelected = false;
  // Variables for Stotra Processing
  processedStotraToDisplay = '';
  fromLanguage = 'itrans';
  targetLanguage = 'itrans';
  toolbarSettingsChange:Subscription;

    constructor(private stotraService: StotraService, private toolbarPropogateService:ToolbarPropogateService) {
        this.toolbarSettingsChange=    this.toolbarPropogateService.getLanguageChangeEvent().subscribe((selectedLanguage)=>{
        this.languageChange(selectedLanguage);
        })
    }

    ngOnInit() {
      this.stotraService.findAll().subscribe((data: any) => {
        this.stotras = data;
      });
    }

  onStotraSelect(hero: Stotra): void {
    this.selectedStotra = hero;
    this.isSelected = true;
    this.processStotraForDisplay();
  }

  onClickBack(): void {
    this.isSelected = false;
    this.processedStotraToDisplay = '';
  }

  languageChange(value?: string){
   if(this.selectedStotra != undefined) {
      if(value === 'english'){
        this.targetLanguage = 'itrans';
      }
      else{
         this.targetLanguage = String(value);
        }
    }
    this.processStotraForDisplay();
  }

  processStotraForDisplay(){
    var selectedStotraDescription = '';
    if(this.selectedStotra !== undefined){
      selectedStotraDescription = this.selectedStotra.description;
      selectedStotraDescription = Sanscript.t(selectedStotraDescription, this.fromLanguage, this.targetLanguage);
      selectedStotraDescription = selectedStotraDescription.replace(/\n/g, '<br />');
      this.processedStotraToDisplay = selectedStotraDescription;
    }
  }

  supportedLanguagesList(){
    // ahom, assamese, avestan, balinese, bengali, bhaisuki, brahmi, brahmi_tamil, burmese, chakma, cham, cyrillic, devanagari, dogra, gondi_gunjala, gondi_masaram, grantha, grantha_pandya, gujarati, gurmukhi, hk, iast, itrans, itrans_dravidian, javanese, kannada, khamti_shan, kharoshti, khmer, khom_thai, khudawadi, kolkata, lao, lao_pali, lepcha, limbu, mahajani, malayalam, manipuri, marchen, modi, mon, mro, multani, newa, ol_chiki, oriya, persian_old, phags_pa, ranjana, rejang, rohingya, sanskritOCR, shan, sharada, siddham, sinhala, slp1, sora_sompeng, sundanese, syloti_nagari, tagalog, tagbanwa, tai_laing, takri, tamil, tamil_extended, tamil_superscripted, telugu, thai, tibetan, tirhuta_maithili, urdu, vattelutu, velthuis, wancho, warang_citi, wx, zanbazar_square
  }
}
