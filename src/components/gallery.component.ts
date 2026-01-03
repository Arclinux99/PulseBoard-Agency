
import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

declare const gsap: any;
declare const ScrollTrigger: any;

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section #section class="relative bg-[#030303] overflow-hidden">
        <div class="py-12 px-6 border-b border-white/10 flex justify-between items-end">
            <h3 class="text-xs uppercase tracking-[0.3em] text-neutral-500">Featured Case Studies</h3>
            <span class="text-xs text-white">SCROLL DOWN &darr;</span>
        </div>
        
        <div #track class="flex flex-nowrap h-[80vh] items-center pl-6 md:pl-24 gap-12 md:gap-32 w-max">
            <!-- Item 1 -->
            <div class="group relative w-[80vw] md:w-[40vw] flex-shrink-0 cursor-none view-trigger">
                <div class="aspect-[16/9] overflow-hidden bg-neutral-900 mb-6 relative">
                    <img src="https://images.unsplash.com/photo-1549488497-6cb56cb421a9?q=80&w=2669&auto=format&fit=crop" class="w-full h-full object-cover grayscale-img" alt="Project 1">
                </div>
                <div class="flex justify-between items-end border-b border-white/10 pb-4">
                    <div>
                        <h4 class="text-3xl font-display font-medium text-white">Vanguard Tower</h4>
                        <p class="text-neutral-500 text-sm mt-1">Real Estate Architecture</p>
                    </div>
                    <div class="text-white text-lg font-display">01</div>
                </div>
            </div>

            <!-- Item 2 -->
            <div class="group relative w-[80vw] md:w-[40vw] flex-shrink-0 cursor-none view-trigger">
                <div class="aspect-[16/9] overflow-hidden bg-neutral-900 mb-6 relative">
                    <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop" class="w-full h-full object-cover grayscale-img" alt="Project 2">
                </div>
                <div class="flex justify-between items-end border-b border-white/10 pb-4">
                    <div>
                        <h4 class="text-3xl font-display font-medium text-white">Cyber Systems</h4>
                        <p class="text-neutral-500 text-sm mt-1">Fintech Dashboard</p>
                    </div>
                    <div class="text-white text-lg font-display">02</div>
                </div>
            </div>

            <!-- Item 3 -->
            <div class="group relative w-[80vw] md:w-[40vw] flex-shrink-0 cursor-none view-trigger pr-24">
                <div class="aspect-[16/9] overflow-hidden bg-neutral-900 mb-6 relative">
                    <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop" class="w-full h-full object-cover grayscale-img" alt="Project 3">
                </div>
                <div class="flex justify-between items-end border-b border-white/10 pb-4">
                    <div>
                        <h4 class="text-3xl font-display font-medium text-white">Orbital Labs</h4>
                        <p class="text-neutral-500 text-sm mt-1">Space Tech Interface</p>
                    </div>
                    <div class="text-white text-lg font-display">03</div>
                </div>
            </div>
        </div>
    </section>
  `
})
export class GalleryComponent implements AfterViewInit {
  @ViewChild('section') section!: ElementRef;
  @ViewChild('track') track!: ElementRef;

  ngAfterViewInit() {
    gsap.registerPlugin(ScrollTrigger);

    // We need to calculate scroll amount dynamically
    const updateScroll = () => {
       const scrollAmount = this.track.nativeElement.scrollWidth - window.innerWidth;
       
       gsap.to(this.track.nativeElement, {
        x: -scrollAmount,
        ease: "none",
        scrollTrigger: {
            trigger: this.section.nativeElement,
            start: "top top",
            end: () => `+=${scrollAmount}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
        }
      });
    };

    // Small timeout to ensure DOM is fully rendered/images loaded-ish
    setTimeout(updateScroll, 100);
  }
}
