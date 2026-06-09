# PLAN: Ultra Premium Interactive Docs Experience

> **Mã kế hoạch**: PLAN-expand-website-content
> **Ngày tạo**: 2026-02-08
> **Phiên bản**: v2.0 (OPTION C+ - Ultra Premium)
> **Design Standard**: UI/UX Pro Max + Magic UI + Framer Motion

---

## 🎯 Tầm Nhìn

Tạo trải nghiệm **"Documentation as a Product"** - nơi mà đọc tài liệu cũng WOW như dùng sản phẩm:

- ✨ **Micro-interactions** trên mọi element
- 🎬 **Cinematic animations** khi scroll
- 🔍 **AI-powered search** với fuzzy matching
- 🎨 **Bento Grid layouts** cho content
- 🌊 **Smooth page transitions** giữa các trang

---

## 📊 Full Feature List

### 🏠 Phase 1: Core Premium Pages

| # | Trang | Route | Premium Features |
|:-:|:---|:---|:---|
| 1 | **FAQ Interactive** | `/guide/faq` | Accordion với spring animations, search filter, category tabs |
| 2 | **Troubleshooting Hub** | `/guide/troubleshooting` | Error cards với severity badges, copy-to-clipboard, expandable solutions |
| 3 | **Case Studies Gallery** | `/guide/case-studies` | Horizontal scroll timeline, prompt cards với glow effects |
| 4 | **Changelog Timeline** | `/guide/changelog` | Vertical timeline với version badges, type filters, animated entries |

### 🧩 Phase 2: Dynamic Wiki System

| # | Trang | Route | Premium Features |
|:-:|:---|:---|:---|
| 5 | **Skills Showcase** | `/guide/skills` | Bento grid, category filters, search, animated cards |
| 6 | **Skill Detail** | `/guide/skills/[id]` | Hero section, usage examples, related skills marquee |
| 7 | **Agents Gallery** | `/guide/agents` | Avatar grid với hover 3D effects, role badges |
| 8 | **Agent Detail** | `/guide/agents/[id]` | Profile card, skills matrix, workflow connections |
| 9 | **Workflows Catalog** | `/guide/workflows` | Command cards, category tabs, usage count |
| 10 | **Workflow Detail** | `/guide/workflows/[id]` | Phase timeline, agent involvement diagram, examples |

### 🧠 Phase 3: Advanced Interactive Features

| # | Trang | Route | Premium Features |
|:-:|:---|:---|:---|
| 11 | **How AI Thinks** | `/guide/how-it-thinks` | Animated flowchart, step-by-step reveal |
| 12 | **Architecture Deep Dive** | `/guide/architecture` | Interactive system diagram, clickable components |
| 13 | **Command Search** | `/guide/search` | Fuzzy search across all content, keyboard navigation |
| 14 | **Quick Start Wizard** | `/guide/quickstart` | Step-by-step animated wizard |

---

## 🎨 Design Specifications

### Color Palette (Google Theme - Already in globals.css)
```css
--google-blue: #4285F4
--google-red: #EA4335
--google-yellow: #FBBC04
--google-green: #34A853
```

### Typography Scale
```
H1: 4rem (64px) - Extra Bold
H2: 2.5rem (40px) - Bold
H3: 1.5rem (24px) - Semibold
Body: 1rem (16px) - Regular
Code: 0.875rem (14px) - Mono
```

### Animation Tokens
```javascript
// Framer Motion Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
}

const scaleOnHover = { scale: 1.02, transition: { type: "spring", stiffness: 300 } }
```

### Component Library (To Create)

| Component | Description | Usage |
|:---|:---|:---|
| `<GlassCard>` | Card với backdrop blur | Container chính |
| `<AnimatedAccordion>` | Accordion với spring animation | FAQ items |
| `<BentoGrid>` | Asymmetric responsive grid | Skills, Features |
| `<TimelineVertical>` | Timeline dọc với animated markers | Changelog |
| `<CommandCard>` | Card cho slash commands | Workflows |
| `<SearchBar>` | Fuzzy search với keyboard nav | Global search |
| `<CategoryTabs>` | Animated tab switcher | Filters |
| `<CopyButton>` | Copy to clipboard với feedback | Code blocks |
| `<SeverityBadge>` | Colored badge cho severity | Troubleshooting |
| `<AgentAvatar>` | Avatar với role indicator | Agents |
| `<SkillCard>` | Card với category color | Skills |
| `<PhaseStep>` | Step indicator cho workflow | Workflow detail |

---

## 🛠️ Chi Tiết Triển Khai

### Phase 1: Foundation & Components (Day 1)

#### Task 1.1: Create Premium UI Components
**Location**: `src/components/ui/premium/`
```
├── AnimatedAccordion.tsx   # Spring-based accordion
├── BentoGrid.tsx           # Magic UI style grid
├── CommandCard.tsx         # Workflow command cards
├── CopyButton.tsx          # Copy with animation
├── GlassCard.tsx           # Premium glass morphism
├── SearchBar.tsx           # Fuzzy search component
├── SeverityBadge.tsx       # Error severity indicator
├── CategoryTabs.tsx        # Animated category filter
├── TimelineItem.tsx        # Timeline entry component
└── index.ts                # Export barrel
```

#### Task 1.2: Create Data Files
**Location**: `src/data/`
```
├── faq-content.ts          # FAQ data from docs
├── troubleshooting.ts      # Error solutions data
├── case-studies.ts         # 5 case study scenarios
├── changelog.ts            # Version history
└── skills-details.ts       # Extended skill info
```

### Phase 2: Core Pages (Day 2-3)

#### Task 2.1: FAQ Page
**File**: `src/app/guide/faq/page.tsx`
```typescript
Features:
- Animated accordion với spring physics
- Category tabs (General, Technical, Operations)
- Real-time search filter
- Expandable answers với markdown support
- Mobile-optimized layout
```

#### Task 2.2: Troubleshooting Page
**File**: `src/app/guide/troubleshooting/page.tsx`
```typescript
Features:
- Error cards với severity badges (Low/Medium/High/Critical)
- Expandable solution sections
- Copy-to-clipboard commands
- Search by error message
- Related errors suggestions
```

#### Task 2.3: Case Studies Page
**File**: `src/app/guide/case-studies/page.tsx`
```typescript
Features:
- 5 case study cards (E-commerce, Game, Fintech, Blog, Data)
- Difficulty indicators với visual bars
- Click to expand phases
- Prompt examples với copy button
- Technology tags
```

#### Task 2.4: Changelog Page
**File**: `src/app/guide/changelog/page.tsx`
```typescript
Features:
- Vertical timeline với animated entries
- Version badges với release type colors
- Filter by type (Added, Changed, Fixed)
- Expandable details
- Link to full releases
```

### Phase 3: Wiki Detail Pages (Day 4-5)

#### Task 3.1: Upgrade Skills Page
**File**: `src/app/guide/skills/page.tsx`
```typescript
Features:
- Bento grid layout
- Category filter tabs
- Search bar
- Card hover effects với glow
- Quick view modal
```

#### Task 3.2: Skill Detail Page
**File**: `src/app/guide/skills/[id]/page.tsx`
```typescript
Features:
- Hero section với skill icon
- Description với markdown
- Usage examples code blocks
- Related skills carousel
- Back button với animation
```

#### Task 3.3: Upgrade Agents Page
**File**: `src/app/guide/agents/page.tsx`
```typescript
Features:
- Avatar grid với hover 3D tilt
- Role category filter
- PDCA phase indicators
- Quick stats on hover
```

#### Task 3.4: Agent Detail Page
**File**: `src/app/guide/agents/[id]/page.tsx`
```typescript
Features:
- Profile hero section
- Skills matrix grid
- Workflow involvement list
- Strengths/Responsibilities sections
```

#### Task 3.5: Upgrade Workflows Page (existing)
```typescript
Features:
- Command card grid
- Category filter
- Animated hover states
- Phase preview on hover
```

#### Task 3.6: Workflow Detail Page
**File**: `src/app/guide/workflows/[id]/page.tsx`
```typescript
Features:
- Phase timeline visualization
- Agent involvement diagram
- Example prompts
- Related workflows
```

### Phase 4: Advanced Features (Day 6-7)

#### Task 4.1: AI Thinking Page
**File**: `src/app/guide/how-it-thinks/page.tsx`
```typescript
Features:
- Animated Mermaid diagram
- Step-by-step reveal on scroll
- Interactive hotspots
- Visual memory explanation
```

#### Task 4.2: Architecture Page
**File**: `src/app/guide/architecture/page.tsx`
```typescript
Features:
- Interactive tree diagram
- Clickable components linking to details
- Stats overview
- PDCA cycle animation
```

#### Task 4.3: Global Search Feature
**File**: `src/app/guide/search/page.tsx`
```typescript
Features:
- Fuzzy search across all content
- Keyboard navigation (↑↓ Enter)
- Category grouping in results
- Recent searches
- Cmd+K shortcut
```

---

## 📋 Pre-flight Checklist

- [ ] Install Framer Motion: `npm install framer-motion`
- [ ] Check existing globals.css (already has glass effects ✅)
- [ ] Verify responsive breakpoints in Tailwind config
- [ ] Test dark mode compatibility
- [ ] Ensure i18n structure ready for translations

---

## 📐 Estimates

| Phase | Tasks | Thời gian | Priority |
|:---|:---|:---|:---|
| Phase 1 | UI Components | 3-4 giờ | 🔴 Critical |
| Phase 2 | Core Pages (4) | 6-8 giờ | 🔴 Critical |
| Phase 3 | Wiki Pages (6) | 6-8 giờ | 🟡 High |
| Phase 4 | Advanced (3) | 4-6 giờ | 🟢 Medium |
| **Tổng** | **16 tasks** | **19-26 giờ** | |

---

## ✨ Premium Animation Checklist

Mỗi element PHẢI có:
- [ ] **Entrance animation** khi appear (fade + slide)
- [ ] **Hover state** với scale/glow
- [ ] **Active/Press state** với spring feedback
- [ ] **Exit animation** khi leave (fade out)
- [ ] **Stagger** cho list items
- [ ] **Scroll-triggered** reveals

---

## 🎬 Visual Preview (Mockup Descriptions)

### FAQ Page
```
┌─────────────────────────────────────────────┐
│ 🔍 [Search FAQ...]                          │
├─────────────────────────────────────────────┤
│ [General] [Technical] [Operations] [All]    │
├─────────────────────────────────────────────┤
│ ▼ AntiGravity IDE là gì?                    │
│   └─ Card glass với answer...               │
│ ▶ Tôi có thể dùng với dự án cũ không?       │
│ ▶ Nó có miễn phí không?                     │
│ ▶ Tại sao cần Python?                       │
└─────────────────────────────────────────────┘
```

### Case Studies Page
```
┌─────────────────────────────────────────────┐
│ 🛒 E-commerce    🎮 Game    🏦 Fintech      │
│    ████░░░          ██████░░    ██████████  │
│    Medium           Medium      Expert      │
├─────────────────────────────────────────────┤
│ Timeline: Phase 1 → Phase 2 → Phase 3 → ... │
│           [Expand to see prompts]           │
└─────────────────────────────────────────────┘
```

### Skill Detail Page
```
┌─────────────────────────────────────────────┐
│ [← Back to Skills]                          │
│                                             │
│ 🚀 nextjs-react-expert                      │
│ React & Next.js performance optimization    │
│                                             │
│ ┌───────────┐ ┌───────────┐ ┌───────────┐   │
│ │ 57 Rules  │ │ Frontend  │ │ Vercel    │   │
│ └───────────┘ └───────────┘ └───────────┘   │
│                                             │
│ ## Usage Examples                           │
│ ```                                         │
│ "Optimize my React component..."            │
│ ```                                [Copy]   │
│                                             │
│ ## Related Skills                           │
│ ← tailwind-patterns | frontend-design →     │
└─────────────────────────────────────────────┘
```

---

## 🚀 Next Steps

1. **Approve Plan này**
2. **Tôi sẽ bắt đầu từ Phase 1**: Tạo UI Components nền tảng
3. **Sau đó lần lượt**: Core Pages → Wiki Pages → Advanced Features

---

**Bạn approve để tôi bắt đầu implement ngay không?** 🎯

*Plan được tạo bởi Antigravity Project Planner + UI/UX Pro Max*
