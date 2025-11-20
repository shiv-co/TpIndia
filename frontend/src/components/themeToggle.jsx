import React from "react";

export default toggleTheme = () => {
  const html = document.documentElement;
  html.classList.toggle("dark");

  // Optional: save theme preference
  if (html.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
};
