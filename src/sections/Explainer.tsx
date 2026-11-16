import { Reveal } from "../components/Reveal";
import { SectionHead } from "../components/SectionHead";

export function Explainer() {
  return (
    <section id="video" className="mx-auto max-w-6xl px-5 pt-24 md:px-8 md:pt-32">
      <SectionHead
        center
        eyebrow="How it works"
        title="KeiSha in one minute"
        intro="From the client's request to a verified, agency-branded report."
      />
      <Reveal delay={0.1}>
        <div className="mt-12 overflow-hidden rounded-2xl border border-[#dbe3ef] bg-[#0b2b5e] shadow-[0_30px_80px_-30px_rgba(11,43,94,0.55)]">
          <video
            className="block aspect-video w-full"
            controls
            playsInline
            preload="none"
            poster="video/keisha-explainer-poster.jpg"
            aria-label="KeiSha Link Builders explainer video, about one minute"
          >
            <source src="video/keisha-explainer.mp4" type="video/mp4" />
            Your browser can't play this video.{" "}
            <a href="video/keisha-explainer.mp4">Download the KeiSha explainer (MP4)</a>.
          </video>
        </div>
      </Reveal>
    </section>
  );
}
