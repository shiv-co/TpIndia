import alpha3 from "../assets/rental_img/alpha_III.webp";
import fx30 from "../assets/rental_img/alpha_fx3.webp";
import canonR5 from "../assets/rental_img/canon.webp";
import camcorder from "../assets/rental_img/camcorder.webp";
import sony_a7 from "../assets/rental_img/alpha_a7.webp";
import podcast_setup from "../assets/rental_img/podcast_setup.webp";
import podcast_studio from "../assets/rental_img/podcast_studio.webp";
import light1 from "../assets/rental_img/light1.webp";
import light2 from "../assets/rental_img/light2.webp";
import light3 from "../assets/rental_img/light3.webp";
import light4 from "../assets/rental_img/light4.webp";
import light5 from "../assets/rental_img/light5.webp";
import light6 from "../assets/rental_img/light6.webp";


import light7 from "../assets/rental_img/light7.webp";

export const rentalCategories = [
  { 
    id: "cameras",
    title: "Cameras",
    subtitle: "Mirrorless • DSLR • Film",
    image: alpha3,
    items: [
      { id: "fx30", name: "Sony FX30", image: fx30, },
      { id: "a7iii", name: "Sony A7 III", image: sony_a7, },
      { id: "r5", name: "Canon R5", image: canonR5, },
      { id: "camcorder", name: "camcorder", image: camcorder, },
    ],
  },
  {
    id: "lights",
    title: "Film Lights",
    subtitle: "LED • Studio • Outdoor",
    image: light7,
    items: [
      { id: "led-panel", name: "LED Panel Light", image: light1 },
      { id: "softbox", name: "Softbox Light", image: light2 },
      { id: "tube", name: "RGB Tube Light", image: light3 },
      {id: "Tungsten Lights", name: "Tungsten Lights", image: light4 },
      {id: "HMI Lights", name: "HMI Lights", image: light5 },
      {id: "soft lights", name: "Soft Lights", image: light6 },
      {id: "spot-light", name: "Spot Lights", image: light7 },
    ],
  },
  {
    id: "podcast",
    title: "Podcast",
    subtitle: "Mic • Camera • Studio",
    image: podcast_studio,
    items: [
      { id: "podcast-kit", name: "Podcast Setup Kit", image: podcast_setup, },
      { id: "podcast-studio", name: "Podcast Studio (Per Day)", image: podcast_studio, },
    ],
  },
];
