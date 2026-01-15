import React from 'react'

const Contact = () => {
return (
    <div className="bg-zinc-50 text-zinc-800">
      {/* Hero Section */}
      <section className="bg-linear-to-r from-orange-900 to-zinc-800 text-white py-20 mt-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Contact <span className="text-orange-500">Grocify</span>
          </h1>
          <p className="text-zinc-300 max-w-2xl mx-auto text-lg">
            Have questions or need help? We’re always here to assist you.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="max-w-1400 mx-auto px-10 grid md:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">
              Get in <span className="text-orange-500">Touch</span>
            </h2>
            <p className="text-zinc-600">
              Reach out to Grocify for support, feedback, or business inquiries.
              Our team will get back to you as soon as possible.
            </p>

            <div className="bg-white border border-zinc-200 rounded-2xl p-6 shadow space-y-4">
              <div>
                <h4 className="font-semibold text-orange-500">📍 Address</h4>
                <p className="text-zinc-600">
                  Chattogram, Bangladesh
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-orange-500">📞 Phone</h4>
                <p className="text-zinc-600">+880 1822 1822 07</p>
              </div>

              <div>
                <h4 className="font-semibold text-orange-500">📧 Email</h4>
                <p className="text-zinc-600">support@grocify.com</p>
              </div>

              <div>
                <h4 className="font-semibold text-orange-500">⏰ Support Hours</h4>
                <p className="text-zinc-600">
                  24/7 — Always available for you
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white border border-zinc-200 rounded-2xl p-8 shadow">
            <h3 className="text-2xl font-semibold mb-6">
              Send Us a <span className="text-orange-500">Message</span>
            </h3>

            <form className="space-y-5">
              <div>
                <label className="block mb-1 text-sm font-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Write your message..."
                  className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-zinc-900 py-12 text-center text-white">
        <h2 className="text-2xl font-bold mb-3">
          Need Immediate Help?
        </h2>
        <p className="text-zinc-300 mb-5">
          Our support team is ready to assist you anytime.
        </p>
        <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg font-semibold transition">
          Contact Support
        </button>
      </section>
    </div>
  );
}

export default Contact
