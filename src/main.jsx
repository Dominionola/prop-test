import { createRoot } from "react-dom/client";
import App from "./App.jsx";

const root = createRoot(document.getElementById("root"));

root.render(
  <>
  <h1>Working</h1>
    <App
      punchline="I can't wait to see her face light up when she opens it."
      upvotes={10}
      isPun={true}
    />
    
  </>
);
