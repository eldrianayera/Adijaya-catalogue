export default function AboutUsSection() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Image */}
        <div>
          <img
            src="about.png"
            alt="About Us"
            className="rounded-2xl shadow-lg"
          />
        </div>

        {/* Right: Text */}
        <div>
          <h2 className="text-4xl font-bold poppins text-foreground mb-6">
            About <span className="text-primary">FitWear</span>
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            At FitWear, we believe that great performance starts with the right
            apparel. Our mission is to design high‑quality, stylish, and
            functional activewear that empowers you to move freely and push your
            limits.
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed">
            From the gym to the streets, our gear blends comfort, durability,
            and trend‑forward designs — so you can look good and feel great,
            wherever your journey takes you.
          </p>
          <a href="/#product" className="primary-button w-40 text-center">
            Shop Now
          </a>
        </div>
      </div>
    </section>
  );
}
