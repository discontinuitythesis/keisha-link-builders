const EMAIL = "connect.keisha@gmail.com";
const enc = encodeURIComponent;

export const SITE = {
  name: "KeiSha Link Builders",
  email: EMAIL,
  whatsapp:
    "https://wa.me/639985524212?text=" +
    enc("Hi KeiSha, I found your website and would like to talk about link building."),
  whatsappDisplay: "+63 998 552 4212",
  linkedin: "https://www.linkedin.com/company/144148202/",
  founders: {
    shalom: { name: "Shalom Agtagma", site: "https://shalomagtagma.com/", linkedin: "https://www.linkedin.com/in/shalomagtagma/" },
    kei: { name: "Krizza \u201cKei\u201d Cruz", short: "Kei Cruz", linkedin: "https://www.linkedin.com/in/krizzacruz/" },
  },
  founderSite: "https://shalomagtagma.com/",
  mailtoPricing:
    `mailto:${EMAIL}?subject=` +
    enc("Pricing enquiry: KeiSha Link Builders") +
    "&body=" +
    enc("Hi KeiSha,\n\nCompany / agency:\nNiche(s):\nTarget DR and traffic range:\nLanguage(s):\nMonthly volume:\n\nThanks!"),
};
