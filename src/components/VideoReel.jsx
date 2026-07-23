export function VideoReel() {
    return (
        <section className="reel-section" aria-label="Video de nuestro cafe">
            <div className="reel-wraper">
                <video
                    className="reel-video"
                    src="/reel-Canco.mp4"
                    autoPlay
                    loop
                    playsInline
                    preload="auto"
                />
            </div>
        </section>
    );
}