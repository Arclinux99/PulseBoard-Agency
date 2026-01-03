
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="relative overflow-hidden bg-[#050509] border-t border-white/5 pt-24 pb-12">
        <div class="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50"></div>
        <div class="absolute -top-[150px] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-white/5 blur-[80px] rounded-full pointer-events-none mix-blend-screen"></div>

        <div class="max-w-[1400px] mx-auto px-6 relative z-10">
            <div class="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-20">
                <div class="lg:col-span-1 space-y-6">
                    <a href="#" class="flex items-center gap-3">
                        <div class="w-8 h-8 bg-white text-black flex items-center justify-center rounded-sm overflow-hidden">
                            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                            </svg>
                        </div>
                        <span class="font-display font-bold tracking-tight text-lg text-white">PULSE<span class="font-light text-neutral-500">BOARD</span></span>
                    </a>
                    <p class="text-neutral-400 text-sm leading-relaxed max-w-xs">
                        Engineering the digital nervous system for global brands. London, New York, Tokyo.
                    </p>
                </div>

                <div class="lg:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-8">
                    <div>
                        <h4 class="text-white text-xs font-bold uppercase tracking-widest mb-6">Explore</h4>
                        <ul class="space-y-4 text-sm text-neutral-500">
                            <li><a href="#" class="hover:text-white transition-colors">Work</a></li>
                            <li><a href="#" class="hover:text-white transition-colors">Services</a></li>
                            <li><a href="#" class="hover:text-white transition-colors">Process</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="text-white text-xs font-bold uppercase tracking-widest mb-6">Company</h4>
                        <ul class="space-y-4 text-sm text-neutral-500">
                            <li><a href="#" class="hover:text-white transition-colors">Careers</a></li>
                            <li><a href="#" class="hover:text-white transition-colors">News</a></li>
                            <li><a href="#" class="hover:text-white transition-colors">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="text-white text-xs font-bold uppercase tracking-widest mb-6">Socials</h4>
                        <ul class="space-y-4 text-sm text-neutral-500">
                            <li><a href="#" class="hover:text-white transition-colors">Twitter / X</a></li>
                            <li><a href="#" class="hover:text-white transition-colors">LinkedIn</a></li>
                            <li><a href="#" class="hover:text-white transition-colors">Instagram</a></li>
                        </ul>
                    </div>
                </div>

                <div class="lg:col-span-1">
                    <h4 class="text-white text-xs font-bold uppercase tracking-widest mb-6">Stay Updated</h4>
                    <div class="relative">
                        <input type="email" placeholder="Email address" class="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-white/30 transition-colors">
                        <button class="absolute right-2 top-2 p-1 bg-white text-black rounded hover:bg-neutral-200 transition-colors">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
                        </button>
                    </div>
                </div>
            </div>

            <div class="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                <div class="text-[10px] text-neutral-600 uppercase tracking-widest">
                    © 2024 PulseBoard Agency. All Rights Reserved.
                </div>
                <div class="flex gap-6 text-[10px] text-neutral-600 uppercase tracking-widest">
                    <a href="#" class="hover:text-neutral-400 transition-colors">Privacy Policy</a>
                    <a href="#" class="hover:text-neutral-400 transition-colors">Terms of Service</a>
                </div>
            </div>
        </div>
    </footer>
  `
})
export class FooterComponent {}
