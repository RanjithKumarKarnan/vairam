import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const categories = [
  "All",
  "Temple",
  "Bridal",
  "Diamond",
  "Luxury Gold",
];

const products = [
  {
    id: 1,
    image: "/gold/one.avif",
    category: "Temple",
    title: "Temple Necklace",
    price: "₹1,25,000",
  },
  {
    id: 2,
    image: "/gold/1.avif",
    category: "Bridal",
    title: "Bridal Gold Set",
    price: "₹2,40,000",
  },
  {
    id: 3,
    image: "/gold/2.avif",
    category: "Diamond",
    title: "Diamond Elegance",
    price: "₹3,10,000",
  },
  {
    id: 4,
    image: "/gold/1.avif",
    category: "Luxury Gold",
    title: "Luxury Bangles",
    price: "₹95,000",
  },
  {
    id: 5,
    image: "/gold/3.avif",
    category: "Temple",
    title: "Heritage Pendant",
    price: "₹78,000",
  },
  {
    id: 6,
    image: "/gold/one.avif",
    category: "Bridal",
    title: "Royal Bridal Set",
    price: "₹4,20,000",
  },
];

const Product = () => {
  const [active, setActive] = useState("All");

  const filteredProducts =
    active === "All"
      ? products
      : products.filter((item) => item.category === active);

  return (
    <section className="bg-white min-h-screen pt-[100px] pb-20 sm:pb-28 mt-14">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-black/10 pb-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-[#C6A769]" />

              <span className="text-[11px] uppercase tracking-[0.32em] text-black/55 font-medium">
                Our Collections
              </span>
            </div>

            <h1 className="text-[44px] sm:text-[62px] lg:text-[82px] leading-[0.95] tracking-[-0.06em] font-semibold text-black">
              Luxury
              <br />
              Jewellery Collection
            </h1>

            <p className="mt-8 text-[15px] sm:text-[17px] leading-8 text-black/60 max-w-2xl">
              Explore handcrafted jewellery collections designed with timeless
              artistry, elegance, and generations of craftsmanship.
            </p>
          </div>

          <Link
            to="/contact"
            className="group h-14 px-8 bg-black text-white text-[11px] uppercase tracking-[0.24em] font-semibold inline-flex items-center gap-3 hover:bg-[#C6A769] hover:text-black transition-all duration-300"
          >
            Book Appointment

            <ArrowRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>

        <div className="flex flex-wrap gap-3 mt-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActive(category)}
              className={`h-11 px-6 border text-[11px] uppercase tracking-[0.24em] font-semibold transition-all duration-300 ${active === category
                ? "bg-black text-white border-black"
                : "border-black/10 text-black hover:border-[#C6A769] hover:text-[#C6A769]"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10 mt-14">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group border border-black/8 bg-white overflow-hidden hover:border-[#C6A769]/40 transition-all duration-500"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/15 transition-all duration-500" />

                <div className="absolute top-5 left-5">
                  <span className="bg-black text-white px-4 py-2 text-[10px] uppercase tracking-[0.24em] font-medium">
                    {product.category}
                  </span>
                </div>
              </div>

              <div className="p-7">
                <h3 className="text-[28px] tracking-[-0.04em] font-semibold text-black">
                  {product.title}
                </h3>

                <div className="flex items-center justify-between mt-5">
                  <p className="text-[18px] font-semibold text-[#C6A769]">
                    {product.price}
                  </p>

                  <Link
                    to="/contact"
                    className="group/link inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.24em] font-semibold text-black hover:text-[#C6A769] transition-all duration-300"
                  >
                    Enquire

                    <ArrowRight
                      size={14}
                      className="transition-transform duration-300 group-hover/link:translate-x-1"
                    />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 border border-[#C6A769]/20 bg-black px-8 sm:px-12 lg:px-16 py-12 sm:py-14 overflow-hidden">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
            <div className="max-w-2xl">
              <p className="text-[11px] uppercase tracking-[0.32em] text-[#C6A769] font-medium mb-5">
                Bespoke Jewellery
              </p>

              <h2 className="text-[34px] sm:text-[48px] lg:text-[60px] leading-[0.95] tracking-[-0.05em] font-semibold text-white">
                Create Your
                <br />
                Dream Jewellery
              </h2>

              <p className="mt-6 text-[15px] sm:text-[16px] leading-8 text-white/60 max-w-xl">
                Share your ideas, sketches, or inspirations and let our master
                craftsmen transform them into timeless luxury jewellery.
              </p>
            </div>

            <Link
              to="/contact"
              className="group h-14 px-8 bg-[#C6A769] text-black text-[11px] uppercase tracking-[0.24em] font-semibold inline-flex items-center gap-3 hover:bg-white transition-all duration-300"
            >
              Start Designing

              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;