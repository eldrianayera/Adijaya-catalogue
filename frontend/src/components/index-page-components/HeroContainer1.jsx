export default function HeroContainer1() {
  return (
    <section
      id="hero"
      className="scroll-mt-30 h-120 flex flex-col justify-center items-center bg-cover "
      style={{
        backgroundImage: "url('homebg2.png')",
      }}
    >
      <div className="absolute inset-0 bg-gray-500/10"></div>
      <h1 className="text-5xl text-primary font-bold">
        Gear Up. Push Harder. <br /> Perform Better.
      </h1>
      <p>
        Elevate your game with high-performance activewear designed to move with
        you. Stay comfortable, look sharp, and conquer every workout.
      </p>
      <a href="/#product">Shop Now</a>
    </section>
  );
}
