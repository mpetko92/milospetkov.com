/**
 * Generates public/cv.pdf from data/content.ts (same source as the website).
 * Run: npm run generate-cv
 */
import PDFDocument from "pdfkit";
import { createWriteStream, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import {
  site,
  contact,
  hero,
  about,
  skillGroups,
  experience,
  projects,
  achievements,
} from "../data/content";

const OUT = join(process.cwd(), "public", "cv.pdf");
const MARGIN = 48;
const PAGE_WIDTH = 612;
const PAGE_HEIGHT = 792;
const CONTENT_WIDTH = PAGE_WIDTH - MARGIN * 2;

/** Strip web-only markers and normalize chars for standard PDF fonts. */
function clean(text: string): string {
  return text
    .replace(/\*\*/g, "")
    .replace(/×/g, "x")
    .replace(/—/g, "-")
    .replace(/–/g, "-")
    .replace(/…/g, "...")
    .replace(/→/g, "->")
    .replace(/š/g, "s")
    .replace(/Š/g, "S")
    .replace(/ó/g, "o")
    .replace(/Ó/g, "O")
    .replace(/ă/g, "a")
    .replace(/ț/g, "t")
    .replace(/·/g, " - ");
}

function ensureSpace(doc: PDFKit.PDFDocument, needed: number) {
  if (doc.y + needed > PAGE_HEIGHT - MARGIN) {
    doc.addPage();
  }
}

function sectionTitle(doc: PDFKit.PDFDocument, title: string) {
  ensureSpace(doc, 36);
  doc.moveDown(0.6);
  const y = doc.y;
  doc
    .font("Helvetica-Bold")
    .fontSize(11)
    .fillColor("#111111")
    .text(title.toUpperCase(), MARGIN, y, { width: CONTENT_WIDTH });
  doc
    .moveTo(MARGIN, doc.y + 3)
    .lineTo(PAGE_WIDTH - MARGIN, doc.y + 3)
    .strokeColor("#cccccc")
    .lineWidth(0.5)
    .stroke();
  doc.moveDown(0.5);
}

function bullet(doc: PDFKit.PDFDocument, text: string) {
  ensureSpace(doc, 14);
  doc
    .font("Helvetica")
    .fontSize(9.5)
    .fillColor("#333333")
    .text(`•  ${clean(text)}`, MARGIN + 4, doc.y, {
      width: CONTENT_WIDTH - 4,
      lineGap: 1.5,
    });
}

mkdirSync(dirname(OUT), { recursive: true });

const doc = new PDFDocument({
  size: "LETTER",
  margins: { top: MARGIN, bottom: MARGIN, left: MARGIN, right: MARGIN },
  info: {
    Title: `${site.name} - CV`,
    Author: site.name,
    Subject: site.role,
  },
});

const stream = createWriteStream(OUT);
doc.pipe(stream);

// ── Header ──────────────────────────────────────────────────────────────
doc.font("Helvetica-Bold").fontSize(22).fillColor("#111111").text(clean(site.name));
doc
  .font("Helvetica")
  .fontSize(12)
  .fillColor("#333333")
  .text(clean(site.role));
doc.moveDown(0.25);
doc
  .font("Helvetica")
  .fontSize(9)
  .fillColor("#555555")
  .text(
    [
      contact.email,
      clean(contact.location),
      "linkedin.com/in/petko92",
      "github.com/mpetko92",
    ].join("   |   "),
    { width: CONTENT_WIDTH }
  );

// ── Summary ─────────────────────────────────────────────────────────────
sectionTitle(doc, "Professional Summary");
doc
  .font("Helvetica")
  .fontSize(10)
  .fillColor("#333333")
  .text(clean(hero.subline), { width: CONTENT_WIDTH, lineGap: 2 });
doc.moveDown(0.35);
for (const paragraph of about.paragraphs) {
  doc.text(clean(paragraph), { width: CONTENT_WIDTH, lineGap: 2 });
  doc.moveDown(0.25);
}

// ── Skills ──────────────────────────────────────────────────────────────
sectionTitle(doc, "Skills");
for (const group of skillGroups) {
  ensureSpace(doc, 18);
  doc
    .font("Helvetica-Bold")
    .fontSize(9.5)
    .fillColor("#111111")
    .text(`${group.title}: `, { continued: true });
  doc
    .font("Helvetica")
    .fontSize(9.5)
    .fillColor("#333333")
    .text(group.skills.join(", "));
  doc.moveDown(0.2);
}

// ── Experience ──────────────────────────────────────────────────────────
sectionTitle(doc, "Experience");
for (const job of experience) {
  ensureSpace(doc, 50);
  doc
    .font("Helvetica-Bold")
    .fontSize(10.5)
    .fillColor("#111111")
    .text(clean(`${job.role}  |  ${job.company}`));
  const meta = [job.period, job.location].filter(Boolean).join("  -  ");
  doc
    .font("Helvetica-Oblique")
    .fontSize(9)
    .fillColor("#666666")
    .text(clean(meta));
  doc.moveDown(0.2);
  for (const point of job.points) {
    bullet(doc, point);
  }
  doc.moveDown(0.4);
}

// ── Selected projects ───────────────────────────────────────────────────
sectionTitle(doc, "Selected Projects");
for (const project of projects) {
  ensureSpace(doc, 36);
  doc
    .font("Helvetica-Bold")
    .fontSize(10)
    .fillColor("#111111")
    .text(clean(project.title));
  doc
    .font("Helvetica-Oblique")
    .fontSize(9)
    .fillColor("#666666")
    .text(clean(`${project.context}  -  ${project.period}`));
  doc.moveDown(0.15);
  doc
    .font("Helvetica")
    .fontSize(9.5)
    .fillColor("#333333")
    .text(clean(project.summary), { width: CONTENT_WIDTH, lineGap: 1.5 });
  if (project.metrics?.length) {
    doc.moveDown(0.15);
    const metricsLine = project.metrics
      .map((m) => `${m.label}: ${m.value}`)
      .join("   |   ");
    doc.font("Helvetica-Bold").fontSize(9).fillColor("#444444").text(clean(metricsLine));
  }
  doc.moveDown(0.35);
}

// ── Education & achievements ────────────────────────────────────────────
sectionTitle(doc, "Education & Achievements");
for (const item of achievements.filter((a) => a.stat !== "Fun fact")) {
  ensureSpace(doc, 22);
  doc
    .font("Helvetica-Bold")
    .fontSize(9.5)
    .fillColor("#111111")
    .text(clean(item.title));
  doc
    .font("Helvetica")
    .fontSize(9.5)
    .fillColor("#333333")
    .text(clean(item.detail), { width: CONTENT_WIDTH, lineGap: 1.5 });
  doc.moveDown(0.3);
}

doc.end();

stream.on("finish", () => {
  console.log(`Wrote ${OUT}`);
});

stream.on("error", (err) => {
  console.error(err);
  process.exit(1);
});
