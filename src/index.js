import * as ReactDOMClient from "react-dom/client";
import './styles/style.css';
import App from "./App";

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

root.render(
    <App />
);
