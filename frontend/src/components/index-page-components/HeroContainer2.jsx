export default function HeroContainer2() {
  return (
    <section
      id="hero"
      className="
        relative border-2 text-center scroll-mt-30 h-120 overflow-hidden flex justify-end
        before:content-[''] before:absolute before:inset-0
        before:bg-[url('runner.png')] before:bg-[50%_100%] before:bg-cover
        before:scale-x-[-1] before:z-0
      "
    >
      <div className="relative z-10 border-8 text-right px-20 flex flex-col justify-center ">
        <h1 className="text-6xl font-bold poppins text-primary">
          Train Strong. <br /> Achieve More.
        </h1>
        <p className="text-background">
          Unlock your full potential with apparel built for performance and
          style.
          <br /> Stay light, stay powerful, and own every moment.
        </p>
      </div>
    </section>
  );
}
