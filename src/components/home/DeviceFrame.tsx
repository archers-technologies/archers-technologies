import { ReactNode } from "react";

interface DeviceFrameProps {
  children: ReactNode;
  type?: "laptop" | "phone";
  className?: string;
}

export function DeviceFrame({ children, type = "laptop", className = "" }: DeviceFrameProps) {
  if (type === "phone") {
    return (
      <div className={`relative mx-auto w-[180px] ${className}`}>
        <div className="rounded-[2rem] border-4 border-foreground/20 bg-card p-2 shadow-2xl shadow-brand/10">
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-1 rounded-full bg-foreground/20" />
          <div className="rounded-[1.5rem] overflow-hidden aspect-[9/19]">{children}</div>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      <div className="rounded-t-xl border border-foreground/15 bg-card/80 backdrop-blur-sm p-3 pb-0 shadow-2xl shadow-brand/10">
        <div className="flex gap-1.5 mb-3">
          <span className="w-2.5 h-2.5 rounded-full bg-foreground/20" />
          <span className="w-2.5 h-2.5 rounded-full bg-foreground/20" />
          <span className="w-2.5 h-2.5 rounded-full bg-foreground/20" />
        </div>
        <div className="rounded-t-lg overflow-hidden aspect-[16/10] border border-foreground/10">{children}</div>
      </div>
      <div className="h-3 bg-gradient-to-b from-card/80 to-transparent rounded-b-lg mx-8" />
      <div className="h-1.5 w-24 mx-auto bg-foreground/15 rounded-full mt-1" />
    </div>
  );
}
