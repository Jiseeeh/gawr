import Swiper, { Navigation, Autoplay, Pagination } from "swiper";
import Aos from "aos";
import "swiper/css";
import "swiper/css/pagination";
import "./vanilla-tilt";

import "./reset.css";
import "./style.css";

const swiper = new Swiper(".swiper", {
  modules: [Navigation, Autoplay, Pagination],
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
  },
  autoplay: {
    delay: 2000,
  },
});

Aos.init();
