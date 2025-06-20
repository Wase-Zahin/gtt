const APPS_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbwTcxokop5Aw5RWvarUcdrOXb3X_murslnrR8b4egdI9OdWl8DpQaUaspM6IexrS4tY1w/exec";

exports.handler = async (event) => {
    if (event.httpMethod === "OPTIONS") {
        return {
            statusCode: 204,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type",
            },
            body: "",
        };
    }

    if (event.httpMethod !== "POST") {
        return {
            statusCode: 405,
            headers: { Allow: "OPTIONS, POST" },
            body: "Method Not Allowed",
        };
    }

    try {
        const response = await fetch(APPS_SCRIPT_URL, {
            method: "POST",
            body: event.body,
        });

        const contentType = response.headers.get("content-type") || "text/plain";
        const text = await response.text();

        return {
            statusCode: response.status,
            headers: {
                "Content-Type": contentType,
                "Access-Control-Allow-Origin": "*",
            },
            body: text,
        };
    } catch (err) {
        return {
            statusCode: 502,
            headers: { "Access-Control-Allow-Origin": "*" },
            body: `Proxy error: ${err.message}`,
        };
    }
};