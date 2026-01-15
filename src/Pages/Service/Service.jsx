import React from 'react'

const Service = () => {
return (
    <div className="bg-zinc-50 text-zinc-800">
      {/* Hero Section */}
      <section className="bg-linear-to-r from-orange-900 to-zinc-800 text-white py-12 md:py-20 mt-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-orange-500">Services</span>
          </h1>
          <p className="text-zinc-300 max-w-2xl mx-auto text-lg">
            Smart grocery solutions designed to make your daily shopping easy
            and stress-free.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-1400 mx-auto px-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Service Card */}
            <div className="bg-white border border-zinc-200 rounded-2xl p-8 shadow hover:shadow-xl transition">
              <div className="text-orange-500 text-4xl mb-4">🛒</div>
              <h3 className="text-xl font-semibold mb-3">
                Online Grocery Shopping
              </h3>
              <p className="text-zinc-600">
                Shop fresh groceries from the comfort of your home with just a
                few clicks.
              </p>
            </div>

            <div className="bg-white border border-zinc-200 rounded-2xl p-8 shadow hover:shadow-xl transition">
              <div className="text-orange-500 text-4xl mb-4">🚚</div>
              <h3 className="text-xl font-semibold mb-3">
                Fast Home Delivery
              </h3>
              <p className="text-zinc-600">
                Get your groceries delivered quickly and safely at your
                doorstep.
              </p>
            </div>

            <div className="bg-white border border-zinc-200 rounded-2xl p-8 shadow hover:shadow-xl transition">
              <div className="text-orange-500 text-4xl mb-4">🥦</div>
              <h3 className="text-xl font-semibold mb-3">
                Fresh & Organic Products
              </h3>
              <p className="text-zinc-600">
                Hand-picked fresh fruits, vegetables, and daily essentials.
              </p>
            </div>

            <div className="bg-white border border-zinc-200 rounded-2xl p-8 shadow hover:shadow-xl transition">
              <div className="text-orange-500 text-4xl mb-4">💳</div>
              <h3 className="text-xl font-semibold mb-3">
                Secure Payments
              </h3>
              <p className="text-zinc-600">
                Multiple safe and secure payment options for a smooth checkout.
              </p>
            </div>

            <div className="bg-white border border-zinc-200 rounded-2xl p-8 shadow hover:shadow-xl transition">
              <div className="text-orange-500 text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-semibold mb-3">
                Easy Returns
              </h3>
              <p className="text-zinc-600">
                Hassle-free returns and refunds for damaged or incorrect items.
              </p>
            </div>

            <div className="bg-white border border-zinc-200 rounded-2xl p-8 shadow hover:shadow-xl transition">
              <div className="text-orange-500 text-4xl mb-4">📞</div>
              <h3 className="text-xl font-semibold mb-3">
                24/7 Customer Support
              </h3>
              <p className="text-zinc-600">
                Our support team is always ready to help you anytime.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-zinc-900 py-14 text-center text-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Experience Grocery Shopping Made Easy
        </h2>
        <p className="text-zinc-300 mb-6">
          Join thousands of happy customers using Grocify every day.
        </p>
        <button className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-lg font-semibold transition">
          Start Shopping
        </button>
      </section>
    </div>
  );
}

export default Service
