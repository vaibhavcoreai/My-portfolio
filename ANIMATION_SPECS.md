# Animation Specifications

## Design System - Loading & Transitions

### Core Principles
1. **Intentional**: Every animation serves a purpose
2. **Calm**: No jarring or flashy movements
3. **Premium**: Inspired by Apple, Linear, Vercel
4. **Cohesive**: All animations share timing and easing

---

## Loading Screen Animation Sequence

### Timeline (Total: ~2.1 seconds)

**0.0s - 0.2s**: Screen appears
- Initial state: `opacity: 1` (no fade in needed, replaces entire viewport)
- Background: `#FAF9F6`
- Grain texture starts subtle animation

**0.2s - 1.0s**: Initials "VM." fade in
- Initial: `opacity: 0, y: 20px`
- Animate: `opacity: 1, y: 0`
- Duration: 0.8s
- Easing: cubic-bezier(0.43, 0.13, 0.23, 0.96)
- Font: 6xl-7xl, light weight, tight tracking

**0.6s - 1.2s**: Name "Vaibhav Manaji" fades in
- Initial: `opacity: 0`
- Animate: `opacity: 1`
- Duration: 0.6s
- Delay: 0.6s from start
- Font: sm-base, tracking-[0.3em], uppercase, neutral-500

**0.8s - 1.4s**: Progress indicator appears
- Initial: `opacity: 0`
- Animate: `opacity: 1`
- Duration: 0.6s
- Delay: 0.8s from start

**0.8s - 2.1s**: Progress animates 0% → 100%
- Circle circumference: 314.159 units (radius 50)
- strokeDashoffset decreases from 314.159 to 0
- Linear progression over 1.8s
- 60 steps for smooth animation
- Percentage text updates in real-time

**1.0s - 1.6s**: "Loading journey" text fades in
- Initial: `opacity: 0`
- Animate: `opacity: 1`
- Duration: 0.6s
- Delay: 1.0s from start

**2.1s - 2.7s**: Screen fades out
- Animate: `opacity: 0`
- Duration: 0.6s
- Easing: cubic-bezier(0.43, 0.13, 0.23, 0.96)
- Body scroll re-enabled

---

## Page Transition Animations

### Basic Page Transition (0.6s)

**Exit Animation**:
```
opacity: 1 → 0
y: 0 → -20px
duration: 0.6s
easing: cubic-bezier(0.43, 0.13, 0.23, 0.96)
```

**Entry Animation**:
```
opacity: 0 → 1
y: 20px → 0
duration: 0.6s
easing: cubic-bezier(0.43, 0.13, 0.23, 0.96)
```

### Route Transition Overlay (0.8s)

**Sequence**:
1. **Background overlay appears** (0.3s)
   - `opacity: 0 → 1`
   - Background: `#FAF9F6` at 80% with backdrop-blur

2. **Content fades in** (0.4s)
   - Text: `opacity: 0, y: 10 → opacity: 1, y: 0`
   - Delay: 0.0s

3. **Line animates** (0.5s)
   - `x: -100% → 200%`
   - Width: 50% of container
   - Color: `rgba(0, 0, 0, 0.4)`

4. **Everything fades out** (0.3s)
   - `opacity: 1 → 0`
   - Total visible time: ~0.8s

### Project Card Transition (0.9s)

**Click → Navigate**:
1. **Overlay appears** (0.4s)
   - `opacity: 0 → 1`
   - Background: `#FAF9F6`

2. **Title zooms in** (0.6s)
   - `opacity: 0, scale: 0.9 → opacity: 1, scale: 1`
   - Delay: 0.0s

3. **Line animates** (0.9s)
   - `x: -100% → 200%`

4. **Text fades in** (0.4s)
   - Delay: 0.3s

5. **Navigation occurs** at 0.4s
   - User sees animation continue during route change

### Page Load Indicator (0.7s)

**Top Bar**:
```
Timeline:
0.0s: Bar appears (opacity: 1)
0.0s-0.5s: Progress 0% → 90% (random increments)
0.5s: Progress jumps to 100%
0.5s-0.7s: Bar fades out (opacity: 0)
```

**Visual**:
- Height: 2px
- Position: Fixed top
- Background: Gradient `from-black/60 via-black/40 to-transparent`
- z-index: 99

---

## Wipe Transition (Alternative, 0.9s)

**Split Wipe Effect**:

**Top Half**:
```
initial: y: -100%
animate: y: 0
exit: y: 100%
duration: 0.6s
```

**Bottom Half**:
```
initial: y: 100%
animate: y: 0
exit: y: -100%
duration: 0.6s
```

**Center Line**:
```
initial: scaleX: 0
animate: scaleX: 1
exit: scaleX: 0
duration: 0.4s
delay: 0.1s
```

---

## Easing Functions

### Primary Easing
```css
cubic-bezier(0.43, 0.13, 0.23, 0.96)
```
- Used for: All page transitions, fades, slides
- Feel: Smooth start, confident end
- Inspired by: Apple's ease-in-out

### Linear
```css
linear
```
- Used for: Progress bars, loading indicators
- Feel: Consistent, predictable

### Steps
```css
steps(10)
```
- Used for: Grain texture animation
- Feel: Subtle, film-like quality

---

## Grain Texture Animation

**Pattern**:
- SVG fractal noise
- Base frequency: 0.9
- Octaves: 4
- Stitch: enabled

**Animation**:
```css
@keyframes grain {
  0%, 100% { transform: translate(0, 0); }
  10% { transform: translate(-5%, -10%); }
  20% { transform: translate(-15%, 5%); }
  30% { transform: translate(7%, -25%); }
  40% { transform: translate(-5%, 25%); }
  50% { transform: translate(-15%, 10%); }
  60% { transform: translate(15%, 0%); }
  70% { transform: translate(0%, 15%); }
  80% { transform: translate(3%, 35%); }
  90% { transform: translate(-10%, 10%); }
}
```

**Duration**: 8s
**Timing**: steps(10)
**Opacity**: 2-3%

---

## Component-Level Animations

### HomePage
```typescript
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
```

### ProjectDetail
```typescript
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
```

### Project Cards (Staggered)
```typescript
initial={{ opacity: 0, y: 40 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6, delay: index * 0.1 }}
```

---

## Z-Index Hierarchy

```
Loading Screen:     z-100
Route Transitions:  z-95 to z-98
Page Load Bar:      z-99
Fixed Navigation:   z-50
Content:            z-0 to z-10
```

---

## Accessibility

### Reduced Motion
All animations should respect:
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Performance
- Use `transform` and `opacity` only
- Avoid animating: width, height, top, left, margin, padding
- Use `will-change` sparingly
- Remove animations after completion

---

## Testing Checklist

- [ ] Loading screen appears on first visit
- [ ] Progress bar completes smoothly
- [ ] Page transitions are smooth (no flash)
- [ ] Project card transitions work on click
- [ ] Route overlay shows contextual text
- [ ] Scroll resets to top on navigation
- [ ] No layout shift during transitions
- [ ] Grain texture is subtle (not distracting)
- [ ] All animations use consistent easing
- [ ] Performance is 60fps on mid-range devices

---

## Mobile Considerations

### Responsive Adjustments
- Loading screen text: 6xl on mobile, 7xl on desktop
- Reduce animation complexity on slower devices
- Test on iPhone 12/13 and Samsung Galaxy S21
- Ensure touch targets remain clickable during transitions

### Performance Optimizations
- Use `translateZ(0)` for GPU acceleration
- Reduce grain texture resolution on mobile
- Consider disabling grain on low-end devices
- Test battery impact of continuous animations

---

## Browser Support

**Target**:
- Chrome 90+
- Safari 14+
- Firefox 88+
- Edge 90+

**Fallbacks**:
- No grain texture in older browsers
- Simpler transitions if Motion API unavailable
- CSS-only transitions as ultimate fallback
