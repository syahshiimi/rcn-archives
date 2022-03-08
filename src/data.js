export const pageLinks = [
  {
    pageID: 1,
    url: "/",
    text: "Home",
  },
  {
    pageID: 2,
    url: "/about",
    text: "About",
  },
  {
    pageID: 3,
    text: "Browse Archives",
    url: "/",
    subMenu: [
      {
        pageID: 3,
        url: "/browsearchives",
        text: "Search Map",
      },
      {
        pageID: 3,
        url: "/browsemap",
        text: "Search Archive",
      },
    ],
  },
  {
    pageID: 4,
    url: "/glossary",
    text: "Glossary",
  },
  {
    pageID: 5,
    url: "/eventlist",
    text: "Workshops",
  },
  {
    pageID: 6,
    url: "/contribute",
    text: "Contact Us",
  },
];

export const countryData = [
  {
    markerOffset: -15,
    name: "Japan",
    coordinates: [138.2529, 36.2048],
    dx: 30, // for annotation line
    dy: 10, // for annotation line
    curve: 0, // for annotation line
    textY: 12,
  },
  {
    markerOffset: -50,
    name: "China",
    coordinates: [104.1954, 35.8617],
    dx: 80, // for annotation line
    dy: -50, // for annotation line
    textY: 12,
    curve: 0, // for annotation line
  },
  {
    markerOffset: -50,
    name: "Cambodia",
    coordinates: [104.991, 12.5657],
    dx: 80, // for annotation line
    dy: -10, // for annotation line
    textY: 19,
    curve: 0, // for annotation line
  },
  {
    markerOffset: -50,
    name: "Indonesia",
    coordinates: [113.9213, 0.7893],
    dx: -40, // for annotation line
    dy: 50, // for annotation line
    textY: -20,
    curve: 0, // for annotation line
  },
  {
    markerOffset: -50,
    name: "Vietnam",
    coordinates: [108.22722, 14.0583],
    dx: 80, // for annotation line
    dy: -25, // for annotation line
    textY: 17,
    curve: 0, // for annotation line
  },
  {
    markerOffset: -50,
    name: "Malaysia",
    coordinates: [101.9758, 4.2105],
    dx: -70, // for annotation line
    dy: 10, // for annotation line
    textY: -17,
    curve: 0, // for annotation line
  },
  {
    markerOffset: -50,
    name: "Singapore",
    coordinates: [103.8198, 1.3321],
    dx: -80, // for annotation line
    dy: 30, // for annotation line
    textY: -20,
    curve: 0, // for annotation line
  },
  {
    markerOffset: -50,
    name: "Philippines",
    coordinates: [121.774, 12.8797],
    dx: 40, // for annotation line
    dy: 20, // for annotation line
    textY: 22,
    curve: 0, // for annotation line
  },
  {
    markerOffset: -50,
    name: "Taiwan",
    coordinates: [120.9605, 23.6978],
    dx: 40, // for annotation line
    dy: -10, // for annotation line
    textY: 15,
    curve: 0, // for annotation line
  },
];
