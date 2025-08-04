export default function HeroContainer1() {
  return (
    <section
      id="hero"
      className="scroll-mt-30 h-120 flex flex-col justify-center bg-cover px-20 gap-4"
      style={{
        backgroundImage: "url('homebg2.png')",
      }}
    >
      {/* <div className="absolute inset-0 bg-gray-500/10"></div> */}
      <h1 className="text-6xl font-bold poppins">
        Gear Up. Push Harder. <br /> Perform Better.
      </h1>
      <p className="text-gray-500">
        Elevate your game with high-performance activewear designed to move with
        you. <br /> Stay comfortable, look sharp, and conquer every workout.
      </p>
      <a href="/#product" className="primary-button w-40 text-center">
        Shop Now
      </a>
    </section>
  );
}
