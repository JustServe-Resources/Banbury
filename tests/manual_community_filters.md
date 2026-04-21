# Manual Testing Plan: Community Filters

This document outlines the manual testing steps to validate the dropdown filter functionality on the community topic page.

## Test 1: Title Toggle
Validate that clicking the filter title toggles the dropdown visibility.
1. Click the **"Filter by tag"** title.
   * **Verify:** The dropdown menu opens.
2. Click the **"Filter by tag"** title again.
   * **Verify:** The dropdown menu closes.
3. Repeat steps 1 & 2 for all other filters on the page (e.g., "Sort by", "Status").

## Test 2: Outside Click
Validate that the dropdown can be dismissed by clicking elsewhere on the page.
1. Click any filter title to open its dropdown menu.
2. Click anywhere else on the page outside of the dropdown menu.
   * **Verify:** The dropdown menu closes immediately.

## Test 3: Selection Rendering
Validate that making a selection closes the dropdown and re-renders the page with the appropriate filters applied.
1. Click the **"Filter by tag"** title to open the dropdown menu.
2. Click on any specific tag selection within the menu.
   * **Verify:** The dropdown menu closes automatically.
   * **Verify:** The page reloads or renders to show only the posts matching the selected tag.

---

## Responsive Design Tests

> Test at three viewport widths:
> - **Mobile** — < 768px (e.g., iPhone SE: 375px)
> - **Tablet** — 768px–1023px (e.g., iPad: 768px)
> - **Desktop** — ≥ 1024px

---

## Test 4: Header Actions Layout (Mobile)
Validate that the Follow and New Post buttons stack vertically on mobile.
1. Set viewport to **375px** wide.
2. Navigate to any community topic page.
   * **Verify:** The **Follow** button and **New Post** button are stacked vertically, each taking full width.
   * **Verify:** There is no horizontal overflow or clipping of buttons.

## Test 5: Header Actions Layout (Tablet & Desktop)
Validate that the Follow and New Post buttons align horizontally on wider screens.
1. Set viewport to **768px** or wider.
2. Navigate to any community topic page.
   * **Verify:** The **Follow** button and **New Post** button appear side-by-side on the same row.
   * **Verify:** Neither button is stretched wider than its content.

## Test 6: Follow Button — Follower Count Visibility
Validate that the follower count is hidden on mobile and visible on tablet+.
1. Set viewport to **375px** wide.
   * **Verify:** The follower count (the number shown after the divider inside the Follow button) is **not visible**.
2. Set viewport to **768px** or wider.
   * **Verify:** The follower count **is visible** alongside the button label.

## Test 7: Post Count Icon Alignment
Validate that the vote and comment count columns align consistently across all posts, regardless of whether counts are present.
1. Navigate to a community topic page with a mix of posts — some with votes and comments, some with neither.
2. At **all three viewport sizes**:
   * **Verify:** The thumbs-up icon column is in the **same horizontal position** on every post row.
   * **Verify:** The comment icon column is in the **same horizontal position** on every post row.
   * **Verify:** Posts without a vote or comment count show **no icon** in that slot (not a zero or a dimmed icon).

## Test 8: Post Count Icon Styling
Validate that both count icons use the Zendesk Garden outline/stroke style.
1. At any viewport size, inspect the post list.
   * **Verify:** The thumbs-up icon is **outline/stroke** style (not filled).
   * **Verify:** The comment/speech-bubble icon is **outline/stroke** style (not filled).
   * **Verify:** Both icons use the same visual weight and are visually consistent.

## Test 9: Topic Filter Dropdown Layout (Mobile)
Validate that the filter dropdowns are accessible and usable on small screens.
1. Set viewport to **375px** wide.
2. Navigate to a community topic page.
   * **Verify:** The filter dropdowns (Sort, Filter) each appear as a **full-width block** with a visible border separating them.
   * **Verify:** Tapping a filter opens its dropdown.
   * **Verify:** The dropdown menu does not overflow the screen horizontally.

## Test 10: Topic Filter Dropdown Layout (Tablet & Desktop)
Validate that filters display inline on wider screens.
1. Set viewport to **768px** or wider.
2. Navigate to a community topic page.
   * **Verify:** The filter dropdowns appear **inline** (side by side), not stacked.
   * **Verify:** There are no top borders on the individual filter items at tablet/desktop width.

## Test 11: Breadcrumb Color
Validate that breadcrumb text and links render in the correct muted grey.
1. At any viewport size, inspect the breadcrumbs near the top of the community topic page.
   * **Verify:** Breadcrumb text is a **muted grey** (matching the filter dropdown label color).
   * **Verify:** Breadcrumb **links** (anchor tags) are the same grey — not the teal/brand link color.
   * **Verify:** The separator `>` between crumbs is also grey.

## Test 12: Post Status Icon Colors
Validate that each post status icon uses the correct brand palette color.
1. Navigate to a topic page that contains posts in multiple statuses.
   * **Verify:** **Open** posts show a **green** (`#71AA32`) status icon.
   * **Verify:** **New** posts show a **gold/yellow** (`#E1BC21`) status icon.
   * **Verify:** **Planned** posts show a **teal** (`#009EB9`) status icon.
   * **Verify:** **Not planned** posts show a **mid-grey** (`#989B9F`) status icon.
   * **Verify:** **Answered** and **Completed** posts show a **green** (`#71AA32`) status icon.

## Test 13: Touch Interaction (Mobile)
Validate that dropdowns and buttons respond correctly to touch on mobile devices.
1. Using a real device or browser touch emulation at **375px**:
2. Tap a filter dropdown toggle.
   * **Verify:** The dropdown opens on tap (not requiring hover).
3. Tap a menu item inside the dropdown.
   * **Verify:** The selection is applied and the dropdown closes.
4. Tap the **New Post** button.
   * **Verify:** The button responds to tap and navigates to the new post form.
5. Tap the **Follow** button.
   * **Verify:** The follow state toggles correctly.

