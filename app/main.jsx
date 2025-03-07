import React from "react";
import { createRoot } from "react-dom/client";
import { Layout } from "./layout";
import "./styles.css";

const app = document.getElementById("app");

createRoot(app).render(<Layout />);
// createRoot(app).render(<Layout></Layout>);
