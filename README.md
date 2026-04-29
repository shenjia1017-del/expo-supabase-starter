# Expo Supabase Starter

Minimal but production-ready Expo + Supabase starter template with a built-in design system, 3D button component, and authentication flow.

## What's Included

- Email/password login (app/screens/LoginScreen.js)
- Email/password register (app/screens/RegisterScreen.js)
- Basic authenticated home screen (app/screens/HomeScreen.js)
- Supabase client setup (lib/supabase.ts)
- Design system constants (lib/theme.js) — colors, spacing, radius, font sizes
- Reusable 3D button component (components/PrimaryButton.js) — Duolingo-style with haptic feedback

---

## Quick Start

1. Install dependencies: npm install
2. Create .env with EXPO_PUBLIC_SUPABASE_URL and EXPO_PUBLIC_SUPABASE_ANON_KEY
3. Replace brand colors in lib/theme.js (see Design System Setup below)
4. Start the app: npx expo start

---

## Design System Setup

This template ships with a centralized design system in lib/theme.js. Before writing any UI, replace the brand colors.

### 1. Replace brand colors

Open lib/theme.js and replace all #REPLACE_ME values in the Primary and Secondary color groups with your app's brand colors. Semantic colors (Info / Success / Danger / Warning) and neutrals (Backgrounds / Text / Borders) are pre-configured and should usually stay as-is.

You need to replace 8 values total: primary, primaryDark, primaryLight, primaryBg, secondary, secondaryDark, secondaryLight, secondaryBg.

### 2. Spacing rule (4-multiple system)

Always use values from Spacing: xs(4) / sm(8) / md(12) / lg(16) / xl(24) / xxl(32). Never use arbitrary numbers like padding: 13 or margin: 18. This keeps the entire app on a consistent rhythm.

### 3. Radius rule (3-tier hierarchy)

Use only these tiers from Radius:
- large(16) — main cards, hero elements
- medium(12) — secondary cards, inputs, sub-elements
- small(6) — tags, chips, small badges
- button(14) — all primary buttons (special case)
- pill(999) — fully rounded elements (avatars, pills)

### 4. Button rule (3D shadow style)

All primary actions use the PrimaryButton component from components/PrimaryButton.js. It implements:
- 3D hard shadow (5px offset, no blur)
- Press-down animation (translateY 5px on press, 80ms)
- Haptic feedback on iOS (Light impact)
- 4 variants: primary | secondary | success | danger
- All-caps text with letter-spacing 0.8px

Example usage:

import PrimaryButton from '../../components/PrimaryButton';

<PrimaryButton title="Get Started" onPress={() => router.push('/home')} />
<PrimaryButton title="Cancel" variant="danger" onPress={handleCancel} />

---

## Cursor Project Health Check

Whenever returning to this project after a break, run this prompt in Cursor to verify the design system is intact:

Project health check. Show me exactly:
1. Where is the colors/theme file? Show the path and first 10 lines.
2. Is there a standalone Button component? Show the path and first 10 lines.
3. List all files in app/screens/
4. What is the global background color used across screens? Show one example screen's container style.

If any of these come back wrong, the design system has drifted and needs realignment.

---

## Standard Git Workflow

Always use this 5-command pattern for new features:

1. Create a feature branch:    git checkout -b feature-xxx
2. Stage and commit your work: git add -A && git commit -m "Description"
3. Push the branch to GitHub:  git push -u origin feature-xxx
4. Merge back into main:       git checkout main && git merge feature-xxx
5. Tag the milestone:          git tag -a vX.Y -m "Milestone" && git push origin vX.Y

Important: Always commit through the terminal, not through Cursor's "Keep" button. Accepting changes in Cursor without committing means the work is NOT backed up to GitHub.

---

## Project Structure

expo-supabase-starter/
├── app/
│   ├── _layout.tsx              (Navigation root)
│   └── screens/
│       ├── HomeScreen.js
│       ├── LoginScreen.js
│       └── RegisterScreen.js
├── lib/
│   ├── supabase.ts              (Supabase client)
│   └── theme.js                 (Design system constants)
├── components/
│   └── PrimaryButton.js         (3D button component)
├── .env                         (Local environment variables, not committed)
├── app.json
├── package.json
└── README.md

---

## Day 1 Setup Checklist (for new apps based on this template)

When starting a new project from this template, complete these BEFORE writing business code:

1. Replace #REPLACE_ME colors in lib/theme.js with brand colors
2. Wrap SafeAreaProvider in app/_layout.tsx (planned for next template version)
3. Use useSafeAreaInsets() in every screen — never hardcode paddingTop: 56/64/70
4. Wrap input screens in KeyboardAvoidingView
5. After first commit, tag baseline: git tag -a v0.1-day1 -m "Day 1 baseline"

Following this 30-minute setup prevents 1-2 days of migration work later.
