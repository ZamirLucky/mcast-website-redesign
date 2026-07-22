---
name: Academic Precision
colors:
  surface: '#f9f9fb'
  surface-dim: '#d9dadc'
  surface-bright: '#f9f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f5'
  surface-container: '#edeef0'
  surface-container-high: '#e8e8ea'
  surface-container-highest: '#e2e2e4'
  on-surface: '#1a1c1d'
  on-surface-variant: '#464650'
  inverse-surface: '#2f3132'
  inverse-on-surface: '#f0f0f2'
  outline: '#777681'
  outline-variant: '#c7c5d1'
  surface-tint: '#555996'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#0f134f'
  on-primary-container: '#7a7ebf'
  inverse-primary: '#bfc2ff'
  secondary: '#414ad2'
  on-secondary: '#ffffff'
  secondary-container: '#5c65ed'
  on-secondary-container: '#fffbff'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#251a00'
  on-tertiary-container: '#a47e1a'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e0e0ff'
  primary-fixed-dim: '#bfc2ff'
  on-primary-fixed: '#0f134f'
  on-primary-fixed-variant: '#3d417d'
  secondary-fixed: '#e0e0ff'
  secondary-fixed-dim: '#bfc2ff'
  on-secondary-fixed: '#00006e'
  on-secondary-fixed-variant: '#2930bd'
  tertiary-fixed: '#ffdf9c'
  tertiary-fixed-dim: '#edc058'
  on-tertiary-fixed: '#251a00'
  on-tertiary-fixed-variant: '#5b4300'
  background: '#f9f9fb'
  on-background: '#1a1c1d'
  surface-variant: '#e2e2e4'
  surface-white: '#FFFFFF'
  text-body: '#464650'
  border-subtle: '#E2E2E9'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 56px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Montserrat
    fontSize: 36px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-sm:
    fontFamily: Montserrat
    fontSize: 20px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Montserrat
    fontSize: 17px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Montserrat
    fontSize: 15px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Montserrat
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  max-width: 1280px
  columns: '12'
  gutter: 24px
  margin: 32px
  stack-gap-lg: 48px
  stack-gap-md: 24px
  stack-gap-sm: 12px
---

## Brand & Style

This design system establishes a modern, institutional digital environment for the MCAST Students' Information Hub. The brand personality is authoritative yet accessible, prioritizing clarity of information over decorative flair.

The visual style is **Corporate Modern** with a strong **Swiss Design** influence. It utilizes a "Bento-style" layout—organizing content into distinct, functional modules that vary in scale but maintain strict grid alignment. The aesthetic relies on thin borders, flat surfaces, and a rigorous typographic hierarchy to create a sense of trust and institutional stability. Visual clutter is eliminated to ensure students can navigate critical information without cognitive overhead.

## Colors

The palette is anchored by **MCAST Deep Blue**, used primarily for high-level branding, sidebars, and primary headings to convey institutional authority. **Vivid Primary Blue** serves as the functional accent, reserved strictly for interactive elements like buttons, links, and active navigation states.

**MCAST Royal Gold** is a high-contrast tertiary color used with extreme restraint—only for small status indicators, notification badges, or specific "High Importance" callouts. The background strategy uses a layered approach: a base of **Light Grey** (#F7F7F9) for the page canvas, with **White** (#FFFFFF) used for card surfaces to create subtle, clean separation.

## Typography

The design system uses **Montserrat** exclusively to achieve a clean, geometric, and professional tone. 

- **Hierarchy:** Dramatic contrast between display titles and body text reinforces the Swiss grid structure. 
- **Readability:** Body text uses a slightly wider line height (1.6) and the "Muted Accessible Grey" (#464650) to reduce eye strain during long reading sessions.
- **Utility:** A `label-caps` style is provided for metadata, breadcrumbs, and small UI headers to provide organizational clarity without competing with primary content.

## Layout & Spacing

This design system follows a **Fixed-Fluid Hybrid Grid**. On desktop, content is constrained to a 1280px max-width container with 12 columns. 

- **Bento Logic:** Content modules (cards) should span 3, 4, 6, or 12 columns. Vertical spacing between different sections uses `stack-gap-lg`, while internal card elements use `stack-gap-sm`.
- **Breakpoints:**
  - **Desktop (1024px+):** Full 12-column grid, 24px gutters.
  - **Tablet (768px - 1023px):** 6-column grid, 20px margins.
  - **Mobile (Under 768px):** Single-column stack, 16px margins. 
- **Whitespace:** Use generous top and bottom padding on page sections to maintain an "Institutional" feel—never crowd the edges of the container.

## Elevation & Depth

To maintain the "Flat Institutional" aesthetic, depth is communicated through **Tonal Layers** and **Low-Contrast Outlines** rather than traditional shadows.

1.  **Canvas:** The base layer is Light Grey (#F7F7F9).
2.  **Surfaces:** Cards and containers are Pure White (#FFFFFF).
3.  **Definition:** Use a 1px border (#E2E2E9) for all cards. 
4.  **Shadows:** Shadows are reserved only for "Hover" states on interactive cards or floating elements like dropdowns. When used, they must be extremely subtle (e.g., `0 4px 12px rgba(0,0,0,0.05)`).

## Shapes

The shape language is disciplined and geometric. A **Soft** roundedness level (0.25rem / 4px) is applied to all buttons, input fields, and cards. This provides just enough approachable softness to feel modern while maintaining the rigid, professional structure of a grid-based academic portal.

Avoid large radiuses or pill-shaped buttons for primary actions; stay consistent with the 4px corner radius across the entire interface to reinforce the systematic nature of the design system.

## Components

- **Buttons:** Primary buttons use Vivid Primary Blue (#0000A8) with white text. Secondary buttons use a 1px border of the same blue with a transparent background. No gradients.
- **Cards:** White background, 1px subtle border, 4px corner radius. Headlines inside cards should be 18px-22px. Padding inside cards should be a consistent 24px.
- **Lists:** Vertical lists for navigation should feature a simple "Chevron Right" icon. Use 1px bottom dividers (#E2E2E9) rather than boxing every list item.
- **Input Fields:** Search bars and text inputs should have a Light Grey (#F3F3F3) fill or a simple 1px outline. Focus states must use a 2px Vivid Primary Blue border.
- **Bento Modules:** Use varying card heights to create visual interest, but ensure all cards in a row align to the same horizontal baseline.
- **Navigation:** A clean top-tier bar with the MCAST logo on the left and utility links on the right, maintaining the 1280px container alignment.