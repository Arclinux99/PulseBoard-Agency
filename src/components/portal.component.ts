
import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

declare const gsap: any;
declare const ScrollTrigger: any;

@Component({
  selector: 'app-portal',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="relative w-full h-[150vh]" id="work">
        <div #portalContainer class="h-screen w-full overflow-hidden flex items-center justify-center bg-[#030303] sticky top-0">
            <div class="relative w-full h-full flex items-center justify-center">
                <div #portalImage class="w-[30%] h-[40%] overflow-hidden relative shadow-2xl">
                    <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop" 
                         class="absolute inset-0 w-full h-full object-cover grayscale-img" 
                         alt="Architecture">
                    <div class="absolute inset-0 flex items-center justify-center bg-black/40">
                        <h2 class="text-4xl md:text-7xl font-display font-bold text-white tracking-tighter mix-blend-overlay">SELECTEDWORKS</h2>
                    </div>
                </div>
            </div>
        </div>
    </section>
  `
})
export class PortalComponent implements AfterViewInit {
  @ViewChild('portalContainer') container!: ElementRef;
  @ViewChild('portalImage') image!: ElementRef;

  ngAfterViewInit() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(this.image.nativeElement, {
      width: "100%",
      height: "100%",
      ease: "none",
      scrollTrigger: {
        trigger: this.container.nativeElement,
        start: "top top",
        end: "+=100%",
        scrub: true,
      }
    });
  }
}
