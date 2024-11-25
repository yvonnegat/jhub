import React from 'react';

export default function Hero() {
  return (
    <section className="relative w-full h-screen bg-cover bg-center">
      {/* Blurry Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-sm"
        style={{
          backgroundImage: "url('/assets/png/hero image.jpg')",
          zIndex: -1,
        }}
      ></div>
      {/* Content */}
      <div className="flex justify-center items-center h-full text-center">
        <div className="text-white px-4 md:px-8">
          <h1 className="mb-6 lg:text-7xl text-5xl font-extrabold tracking-tight">
            empowering. <br />
            <span className="block w-full text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600 lg:inline">
              welcome to JHUB creative community
            </span>
          </h1>
          <p className="px-0 mb-6 text-lg md:text-xl lg:px-24">
            We are a one-stop hub offering a comprehensive array of digital solutions for societal needs.
          </p>
        </div>
      </div>
    </section>
  );
}
