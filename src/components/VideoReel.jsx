export function VideoReel() {
  return (
    <section className="reel-section" aria-label="Video de nuestro cafe">
      <div className="reel-wrapper">
        <video
          className="reel-video"
          src="/reel-cafe.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        />
      </div>
    </section>
  );
}
