
import { Component, ElementRef, AfterViewInit, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';

declare const gsap: any;
declare const ScrollTrigger: any;

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-32 px-6 bg-black relative border-t border-white/10 overflow-hidden" id="testimonials">
        <div class="max-w-[1400px] mx-auto relative z-10">
            <div class="text-center mb-24">
                <h2 class="text-4xl md:text-6xl font-display font-medium text-white mb-6">Voices of Industry</h2>
                <p class="text-neutral-500 uppercase tracking-widest text-xs">Trusted by leaders worldwide</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 h-[800px] overflow-hidden relative">
                <div class="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent z-20 pointer-events-none"></div>
                <div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-20 pointer-events-none"></div>

                <!-- Column 1 -->
                <div #col class="flex flex-col gap-8 testimonial-col" data-speed="0.5">
                    <div class="bg-[#0a0a0a] border border-white/5 p-8 rounded-2xl transition-all duration-300 hover:border-white/30 group hover-trigger">
                        <p class="text-lg text-neutral-300 font-light mb-6 leading-relaxed">"PulseBoard transformed our fragmented workflow into a singular source of truth. The ROI was immediate."</p>
                        <div class="flex items-center gap-4">
                            <div class="w-10 h-10 bg-neutral-800 rounded-full overflow-hidden grayscale-img">
                                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=150&h=150" class="w-full h-full object-cover">
                            </div>
                            <div>
                                <div class="text-white text-sm font-medium">David Chen</div>
                                <div class="text-neutral-600 text-xs uppercase tracking-wider">CTO, Nexus</div>
                            </div>
                        </div>
                    </div>
                    <div class="bg-[#0a0a0a] border border-white/5 p-8 rounded-2xl transition-all duration-300 hover:border-white/30 group hover-trigger">
                        <p class="text-lg text-neutral-300 font-light mb-6 leading-relaxed">"Elegant, fast, and incredibly robust. It feels like software from the future."</p>
                        <div class="flex items-center gap-4">
                            <div class="w-10 h-10 bg-neutral-800 rounded-full overflow-hidden grayscale-img">
                                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=150&h=150" class="w-full h-full object-cover">
                            </div>
                            <div>
                                <div class="text-white text-sm font-medium">Sarah Miller</div>
                                <div class="text-neutral-600 text-xs uppercase tracking-wider">VP Design, Stripe</div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Column 2 -->
                <div #col class="flex flex-col gap-8 testimonial-col -mt-24" data-speed="-0.8">
                    <div class="bg-[#0a0a0a] border border-white/5 p-8 rounded-2xl transition-all duration-300 hover:border-white/30 group hover-trigger">
                        <p class="text-lg text-neutral-300 font-light mb-6 leading-relaxed">"Finally, an agency that understands that code quality is just as important as visual aesthetics."</p>
                        <div class="flex items-center gap-4">
                            <div class="w-10 h-10 bg-neutral-800 rounded-full overflow-hidden grayscale-img">
                                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?fit=crop&w=150&h=150" class="w-full h-full object-cover">
                            </div>
                            <div>
                                <div class="text-white text-sm font-medium">Elena K.</div>
                                <div class="text-neutral-600 text-xs uppercase tracking-wider">Product Lead, Linear</div>
                            </div>
                        </div>
                    </div>
                    <div class="bg-[#0a0a0a] border border-white/5 p-8 rounded-2xl transition-all duration-300 hover:border-white/30 group hover-trigger">
                        <p class="text-lg text-neutral-300 font-light mb-6 leading-relaxed">"Scaling our infrastructure was a nightmare until PulseBoard stepped in. Flawless execution."</p>
                        <div class="flex items-center gap-4">
                            <div class="w-10 h-10 bg-neutral-800 rounded-full overflow-hidden grayscale-img">
                                <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?fit=crop&w=150&h=150" class="w-full h-full object-cover">
                            </div>
                            <div>
                                <div class="text-white text-sm font-medium">Tom Hiddleston</div>
                                <div class="text-neutral-600 text-xs uppercase tracking-wider">CEO, Vercel</div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Column 3 -->
                <div #col class="flex flex-col gap-8 testimonial-col" data-speed="0.6">
                    <div class="bg-[#0a0a0a] border border-white/5 p-8 rounded-2xl transition-all duration-300 hover:border-white/30 group hover-trigger">
                        <p class="text-lg text-neutral-300 font-light mb-6 leading-relaxed">"We needed a partner who could handle complexity. PulseBoard delivered simplicity through complexity."</p>
                        <div class="flex items-center gap-4">
                            <div class="w-10 h-10 bg-neutral-800 rounded-full overflow-hidden grayscale-img">
                                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=150&h=150" class="w-full h-full object-cover">
                            </div>
                            <div>
                                <div class="text-white text-sm font-medium">James O.</div>
                                <div class="text-neutral-600 text-xs uppercase tracking-wider">Head of Eng, Uber</div>
                            </div>
                        </div>
                    </div>
                     <div class="bg-[#0a0a0a] border border-white/5 p-8 rounded-2xl transition-all duration-300 hover:border-white/30 group hover-trigger">
                        <p class="text-lg text-neutral-300 font-light mb-6 leading-relaxed">"The attention to detail is simply unmatched."</p>
                        <div class="flex items-center gap-4">
                            <div class="w-10 h-10 bg-neutral-800 rounded-full overflow-hidden grayscale-img">
                                <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?fit=crop&w=150&h=150" class="w-full h-full object-cover">
                            </div>
                            <div>
                                <div class="text-white text-sm font-medium">Michael R.</div>
                                <div class="text-neutral-600 text-xs uppercase tracking-wider">Director, Sony</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  `
})
export class TestimonialsComponent implements AfterViewInit {
  @ViewChildren('col') cols!: QueryList<ElementRef>;
  @ViewChild('testimonials') section!: ElementRef;

  ngAfterViewInit() {
    gsap.registerPlugin(ScrollTrigger);

    this.cols.forEach((colRef) => {
        const col = colRef.nativeElement;
        const speed = parseFloat(col.dataset.speed || '0.5');
        
        gsap.to(col, {
            y: () => (speed * 100), 
            ease: "none",
            scrollTrigger: {
                trigger: "#testimonials", // Selector is easier here than ref passing
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        });
    });
  }
}
