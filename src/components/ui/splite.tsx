import { LoadingSpinner } from '@/components/ui/loading-spinner';

// SplineScene stub — renders a placeholder since @splinetool is not installed
export function SplineScene({ className }: { scene: string; className?: string }) {
  return (
    <div className={`w-full h-full flex items-center justify-center ${className ?? ''}`}>
      <LoadingSpinner size="lg" text="Loading Scene..." />
    </div>
  );
}
