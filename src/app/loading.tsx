import { Logo } from "@/components/ui/logo";

export default function Loading() {
  return (
    <div className="min-h-screen bg-primary flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        {/* Logo spinner */}
        <Logo />

        {/* Loading text */}
        <p className="text-gray-400 text-sm animate-pulse">Loading...</p>
      </div>
    </div>
  );
}
