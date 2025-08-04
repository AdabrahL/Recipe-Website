import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

export default function Settings() {
  const [settings, setSettings] = useState({
    "--background-color": "#fff",
    "--background-light": "#fff",
    "--primary-color": "rgb(255, 0, 86)",
    "--shadow-color": "rgba(0,0,0,0.2)",
    "--text-color": "#0A0A0A",
    "--text-light": "#575757",
    "--font-size": "16px",
    "--animation-speed": 1,
  });

  useEffect(() => {
    const root = document.documentElement;
    for (let key in settings) {
      root.style.setProperty(key, settings[key]);
    }
  }, [settings]);

  const [theme, setTheme] = useState("light");
  const themes = [
    {
      "--background-color": "#fff",
      "--background-light": "#fff",
      "--shadow-color": "rgba(0,0,0,0.2)",
      "--text-color": "#0A0A0A",
      "--text-light": "#575757",
    },
    {
      "--background-color": "rgb(29, 29, 29)",
      "--background-light": "rgb(77, 77, 77)",
      "--shadow-color": "rgba(0,0,0,0.2)",
      "--text-color": "#ffffff",
      "--text-light": "#eceaea",
    },
  ];

  const primaryColors = [
    "rgb(255, 0, 86)",
    "rgb(33, 150, 243)",
    "rgb(255, 193, 7)",
    "rgb(0, 200, 83)",
    "rgb(156, 39, 176)",
  ];

  const fontSizes = [
    { title: "Small", value: "12px" },
    { title: "Medium", value: "16px" },
    { title: "Large", value: "20px" },
  ];

  
  const [primaryColor, setPrimaryColor] = useState(0);
  const [fontSize, setFontSize] = useState(1);
  
  function changeTheme(i) {
    const selectedTheme = { ...themes[i] };
    setTheme(i === 0 ? "light" : "dark");
    setSettings((prev) => ({ ...prev, ...selectedTheme }));
  }

  function changeColor(i) {
    const color = primaryColors[i];
    setPrimaryColor(i);
    setSettings((prev) => ({ ...prev, "--primary-color": color }));
  }

  function changeFontSize(i) {
    const size = fontSizes[i];
    setFontSize(i);
    setSettings((prev) => ({ ...prev, "--font-size": size.value }));
  }

 
  return (
    <div className="app-layout">
      <aside className="sidebar">
        <div className="settings-container">
          <section className="section">
            <h2>Primary Theme</h2>
            <div className="options-container">
              <div
                className={`option light ${theme === "light" ? "selected" : ""}`}
                onClick={() => changeTheme(0)}
                title="Light Theme"
              >
                {theme === "light" && (
                  <div className="check">
                    <FontAwesomeIcon icon={faCheck} />
                  </div>
                )}
              </div>

              <div
                className={`option dark ${theme === "dark" ? "selected" : ""}`}
                onClick={() => changeTheme(1)}
                title="Dark Theme"
              >
                {theme === "dark" && (
                  <div className="check">
                    <FontAwesomeIcon icon={faCheck} />
                  </div>
                )}
              </div>
            </div>
          </section>

          <section className="section">
            <h2>Preferred Color</h2>
            <div className="options-container">
              {primaryColors.map((color, i) => (
                <div
                  key={i}
                  className={`option color-circle ${primaryColor === i ? "selected" : ""}`}
                  style={{ backgroundColor: color }}
                  onClick={() => changeColor(i)}
                  title={`Select color ${color}`}
                >
                  {primaryColor === i && (
                    <div className="check small">
                      <FontAwesomeIcon icon={faCheck} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          <section className="section">
            <h2>Font Size</h2>
            <div className="options-container buttons">
              {fontSizes.map((size, i) => (
                <button
                  key={i}
                  className={`btn ${fontSize === i ? "selected" : ""}`}
                  onClick={() => changeFontSize(i)}
                  aria-pressed={fontSize === i}
                >
                  {size.title}
                  {fontSize === i && <FontAwesomeIcon icon={faCheck} className="icon-check" />}
                </button>
              ))}
            </div>
          </section>

         
        </div>
      </aside>

      <main className="content-area">
        {/* Future main content goes here */}
      </main>
    </div>
  );
}
