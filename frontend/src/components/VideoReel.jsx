import { useLanguage } from "../i18n/language";

export function VideoReel() {
    const { t } = useLanguage();
    return (
        <section className="reel-section" id="reel" aria-label={t("reel.etiqueta")}>
            <div className="reel-wrapper">
                <video
                    className="reel-video"
                    src="/Reel-Canco.mp4"
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