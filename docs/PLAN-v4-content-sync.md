# PLAN - v4 Content Sync & Alignment

## 🎯 Goal
Update `antigravity-lab` content (Home, Guide, Tutorial, README) to align 100% with the `agent-skills-setup-for-antigravity` v4.0.0 specifications, architectural philosophy (Scale-Adaptive), and technical stats (26 Master Skills, 600+ Capabilities).

---

## 🏗️ Phase -1: Context Check
- **Current Stats**: v3.5.30 (22 Skills, 11 Workflows)
- **Target Stats**: v4.0.0 (26 Skills, 17 Workflows, 15 Specialists)
- **Key Concepts to Add**: 
  - Scale-Adaptive Architecture (Solo-Ninja, Agile-Squad, Software-Factory).
  - Scientific Linkage (DNA - Rules - Skills).
  - PDCA Cycle (Plan-Do-Check-Act).

---

## 🛠️ Phase 0: Socratic Gate (Verified)
- **Intent**: Synchronize lab content with core project docs.
- **Domain**: Documentation, Marketing, Developer Experience.
- **Complexity**: Medium (Multiple UI pages and README files).

---

## 📋 Phase 1: Task Breakdown

### 1. Root Metadata & README
- [ ] Update `README.md` (English) to v4.0.0 standards.
- [ ] Update `README.vi.md` (Vietnamese) as the primary guide.
- [ ] Sync version numbers in any config or metadata files.

### 2. Home Page (`src/app/page.tsx`)
- [ ] Update Hero section to feature "Hệ điều hành Trí tuệ" tagline.
- [ ] Update statistics section (26 Skills, 17 Workflows, etc.).
- [ ] Add/Update "Scale-Adaptive" explanation section.
- [ ] Ensure "Vỏ Việt - Lõi Anh" philosophy is mentioned.

### 3. Guide Page (`src/app/guide/page.tsx`)
- [ ] Refactor content to explain the **Scientific Linkage** (DNA -> Rules -> Skills).
- [ ] Update the Specialist Agents list (ensure all 15 are represented or categorized).
- [ ] Explain the **PDCA Cycle** as the core operating protocol.

### 4. Tutorial Page (`src/app/tutorial/page.tsx`)
- [ ] Update Phase 1 (Environment) to include Node.js + Git + VS Code (as found in recent updates).
- [ ] Update Phase 2 (Initialization) to match the v4.0.0 Setup Wizard (with Scale Selection details).
- [ ] Update the commands to `npx antigravity-ideTen_du_an`.

### 5. Internal `.agent` Cleanup
- [ ] Review `START_HERE.new.md` vs `START_HERE.md` and merge.
- [ ] Review `GEMINI.new.md` vs `GEMINI.md` and merge.
- [ ] Ensure `ARCHITECTURE.md` reflects the v4.0.0 flow.

---

## 🤖 Phase 2: Agent Assignments
- **Planner**: Coordinate the sync and verify accuracy.
- **FE Specialist**: Update the TSX pages with the target aesthetics and content.
- **Documentation Writer**: Rewrite READMEs and MD files.

---

## ✅ Phase 3: Verification Checklist
- [ ] All mentions of "22 Skills" changed to "26 Master Skills".
- [ ] "Enterprise" mode updated to "Software-Factory" where appropriate, or clarified in Scale-Adaptive context.
- [ ] All links in READMEs point to the correct v4.0.0 resources.
- [ ] Web UI matches the target vision shown in `agent-skills-setup-for-antigravity`.

---

[OK] Plan created: docs/PLAN-v4-content-sync.md
Next steps: Run `/create` to start implementation.
