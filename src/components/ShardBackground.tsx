export default function ShardBackground() {
  return (
    <div className="absolute inset-0 z-0 bg-[#020617] overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        /* Increased scale to push corner watermarks out of the viewport */
        className="w-full h-full object-cover scale-[1.08] origin-center opacity-80"
      >
        <source src="/shard-reference.mp4" type="video/mp4" />
      </video>
      
      {/* Fallback dark overlay to ensure text is readable over the bright video core */}
      <div className="absolute inset-0 bg-black/30 mix-blend-multiply pointer-events-none" />
      
      {/* Subtle gradient overlay at bottom right corner just in case scale isn't enough to hide watermark */}
      <div className="absolute bottom-0 right-0 w-32 md:w-48 h-20 bg-gradient-to-tl from-[#020617] via-[#020617]/80 to-transparent pointer-events-none z-10" />
    </div>
  );
}
