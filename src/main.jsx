import { createRoot } from "react-dom/client";
import App from "./App.jsx";

const root = createRoot(document.getElementById("root"));

root.render(
  <>
    <App
      // setup="I got my daughter a fridge for her birthday."
      punchline="I can't wait to see her face light up when she opens it."
    />
    <App
      setup="How did the hacker escape the police?"
      punchline="He just ransomware!"
    />
    <App
      setup="Why don't pirates travel on mountain roads?"
      punchline="Scurvy."
    />

    <App
      setup="Why do bees stay in the hive in the winter?"
      punchline="Swarm."
    />

    <App
      setup="What's the best thing about Switzerland?"
      punchline="I don't know, but the flag is a big plus!"
    />
  </>
);
