const NODE_ENV = import.meta.env?.VITE_NODE_ENV;

const backendUrl =
  NODE_ENV === "production" ? "" : "http://localhost:5066"?.replace(/\/$/, "");

export const CONFIG = {
  backendUrl,
  apiUrl: `${backendUrl}/api`,
};
