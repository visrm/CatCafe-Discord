"use client";

import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/lib/config";

const stats = [
  {
    value: 42000,
    suffix: "",
    label: "Total Members",
    emoji: "👥",
    color: "#FFFFFF",
  },
  {
    value: 2500,
    suffix: "",
    label: "Online Right Now",
    emoji: "🟢",
    color: "#FFFFFF",
  },
  {
    value: 50,
    suffix: "+",
    label: "Active Channels",
    emoji: "💬",
    color: "#FFFFFF",
  },
  {
    value: 97,
    suffix: "%",
    label: "Satisfaction Rate",
    emoji: "❤️",
    color: "#FFFFFF",
  },
];

function useCountUp(target: number, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

function StatCard({ stat }: { stat: (typeof stats)[0] }) {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const count = useCountUp(stat.value, 1800, inView);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.5 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div
        ref={ref}
        className="bg-[#1E2540] rounded-3xl p-8 text-center card-glow transition-all duration-300 group"
      >
        <div className="text-3xl mb-4 group-hover:animate-wiggle inline-block">
          {stat.emoji}
        </div>
        <div
          className="font-display text-4xl md:text-6xl mb-2"
          style={{ color: stat.color }}
        >
          {count.toLocaleString()}
          {stat.suffix}
        </div>
        <div className="text-[#8892B0] font-semibold text-xs uppercase tracking-widest">
          {stat.label}
        </div>
      </div>
    </>
  );
}

export default function Stats() {
  return (
    <>
      <section id="stats" className="py-28 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FF5F57]/5 blur-3xl rounded-full" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#06D6A0]/5 blur-3xl rounded-full" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-[#FF5F57]/10 text-[#FF5F57] text-sm font-bold uppercase tracking-widest mb-2">
              By the Numbers
            </span>
            <h2 className="font-display font-medium text-5xl md:text-6xl text-white">
              The proof is in
              <br />
              <span className="text-[#FF5F57]">the people.</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <StatCard key={stat.label} stat={stat} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
