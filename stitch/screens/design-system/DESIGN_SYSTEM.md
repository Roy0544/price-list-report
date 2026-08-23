---
name: Clinical Precision
colors:
  surface: '#f8f9fb'
  surface-dim: '#d9dadc'
  surface-bright: '#f8f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f6'
  surface-container: '#edeef0'
  surface-container-high: '#e7e8ea'
  surface-container-highest: '#e1e2e4'
  on-surface: '#191c1e'
  on-surface-variant: '#434654'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f3'
  outline: '#737685'
  outline-variant: '#c3c6d6'
  surface-tint: '#0c56d0'
  primary: '#003d9b'
  on-primary: '#ffffff'
  primary-container: '#0052cc'
  on-primary-container: '#c4d2ff'
  inverse-primary: '#b2c5ff'
  secondary: '#00687a'
  on-secondary: '#ffffff'
  secondary-container: '#6ae1ff'
  on-secondary-container: '#006374'
  tertiary: '#004e32'
  on-tertiary: '#ffffff'
  tertiary-container: '#006844'
  on-tertiary-container: '#72e9af'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2ff'
  primary-fixed-dim: '#b2c5ff'
  on-primary-fixed: '#001848'
  on-primary-fixed-variant: '#0040a2'
  secondary-fixed: '#adecff'
  secondary-fixed-dim: '#5dd6f3'
  on-secondary-fixed: '#001f26'
  on-secondary-fixed-variant: '#004e5d'
  tertiary-fixed: '#82f9be'
  tertiary-fixed-dim: '#65dca4'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005235'
  background: '#f8f9fb'
  on-background: '#191c1e'
  surface-variant: '#e1e2e4'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  title-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  display-lg-mobile:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  container-max: 1200px
  gutter: 16px
---

## Brand & Style
The design system for Dr. Roy’s Laboratory is built on the pillars of **Trust, Professionalism, and Efficiency**. The visual direction is **Modern Corporate**, blending the high-reliability feel of enterprise software with the approachability of a consumer health app. 

The aesthetic prioritizes clarity and whitespace to reduce cognitive load for patients and clinicians. It utilizes a refined "mobile-app" feel characterized by generous touch targets, subtle depth, and soft geometric shapes that feel welcoming rather than clinical or sterile.

## Colors
The palette is rooted in medical authority and cleanliness.
- **Primary (Medical Blue):** Used for key actions, brand representation, and indicating active states.
- **Secondary (Clean Teal):** Used for supplementary information, data visualization, and accenting lifestyle-related features.
- **Success (Healthy Green):** Dedicated to positive test results, completion states, and "Healthy" ranges in lab reports.
- **Background & Surface:** A layered approach using `#F4F5F7` for the app canvas and `#FFFFFF` for content cards to create a clear visual hierarchy through tonal separation.

## Typography
**Inter** is the sole typeface for this design system, chosen for its exceptional legibility in data-dense environments (like lab results) and its neutral, professional character. 

- **Headlines:** Use a slightly tighter letter-spacing and heavier weights to establish a clear hierarchy.
- **Body Text:** Uses a generous line height (1.5x) to ensure patients can easily read medical instructions and report summaries.
- **Numerical Data:** For lab values, ensure the use of tabular lining figures if available, keeping results aligned and easy to compare.

## Layout & Spacing
The layout follows an **8px grid system**. For mobile-first delivery, the design utilizes a fluid grid with 16px side margins. 

- **Desktop:** 12-column grid, max-width of 1200px, centered.
- **Mobile/Tablet:** Single-column layout for forms and lists, utilizing card-based containers to group related medical data.
- **Vertical Rhythm:** Use 24px (lg) spacing between major sections and 12px (sm) between related items within a card.

## Elevation & Depth
Depth is conveyed through **Tonal Layers** supplemented by **Ambient Shadows**. 

- **Level 0 (Background):** `#F4F5F7` - The base canvas.
- **Level 1 (Cards/Surface):** `#FFFFFF` - Used for all primary content containers. These should feature a very soft, diffused shadow: `0px 4px 12px rgba(0, 0, 0, 0.05)`.
- **Level 2 (Interactive/Floating):** Used for dropdowns and modals. Shadows are more pronounced: `0px 8px 24px rgba(0, 0, 0, 0.08)`.

Avoid heavy borders; use subtle 1px strokes in `#E1E4E8` only when elements need to be differentiated on a white background.

## Shapes
This design system uses a **Rounded** (Level 2) shape language to soften the medical experience and make the interface feel more modern and accessible.

- **Standard Elements:** Buttons, Input fields, and Chips use a `0.5rem` (8px) radius.
- **Large Containers:** Content cards and Modals use a `1rem` (16px) radius to create a distinct, friendly mobile-app appearance.
- **Icons:** Use "Linear" style icons with rounded terminals to match the typography and corner radius.

## Components
- **Buttons:** Primary buttons use the Medical Blue background with White text. Secondary buttons use a Teal stroke with Teal text. All buttons have a minimum height of 48px for mobile accessibility.
- **Input Fields:** Use a light grey border (`#D1D5DB`) that transitions to Medical Blue on focus. Labels should always be visible above the field, never just as placeholders.
- **Cards:** The primary container for lab results and appointments. Always use the Level 1 shadow and 16px corner radius. Include a subtle 4px vertical accent bar on the left side of cards to indicate status (e.g., Green for "Ready", Blue for "Upcoming").
- **Chips:** Used for test categories (e.g., "Blood Work", "Radiology"). Use a light tint of the primary color for the background and the full-saturation color for the text.
- **Progress Indicators:** Use thin, Clean Teal bars for multi-step booking processes or status tracking of lab samples.
- **Lab Result Rows:** High-contrast lists where the "Value" is bolded and the "Reference Range" is in a smaller, secondary text style.
