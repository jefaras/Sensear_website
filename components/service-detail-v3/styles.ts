// Shared section classes for the Experience Design page (the brief v2 and the redesign components). They live here, not in
// ExperienceDesign.tsx, so client components can import them without pulling that server
// component (and everything it imports) into the browser bundle.

export const container = 'relative z-10 mx-auto max-w-[min(1760px,100%)] px-[clamp(20px,1.59vw,28px)] sm:px-[clamp(27px,2.1vw,37px)]';
export const panel = 'border-t border-[#faf6f1]/8 bg-[#0e0d0c]';
export const h2Class = 'text-[clamp(2rem,3.6vw,3rem)] font-extrabold leading-[1.1] tracking-[-0.02em]';
export const leadClass = 'max-w-[680px] text-[clamp(1.03rem,1.17vw,1.29rem)] leading-[1.65] text-[#faf6f1]/66';
export const h3Class = 'mb-1.5 text-[clamp(1.18rem,1.34vw,1.47rem)] font-bold';
export const itemTextClass = 'text-[clamp(0.94rem,1.06vw,1.17rem)] leading-[1.6] text-[#faf6f1]/58';
/** The section photos' frame: rounded, with the dark fade at the bottom. */
export const photoFrame = 'relative overflow-hidden rounded-lg';
export const photoFade = 'absolute inset-0 bg-[linear-gradient(180deg,rgba(11,10,10,0)_55%,rgba(11,10,10,0.5))]';
