const sections = [
  {
    title: "Information We Collect",
    content:
      "We may collect personal information such as your name, email address, phone number, billing information, and delivery details when you interact with our website or services.",
  },
  {
    title: "How We Use Your Information",
    content:
      "Your information is used to process orders, provide customer support, improve our services, communicate updates, and deliver a personalized shopping experience.",
  },
  {
    title: "Data Protection",
    content:
      "We implement appropriate security measures to protect your personal information from unauthorized access, disclosure, alteration, or misuse.",
  },
  {
    title: "Cookies & Tracking",
    content:
      "Our website may use cookies and analytics tools to enhance user experience, analyze website traffic, and improve performance.",
  },
  {
    title: "Third-Party Services",
    content:
      "We may work with trusted third-party partners for payment processing, shipping, and analytics services. These providers are obligated to protect your information securely.",
  },
  {
    title: "Customer Communication",
    content:
      "We may contact you regarding your orders, appointments, promotional offers, or important service-related updates. You may opt out of promotional communication at any time.",
  },
  {
    title: "Data Retention",
    content:
      "We retain customer information only for as long as necessary to fulfill legal, operational, and business requirements.",
  },
  {
    title: "Your Rights",
    content:
      "You have the right to request access, correction, or deletion of your personal information in accordance with applicable privacy laws.",
  },
];

const PrivacyPolicy = () => {
  return (
    <section className="bg-white min-h-screen pt-[120px] pb-20 sm:pb-28 mt-20">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <div className="border-b border-black/10 pb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-px bg-[#C6A769]" />

            <span className="text-[11px] uppercase tracking-[0.32em] text-black/55 font-medium">
              Privacy & Security
            </span>
          </div>

          <h1 className="text-[42px] sm:text-[58px] lg:text-[76px] leading-[0.95] tracking-[-0.06em] font-semibold text-black">
            Privacy
            <br />
            Policy
          </h1>

          <p className="mt-8 text-[15px] sm:text-[17px] leading-8 text-black/60 max-w-3xl">
            Your privacy is important to us. This Privacy Policy explains how
            we collect, use, and protect your information while using our
            website and services.
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
            Secure & Trusted
          </p>

          <h3 className="text-[30px] sm:text-[42px] leading-[1] tracking-[-0.05em] font-semibold text-white">
            Protecting Your
            <br />
            Information Always
          </h3>

          <p className="mt-6 text-[15px] sm:text-[16px] leading-8 text-white/60 max-w-2xl">
            We are committed to maintaining the confidentiality, security, and
            integrity of your personal information with transparency and care.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;