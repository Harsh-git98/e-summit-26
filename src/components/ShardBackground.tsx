export default function ShardBackground() {
  return (
    <div className="absolute inset-0 z-0 bg-[#020617] overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover opacity-80"
      >
        <source src="/shard-reference.mp4" type="video/mp4" />
      </video>
      {/* Fallback dark overlay to ensure text is readable over the bright video core */}
      <div className="absolute inset-0 bg-black/30 mix-blend-multiply pointer-events-none" />
    </div>
  );
}
