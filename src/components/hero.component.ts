
import { Component, ElementRef, AfterViewInit, ViewChild, OnDestroy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

declare const gsap: any;

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="min-h-screen flex flex-col overflow-hidden z-10 relative items-center justify-center py-20">
        <!-- Canvas Background -->
        <canvas #heroCanvas class="absolute inset-0 w-full h-full pointer-events-none opacity-40 z-0"></canvas>
        <div class="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 z-0 pointer-events-none"></div>

        <div class="max-w-[1400px] mx-auto text-center relative z-10 px-6">
            <div class="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-12 opacity-0 animate-fade-in hover-trigger">
                <span class="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                <span class="text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-300">Global Agency</span>
            </div>

            <h1 class="font-display text-5xl md:text-7xl lg:text-[7rem] font-medium tracking-tighter text-white leading-[0.95] mb-12 mix-blend-difference select-none">
                <span class="mask-text block"><span class="block transform translate-y-[110%] reveal-text">ENGINEERING</span></span>
                <span class="mask-text block"><span class="block transform translate-y-[110%] reveal-text text-neutral-500">DIGITAL</span></span>
                <span class="mask-text block"><span class="block transform translate-y-[110%] reveal-text">PERFECTION</span></span>
            </h1>

            <div class="flex flex-col md:flex-row items-center justify-between w-full max-w-4xl mx-auto mt-12 border-t border-white/10 pt-8 opacity-0 animate-fade-up">
                <p class="text-neutral-400 text-sm max-w-xs text-left mb-6 md:mb-0">
                    We build high-performance operational systems for forward-thinking brands.
                </p>
                <div class="flex gap-12">
                    <div class="text-left">
                        <div class="text-2xl font-display font-bold">120+</div>
                        <div class="text-[10px] uppercase tracking-widest text-neutral-500">Systems Built</div>
                    </div>
                    <div class="text-left">
                        <div class="text-2xl font-display font-bold">$2B+</div>
                        <div class="text-[10px] uppercase tracking-widest text-neutral-500">Value Generated</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  `
})
export class HeroComponent implements AfterViewInit, OnDestroy {
  @ViewChild('heroCanvas') canvasRef!: ElementRef<HTMLCanvasElement>;
  
  private animationId: number | null = null;
  private resizeObserver: ResizeObserver | null = null;

  ngAfterViewInit() {
    this.initCanvas();
    this.initAnimations();
  }

  ngOnDestroy() {
    if (this.animationId) cancelAnimationFrame(this.animationId);
    if (this.resizeObserver) this.resizeObserver.disconnect();
  }

  private initAnimations() {
    // Text Reveal
    gsap.to('.reveal-text', {
      y: 0,
      duration: 1.2,
      ease: 'power3.out',
      stagger: 0.1,
      delay: 0.2
    });

    // Fade elements
    gsap.to('.animate-fade-in', { opacity: 1, duration: 1, delay: 0.5 });
    gsap.to('.animate-fade-up', { opacity: 1, y: 0, duration: 1, delay: 0.8, ease: 'power2.out' });
  }

  private initCanvas() {
    const canvas = this.canvasRef.nativeElement;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    
    // Set explicit width/height
    canvas.width = width;
    canvas.height = height;

    class Stream {
      x: number;
      y: number;
      speed: number;
      length: number;
      opacity: number;

      constructor(x: number) {
        this.x = x;
        this.y = Math.random() * height;
        this.speed = Math.random() * 2 + 0.5;
        this.length = Math.random() * 100 + 50;
        this.opacity = Math.random() * 0.3 + 0.05;
      }

      update() {
        this.y -= this.speed;
        if (this.y + this.length < 0) {
          this.y = height + Math.random() * 100;
          this.speed = Math.random() * 2 + 0.5;
        }
      }

      draw(context: CanvasRenderingContext2D) {
        context.strokeStyle = `rgba(255, 255, 255, 0.03)`;
        context.lineWidth = 1;
        context.beginPath();
        context.moveTo(this.x, 0);
        context.lineTo(this.x, height);
        context.stroke();

        const gradient = context.createLinearGradient(this.x, this.y, this.x, this.y + this.length);
        gradient.addColorStop(0, `rgba(255, 255, 255, 0)`);
        gradient.addColorStop(0.5, `rgba(255, 255, 255, ${this.opacity})`);
        gradient.addColorStop(1, `rgba(255, 255, 255, 0)`);

        context.fillStyle = gradient;
        context.fillRect(this.x - 1, this.y, 3, this.length);
      }
    }

    let streams: Stream[] = [];
    const gap = 40;

    const initStreams = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      streams = [];
      for (let x = gap / 2; x < width; x += gap) {
        streams.push(new Stream(x));
      }
    };

    initStreams();

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      streams.forEach(s => {
        s.update();
        s.draw(ctx);
      });
      this.animationId = requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    window.addEventListener('resize', initStreams);
  }
}
