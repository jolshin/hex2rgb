import { useState } from "react";
import reactLogo from "./assets/favicon.png";
import viteLogo from "/favicon.png";
import "./App.css";

function App() {
  const [form, setForm] = useState({
    hex: "#ffffff",
    rgb: "rgb(255, 255, 255)",
  });

  const handleHexChange = (e) => {
    const re = /(^#\S{6}$){1}/g;

    if (!re.test(e.target.value)) {
      if (e.target.value.length > 7) {
        setState(e.target.value, "Ошибка!");
      } else {
        setState(e.target.value, form.rgb);
      }
    } else {
      setState(e.target.value, hexToRgb(e.target.value));
    
  };
}

  const setState = (hex, rgb) => {
    setForm({
      ...form,
      hex: hex,
      rgb: rgb,
    });

    document.querySelector(".container").style.background = rgb === "Ошибка!" ? "red" : rgb;
  };

  const hexToRgb = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    if (isNaN(r) || isNaN(g) || isNaN(b)) {
      return "Ошибка!";
    }

    return `rgb(${r}, ${g}, ${b})`;
  }

  return (
    <div className="container">
      <form className="hex-to-rgb-form">
        <input className="form-hex-input" type="text" value={form.hex} onChange={handleHexChange} />
        <div className="form-rgb-output">{form.rgb}</div>
      </form>
    </div>
  );
}

export default App;
