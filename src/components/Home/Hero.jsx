import Button from "../../ui/Button";

function Hero() {
  return (
    <div
      className="w-full px-6 h-[95vh] sm:min-h-dvh py-16 bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url('/bg-image2.webp')` }}
    >
      <div className="absolute inset-0 bg-black/40">
        <div className="max-w-7xl mx-auto flex items-center h-full px-5">
          <div className="text-white">
            <h3 className="text-4xl font-bold mb-3">All in one, Debbal</h3>
            <h1 className="text-5xl font-bold mb-6">
              Let's achieve your goals together!
            </h1>
            <p className="mb-8 text-slate-100 max-w-2xl">
              We craft exceptional digital experiences that combine innovative
              design, cutting-edge technology, and strategic thinking to help
              your business thrive.
            </p>
            <div className="flex flex-wrap items-center gap-5">
              <Button type="primary" to="/contact">
                Get started
              </Button>
              <Button type="secondary" to="/portfolio?category=all">
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Hero;
