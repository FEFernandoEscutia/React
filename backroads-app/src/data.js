import Tour1 from "./images/tour-1.jpeg";
import Tour2 from "./images/tour-2.jpeg";
import Tour3 from "./images/tour-3.jpeg";
import Tour4 from "./images/tour-4.jpeg";


export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];

export const socialLinks = [
  {
    id: 1,
    href: "https://www.facebook.com/?locale=es_LA",
    icon: "fab fa-facebook",
  },
  { id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  {
    id: 3,
    href: "https://es.squarespace.com/paginas-web-comenzar/?channel=pbr&subchannel=go&campaign=pbr-go-row_other-multi-core_squarespacealone-e&subcampaign=(squarespacealone-es_squarespace_e)&gad_source=1&gclid=Cj0KCQjw2PSvBhDjARIsAKc2cgON9Je88e20IhP3xTrKV2kE35s3c2IHO0_qUSV2xB77JCkLDkxo9D4aAqgeEALw_wcB&gclsrc=aw.ds",
    icon: "fab fa-squarespace",
  },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, quibusdam.",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, quibusdam.",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, quibusdam.",
  },
];

export const tours1 = [
  {
    id: 1,
    img: Tour1,
    date: "august 26th, 2020",
    name: "Tibet Adventure",
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
  vitae tempore voluptatum maxime reprehenderit.`,
    country: "China",
    days: "6 days",
    price: "$2100",
  },
  {
    id: 2,
    img: Tour2,
    date: "october 1th, 2020",
    name: "best of java",
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
  vitae tempore voluptatum maxime reprehenderit.`,
    country: "Indonesia",
    days: "11 days",
    price: "$1400",
  },
  {
    id: 3,
    img: Tour3,
    date: "december 12th, 2020",
    name: "explore hong kong",
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
  vitae tempore voluptatum maxime reprehenderit.`,
    country: "hong kong",
    days: "8 days",
    price: "$5000",
  },
  {
    id: 4,
    img: Tour4,
    date: "december 5th, 2019",
    name: "kenya highlights",
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
  vitae tempore voluptatum maxime reprehenderit.`,
    country: "kenya",
    days: "20 days",
    price: "from $3300",
  },
  ];
