export default function HeroContainer1() {
  return (
    <section
      id="hero"
      className="scroll-mt-30 h-120 flex flex-col justify-center bg-cover px-20 gap-6 text-white relative"
      style={{
        backgroundImage: "url('homebg2.png')",
      }}
      aria-label="Hero section with call to action"
    >
      {/* Optional overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30 pointer-events-none"></div>

      <h1 className="text-6xl font-bold poppins z-10">
        Gear Up. Push Harder. <br /> Perform Better.
      </h1>
      <p className="text-gray-200 max-w-xl z-10 md-only">
        Elevate your game with high-performance activewear designed to move with
        you. <br /> Stay comfortable, look sharp, and conquer every workout.
      </p>
      <a
        href="/#product"
        className="primary-button w-40 text-center z-10 self-start"
        tabIndex={0}
      >
        Shop Now
      </a>
    </section>
  );
}
