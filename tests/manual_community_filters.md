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
