import { cn } from "@/lib/utils";

interface RadialGlowBackgroundProps {
  className?: string;
  children?: React.ReactNode;
  glowColor?: string;
}

export const RadialGlowBackground = ({
  className,
  children,
  glowColor = "hsl(225, 73%, 57%)",
}: RadialGlowBackgroundProps) => {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      {/* Dark Radial Glow Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `radial-gradient(ellipse 80% 60% at 50% 0%, ${glowColor}22 0%, transparent 70%), #050505`,
        }}
      />
      {/* Secondary soft glow */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 40% 30% at 50% 0%, ${glowColor}18 0%, transparent 60%)`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};
