# Visual Guide - Loading & Transition System

## Component Visual Breakdown

### 1. Loading Screen
```
┌────────────────────────────────────────────────┐
│                                                │
│                                                │
│                                                │
│                    VM.                         │
│              VAIBHAV MANAJI                    │
│                                                │
│                    ⊕                           │
│                   50%                          │
│                                                │
│              LOADING JOURNEY                   │
│                                                │
│                                                │
│                                                │
└────────────────────────────────────────────────┘

Background: #FAF9F6 (warm beige)
Grain: Subtle animated texture at 3% opacity
Text: Black with various weights and tracking
Duration: ~2 seconds
```

### 2. Route Transition Overlay
```
┌────────────────────────────────────────────────┐
│                                                │
│            [Blurred background]                │
│                                                │
│              OPENING PROJECT                   │
│              ────────────                      │
│                                                │
│                                                │
└────────────────────────────────────────────────┘

Background: #FAF9F6 at 80% with backdrop blur
Line: Animated horizontal progress
Duration: 0.8s
Context-aware text
```

### 3. Project Card Transition
```
┌────────────────────────────────────────────────┐
│                                                │
│                                                │
│         Predictive Healthcare AI               │
│                                                │
│              ────────────                      │
│                                                │
│              OPENING PROJECT                   │
│                                                │
│                                                │
└────────────────────────────────────────────────┘

Background: #FAF9F6 solid
Project title: Large, centered
Zoom-in effect (0.9 → 1.0 scale)
Duration: 0.6s before navigation
```

### 4. Page Load Indicator
```
┌────────────────────────────────────────────────┐
 ████████████████████░░░░░░░░░░░░░░░░░░░░░░░░  
│                                                │
│              [Page Content]                    │
│                                                │

Position: Fixed top, 2px height
Color: Black gradient (60% → 40% → transparent)
Duration: 0.5-0.7s
Inspired by: Vercel, Linear
```

### 5. Basic Page Transition
```
OLD PAGE                    NEW PAGE
   ↓                           ↑
Fade out                  Fade in
Slide up 20px            Slide down from 20px

Duration: 0.6s each
Gap: Wait mode (no overlap)
```

### 6. Wipe Transition (Alternative)
```
BEFORE               DURING               AFTER
                    ┌──────┐
[Content]           │  ⎯⎯  │          [Content]
                    └──────┘
                    
Top slides down ↓
Bottom slides up ↑
Center line appears
Duration: 0.9s
```

---

## Color Palette

```css
/* Primary */
Background:     #FAF9F6   /* Warm beige, off-white */
Text Primary:   #000000   /* Pure black */
Text Secondary: rgba(0,0,0,0.5)  /* 50% black */
Text Tertiary:  rgba(0,0,0,0.4)  /* 40% black */

/* Accents */
Border Light:   rgba(0,0,0,0.08) /* 8% black */
Border Medium:  rgba(0,0,0,0.2)  /* 20% black */
Grain Texture:  rgba(0,0,0,0.03) /* 3% opacity */

/* Overlays */
Backdrop:       rgba(250,249,246,0.8) /* 80% beige */
```

---

## Typography Scale

```
Initials:        6xl (60px) → 7xl (72px)  | font-light
Name:            sm (14px) → base (16px)  | tracking-[0.3em] uppercase
Loading Text:    xs (12px)                | tracking-[0.2em] uppercase
Project Title:   3xl (30px) → 5xl (48px)  | font-light
Body:            sm (14px) → base (16px)  | normal
```

---

## Animation Timing

```
Component                Duration    Delay    Easing
─────────────────────────────────────────────────────────
Loading Screen           2.1s        0        custom
  - Initials             0.8s        0.2s     custom
  - Name                 0.6s        0.6s     custom
  - Progress             0.6s        0.8s     custom
  - Text                 0.6s        1.0s     custom
  - Exit                 0.6s        2.1s     custom

Page Transition          0.6s        0        custom
Route Overlay            0.8s        0        custom
Project Card             0.9s        0        custom
Page Load Bar            0.7s        0        linear

Custom Easing: cubic-bezier(0.43, 0.13, 0.23, 0.96)
```

---

## Responsive Behavior

### Mobile (< 768px)
- Text size: Use smaller scale (6xl instead of 7xl)
- Progress circle: Same size (maintains aspect)
- Grain texture: Reduced complexity
- Transitions: Same timing (no difference)
- Touch feedback: Instant (no hover states)

### Tablet (768px - 1024px)
- Text size: Medium scale
- Full animations enabled
- Hover states active

### Desktop (> 1024px)
- Text size: Full scale
- All effects at maximum quality
- Grain texture at full resolution

---

## Layout Structure

### Z-Index Stack
```
Layer 100: Loading Screen (blocks everything)
Layer 99:  Page Load Indicator (top bar)
Layer 98:  Project Card Transition
Layer 96:  Route Transition Overlay
Layer 95:  Wipe Transition
Layer 50:  Fixed Navigation
Layer 10:  Modals/Dialogs
Layer 1:   Content
Layer 0:   Background
```

---

## Grain Texture Pattern

```
SVG Noise Filter
├─ Type: Fractal Noise
├─ Base Frequency: 0.9
├─ Octaves: 4
├─ Stitch: Enabled
└─ Animation: 8s loop with 10 steps

Visual Effect:
- Adds subtle film-like quality
- Very low opacity (2-3%)
- Barely noticeable, adds premium feel
- Animated with random translate movements
```

---

## State Flow

```
App Load
   ↓
[Loading Screen Appears]
   ↓
Progress: 0% → 100%
   ↓
[Loading Screen Fades Out]
   ↓
[HomePage Fades In]
   ↓
User clicks project
   ↓
[ProjectCardTransition Appears]
   ↓
[Route changes]
   ↓
[RouteTransitionOverlay Shows]
   ↓
[PageLoadIndicator at top]
   ↓
[ProjectDetail Fades In]
   ↓
Done
```

---

## Motion Principles

### 1. Intentional
Every animation has a purpose:
- Loading: Shows progress
- Transitions: Provides context
- Overlays: Maintains continuity

### 2. Calm
No jarring movements:
- Slow, deliberate timing (0.6-0.9s)
- Smooth easing curves
- Gentle opacity changes

### 3. Premium
High-quality details:
- Custom easing function
- Subtle grain texture
- Tight letter-spacing
- Swiss typography

### 4. Cohesive
Consistent across all:
- Same easing everywhere
- Same color palette
- Same timing patterns
- Same visual language

---

## Accessibility Features

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  - All animations: 0.01ms
  - Grain texture: Disabled
  - Scroll: Auto (no smooth)
}
```

### Screen Readers
- Loading screen: Announces "Loading"
- Transitions: Silent (visual only)
- Progress: Updates announced
- Navigation: Full keyboard support

### Contrast
- WCAG AAA compliant
- Black on beige: 14.09:1
- All text easily readable

---

## Performance Metrics

### Target Performance
```
Loading Screen:     60 FPS
Page Transitions:   60 FPS
Route Overlays:     60 FPS
Grain Animation:    30 FPS (acceptable)

Total JS Bundle:    ~50KB for animation components
CSS Impact:         ~2KB
SVG Grain:          Inline data URI (~1KB)
```

### Optimization Techniques
1. Transform-only animations (GPU accelerated)
2. Opacity fades (composite layer)
3. Will-change on active elements
4. Remove grain on low-end devices
5. Lazy load transition components

---

## Component Files

```
/src/app/components/
├── LoadingScreen.tsx           # Initial page load
├── PageTransition.tsx          # Basic route wrapper
├── RouteTransitionOverlay.tsx  # Contextual overlay
├── ProjectCardTransition.tsx   # Project click effect
├── ScrollToTop.tsx             # Scroll management
├── PageLoadIndicator.tsx       # Top loading bar
└── WipeTransition.tsx          # Alternative effect

/src/app/hooks/
└── usePageTransition.ts        # Programmatic navigation

/src/styles/
└── theme.css                   # Grain texture, animations
```

---

## Quick Reference

### When to Use Each Component

**LoadingScreen**
- First time user visits site
- After page refresh
- Cold start only

**PageTransition**
- Every route change
- Wraps all pages
- Provides fade effect

**RouteTransitionOverlay**
- Between page navigations
- Shows contextual text
- Adds polish

**ProjectCardTransition**
- Click on project card
- Shows project title
- Zoom-in effect

**PageLoadIndicator**
- Top bar during navigation
- Instant feedback
- Minimal and subtle

**ScrollToTop**
- Every route change
- Ensures clean start
- Silent utility

---

## Customization Options

Want to change the feel? Modify these:

### Slower, More Dramatic
```typescript
duration: 1.2  // Instead of 0.6
delay: 0.4     // Instead of 0.2
```

### Faster, More Snappy
```typescript
duration: 0.3  // Instead of 0.6
ease: [0.25, 0.1, 0.25, 1]  // Ease-in-out
```

### Different Background
```css
--loading-bg: #FFFFFF;  /* Pure white */
--loading-bg: #F8F8F8;  /* Cool gray */
--loading-bg: #FFF8F0;  /* Warmer beige */
```

### Disable Grain
```css
.grain-texture {
  opacity: 0;  /* Turn off completely */
}
```
