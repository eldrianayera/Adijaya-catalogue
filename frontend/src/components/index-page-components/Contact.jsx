export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12">
        {/* Left: Text */}
        <div>
          <h2 className="text-4xl font-bold poppins text-foreground mb-6">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Have questions about our products, your order, or wholesale
            opportunities? We’re here to help. Reach out to us and we’ll get
            back to you as soon as possible.
          </p>

          <div className="space-y-4">
            <p className="text-gray-700">
              📍 <span className="font-semibold">Address:</span> 123 FitWear
              Street, Kaohsiung, Taiwan
            </p>
            <p className="text-gray-700">
              📧 <span className="font-semibold">Email:</span>{" "}
              support@fitwear.com
            </p>
            <p className="text-gray-700">
              📞 <span className="font-semibold">Phone:</span> +886 912 345 678
            </p>
          </div>
        </div>

        {/* Right: Form */}
        <div>
          <form className="bg-white p-8 rounded-2xl shadow-lg space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            ></textarea>
            <button type="submit" className="primary-button w-full text-center">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
