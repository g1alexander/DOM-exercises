import menuBurger from "./menu_burger.js";
import relojAlarma from "./reloj_alarma.js";
import { ball, events } from "./event_keydowm.js";
import countdown from "./countdown.js";
import scrollArrow from "./scroll.js";

document.addEventListener("DOMContentLoaded", (e) => {
  menuBurger("#menu i", ".navbar a");
  relojAlarma(
    "#templete-reloj",
    "#start-reloj",
    "#stop-reloj",
    "#reloj",
    "#start-alarm",
    "#stop-alarm",
    "#alarm"
  );

  ball("#canvas");
  events();

  countdown("#countdown", "#img-countdown", new Date("Jan 01, 2022 00:00:00"));
});

document.addEventListener("scroll", () => {
  scrollArrow("scroll");
});
