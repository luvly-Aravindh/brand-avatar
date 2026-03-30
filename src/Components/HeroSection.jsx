import sectionBg from "../assets/sec-2.svg";

const FullImageSection = () => {
  return (
    <section className="w-full bg-black">
      <img
        src={sectionBg}
        alt="section"
        className="w-full h-auto object-cover"
      />
    </section>
  );
};

export default FullImageSection;