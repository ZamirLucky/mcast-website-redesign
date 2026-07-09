---
name: Academic Excellence
colors:
  surface: '#111317'
  surface-dim: '#111317'
  surface-bright: '#37393d'
  surface-container-lowest: '#0c0e12'
  surface-container-low: '#1a1c1f'
  surface-container: '#1e2023'
  surface-container-high: '#282a2e'
  surface-container-highest: '#333539'
  on-surface: '#e2e2e7'
  on-surface-variant: '#c7c5d1'
  inverse-surface: '#e2e2e7'
  inverse-on-surface: '#2e3034'
  outline: '#918f9b'
  outline-variant: '#464650'
  surface-tint: '#bfc2ff'
  primary: '#bfc2ff'
  on-primary: '#262a65'
  primary-container: '#000043'
  on-primary-container: '#7175b5'
  inverse-primary: '#555996'
  secondary: '#c6c6c7'
  on-secondary: '#2f3131'
  secondary-container: '#454747'
  on-secondary-container: '#b4b5b5'
  tertiary: '#b6c4ff'
  on-tertiary: '#002780'
  tertiary-container: '#000930'
  on-tertiary-container: '#416fff'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e0e0ff'
  primary-fixed-dim: '#bfc2ff'
  on-primary-fixed: '#0f134f'
  on-primary-fixed-variant: '#3d417d'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c7'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#454747'
  tertiary-fixed: '#dce1ff'
  tertiary-fixed-dim: '#b6c4ff'
  on-tertiary-fixed: '#001551'
  on-tertiary-fixed-variant: '#0039b3'
  background: '#111317'
  on-background: '#e2e2e7'
  surface-variant: '#333539'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-lg-mobile:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-md:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Montserrat
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Montserrat
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: Montserrat
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.05em
  nav-link:
    fontFamily: Montserrat
    fontSize: 15px
    fontWeight: '500'
    lineHeight: '1.0'
spacing:
  base: 4px
  xs: 8px
  sm: 16px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
---

## Brand & Style

This design system establishes an institutional and authoritative visual language for MCAST. The brand personality is professional, reliable, and accessible, catering to a diverse demographic of students, faculty, and international partners. 

The aesthetic follows a **Corporate / Modern** style with heavy influences from **Minimalism**. It prioritizes high legibility and a clear information hierarchy through high-contrast color pairings and generous whitespace. By removing all gradients, shadows, and unnecessary decorative elements, the focus remains entirely on clarity and the academic mission. The interface should feel structured and "locked-in," evoking a sense of stability and prestige.

## Colors

The palette is dominated by "MCAST Deep Blue," used as the foundation for the primary brand experience. White is the primary vehicle for typography and iconography, ensuring maximum contrast and accessibility compliance. 

- **Primary:** Deep Blue (#000043) for headers, primary backgrounds, and brand-heavy sections.
- **Secondary:** White (#FFFFFF) for text on dark backgrounds and surfaces in light mode.
- **Tertiary:** A brighter blue used sparingly for interactive states (hover/active) to provide feedback without breaking the minimalist aesthetic.
- **Neutral:** A range of cool grays used for background variations in light-mode content areas to prevent ocular fatigue.

## Typography

The design system utilizes **Montserrat** across all levels to achieve a clean, geometric, and professional look. The type scale is designed to be highly legible for long-form academic content while providing strong impact for headlines.

Navigation items and labels often use medium to semi-bold weights to distinguish them from body copy. For "Apply Now" or high-priority calls to action, the weight is increased to bold. On mobile devices, headline sizes are aggressively scaled down to ensure they do not wrap awkwardly and maintain a readable line-length.

## Layout & Spacing

The design system employs a **Fixed Grid** layout for desktop to maintain the "institutional" feel, centering content within a maximum width of 1280px. 

- **Desktop (1280px+):** 12-column grid with 24px gutters and 64px side margins.
- **Tablet (768px - 1279px):** 8-column fluid grid with 24px gutters and 32px side margins.
- **Mobile (Up to 767px):** 4-column fluid grid with 16px gutters and 16px side margins.

Spacing follows an 8px base rhythm to ensure consistent vertical alignment. Section-to-section spacing (Large/XL) is generous to prevent the dense academic information from feeling overwhelming.

## Elevation & Depth

This design system deliberately avoids shadows, blurs, and traditional Z-axis depth markers. Instead, it utilizes **Tonal Layers** and **Bold Borders** to establish hierarchy.

Hierarchy is created through:
1.  **Color Blocking:** Swapping between Primary Deep Blue and Neutral backgrounds to separate page sections.
2.  **Low-Contrast Outlines:** Subtle 1px borders (#FFFFFF at 20% opacity on dark backgrounds, or #DDDDDD on light backgrounds) are used for card containers and input fields.
3.  **Active States:** Interaction is signaled through color shifts (e.g., a white button background shifting to a very light gray) rather than elevation or "pop."

## Shapes

The shape language is strictly **Sharp (0px)**. This choice reinforces the institutional, structured, and traditional nature of an academic body. Square corners are applied to all buttons, input fields, cards, and image containers. This creates a cohesive, architectural look that aligns with the clean lines of the typography and the high-contrast color scheme.

## Components

### Buttons
Buttons are rectangular with zero corner radius. 
- **Primary:** White background with Deep Blue text for dark headers.
- **Secondary:** Transparent background with a 1px white border.
- **Hover:** Invert colors or slight opacity shift (0.9).

### Navigation
The top navigation uses a two-tier system as seen in the reference.
- **Utility Bar:** Smaller font size, separated by vertical pipes (|).
- **Main Nav:** Montserrat Medium, uppercase or title case, with generous horizontal padding.

### Cards
Cards use a flat layout with a 1px border. No shadows are permitted. Padding inside cards should follow the `md` (24px) spacing token.

### Input Fields
Inputs are sharp-edged with a 1px border. The label sits above the field in `label-sm` style. On focus, the border color should shift to the tertiary blue or a thicker 2px white border.

### Lists
Lists for academic catalogs or course listings use 1px horizontal dividers between items to maintain the grid-like structure of the layout.