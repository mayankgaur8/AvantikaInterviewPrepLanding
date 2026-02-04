import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleAuth } from "google-auth-library";

dotenv.config({ path: process.env.ENV_FILE || ".env.server" });

const app = express();
const port = process.env.PORT || 3000;
const projectId = process.env.DIALOGFLOW_PROJECT_ID;
const languageCode = process.env.DIALOGFLOW_LANGUAGE_CODE || "en";

if (!projectId) {
  console.warn("DIALOGFLOW_PROJECT_ID is not set. /api/dialogflow/message will fail until it is configured.");
}

const allowedOrigins = process.env.ALLOWED_ORIGINS
  ? process.env.ALLOWED_ORIGINS.split(",").map((origin) => origin.trim())
  : ["*"];

app.use(
  cors({
    origin: allowedOrigins,
  })
);
app.use(express.json({ limit: "1mb" }));

app.get("/api/health", (_req, res) => {
  res.json({ ok: true, timestamp: new Date().toISOString() });
});

app.post("/api/dialogflow/message", async (req, res) => {
  try {
    const { message, sessionId } = req.body || {};

    if (!projectId) {
      res.status(500).json({ error: "DIALOGFLOW_PROJECT_ID is not configured." });
      return;
    }

    if (!message || typeof message !== "string") {
      res.status(400).json({ error: "message is required" });
      return;
    }

    const safeSessionId = (sessionId || "web-session").replace(/[^a-zA-Z0-9-_]/g, "");

    const auth = new GoogleAuth({
      scopes: ["https://www.googleapis.com/auth/cloud-platform"],
    });
    const client = await auth.getClient();

    const url = `https://dialogflow.googleapis.com/v2/projects/${projectId}/agent/sessions/${safeSessionId}:detectIntent`;
    const payload = {
      queryInput: {
        text: { text: message, languageCode },
      },
    };

    const response = await client.request({
      url,
      method: "POST",
      data: payload,
    });

    const result = response?.data?.queryResult;
    const reply = result?.fulfillmentText || "";

    res.json({
      reply,
      intent: result?.intent?.displayName || null,
      confidence: result?.intentDetectionConfidence || null,
      raw: result || null,
    });
  } catch (error) {
    console.error("Dialogflow error:", error?.response?.data || error?.message || error);
    res.status(500).json({ error: "Dialogflow request failed." });
  }
});

app.listen(port, () => {
  console.log(`Dialogflow proxy listening on http://localhost:${port}`);
});
