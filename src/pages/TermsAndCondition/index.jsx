const sections = [
  {
    title: "Acceptance of Terms",
    content:
      "By accessing and using our website, you agree to comply with and be bound by these Terms & Conditions. If you do not agree with any part of these terms, please discontinue using our services.",
  },
  {
    title: "Products & Services",
    content:
      "All jewellery products displayed on our platform are subject to availability. We reserve the right to modify, discontinue, or update products, pricing, and services without prior notice.",
  },
  {
    title: "Pricing & Payments",
    content:
      "All prices are listed in applicable currency and may vary depending on gold rates, diamond quality, craftsmanship, and customization requirements. Payments must be completed before order confirmation.",
  },
  {
    title: "Custom Jewellery Orders",
    content:
      "Customized and bespoke jewellery orders are crafted specifically for customers and therefore may not be eligible for cancellation or return once production has begun.",
  },
  {
    title: "Shipping & Delivery",
    content:
      "We provide secure delivery services worldwide. Delivery timelines may vary depending on location, product availability, and customization requirements.",
  },
  {
    title: "Intellectual Property",
    content:
      "All designs, logos, content, images, and branding materials on this website are the intellectual property of Vairam Jewellery and may not be copied or reproduced without permission.",
  },
  {
    title: "Privacy Policy",
    content:
      "Customer information collected through our website is handled securely and responsibly. We do not sell or share personal data with unauthorized third parties.",
  },
  {
    title: "Limitation of Liability",
    content:
      "We are not liable for indirect, incidental, or consequential damages arising from the use of our website, products, or services.",
  },
];

const TermsAndCondition = () => {
  return (
    <section className="bg-white min-h-screen pt-[120px] pb-20 sm:pb-28">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <div className="border-b border-black/10 pb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-px bg-[#C6A769]" />

            <span className="text-[11px] uppercase tracking-[0.32em] text-black/55 font-medium">
              Legal Information
            </span>
          </div>

          <h1 className="text-[42px] sm:text-[58px] lg:text-[76px] leading-[0.95] tracking-[-0.06em] font-semibold text-black">
            Terms &
            <br />
            Conditions
          </h1>

          <p className="mt-8 text-[15px] sm:text-[17px] leading-8 text-black/60 max-w-3xl">
            Please read these Terms & Conditions carefully before using our
            website or purchasing our jewellery products and services.
          </p>
        </div>

        <div className="mt-14 space-y-10">
          {sections.map((section, index) => (
            <div
              key={index}
              className="border-b border-black/8 pb-10"
            >
              <div className="flex items-start gap-5">
                <span className="text-[32px] sm:text-[38px] leading-none font-semibold text-[#C6A769]/40">
                  0{index + 1}
                </span>

                <div>
                  <h2 className="text-[24px] sm:text-[30px] tracking-[-0.04em] font-semibold text-black">
                    {section.title}
                  </h2>

                  <p className="mt-5 text-[15px] sm:text-[16px] leading-8 text-black/60">
                    {section.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 border border-[#C6A769]/20 bg-black px-8 sm:px-12 py-10 sm:py-12">
          <p className="text-[11px] uppercase tracking-[0.32em] text-[#C6A769] font-medium mb-5">
            Vairam Jewellery
          </p>

          <h3 className="text-[30px] sm:text-[42px] leading-[1] tracking-[-0.05em] font-semibold text-white">
            Trusted Luxury
            <br />
            For Generations
          </h3>

          <p className="mt-6 text-[15px] sm:text-[16px] leading-8 text-white/60 max-w-2xl">
            By continuing to use our website and services, you acknowledge
            that you have read, understood, and agreed to these Terms &
            Conditions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TermsAndCondition;