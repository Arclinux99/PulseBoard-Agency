
import { Component, ElementRef, QueryList, ViewChildren, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-40 px-6 relative z-10 bg-[#050509] border-t border-white/5" id="services">
        <div class="max-w-7xl mx-auto">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-24">
                <div class="sticky top-32 h-fit">
                    <h2 class="text-6xl font-display font-medium text-white mb-8">Our <br>Expertise</h2>
                    <p class="text-neutral-400 text-lg max-w-md mb-12">
                        We don't just design; we engineer outcomes. Our methodology combines rigorous data analysis with world-class aesthetic execution.
                    </p>
                    <ul class="space-y-4">
                        <li class="flex items-center gap-4 text-white">
                            <span class="h-[1px] w-8 bg-white"></span> System Architecture
                        </li>
                        <li class="flex items-center gap-4 text-neutral-500">
                            <span class="h-[1px] w-8 bg-neutral-800"></span> UI/UX Design
                        </li>
                        <li class="flex items-center gap-4 text-neutral-500">
                            <span class="h-[1px] w-8 bg-neutral-800"></span> Full-Stack Development
                        </li>
                    </ul>
                </div>

                <div class="flex flex-col gap-12">
                    
                    <!-- Card 1 -->
                    <div #card class="card-3d-wrap group h-[450px] w-full cursor-pointer hover-trigger">
                        <div class="card-3d-inner relative w-full h-full bg-[#0a0a0a] border border-white/10 rounded-2xl p-10 flex flex-col justify-between shadow-2xl overflow-hidden bg-noise">
                            <div class="absolute inset-0" style="background-image: radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px); background-size: 20px 20px;"></div>
                            
                            <!-- Visual -->
                            <div class="card-element relative w-full h-64 border border-white/10 bg-[#0f0f0f]/80 backdrop-blur-sm rounded-xl overflow-hidden mb-6 flex items-center justify-center">
                                <div class="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent z-20 animate-scan"></div>
                                
                                <div class="absolute w-24 h-24 border border-white/10 rounded-full flex items-center justify-center z-10">
                                    <div class="w-16 h-16 border border-white/20 rounded-full flex items-center justify-center animate-[spin_10s_linear_infinite]">
                                        <div class="w-2 h-2 bg-white rounded-full"></div>
                                    </div>
                                    <div class="absolute w-2 h-2 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.8)]"></div>
                                </div>

                                <svg class="absolute inset-0 w-full h-full opacity-30 pointer-events-none">
                                    <line x1="50%" y1="50%" x2="20%" y2="30%" stroke="white" stroke-width="1"></line>
                                    <line x1="50%" y1="50%" x2="80%" y2="30%" stroke="white" stroke-width="1"></line>
                                    <line x1="50%" y1="50%" x2="50%" y2="80%" stroke="white" stroke-width="1"></line>
                                    <circle cx="20%" cy="30%" r="3" fill="white" class="animate-pulse"></circle>
                                    <circle cx="80%" cy="30%" r="3" fill="white" class="animate-pulse" style="animation-delay: 0.5s"></circle>
                                    <circle cx="50%" cy="80%" r="3" fill="white" class="animate-pulse" style="animation-delay: 1s"></circle>
                                </svg>
                                
                                <div class="absolute bottom-3 left-4 text-[9px] font-mono text-neutral-500 uppercase tracking-widest">
                                    System Status: Active Nodes: 3/3
                                </div>
                            </div>
                            
                            <div class="card-element relative z-10">
                                <h3 class="text-3xl font-display font-medium text-white mb-2">Strategy & Architecture</h3>
                                <p class="text-neutral-500 max-w-sm">Technical discovery, data modeling, and infrastructure roadmap planning.</p>
                            </div>
                        </div>
                    </div>

                    <!-- Card 2 -->
                    <div #card class="card-3d-wrap group h-[450px] w-full cursor-pointer hover-trigger">
                        <div class="card-3d-inner relative w-full h-full bg-[#0a0a0a] border border-white/10 rounded-2xl p-10 flex flex-col justify-between shadow-2xl overflow-hidden bg-noise">
                            <div class="absolute inset-0" style="background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px); background-size: 100% 40px;"></div>

                            <div class="card-element relative w-full h-64 mb-6 perspective-1000">
                                <div class="absolute top-10 left-10 w-[80%] h-40 border border-white/5 bg-white/[0.02] rounded-lg -z-10 transform translate-x-4 translate-y-4"></div>
                                
                                <div class="absolute inset-0 w-[90%] h-52 bg-[#050505] border border-white/10 rounded-xl mx-auto shadow-2xl overflow-hidden transform transition-transform group-hover:-translate-y-2">
                                    <div class="h-8 border-b border-white/5 bg-white/[0.03] flex items-center px-3 gap-1.5">
                                        <div class="w-2.5 h-2.5 rounded-full bg-neutral-600"></div>
                                        <div class="w-2.5 h-2.5 rounded-full bg-neutral-700"></div>
                                        <div class="w-2.5 h-2.5 rounded-full bg-neutral-700"></div>
                                    </div>
                                    <div class="p-4 font-mono text-[10px] text-neutral-400 space-y-2">
                                        <div class="flex gap-2">
                                            <span class="text-purple-400">const</span>
                                            <span class="text-blue-400">initSystem</span>
                                            <span class="text-white">=</span>
                                            <span class="text-yellow-300">async</span>
                                            <span class="text-white">() => {{ '{' }}</span>
                                        </div>
                                        <div class="pl-4 flex gap-2">
                                            <span class="text-purple-400">await</span>
                                            <span class="text-white">db.connect(</span>
                                            <span class="text-green-400">'pulse_v2'</span>
                                            <span class="text-white">);</span>
                                        </div>
                                        <div class="pl-4 flex gap-2 items-center">
                                            <span class="text-neutral-500">// Deploying modules...</span>
                                        </div>
                                        <div class="pl-4 bg-white/10 h-3 rounded w-0 animate-type"></div>
                                        <div class="text-white">{{ '}' }}</div>
                                    </div>
                                </div>

                                <div class="absolute -bottom-2 -right-2 bg-white text-black px-4 py-2 rounded-lg text-xs font-bold shadow-[0_10px_20px_rgba(0,0,0,0.5)] transform rotate-[-5deg] group-hover:rotate-0 transition-transform">
                                    v2.0.4 Ready
                                </div>
                            </div>
                            
                            <div class="card-element relative z-10">
                                <h3 class="text-3xl font-display font-medium text-white mb-2">Development</h3>
                                <p class="text-neutral-500 max-w-sm">Next-js, WebGL, and scalable backend systems built for speed.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
  `
})
export class ServicesComponent implements AfterViewInit {
  @ViewChildren('card') cards!: QueryList<ElementRef>;

  ngAfterViewInit() {
    this.cards.forEach((cardRef) => {
      const card = cardRef.nativeElement;
      
      card.addEventListener('mousemove', (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        // Sensitivity
        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;

        const inner = card.querySelector('.card-3d-inner') as HTMLElement;
        if (inner) {
          inner.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        }
      });

      card.addEventListener('mouseleave', () => {
        const inner = card.querySelector('.card-3d-inner') as HTMLElement;
        if (inner) {
          inner.style.transform = `rotateX(0deg) rotateY(0deg)`;
        }
      });
    });
  }
}
