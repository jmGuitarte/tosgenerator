# Table of Specifications (TOS) Generator v2 — Feature List

**Sicayab National High School · Schools Division of Dipolog City**
Standalone HTML web app · No AI used in computation — fully programmatic

---

## ① School Information

- **Name of School** — free text (blank by default, no pre-fill)
- **School ID** — free text
- **School Level / Track** — dropdown covering:
  - Junior High School (Grades 7–10)
  - Strengthened SHS (SY 2026–2027 onward): Academic Track, Technical-Professional (TechPro) Track
  - Previous SHS curriculum (Grade 12 transition): STEM, ABM, HUMSS, GAS, TVL, Sports, Arts & Design
- **Grade Level & Section** — free text
- **Subject** — free text
- **Name of Teacher** — auto-inserted into the "Prepared by" signatory cell on export
- **Examination Term & Assessment** — each term has 3 selectable chips:
  - 1st Term → ST1 · ST2 · Term 1 Examination
  - 2nd Term → ST3 · ST4 · Term 2 Examination
  - 3rd Term → ST5 · ST6 · Term 3 Examination
  - Selection is written into the exported file's term-checkbox cell and the export filename

---

## ② Add Competencies

- **Upload Excel source file** — parses a 5-column format (Learning Competency, Objective 1–3, Combined Objectives)
- **Manual entry mode** — add rows directly and type everything in
- **Download blank source template** — pre-formatted `.xlsx` for filling out offline
- **Combine two saved drafts → Term Examination** (collapsible tool):
  - Upload two saved Summative Test `.json` drafts (e.g. ST1 + ST2)
  - Competencies with matching names are merged — **days are summed**, objectives combined (deduped, capped at 3)
  - Domains recomputed using the **union of both files' verb dictionaries**
  - Result auto-loads into the table, set to that term's **Term Examination**
  - Warns if the two source drafts are from different terms

---

## ③ Competency Table

- Editable rows: competency label, 3 objectives, No. of Days
- **Real-time domain classification** as you type — no separate "classify" step
- **Multi-domain support**: if a verb appears in more than one domain (e.g. added to both Understanding and Analysis), the objective shows multiple weighted chips (e.g. `U ×2` `An ×1`) and items are distributed proportionally across all matched domains
- Manually add or remove a domain chip per objective
- "⚠ no match" indicator for unclassified objectives
- **+ Add row** / **Clear all** buttons
- Live **Total No. of Days** counter
- Validation banner flags missing domains or missing day counts

---

## ④ Verb-to-Domain Dictionary

- Collapsible, editable list of trigger verbs per Bloom's domain (Remembering, Understanding, Application, Analysis, Evaluating, Creating)
- Add or remove verbs per domain
- Reset to defaults

---

## ⑤ Generate TOS

- Target total item count input
- Optional export template override (defaults to the embedded official SNHS TOS template)
- **Largest-remainder apportionment** — item counts always sum exactly to the target, distributed proportionally by No. of Days, then by domain weight within each competency

---

## ⑥ TOS Preview & Export

- Full on-screen preview: competencies, objectives, days, item counts, %, per-domain breakdown, item placement numbering
- **Export to the real DepEd SNHS Excel template** — populates school info, term/assessment, teacher name, and all TOS data while preserving the original letterhead and signatory footer (Prepared by / Checked by / Reviewed by / Approved)

---

## ⑦ AI Prompt Generator

Builds a ready-to-paste prompt (for ChatGPT, Copilot, DeepSeek, Gemini) derived entirely from the generated TOS data — no AI involved in building the prompt itself.

- **Three variants**: Full (detailed), Compact (condensed), Tagalog (Filipino-language)
- Automatically adapts wording to the selected **School Level / Track**
- **PISA-like question** and **open-ended question** are mandatory and **counted within the total item count** (not additive) — e.g. a 60-item test = 58 MCQs + 1 PISA-like + 1 open-ended
- Adjustable **open-ended item point value**
- Open-ended item requires a **simple 3-criteria rubric**
- One-click **Copy to clipboard**

---

## Save & Load

- **Auto-save** — silently saves to browser local storage every 5 seconds and on tab close; status shown in the header ("Autosaved 3:42 PM")
- **Restore banner** — on reopening, offers to restore or discard the last auto-saved draft
- **Manual Save Draft** — downloads a `.json` file with the complete state (school info, competencies, verb dictionary, term/assessment, target items, open-ended points)
- **Manual Load Draft** — re-imports a `.json` draft file, restoring the exact state (used for both single drafts and as input to the Combine Drafts tool)

---

## Footer

- Developer credit: Jose Manuel R. Guitarte, ICT Coordinator / Teacher IV, Sicayab National High School
