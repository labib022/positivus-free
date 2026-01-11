import Button from '../components/Button';

const Hero = () => {
  return (
    <section className="px-6 md:px-20 py-16 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Navigating the digital landscape for success
        </h1>
        <p className="mt-6 text-gray-600">
          Our digital marketing agency helps businesses grow and succeed online.
        </p>

        <div className="mt-8">
          <Button text="Book a consultation" />
        </div>
      </div>

      <div>
        <img src={Hero} alt="Hero" className="w-full" />
      </div>
    </section>
  );
};

export default Hero;
