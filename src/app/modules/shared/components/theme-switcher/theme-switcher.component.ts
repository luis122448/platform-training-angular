import { Component, OnInit, HostListener, Renderer2, inject, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DOCUMENT, NgClass, CommonModule } from '@angular/common';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { GlobalStatusService } from '@platform-service/global-status.service';
import { DefaultValuesService } from '@auth-service/default-values.service';

@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.scss']
})
export class ThemeSwitcherComponent{

  faSun = faSun
  faMoon = faMoon
  isDark = true;
  renderer = inject(Renderer2);
  document = inject(DOCUMENT);

  constructor(
    private globalStatusService: GlobalStatusService,
    private defaultValuesService: DefaultValuesService
  ){
    this.renderer.addClass(this.document.body.parentElement, 'dark');
    this.isDark = this.defaultValuesService.getCookie('dark') === 'true' ? true : false;
    this.onChange(false)
  }

  onChange(change: boolean){
    if(change){
      this.isDark = !this.isDark;
      this.defaultValuesService.setCookie('dark',this.isDark.toString())
    }
    if (this.isDark) {
      this.renderer.addClass(this.document.body.parentElement, 'dark');
    } else {
      this.renderer.removeClass(this.document.body.parentElement, 'dark');
    }
  }

}
