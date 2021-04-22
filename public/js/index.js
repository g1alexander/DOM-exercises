import menuBurger from "./menu_burger.js";
import relojAlarma from "./reloj_alarma.js";
import { ball, events } from "./event_keydowm.js";
import countdown from "./countdown.js";
import scrollArrow from "./scroll.js";
import darkMode from "./dark_mode.js";
import responsive from "./responsive.js";
import responsiveTester from "./responsive_tester.js";
import userAgent from "./user_agent.js";
import statusRed from "./status_red.js";
import cam from "./video_cam.js";
import location from "./location.js";

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

  darkMode("#dark-mode i", "#dark");

  responsive(
    "responsive",
    "responsive2",
    "btn-rdj",
    "video",
    "childBtn",
    "childMap"
  );

  responsiveTester("#form-tester", "url", "width", "height", "#closed");

  userAgent("user-agent");

  statusRed("status");

  cam("cam");

  location("location");
});

document.addEventListener("scroll", () => {
  scrollArrow("scroll");
});
