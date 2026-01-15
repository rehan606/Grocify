import React from 'react'

const About = () => {
return (
    <div className="bg-zinc-50 text-zinc-800">
      {/* Hero Section */}
      <section className="bg-linear-to-r from-orange-900 to-zinc-800 text-white py-10 md:py-20 mt-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-orange-500">Grocify</span>
          </h1>
          <p className="text-zinc-300 max-w-2xl mx-auto text-lg">
            Your trusted online grocery partner — delivering freshness,
            convenience, and quality to your doorstep.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-1400 mx-auto px-10 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Our <span className="text-orange-500">Mission</span>
            </h2>
            <p className="text-zinc-600 leading-relaxed mb-4">
              At Grocify, our mission is to make grocery shopping effortless,
              affordable, and enjoyable. We connect customers with fresh
              products while saving their time and energy.
            </p>
            <p className="text-zinc-600 leading-relaxed">
              From daily essentials to premium items, we ensure quality and
              reliability in every order.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 border border-zinc-200">
            <h3 className="text-xl font-semibold mb-4 text-orange-500">
              Why Choose Us?
            </h3>
            <ul className="space-y-3 text-zinc-700">
              <li>✔ Fresh & quality groceries</li>
              <li>✔ Fast and reliable delivery</li>
              <li>✔ Easy returns & secure payments</li>
              <li>✔ Customer-first support</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-zinc-100 py-14">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-white rounded-xl p-6 shadow">
            <h3 className="text-3xl font-bold text-orange-500">10K+</h3>
            <p className="text-zinc-600 mt-2">Happy Customers</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow">
            <h3 className="text-3xl font-bold text-orange-500">2K+</h3>
            <p className="text-zinc-600 mt-2">Products</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow">
            <h3 className="text-3xl font-bold text-orange-500">24/7</h3>
            <p className="text-zinc-600 mt-2">Support</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow">
            <h3 className="text-3xl font-bold text-orange-500">Fast</h3>
            <p className="text-zinc-600 mt-2">Delivery</p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10">
            Our <span className="text-orange-500">Core Values</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-3 text-orange-500">
                Quality
              </h3>
              <p className="text-zinc-600">
                We never compromise on product freshness and quality.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-3 text-orange-500">
                Trust
              </h3>
              <p className="text-zinc-600">
                Transparent pricing and reliable service you can count on.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-3 text-orange-500">
                Convenience
              </h3>
              <p className="text-zinc-600">
                Smart shopping experience designed for your busy lifestyle.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About
