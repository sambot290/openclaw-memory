#!/usr/bin/env node
/**
 * memory-maintenance.js
 * Weekly review: deduplicate, prune, archive stale items, emit digest.
 * Run manually or hook into a cron.
 */

import { readFileSync, writeFileSync, readdirSync } from "fs";
import { join } from "path";

const MEM_DIR = join(process.env.HOME || "", ".openclaw", "memory");
const HOT     = join(MEM_DIR, "hot.md");
const CTX     = join(MEM_DIR, "context.md");
const ARCH    = join(MEM_DIR, "archive.md");
const LOG     = join(MEM_DIR, "log.md");

function read(file) {
  try {
    return readFileSync(file, "utf8").trim();
  } catch {
    return "";
  }
}

function write(file, content) {
  writeFileSync(file, content.trim() + "\n", "utf8");
}

function parseEntries(body) {
  return body
    .split("\n")
    .filter(l => l.trim() && !l.startsWith("#"));
}

function countReps(logBody) {
  const repTracker = {};
  for (const line of logBody.split("\n").filter(l => l.trim())) {
    const parts = line.split("|");
    if (parts.length >= 6) {
      const key = parts[1].trim();
      repTracker[key] = (repTracker[key] || 0) + 1;
    }
  }
  return repTracker;
}

function generateDigest(hot, ctx, arch, repTracker) {
  const hotRules = parseEntries(hot);
  const ctxRules = parseEntries(ctx);
  const archRules = parseEntries(arch);
  const lines = [];

  lines.push("## Memory Maintenance Digest\n");

  if (hotRules.length) {
    lines.push(`**Hot rules:** ${hotRules.length} confirmed rule(s)`);
  }
  if (ctxRules.length) {
    lines.push(`**Context rules:** ${ctxRules.length} project/domain rule(s)`);
  }
  if (archRules.length) {
    lines.push(`**Archived:** ${archRules.length} stale rule(s)`);
  }

  const needsPromotion = Object.entries(repTracker)
    .filter(([, n]) => n >= 3)
    .map(([k]) => k);

  if (needsPromotion.length) {
    lines.push("\n⚠️ **3+ repetitions detected — consider promoting:**");
    needsPromotion.forEach(k => lines.push(`  - ${k}`));
  } else {
    lines.push("\n✅ No rules pending promotion.");
  }

  lines.push("\n*Run completed.*");
  return lines.join("\n");
}

export function runMaintenance() {
  const hotRaw = read(HOT);
  const ctxRaw = read(CTX);
  const archRaw = read(ARCH);
  const logRaw  = read(LOG);

  const hotLines  = parseEntries(hotRaw);
  const ctxLines  = parseEntries(ctxRaw);
  const archLines = parseEntries(archRaw);
  const repTracker = countReps(logRaw);

  // Deduplicate hot rules
  const seenHot  = new Set();
  const cleanHot = hotLines.filter(l => {
    const key = l.split("|")[1]?.trim();
    if (!key) return true;
    if (seenHot.has(key)) return false;
    seenHot.add(key); return true;
  });

  // Deduplicate context rules
  const seenCtx  = new Set();
  const cleanCtx = ctxLines.filter(l => {
    const key = l.split("|")[1]?.trim();
    if (!key) return true;
    if (seenCtx.has(key)) return false;
    seenCtx.add(key); return true;
  });

  write(HOT,  cleanHot.join("\n"));
  write(CTX,  cleanCtx.join("\n"));

  const digest = generateDigest(
    cleanHot.join("\n"),
    cleanCtx.join("\n"),
    archRaw,
    repTracker
  );

  console.log(digest);
  return digest;
}

// CLI
runMaintenance();
