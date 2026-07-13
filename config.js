/* ═══════════════════════════════════════════════════════════════════
   ADMIN CONFIGURATION — Sicayab NHS Teacher Tools
   =======================================================================
   Edit THIS FILE ONLY to configure the whole suite (Teacher Tools landing
   page, TOS Generator, ILAW Lesson Plan Generator) — it's loaded by all
   three pages, so one edit here applies everywhere. Nobody using the apps
   ever sees or edits these values; the only thing each teacher fills in
   themselves, inside each app's own Settings/AI Setup panel, is their own
   personal Gemini API key (DepEd accounts can't generate one, so everyone
   uses a personal Gmail account for just that one piece).
   ═══════════════════════════════════════════════════════════════════ */

// Your Firebase project's web config. This is NOT a secret — Firebase's own
// documentation confirms this object is safe to expose publicly; real access
// control comes from Firestore Security Rules and Authentication, not from
// hiding these values. Get this from Firebase Console → Project Settings →
// General → "Your apps" → SDK setup and configuration.
const ADMIN_FIREBASE_CONFIG = {
  apiKey: "AIzaSyBxZRg7NBXfeAyv6-lvqK5n25YYCcn93ys",
  authDomain: "snhs-tos-generator.firebaseapp.com",
  projectId: "snhs-tos-generator",
  storageBucket: "snhs-tos-generator.firebasestorage.app",
  messagingSenderId: "118810613515",
  appId: "1:118810613515:web:6569fda91264fde00ff40e"
};

// Your deployed Cloudflare Worker that proxies requests to the Gemini API,
// used by the ILAW Lesson Plan Generator. (The TOS Generator manages its own
// Worker URL separately, through its in-app Admin panel under "AI Assistance
// Setup" — that one is editable live, by whoever has the admin role, without
// needing to touch this file or redeploy.)
const ADMIN_GEMINI_WORKER_URL = "https://tos-gemini-proxy.snhs-ict.workers.dev";

// Fallback list of Gemini models (comma-separated, in priority order). Both
// apps rotate through this list automatically — on a 30-minute timer, and
// immediately if a request actually hits a rate-limit/quota (429) error —
// so a temporary quota limit on one model doesn't block generation entirely.
// If AI generation ever fails for everyone at once, check
// https://ai.google.dev/gemini-api/docs/deprecations — Google periodically
// retires model names, which would need an update here.
const ADMIN_GEMINI_MODEL_LIST = "gemini-2.5-flash,gemini-2.5-flash-lite,gemini-2.0-flash";

// Optional — restrict Google sign-in to one email domain across all three
// apps, e.g. "deped.gov.ph". Leave blank to allow any Google account.
// Currently blank/unrestricted, matching the Firestore emailDomainOK() rule
// (isSignedIn() with no domain check) — any signed-in account is accepted
// both by the app and by the database.
const ADMIN_ALLOWED_EMAIL_DOMAIN = "";
