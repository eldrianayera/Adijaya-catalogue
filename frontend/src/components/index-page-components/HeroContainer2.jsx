export default function HeroContainer2() {
  return (
    <section
      id="hero"
      className="
        relative border-2 text-right scroll-mt-30 h-120 overflow-hidden flex justify-end items-center
        before:content-[''] before:absolute before:inset-0
        before:bg-[url('/runner.png')] before:bg-[50%_100%] before:bg-cover
        before:scale-x-[-1] before:z-0 before:pointer-events-none
      "
      aria-label="Hero section with background image and call to action"
    >
      <div className="relative z-10  px-20 flex flex-col justify-center max-w-lg">
        <h1 className="text-6xl font-bold poppins text-primary leading-tight">
          Train Strong.
        </h1>
        <p className="text-background mt-4 text-lg leading-relaxed">
          Unlock your full potential with apparel built for performance and
          style.
          <br /> Stay light, stay powerful, and own every moment.
        </p>
      </div>
    </section>
  );
}
