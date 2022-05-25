import Logo from "../../src/ECDIS.png";

export default function Map() {
  const data = true;

  return (
    <div>
      <section className="w-full h-screen relative">
        <img
          src={Logo}
          className="object-cover w-full h-full"
          alt="Image alt text"
        />
      </section>
    </div>
  );
}
