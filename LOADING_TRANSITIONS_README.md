# Loading Screen & Page Transition System

## Overview
An elegant, minimal loading screen and page transition system inspired by Apple, Linear, and Vercel websites. The design is calm, professional, and perfectly suited for a Data Scientist's portfolio.

## Visual Style
- **Aesthetic**: Minimal, modern, calm, premium
- **Colors**: Soft off-white background (#FAF9F6), black & charcoal typography
- **Typography**: Editorial / Swiss typography feel with tracking and light weights
- **Animations**: Subtle, slow, smooth (nothing flashy)
- **Easing**: Custom cubic-bezier(0.43, 0.13, 0.23, 0.96) for all transitions

## Components

### 1. LoadingScreen (`/src/app/components/LoadingScreen.tsx`)
**Purpose**: Initial page load experience

**Features**:
- Full-screen loader with soft beige background (#FAF9F6)
- Centered initials "VM." with full name "Vaibhav Manaji"
- Circular progress indicator with percentage
- Subtle grain texture overlay (very subtle, 3% opacity)
- Loading text: "Loading journey"
- Duration: 1.8 seconds with smooth fade out
- Prevents scrolling during load

**Animation Flow**:
1. Fade in initials (0.8s, delay 0.2s)
2. Fade in name subtitle (0.6s, delay 0.6s)
3. Reveal circular progress (0.6s, delay 0.8s)
4. Progress animates from 0-100%
5. Fade out entire screen (0.6s)

### 2. PageTransition (`/src/app/components/PageTransition.tsx`)
**Purpose**: Smooth content transitions between routes

**Features**:
- Fade + slide animation for page content
- Content fades out with upward slide
- New content fades in with downward slide
- Duration: 0.6s with elegant easing
- Uses AnimatePresence with "wait" mode

**Variants**:
- `initial`: opacity 0, y: 20
- `animate`: opacity 1, y: 0
- `exit`: opacity 0, y: -20

### 3. RouteTransitionOverlay (`/src/app/components/RouteTransitionOverlay.tsx`)
**Purpose**: Contextual transition overlay when navigating between pages

**Features**:
- Appears between route changes
- Soft beige overlay with backdrop blur
- Contextual text based on destination:
  - "Opening project" - navigating to project detail
  - "Returning home" - navigating to home
  - "Loading" - default
- Animated horizontal line that sweeps across
- Grain texture overlay
- Duration: 0.8s total

**Visual Elements**:
- Fullscreen overlay: #FAF9F6 at 80% opacity with backdrop blur
- Centered text with animated progress line
- Line animation: slides from left (-100%) to right (200%)

### 4. ProjectCardTransition (`/src/app/components/ProjectCardTransition.tsx`)
**Purpose**: Special transition when clicking on a project card

**Features**:
- Full-screen takeover with project title
- Zoom-in effect (scale 0.9 → 1)
- Shows project title prominently
- Animated loading line
- Text: "Opening project"
- Duration: 0.6s before navigation

**Implementation**:
- Triggered on project card click
- Delays navigation by 400ms for animation
- Provides visual continuity

### 5. ScrollToTop (`/src/app/components/ScrollToTop.tsx`)
**Purpose**: Ensures page starts at top on route change

**Features**:
- Instant scroll to top (no smooth behavior)
- Runs on every pathname change
- Essential for clean page transitions

### 6. PageLoadIndicator (`/src/app/components/PageLoadIndicator.tsx`)
**Purpose**: Minimal top loading bar during transitions

**Features**:
- Thin 2px bar at top of screen
- Gradient from black to transparent
- Simulates progress (0-90% quickly, then completes at 100%)
- Inspired by Vercel and Linear
- Very subtle and unobtrusive

### 7. WipeTransition (`/src/app/components/WipeTransition.tsx`)
**Purpose**: Alternative vertical wipe effect (optional, not currently active)

**Features**:
- Split-screen vertical wipe
- Top half slides down, bottom half slides up
- Center line accent
- Duration: 0.9s

## Grain Texture
Added to `/src/styles/theme.css`:

```css
.grain-texture {
  background-image: url("data:image/svg+xml,...");
  animation: grain 8s steps(10) infinite;
}
```

**Properties**:
- SVG fractal noise pattern
- Animated with subtle random movement
- Used at very low opacity (2-3%)
- Adds premium, tactile quality

## Animation Guidelines

### Timing
- Loading screen: 1.8 seconds
- Page transitions: 0.6 seconds
- Overlay transitions: 0.8 seconds
- Project card transitions: 0.6 seconds

### Easing
All animations use: `cubic-bezier(0.43, 0.13, 0.23, 0.96)`
- Natural, calm, professional
- No harsh movements
- Inspired by Apple's Motion guidelines

### Delays
- Staggered by 0.1-0.2s for layered elements
- Creates depth and sophistication
- Never feels rushed

## Implementation in App.tsx

```tsx
<AnimatePresence mode="wait">
  {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
</AnimatePresence>

{showContent && (
  <Router>
    <ScrollToTop />
    <PageLoadIndicator />
    <RouteTransitionOverlay />
    <PageTransition>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/:projectId" element={<ProjectDetail />} />
      </Routes>
    </PageTransition>
  </Router>
)}
```

## Typography
- **Initials**: 6xl-7xl, font-light, tight tracking
- **Name**: sm-base, tracking-[0.3em], uppercase, neutral-500
- **Loading text**: xs, tracking-[0.2em], uppercase, neutral-400, font-light
- **Swiss/Editorial feel**: Plenty of letter-spacing and white space

## Color Palette
- Background: `#FAF9F6` (warm beige, off-white)
- Primary text: `#000000` (black)
- Secondary text: `rgba(0, 0, 0, 0.4)` (charcoal)
- Accent: `rgba(0, 0, 0, 0.08)` (very light gray)

## Accessibility
- Body scroll disabled during loading
- Instant scroll (no smooth scroll) for better control
- High contrast text
- No motion that could trigger vestibular issues
- All animations can be disabled via prefers-reduced-motion

## Performance
- Minimal DOM elements
- CSS animations where possible
- SVG-based grain texture (data URI, no HTTP request)
- Motion React for optimized animations
- No layout shifts during transitions

## Future Enhancements
- Add `prefers-reduced-motion` support
- Option to switch between transition styles
- Customize loading duration based on actual page load
- Add sound effects (optional, muted by default)
- Skeleton screens for slower connections

## Inspiration References
- **Apple**: Clean, minimal, intentional animations
- **Linear**: Smooth page transitions, contextual loading states
- **Vercel**: Top loading bar, instant feedback
- **Swiss Design**: Typography, white space, grid systems

## Notes
- All components are TypeScript-first
- Motion React (formerly Framer Motion) for animations
- React Router for navigation
- Tailwind CSS v4 for styling
- No external animation libraries needed
