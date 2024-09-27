import React from 'react'

function Contact() {
  return (
    <section className="bg-gray-100 py-12">
      {/* Contact Header Section */}
      <div className="relative h-64 bg-cover bg-center" style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <h1 className="text-3xl font-bold">PUTTING A PLAN TO ACTION, TO ASSURE YOUR SATISFACTION!</h1>
          <p className="mt-2">Home &gt; Contact Us</p>
        </div>
      </div>

      {/* Contact Form & Info Section */}
      <div className="container mx-auto py-16 px-4 flex flex-col md:flex-row">
        {/* Contact Form */}
        <div className="md:w-2/3 bg-white shadow-lg p-8">
          <h2 className="text-2xl font-bold text-yellow-600 mb-4">GET IN TOUCH</h2>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="NAME"
                className="border p-4 w-full focus:outline-none focus:border-yellow-600"
              />
              <input
                type="email"
                placeholder="EMAIL"
                className="border p-4 w-full focus:outline-none focus:border-yellow-600"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <input
                type="text"
                placeholder="MOBILE NO"
                className="border p-4 w-full focus:outline-none focus:border-yellow-600"
              />
              <input
                type="text"
                placeholder="SUBJECT"
                className="border p-4 w-full focus:outline-none focus:border-yellow-600"
              />
            </div>
            <textarea
              placeholder="MESSAGE"
              rows="4"
              className="border p-4 w-full mt-6 focus:outline-none focus:border-yellow-600"
            ></textarea>
            <button
              type="submit"
              className="bg-yellow-600 text-white py-3 px-6 mt-6 hover:bg-yellow-700 focus:outline-none"
            >
              SUBMIT
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="md:w-1/3 bg-black text-white p-8 md:ml-8 mt-8 md:mt-0">
          <h2 className="text-2xl font-bold text-yellow-600 mb-4">CONTACT INFO</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="material-icons text-yellow-600 mr-4">phone</span>
              <span>+91-8851893233</span>
            </div>
            <div className="flex items-center">
              <span className="material-icons text-yellow-600 mr-4">email</span>
              <span>thepavilion@chhedagroup.co.in</span>
            </div>
            <div className="flex items-center">
              <span className="material-icons text-yellow-600 mr-4">location_on</span>
              <span>
                7B, Dr. Madhukar B Raut Marg, <br />
                Dadar West, Shivaji Park, <br />
                Mumbai, Maharashtra 400028
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Contact