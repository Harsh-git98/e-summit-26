'use client';

import { cn } from '@/lib/utils';
import { ArrowRight, Code2, Copy, Rocket, Zap, type LucideIcon } from 'lucide-react';
import { useState } from 'react';

export interface CardFlipProps {
  title?: string;
  subtitle?: string;
  description?: string;
  features?: string[];
  color?: string;
  icon?: LucideIcon;
}

export default function CardFlip({
  title = 'Competition',
  subtitle = 'Team Event',
  description = 'An exciting competition to test your skills.',
  features = ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
  color = '#4169e1',
  icon: Icon = Rocket,
}: CardFlipProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="w-full [perspective:1200px]">
      <div
        className={cn(
          'relative w-full aspect-[3/4] transition-transform duration-700 [transform-style:preserve-3d] cursor-pointer',
          isFlipped && '[transform:rotateY(180deg)]'
        )}
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
      >
        {/* Front of card */}
        <div className="absolute inset-0 [backface-visibility:hidden] rounded-2xl overflow-hidden border border-border/50 bg-card">
          {/* Background gradient effect */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              background: `radial-gradient(circle at 50% 0%, ${color}40, transparent 70%)`,
            }}
          />

          {/* Animated code blocks */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-32 h-32">
              {/* Code blocks animation */}
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute rounded-md opacity-0"
                  style={{
                    width: `${40 + Math.random() * 60}px`,
                    height: '6px',
                    background: `linear-gradient(90deg, ${color}80, ${color}20)`,
                    top: `${10 + i * 18}px`,
                    left: '10px',
                    animation: `slideIn ${1.5 + i * 0.3}s ease-in-out ${i * 0.2}s infinite`,
                  }}
                />
              ))}

              {/* Central icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center"
                  style={{ background: `${color}20`, border: `1px solid ${color}40` }}
                >
                  <Icon className="w-8 h-8" style={{ color }} />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom content */}
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-heading font-bold text-foreground">{title}</h3>
                <p className="text-sm text-muted-foreground">{subtitle}</p>
              </div>
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ background: `${color}20`, border: `1px solid ${color}40` }}
              >
                <ArrowRight className="w-4 h-4" style={{ color }} />
              </div>
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-2xl overflow-hidden border border-border/50 bg-card">
          {/* Background gradient */}
          <div
            className="absolute inset-0 opacity-15"
            style={{
              background: `radial-gradient(circle at 50% 100%, ${color}40, transparent 70%)`,
            }}
          />

          <div className="relative p-5 flex flex-col h-full">
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-3">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: `${color}20`, border: `1px solid ${color}40` }}
                >
                  <Icon className="w-4 h-4" style={{ color }} />
                </div>
                <h3 className="text-lg font-heading font-bold text-foreground">{title}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
            </div>

            <div className="grid grid-cols-2 gap-2 flex-1">
              {features.map((feature, index) => {
                const icons = [Copy, Code2, Rocket, Zap];
                const IconComponent = icons[index % icons.length];

                return (
                  <div
                    key={index}
                    className="rounded-lg p-2.5 flex items-center gap-2 border border-border/30 bg-muted/30"
                  >
                    <div
                      className="w-6 h-6 rounded-md flex items-center justify-center shrink-0"
                      style={{ background: `${color}15` }}
                    >
                      <IconComponent className="w-3 h-3" style={{ color }} />
                    </div>
                    <span className="text-xs text-muted-foreground font-medium">{feature}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-5">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium" style={{ color }}>
                Learn More
              </span>
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ background: `${color}20`, border: `1px solid ${color}40` }}
              >
                <ArrowRight className="w-4 h-4" style={{ color }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          0% {
            transform: translateX(-100px);
            opacity: 0;
          }
          50% {
            transform: translateX(0);
            opacity: 0.8;
          }
          100% {
            transform: translateX(100px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
