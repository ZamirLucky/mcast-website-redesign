---
name: Academic Precision
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#464650'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f1f1f1'
  outline: '#777681'
  outline-variant: '#c7c5d1'
  surface-tint: '#555996'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#0f134f'
  on-primary-container: '#7a7ebf'
  inverse-primary: '#bfc2ff'
  secondary: '#785a00'
  on-secondary: '#ffffff'
  secondary-container: '#fdce65'
  on-secondary-container: '#755700'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#3a0a05'
  on-tertiary-container: '#bc6f63'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e0e0ff'
  primary-fixed-dim: '#bfc2ff'
  on-primary-fixed: '#0f134f'
  on-primary-fixed-variant: '#3d417d'
  secondary-fixed: '#ffdf9c'
  secondary-fixed-dim: '#edc058'
  on-secondary-fixed: '#251a00'
  on-secondary-fixed-variant: '#5b4300'
  tertiary-fixed: '#ffdad4'
  tertiary-fixed-dim: '#ffb4a8'
  on-tertiary-fixed: '#3a0a05'
  on-tertiary-fixed-variant: '#72342b'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
  white: '#FFFFFF'
  deep-blue-light: '#1A1A56'
  gold-hover: '#C29B3F'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-md:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-sm:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  title-lg:
    fontFamily: Montserrat
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Montserrat
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Montserrat
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Montserrat
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  caption:
    fontFamily: Montserrat
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  grid-margin: 2rem
  gutter: 1.5rem
  section-gap: 5rem
  stack-sm: 0.5rem
  stack-md: 1rem
  stack-lg: 2rem
---

## Brand & Style

The design system is engineered for an institutional environment that balances academic rigor with student-centric accessibility. The personality is authoritative yet welcoming, utilizing a **Modern Corporate** aesthetic that prioritizes clarity and structured information density.

The visual narrative centers on a "Gateway to Excellence" concept, using deep blues to represent stability and gold accents to signal achievement. The UI employs generous whitespace to reduce cognitive load for students and faculty, while maintaining a strict grid alignment that reflects the organized nature of a technical college.

Key design principles include:
- **Institutional Authority:** Deep, saturated blues provide a professional foundation.
- **Academic Clarity:** High-contrast typography and intentional negative space.
- **Structural Integrity:** Heavy reliance on a mathematical grid and consistent alignment to convey precision.

## Colors

The palette is anchored by **MCAST Deep Blue**, which serves as the primary identifier for headers, footers, and hero backgrounds. **Royal Gold** is used with extreme restraint, reserved exclusively for primary calls to action, important badges, and subtle highlights to ensure its impact is not diluted.

**Pure White** and **Light Gray (#F1F1F1)** handle the majority of the UI's surface area, creating a "breathable" environment. Text on light surfaces should utilize the Deep Blue at various opacities rather than pure black to maintain a cohesive brand feel. 

- **Primary (Deep Blue):** Use for structural components and high-emphasis backgrounds.
- **Secondary (Gold):** Interaction-only color for critical paths.
- **Neutral:** Used for background zoning and card strokes.

## Typography

The typography system is built entirely on **Montserrat** to provide a clean, geometric, and modern feel. The typeface’s large x-height ensures excellent legibility for complex academic information. 

Hierarchy is established primarily through weight and case. **Labels** and **Utility text** should use uppercase with slight letter spacing to differentiate from body copy. For long-form academic content, ensure line lengths are capped at 75 characters to maintain readability. 

- **Headlines:** Bold and impactful, using Deep Blue.
- **Body:** Regular weight, using a high-contrast dark tone for accessibility.
- **Links:** Semibold weight, typically underlined or in Deep Blue to signify interactivity.

## Layout & Spacing

This design system utilizes a **Fixed Grid** model for desktop (1280px max-width) and a **Fluid Grid** for mobile. The layout is strictly 12-columns with a mathematical approach to spacing.

- **Desktop (1200px+):** 12 columns, 24px gutters, 64px margins.
- **Tablet (768px - 1199px):** 8 columns, 16px gutters, 32px margins.
- **Mobile (Up to 767px):** 4 columns, 16px gutters, 16px margins.

Vertical rhythm is maintained using an 8px base unit. Sections are separated by large gaps (80px+) to emphasize the "clean and modern" institutional requirement, preventing the UI from feeling cluttered or overwhelming.

## Elevation & Depth

To maintain a clean, institutional aesthetic, this design system avoids heavy shadows in favor of **Tonal Layers** and **Low-Contrast Outlines**.

- **Level 0 (Base):** White (#FFFFFF) for the primary content canvas.
- **Level 1 (Sub-surface):** Light Gray (#F1F1F1) for zoning content or grouping secondary information.
- **Level 2 (Cards/Overlays):** White background with a 1px solid border (#E0E0E0). A very soft, diffused shadow (0px 4px 20px rgba(0, 0, 67, 0.05)) may be used only for interactive elements on hover.
- **Hero/Header Depth:** The Deep Blue areas are treated as "foundation layers," sitting at the lowest perceived depth, with light text and gold accents "floating" on top.

## Shapes

The shape language is **Professional and Structured**. We use a "Soft" rounding approach (4px / 0.25rem) which takes the edge off the institutional look without feeling overly casual or "bubbly."

- **Standard Components:** 4px radius (Buttons, Input Fields, Cards).
- **Secondary Accents:** 8px radius for larger containers or feature sections.
- **Geometric Accents:** Subtle 45-degree angled lines or light geometric overlays in Deep Blue hero sections to reference technical precision and engineering.

## Components

### Buttons
- **Primary:** Royal Gold background, Deep Blue text, bold weight. No shadow, 4px corner radius.
- **Secondary:** Transparent background, 2px Deep Blue or White outline (depending on background), matching text color.
- **Hover States:** Primary buttons darken by 10%; Secondary buttons gain a subtle background tint.

### Navigation
- **Utility Bar:** Slim (40px) bar at the very top. Deep Blue background, White text (Label-MD). Includes language toggle and student portal links.
- **Main Nav:** White background, 80px height. Deep Blue links. Active state marked by a 3px Gold bottom border.

### Hero Section
- **Style:** Full-width Deep Blue background. Utilize subtle, low-opacity geometric patterns (triangles/grids) to add texture. Headlines in White (Display-LG).

### Input Fields
- **Design:** 1px border (#E0E0E0), 4px radius. Labels sit above the field in Label-MD style. Focus state uses a 2px Deep Blue border.

### Cards
- **Structure:** White background, 1px Gray border. Headlines in Title-LG. Padding should be generous (24px or 32px) to maintain the "white space" narrative.

### Chips & Badges
- **Usage:** Used for course categories or status (e.g., "Open for Applications"). Solid Deep Blue with White text, or light tints of blue for less emphasis.