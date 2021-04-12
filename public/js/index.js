import menuBurger from "./menu_burger.js";
import relojAlarma from "./reloj_alarma.js";
import { ball, events } from "./event_keydowm.js";

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
});
