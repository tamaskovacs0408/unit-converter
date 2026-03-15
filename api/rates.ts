/* eslint-disable no-undef */
import type { VercelRequest, VercelResponse } from "@vercel/node";

const BASE_CURRENCY = process.env.BASE_CURRENCY ?? "EUR";
const API_KEY = process.env.EXCHANGE_API_KEY;
const API_BASE = process.env.EXCHANGE_API_BASE_URL;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  if (!API_KEY || !API_BASE) {
    return res.status(500).json({ error: "API configuration missing" });
  }

  const apiUrl = `${API_BASE}/${API_KEY}/latest/${BASE_CURRENCY}`;

  const response = await fetch(apiUrl);

  if (!response.ok) {
    return res.status(502).json({ error: "Upstream API error" });
  }

  const data = await response.json();

  res.setHeader("Cache-Control", "s-maxage=86400, stale-while-revalidate");
  return res.status(200).json(data);
}
