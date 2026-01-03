
import { Component, AfterViewInit, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './components/hero.component';
import { PortalComponent } from './components/portal.component';
import { GalleryComponent } from './components/gallery.component';
import { ServicesComponent } from './components/services.component';
import { TestimonialsComponent } from './components/testimonials.component';
import { FooterComponent } from './components/footer.component';

// Declare external libraries
declare const Lenis: any;
declare const gsap: any;
declare const ScrollTrigger: any;
declare const UnicornStudio: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    HeroComponent, 
    PortalComponent, 
    GalleryComponent, 
    ServicesComponent, 
    TestimonialsComponent,
    FooterComponent
  ],
  template: `
    <!-- Custom Cursor -->
    <div #cursor id="cursor"></div>

    <!-- Navigation -->
    <nav class="fixed top-0 left-0 right-0 z-50 px-6 py-6 transition-transform duration-300" id="navbar">
        <div class="max-w-[1600px] mx-auto flex items-center justify-between glass rounded-full px-8 py-4">
            <a href="#" class="flex items-center gap-3 group hover-trigger">
                <div class="w-8 h-8 bg-white text-black flex items-center justify-center rounded-sm overflow-hidden">
                    <svg class="w-5 h-5 group-hover:rotate-90 transition-transform duration-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                </div>
                <span class="font-display font-bold tracking-tight text-lg text-white">PULSE<span class="font-light text-neutral-500">BOARD</span></span>
            </a>
            <div class="hidden md:flex items-center gap-12">
                <a href="#work" class="text-xs font-medium uppercase tracking-widest text-neutral-400 hover:text-white transition-colors hover-trigger">Work</a>
                <a href="#services" class="text-xs font-medium uppercase tracking-widest text-neutral-400 hover:text-white transition-colors hover-trigger">Services</a>
                <a href="#testimonials" class="text-xs font-medium uppercase tracking-widest text-neutral-400 hover:text-white transition-colors hover-trigger">Stories</a>
            </div>
            <button class="bg-white text-black px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-neutral-200 transition-colors hover-trigger">
                Start Project
            </button>
        </div>
    </nav>

    <!-- Unicorn Background (Simulated Markup from Source) -->
    <div class="aura-background-component inset-0 pointer-events-none z-0 fixed" 
         data-alpha-mask="80" 
         style="mask-image: linear-gradient(to bottom, transparent, black 0%, black 80%, transparent); -webkit-mask-image: linear-gradient(to bottom, transparent, black 0%, black 80%, transparent);">
         <div class="aura-background-component top-0 w-full -z-10 absolute h-full">
            <div data-us-project="FixNvEwvWwbu3QX9qC3F" class="absolute w-full h-full left-0 top-0 -z-10"></div>
         </div>
    </div>

    <!-- Main Content -->
    <main>
      <app-hero />
      <app-portal />
      <app-gallery />
      <app-services />
      <app-testimonials />
      <app-footer />
    </main>
  `
})
export class AppComponent implements AfterViewInit, OnDestroy {
  @ViewChild('cursor') cursor!: ElementRef;
  private lenis: any;
  private rafId: number | null = null;
  private listeners: Array<() => void> = [];

  ngAfterViewInit() {
    this.initLenis();
    this.initCursor();
    this.initUnicorn();
  }

  ngOnDestroy() {
    if (this.rafId) cancelAnimationFrame(this.rafId);
    if (this.lenis) this.lenis.destroy();
    this.listeners.forEach(remove => remove());
  }

  private initLenis() {
    this.lenis = new Lenis({
      duration: 0.8,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 0.8,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    const raf = (time: number) => {
      this.lenis.raf(time);
      this.rafId = requestAnimationFrame(raf);
    };
    this.rafId = requestAnimationFrame(raf);

    // Connect GSAP
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
       gsap.registerPlugin(ScrollTrigger);
    }
  }

  private initCursor() {
    const cursorEl = this.cursor.nativeElement;
    
    // Follow mouse
    const moveListener = (e: MouseEvent) => {
      cursorEl.style.left = e.clientX + 'px';
      cursorEl.style.top = e.clientY + 'px';
    };
    document.addEventListener('mousemove', moveListener);
    this.listeners.push(() => document.removeEventListener('mousemove', moveListener));

    // Dynamic hover bindings using delegated events for performance and dynamic content support
    // (Though simple re-querying also works, delegation is safer if elements appear late)
    // Here we use a simple interval check or re-attach strategy for simplicity in Angular "AfterViewInit"
    // But standard event delegation is better for "hover" if we can do it.
    // Since 'mouseenter' doesn't bubble, we have to attach individually.
    // Let's attach to document and check target.
    // Actually, mouseover/mouseout bubble.

    const hoverListener = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('.hover-trigger')) {
        cursorEl.classList.add('hovered');
      } else {
        cursorEl.classList.remove('hovered');
      }

      if (target.closest('.view-trigger')) {
        cursorEl.classList.add('view-cursor');
      } else {
        cursorEl.classList.remove('view-cursor');
      }
    };

    document.addEventListener('mouseover', hoverListener);
    document.addEventListener('mouseout', hoverListener);
    
    this.listeners.push(() => {
        document.removeEventListener('mouseover', hoverListener);
        document.removeEventListener('mouseout', hoverListener);
    });
  }

  private initUnicorn() {
    if (typeof UnicornStudio !== 'undefined' && !UnicornStudio.isInitialized) {
        UnicornStudio.init();
        UnicornStudio.isInitialized = true;
    }
  }
}
