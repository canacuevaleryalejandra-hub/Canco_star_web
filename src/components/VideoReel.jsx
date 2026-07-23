export function VideoReel() {
    return (
        <section className="reel-section" aria-label="Video de nuestro cafe">
            <div className="reel-wrapper">
                <video
                    className="reel-video"
                    src="/Reel-Canco.mp4"
                    autoPlay
                    loop
                    playsInline
                    preload="auto"
                />
            </div>
        </section>
    );
}