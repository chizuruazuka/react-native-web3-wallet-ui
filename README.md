# Orbit Wallet UI — React Native Design Engineering Portfolio

A small, original React Native portfolio project created to demonstrate my approach to **design engineering for consumer Web3 products**.

This is not production code from a previous employer. My professional work has largely lived in private/proprietary environments, so this project gives reviewers a public, discussion-ready example of how I think about design systems, React Native implementation, wallet UX, async transaction states, theming, and design-to-development collaboration.

## What this project demonstrates

- React Native + TypeScript UI engineering
- Reusable component architecture
- Design-token driven theming
- Light / dark mode
- Wallet dashboard
- Asset list and portfolio state
- Send-transaction flow
- Review / confirmation states
- Clear Web3 risk messaging
- Async transaction feedback
- Cross-platform design thinking
- Consumer-fintech visual hierarchy

## Design-engineering decisions

### 1. UI states are part of the component design

Wallet products are full of asynchronous states: signing, submission, pending confirmation, failure, and finality. I model these as explicit user-facing states instead of treating them as backend details.

The send flow therefore includes:

1. Input
2. Review
3. Transaction submitted

A production implementation would add RPC/provider state, confirmation tracking, retry/recovery, and error-specific UX.

### 2. Design tokens before one-off styling

The project centralizes spacing, radius, typography, and semantic colors in `src/theme.ts`.

The goal is to make visual consistency a system property rather than something each screen has to remember manually.

### 3. Cross-platform components should stay flexible

The component APIs remain deliberately small. A component library should reduce repeated work without becoming so abstract that product engineers struggle to use it.

### 4. Financial actions require explicit trust cues

The transfer-review state calls out irreversible blockchain behavior. For a self-custodial wallet, polished UI is not only visual craft — it is also precise feedback, clear intent, and safe interaction design.

### 5. Dark and light mode are semantic

Themes use semantic roles (`background`, `surface`, `text`, `brand`, `positive`, `negative`) rather than screen-specific colors. This makes theming easier to scale across a larger component system.

## Project structure

```text
App.tsx
src/
  components/
    ActionButton.tsx
    AssetRow.tsx
    MetricCard.tsx
    SectionTitle.tsx
  data/
    assets.ts
  screens/
    HomeScreen.tsx
    SendScreen.tsx
  theme.ts
```

## Run locally

Requirements:

- Node.js
- npm
- Expo

Install dependencies:

```bash
npm install
```

Start the app:

```bash
npm start
```

You can then open it in Expo Go, Android, iOS, or web depending on your local setup.

## What I would add next

If this were being expanded into a production-quality wallet design system, my next steps would include:

- Proper navigation architecture
- Wallet / chain adapters
- Secure account state
- Reanimated micro-interactions
- Skeleton/loading components
- Error-state library
- Accessibility audit
- Component documentation / Storybook-style examples
- Network-specific transaction states
- Design-token pipeline from Figma
- Visual regression tests
- Analytics for flow completion and failure points

## About me

**John Emmanuel**  
Design Engineer / React Native / Web3  
Email: **jj9965521@gmail.com**

I’m happy to walk through the implementation, component decisions, interaction trade-offs, and how I would evolve this into a larger production design system during an interview.
