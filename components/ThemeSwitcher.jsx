// components/ThemeSwitcher.js

import { useState, useEffect } from "react";

export default function ThemeSwitcher() {
  // Inicializando o tema
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Carrega o tema atual do localStorage ou padrão para 'light'
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const handleThemeChange = (e) => {
    const selectedTheme = e.target.value;
    setTheme(selectedTheme);
    // Aplica o tema ao elemento HTML
    document.documentElement.setAttribute("data-theme", selectedTheme);
    // Salva o tema no localStorage
    localStorage.setItem("theme", selectedTheme);
  };

  return (
    <div className="flex justify-center items-center">
      <label
        htmlFor="theme"
        className="block text-sm font-medium text-gray-700 mr-2"
      >
        Selecione o Tema:
      </label>
      <select
        id="theme"
        value={theme}
        onChange={handleThemeChange}
        className="select select-bordered"
      >
        <option value="light">Claro</option>
        <option value="dark">Escuro</option>
        <option value="cupcake">Cupcake</option>
        <option value="synthwave">Synthwave</option>
        <option value="retro">Retro</option>
        <option value="valentine">Valentine</option>
        <option value="halloween">Halloween</option>
      </select>
    </div>
  );
}
