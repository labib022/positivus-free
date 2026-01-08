import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 md:px-20 py-6">
      <h1 className="text-2xl font-bold">Positivus</h1>

      <ul className="hidden md:flex gap-8 text-sm">
        <li>
          <a href="#about">About us</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#usecases">Use cases</a>
        </li>
        <li>
          <a href="#pricing">Pricing</a>
        </li>
        <li>
          <a href="#blogs">Blogs</a>
        </li>
      </ul>

      <Button text="Request a quote" variant="outline" />
    </nav>
  );
};

export default Navbar;
