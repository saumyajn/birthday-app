import { CUSTOM_ELEMENTS_SCHEMA, Component, ElementRef, Renderer2 } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, RouterOutlet, CommonModule, RouterLink, RouterLinkActive],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {
  textArr: string[] = ['you.', 'your smile.', 'your heart.', 'your eyes.', ' your kiss.', 'you forever and ever.', 'your coziness.', 'your understanding.', 'your face.', 'your everything.']
  secPerChar: number = 0.15;
  secBtwWord: number = 1.5;
  textIndex: number = 0;
  constructor(private router: Router) {

  }
  ngOnInit(): void {
    if (typeof document != "undefined") {
      let span = document.querySelector('.textchange span');
      console.log(span)

      console.log(span)
      let maxTextIndex = this.textArr.length;
      console.log(this.textArr)
      this.typing(span, this.textIndex, this.textArr[this.textIndex], maxTextIndex)
    }
  }
  typing(span, textIndex, text, maxTextIndex) {
    let charIndex = 0;
    let maxCharIndex = text.length - 1;
    let typeInterval = setInterval(() => {
      span.innerHTML += text[charIndex];
      if (charIndex == maxCharIndex) {
        clearInterval(typeInterval);
        setTimeout(() => {
          this.deleting(span, textIndex, text, maxTextIndex,)
        }, this.secBtwWord * 1000)
      }
      else charIndex += 1;
    }
      , this.secPerChar * 1000)
  }
  deleting(span, textIndex, text, maxTextIndex) {
    let minCharIndex = 0;
    let charIndex = text.length - 1;
    let typeInterval = setInterval(() => {

      span.innerHTML = text.substr(0, charIndex);
      if (charIndex == minCharIndex) {
        clearInterval(typeInterval);
        textIndex + 1 == maxTextIndex ? textIndex = 0 : textIndex += 1;

        setTimeout(() => {

          this.typing(span, textIndex, this.textArr[textIndex], maxTextIndex)
        },
          this.secBtwWord * 1000)
      }
      else charIndex -= 1;
    },
      this.secPerChar * 1000)

  }

}




