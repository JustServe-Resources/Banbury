document.addEventListener("DOMContentLoaded", async function () {
  // Ensure we are on a community topic page
  const postsListUl = document.querySelector('.posts-list > ul');
  if (!postsListUl) return;

  const allPosts = Array.from(postsListUl.children).filter(el => el.tagName === 'LI');
  if (allPosts.length === 0) return;

  // 1. Determine if there are multiple pages
  let totalPages = 1;
  const pagination = document.querySelector('.pagination');
  if (pagination) {
    const pageLinks = pagination.querySelectorAll('a');
    pageLinks.forEach(link => {
      const match = link.getAttribute('href')?.match(/[?&]page=(\d+)/);
      if (match) {
        const pageNum = parseInt(match[1], 10);
        if (pageNum > totalPages) totalPages = pageNum;
      }
    });
  }

  // Helper to extract tags from a post element
  function getTagsFromPost(postEl) {
    const tags = new Set();
    postEl.querySelectorAll('.content-tag').forEach(tagEl => {
      tags.add(tagEl.getAttribute('data-tag') || tagEl.textContent.trim());
    });
    return Array.from(tags);
  }

  const uniqueTags = new Set();
  
  // Initial populate from page 1
  allPosts.forEach(post => {
    getTagsFromPost(post).forEach(tag => uniqueTags.add(tag));
  });

  // 2. Create the custom dropdown menu following Zendesk's native style
  const filterContainer = document.createElement('span');
  filterContainer.className = 'dropdown post-tag-filter';

  const button = document.createElement('button');
  button.className = 'dropdown-toggle';
  button.setAttribute('aria-haspopup', 'true');
  button.innerHTML = `Filter by Tag (All) <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" focusable="false" viewBox="0 0 12 12" class="dropdown-chevron-icon"><path fill="none" stroke="currentColor" stroke-linecap="round" d="M3 4.5l2.6 2.6c.2.2.5.2.7 0L9 4.5"/></svg>`;

  const dropdownMenu = document.createElement('span');
  dropdownMenu.className = 'dropdown-menu';
  dropdownMenu.setAttribute('role', 'menu');

  // Function to render dropdown options
  function renderDropdownOptions() {
    dropdownMenu.innerHTML = ''; // Clear existing
    
    // Add the default 'All' option
    const defaultOption = document.createElement('a');
    defaultOption.href = '#';
    defaultOption.setAttribute('role', 'menuitemradio');
    defaultOption.setAttribute('aria-checked', 'true');
    defaultOption.textContent = 'All Tags';
    defaultOption.setAttribute('data-value', 'all');
    dropdownMenu.appendChild(defaultOption);

    // Add the unique tags to the dropdown
    Array.from(uniqueTags).sort().forEach(tag => {
      const option = document.createElement('a');
      option.href = '#';
      option.setAttribute('role', 'menuitemradio');
      option.setAttribute('aria-checked', 'false');
      option.textContent = tag;
      option.setAttribute('data-value', tag.toLowerCase());
      dropdownMenu.appendChild(option);
    });

    // Re-attach event listeners to new options
    const options = dropdownMenu.querySelectorAll('a');
    options.forEach(opt => {
      opt.addEventListener('click', handleOptionClick);
    });
  }

  renderDropdownOptions();

  filterContainer.appendChild(button);
  filterContainer.appendChild(dropdownMenu);

  // 3. Inject the dropdown next to the existing sorting options
  const filterBar = document.querySelector('.topic-filters');
  if (filterBar) {
    filterBar.appendChild(filterContainer);
  } else {
    postsListUl.parentNode.insertBefore(filterContainer, postsListUl);
  }

  // Handle dropdown toggle visibility (basic Zendesk theme style)
  button.addEventListener('click', function(e) {
    e.stopPropagation();
    const isExpanded = button.getAttribute('aria-expanded') === 'true';
    
    // close other native dropdowns
    document.querySelectorAll('.topic-filters .dropdown-toggle').forEach(btn => {
      btn.setAttribute('aria-expanded', 'false');
    });
    
    button.setAttribute('aria-expanded', !isExpanded);
  });

  document.addEventListener('click', function() {
    button.setAttribute('aria-expanded', 'false');
  });

  // 4. Handle the filtering logic when a selection changes
  function handleOptionClick(e) {
    e.preventDefault();
    const selectedTagValue = this.getAttribute('data-value');
    
    // Update checkmarks
    const options = dropdownMenu.querySelectorAll('a');
    options.forEach(o => o.setAttribute('aria-checked', 'false'));
    this.setAttribute('aria-checked', 'true');
    
    // Update button text
    const rawText = this.textContent.trim();
    const textToDisplay = selectedTagValue === 'all' ? 'Filter by Tag (All)' : rawText;
    button.innerHTML = `${textToDisplay} <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" focusable="false" viewBox="0 0 12 12" class="dropdown-chevron-icon"><path fill="none" stroke="currentColor" stroke-linecap="round" d="M3 4.5l2.6 2.6c.2.2.5.2.7 0L9 4.5"/></svg>`;

    // Apply filtering to all dynamically loaded posts
    allPosts.forEach(post => {
      if (selectedTagValue === "all") {
        post.style.display = ""; // Show all
        return;
      }

      const postTags = getTagsFromPost(post).map(t => t.toLowerCase());
      
      // Toggle visibility based on presence of the tag
      if (postTags.includes(selectedTagValue)) {
        post.style.display = "";
      } else {
        post.style.display = "none";
      }
    });
  }

  // 5. Fetch remaining pages if they exist
  if (totalPages > 1) {
    button.disabled = true;
    button.style.opacity = '0.7';
    button.innerHTML = `Loading all posts... <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" focusable="false" viewBox="0 0 12 12" class="dropdown-chevron-icon"><path fill="none" stroke="currentColor" stroke-linecap="round" d="M3 4.5l2.6 2.6c.2.2.5.2.7 0L9 4.5"/></svg>`;

    try {
      const baseUrl = new URL(window.location.href);
      
      for (let p = 2; p <= totalPages; p++) {
        baseUrl.searchParams.set('page', p);
        
        const response = await fetch(baseUrl.toString());
        if (!response.ok) continue;
        
        const html = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        
        // Find the new posts list ul
        const newPostsUl = doc.querySelector('.posts-list > ul');
        if (newPostsUl) {
          const newPosts = Array.from(newPostsUl.children).filter(el => el.tagName === 'LI');
          
          newPosts.forEach(post => {
            allPosts.push(post);
            postsListUl.appendChild(post); // Add to DOM, maintaining order
            getTagsFromPost(post).forEach(tag => uniqueTags.add(tag));
          });
        }
      }
    } catch (err) {
      console.error("Failed to load paginated posts", err);
    } finally {
      // Re-render dropdown to include tags from other pages
      renderDropdownOptions();
      
      button.disabled = false;
      button.style.opacity = '1';
      button.innerHTML = `Filter by Tag (All) <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" focusable="false" viewBox="0 0 12 12" class="dropdown-chevron-icon"><path fill="none" stroke="currentColor" stroke-linecap="round" d="M3 4.5l2.6 2.6c.2.2.5.2.7 0L9 4.5"/></svg>`;
      
      // Hide the native pagination since we loaded everything
      if (pagination) pagination.style.display = 'none';
    }
  } else {
    // If no unique tags across page 1 and no extra pages
    if (uniqueTags.size === 0) {
      filterContainer.style.display = 'none';
    }
  }
});
