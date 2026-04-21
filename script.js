(function () {
  'use strict';

  // Key map
  const ENTER = 13;
  const ESCAPE = 27;

  function toggleNavigation(toggle, menu) {
    const isExpanded = menu.getAttribute("aria-expanded") === "true";
    menu.setAttribute("aria-expanded", !isExpanded);
    toggle.setAttribute("aria-expanded", !isExpanded);
  }

  function closeNavigation(toggle, menu) {
    menu.setAttribute("aria-expanded", false);
    toggle.setAttribute("aria-expanded", false);
    toggle.focus();
  }

  // Navigation

  window.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.querySelector(".header .menu-button-mobile");
    const menuList = document.querySelector("#user-nav-mobile");

    menuButton.addEventListener("click", (event) => {
      event.stopPropagation();
      toggleNavigation(menuButton, menuList);
    });

    menuList.addEventListener("keyup", (event) => {
      if (event.keyCode === ESCAPE) {
        event.stopPropagation();
        closeNavigation(menuButton, menuList);
      }
    });

    // Toggles expanded aria to collapsible elements
    const collapsible = document.querySelectorAll(
      ".collapsible-nav, .collapsible-sidebar"
    );

    collapsible.forEach((element) => {
      const toggle = element.querySelector(
        ".collapsible-nav-toggle, .collapsible-sidebar-toggle"
      );

      element.addEventListener("click", () => {
        toggleNavigation(toggle, element);
      });

      element.addEventListener("keyup", (event) => {
        console.log("escape");
        if (event.keyCode === ESCAPE) {
          closeNavigation(toggle, element);
        }
      });
    });

    // If multibrand search has more than 5 help centers or categories collapse the list
    const multibrandFilterLists = document.querySelectorAll(
      ".multibrand-filter-list"
    );
    multibrandFilterLists.forEach((filter) => {
      if (filter.children.length > 6) {
        // Display the show more button
        const trigger = filter.querySelector(".see-all-filters");
        trigger.setAttribute("aria-hidden", false);

        // Add event handler for click
        trigger.addEventListener("click", (event) => {
          event.stopPropagation();
          trigger.parentNode.removeChild(trigger);
          filter.classList.remove("multibrand-filter-list--collapsed");
        });
      }
    });
  });

  const isPrintableChar = (str) => {
    return str.length === 1 && str.match(/^\S$/);
  };

  function Dropdown(toggle, menu) {
    this.toggle = toggle;
    this.menu = menu;

    this.menuPlacement = {
      top: menu.classList.contains("dropdown-menu-top"),
      end: menu.classList.contains("dropdown-menu-end"),
    };

    this.toggle.addEventListener("click", this.clickHandler.bind(this));
    this.toggle.addEventListener("keydown", this.toggleKeyHandler.bind(this));
    this.menu.addEventListener("keydown", this.menuKeyHandler.bind(this));
    document.body.addEventListener("click", this.outsideClickHandler.bind(this));

    const toggleId = this.toggle.getAttribute("id") || crypto.randomUUID();
    const menuId = this.menu.getAttribute("id") || crypto.randomUUID();

    this.toggle.setAttribute("id", toggleId);
    this.menu.setAttribute("id", menuId);

    this.toggle.setAttribute("aria-controls", menuId);
    this.menu.setAttribute("aria-labelledby", toggleId);

    this.menu.setAttribute("tabindex", -1);
    this.menuItems.forEach((menuItem) => {
      menuItem.tabIndex = -1;
    });

    this.focusedIndex = -1;
  }

  Dropdown.prototype = {
    get isExpanded() {
      return this.toggle.getAttribute("aria-expanded") === "true";
    },

    get menuItems() {
      return Array.prototype.slice.call(
        this.menu.querySelectorAll("[role='menuitem'], [role='menuitemradio']")
      );
    },

    dismiss: function () {
      if (!this.isExpanded) return;

      this.toggle.removeAttribute("aria-expanded");
      this.menu.classList.remove("dropdown-menu-end", "dropdown-menu-top");
      this.focusedIndex = -1;
    },

    open: function () {
      if (this.isExpanded) return;

      this.toggle.setAttribute("aria-expanded", true);
      this.handleOverflow();
    },

    handleOverflow: function () {
      var rect = this.menu.getBoundingClientRect();

      var overflow = {
        right: rect.left < 0 || rect.left + rect.width > window.innerWidth,
        bottom: rect.top < 0 || rect.top + rect.height > window.innerHeight,
      };

      if (overflow.right || this.menuPlacement.end) {
        this.menu.classList.add("dropdown-menu-end");
      }

      if (overflow.bottom || this.menuPlacement.top) {
        this.menu.classList.add("dropdown-menu-top");
      }

      if (this.menu.getBoundingClientRect().top < 0) {
        this.menu.classList.remove("dropdown-menu-top");
      }
    },

    focusByIndex: function (index) {
      if (!this.menuItems.length) return;

      this.menuItems.forEach((item, itemIndex) => {
        if (itemIndex === index) {
          item.tabIndex = 0;
          item.focus();
        } else {
          item.tabIndex = -1;
        }
      });

      this.focusedIndex = index;
    },

    focusFirstMenuItem: function () {
      this.focusByIndex(0);
    },

    focusLastMenuItem: function () {
      this.focusByIndex(this.menuItems.length - 1);
    },

    focusNextMenuItem: function (currentItem) {
      if (!this.menuItems.length) return;

      const currentIndex = this.menuItems.indexOf(currentItem);
      const nextIndex = (currentIndex + 1) % this.menuItems.length;

      this.focusByIndex(nextIndex);
    },

    focusPreviousMenuItem: function (currentItem) {
      if (!this.menuItems.length) return;

      const currentIndex = this.menuItems.indexOf(currentItem);
      const previousIndex =
        currentIndex <= 0 ? this.menuItems.length - 1 : currentIndex - 1;

      this.focusByIndex(previousIndex);
    },

    focusByChar: function (currentItem, char) {
      char = char.toLowerCase();

      const itemChars = this.menuItems.map((menuItem) =>
        menuItem.textContent.trim()[0].toLowerCase()
      );

      const startIndex =
        (this.menuItems.indexOf(currentItem) + 1) % this.menuItems.length;

      // look up starting from current index
      let index = itemChars.indexOf(char, startIndex);

      // if not found, start from start
      if (index === -1) {
        index = itemChars.indexOf(char, 0);
      }

      if (index > -1) {
        this.focusByIndex(index);
      }
    },

    outsideClickHandler: function (e) {
      if (
        this.isExpanded &&
        !this.toggle.contains(e.target) &&
        !e.composedPath().includes(this.menu)
      ) {
        this.dismiss();
        this.toggle.focus();
      }
    },

    clickHandler: function (event) {
      event.stopPropagation();
      event.preventDefault();

      if (this.isExpanded) {
        this.dismiss();
        this.toggle.focus();
      } else {
        this.open();
        this.focusFirstMenuItem();
      }
    },

    toggleKeyHandler: function (e) {
      const key = e.key;

      switch (key) {
        case "Enter":
        case " ":
        case "ArrowDown":
        case "Down": {
          e.stopPropagation();
          e.preventDefault();

          this.open();
          this.focusFirstMenuItem();
          break;
        }
        case "ArrowUp":
        case "Up": {
          e.stopPropagation();
          e.preventDefault();

          this.open();
          this.focusLastMenuItem();
          break;
        }
        case "Esc":
        case "Escape": {
          e.stopPropagation();
          e.preventDefault();

          this.dismiss();
          this.toggle.focus();
          break;
        }
      }
    },

    menuKeyHandler: function (e) {
      const key = e.key;
      const currentElement = this.menuItems[this.focusedIndex];

      if (e.ctrlKey || e.altKey || e.metaKey) {
        return;
      }

      switch (key) {
        case "Esc":
        case "Escape": {
          e.stopPropagation();
          e.preventDefault();

          this.dismiss();
          this.toggle.focus();
          break;
        }
        case "ArrowDown":
        case "Down": {
          e.stopPropagation();
          e.preventDefault();

          this.focusNextMenuItem(currentElement);
          break;
        }
        case "ArrowUp":
        case "Up": {
          e.stopPropagation();
          e.preventDefault();
          this.focusPreviousMenuItem(currentElement);
          break;
        }
        case "Home":
        case "PageUp": {
          e.stopPropagation();
          e.preventDefault();
          this.focusFirstMenuItem();
          break;
        }
        case "End":
        case "PageDown": {
          e.stopPropagation();
          e.preventDefault();
          this.focusLastMenuItem();
          break;
        }
        case "Tab": {
          if (e.shiftKey) {
            e.stopPropagation();
            e.preventDefault();
            this.dismiss();
            this.toggle.focus();
          } else {
            this.dismiss();
          }
          break;
        }
        default: {
          if (isPrintableChar(key)) {
            e.stopPropagation();
            e.preventDefault();
            this.focusByChar(currentElement, key);
          }
        }
      }
    },
  };

  // Drodowns

  window.addEventListener("DOMContentLoaded", () => {
    const dropdowns = [];
    const dropdownToggles = document.querySelectorAll(".dropdown-toggle");

    dropdownToggles.forEach((toggle) => {
      const menu = toggle.nextElementSibling;
      if (menu && menu.classList.contains("dropdown-menu")) {
        dropdowns.push(new Dropdown(toggle, menu));
      }
    });
  });

  // Share

  window.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".share a");
    links.forEach((anchor) => {
      anchor.addEventListener("click", (event) => {
        event.preventDefault();
        window.open(anchor.href, "", "height = 500, width = 500");
      });
    });
  });

  // Vanilla JS debounce function, by Josh W. Comeau:
  // https://www.joshwcomeau.com/snippets/javascript/debounce/
  function debounce(callback, wait) {
    let timeoutId = null;
    return (...args) => {
      window.clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => {
        callback.apply(null, args);
      }, wait);
    };
  }

  // Define variables for search field
  let searchFormFilledClassName = "search-has-value";
  let searchFormSelector = "form[role='search']";

  // Clear the search input, and then return focus to it
  function clearSearchInput(event) {
    event.target
      .closest(searchFormSelector)
      .classList.remove(searchFormFilledClassName);

    let input;
    if (event.target.tagName === "INPUT") {
      input = event.target;
    } else if (event.target.tagName === "BUTTON") {
      input = event.target.previousElementSibling;
    } else {
      input = event.target.closest("button").previousElementSibling;
    }
    input.value = "";
    input.focus();
  }

  // Have the search input and clear button respond
  // when someone presses the escape key, per:
  // https://twitter.com/adambsilver/status/1152452833234554880
  function clearSearchInputOnKeypress(event) {
    const searchInputDeleteKeys = ["Delete", "Escape"];
    if (searchInputDeleteKeys.includes(event.key)) {
      clearSearchInput(event);
    }
  }

  // Create an HTML button that all users -- especially keyboard users --
  // can interact with, to clear the search input.
  // To learn more about this, see:
  // https://adrianroselli.com/2019/07/ignore-typesearch.html#Delete
  // https://www.scottohara.me/blog/2022/02/19/custom-clear-buttons.html
  function buildClearSearchButton(inputId) {
    const button = document.createElement("button");
    button.setAttribute("type", "button");
    button.setAttribute("aria-controls", inputId);
    button.classList.add("clear-button");
    const buttonLabel = window.searchClearButtonLabelLocalized;
    const icon = `<svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' focusable='false' role='img' viewBox='0 0 12 12' aria-label='${buttonLabel}'><path stroke='currentColor' stroke-linecap='round' stroke-width='2' d='M3 9l6-6m0 6L3 3'/></svg>`;
    button.innerHTML = icon;
    button.addEventListener("click", clearSearchInput);
    button.addEventListener("keyup", clearSearchInputOnKeypress);
    return button;
  }

  // Append the clear button to the search form
  function appendClearSearchButton(input, form) {
    const searchClearButton = buildClearSearchButton(input.id);
    form.append(searchClearButton);
    if (input.value.length > 0) {
      form.classList.add(searchFormFilledClassName);
    }
  }

  // Add a class to the search form when the input has a value;
  // Remove that class from the search form when the input doesn't have a value.
  // Do this on a delay, rather than on every keystroke.
  const toggleClearSearchButtonAvailability = debounce((event) => {
    const form = event.target.closest(searchFormSelector);
    form.classList.toggle(
      searchFormFilledClassName,
      event.target.value.length > 0
    );
  }, 200);

  // Search

  window.addEventListener("DOMContentLoaded", () => {
    // Set up clear functionality for the search field
    const searchForms = [...document.querySelectorAll(searchFormSelector)];
    const searchInputs = searchForms.map((form) =>
      form.querySelector("input[type='search']")
    );
    searchInputs.forEach((input) => {
      appendClearSearchButton(input, input.closest(searchFormSelector));
      input.addEventListener("keyup", clearSearchInputOnKeypress);
      input.addEventListener("keyup", toggleClearSearchButtonAvailability);
    });
    // update placeholder text
    const container = document.querySelector('.search-bar-container');
    const placeholder = container?.dataset.searchPlaceholder;
    const input = document.querySelector('.search input[type="search"]');
    if (input && placeholder) input.placeholder = placeholder;

    // Bind custom search submit buttons to the native Zendesk search form
    const searchSubmitBtns = document.querySelectorAll("#searchSubmitBtn");
    searchSubmitBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        // Look for the form immediately next to the button, or fallback to the first generic search form on the page
        const form = btn.parentElement.querySelector("form[role='search']") || document.querySelector("form[role='search']");
        if (form) form.submit();
      });
    });
  });

  const key = "returnFocusTo";

  function saveFocus() {
    const activeElementId = document.activeElement.getAttribute("id");
    sessionStorage.setItem(key, "#" + activeElementId);
  }

  function returnFocus() {
    const returnFocusTo = sessionStorage.getItem(key);
    if (returnFocusTo) {
      sessionStorage.removeItem("returnFocusTo");
      const returnFocusToEl = document.querySelector(returnFocusTo);
      returnFocusToEl && returnFocusToEl.focus && returnFocusToEl.focus();
    }
  }

  // Forms

  window.addEventListener("DOMContentLoaded", () => {
    // In some cases we should preserve focus after page reload
    returnFocus();

    // show form controls when the textarea receives focus or back button is used and value exists
    const commentContainerTextarea = document.querySelector(
      ".comment-container textarea"
    );
    const commentContainerFormControls = document.querySelector(
      ".comment-form-controls, .comment-ccs"
    );

    if (commentContainerTextarea) {
      commentContainerTextarea.addEventListener(
        "focus",
        function focusCommentContainerTextarea() {
          commentContainerFormControls.style.display = "block";
          commentContainerTextarea.removeEventListener(
            "focus",
            focusCommentContainerTextarea
          );
        }
      );

      if (commentContainerTextarea.value !== "") {
        commentContainerFormControls.style.display = "block";
      }
    }

    // Expand Request comment form when Add to conversation is clicked
    const showRequestCommentContainerTrigger = document.querySelector(
      ".request-container .comment-container .comment-show-container"
    );
    const requestCommentFields = document.querySelectorAll(
      ".request-container .comment-container .comment-fields"
    );
    const requestCommentSubmit = document.querySelector(
      ".request-container .comment-container .request-submit-comment"
    );

    if (showRequestCommentContainerTrigger) {
      showRequestCommentContainerTrigger.addEventListener("click", () => {
        showRequestCommentContainerTrigger.style.display = "none";
        Array.prototype.forEach.call(requestCommentFields, (element) => {
          element.style.display = "block";
        });
        requestCommentSubmit.style.display = "inline-block";

        if (commentContainerTextarea) {
          commentContainerTextarea.focus();
        }
      });
    }

    // Mark as solved button
    const requestMarkAsSolvedButton = document.querySelector(
      ".request-container .mark-as-solved:not([data-disabled])"
    );
    const requestMarkAsSolvedCheckbox = document.querySelector(
      ".request-container .comment-container input[type=checkbox]"
    );
    const requestCommentSubmitButton = document.querySelector(
      ".request-container .comment-container input[type=submit]"
    );

    if (requestMarkAsSolvedButton) {
      requestMarkAsSolvedButton.addEventListener("click", () => {
        requestMarkAsSolvedCheckbox.setAttribute("checked", true);
        requestCommentSubmitButton.disabled = true;
        requestMarkAsSolvedButton.setAttribute("data-disabled", true);
        requestMarkAsSolvedButton.form.submit();
      });
    }

    // Change Mark as solved text according to whether comment is filled
    const requestCommentTextarea = document.querySelector(
      ".request-container .comment-container textarea"
    );

    const usesWysiwyg =
      requestCommentTextarea &&
      requestCommentTextarea.dataset.helper === "wysiwyg";

    function isEmptyPlaintext(s) {
      return s.trim() === "";
    }

    function isEmptyHtml(xml) {
      const doc = new DOMParser().parseFromString(`<_>${xml}</_>`, "text/xml");
      const img = doc.querySelector("img");
      return img === null && isEmptyPlaintext(doc.children[0].textContent);
    }

    const isEmpty = usesWysiwyg ? isEmptyHtml : isEmptyPlaintext;

    if (requestCommentTextarea) {
      requestCommentTextarea.addEventListener("input", () => {
        if (isEmpty(requestCommentTextarea.value)) {
          if (requestMarkAsSolvedButton) {
            requestMarkAsSolvedButton.innerText =
              requestMarkAsSolvedButton.getAttribute("data-solve-translation");
          }
        } else {
          if (requestMarkAsSolvedButton) {
            requestMarkAsSolvedButton.innerText =
              requestMarkAsSolvedButton.getAttribute(
                "data-solve-and-submit-translation"
              );
          }
        }
      });
    }

    const selects = document.querySelectorAll(
      "#request-status-select, #request-organization-select"
    );

    selects.forEach((element) => {
      element.addEventListener("change", (event) => {
        event.stopPropagation();
        saveFocus();
        element.form.submit();
      });
    });

    // Submit requests filter form on search in the request list page
    const quickSearch = document.querySelector("#quick-search");
    if (quickSearch) {
      quickSearch.addEventListener("keyup", (event) => {
        if (event.keyCode === ENTER) {
          event.stopPropagation();
          saveFocus();
          quickSearch.form.submit();
        }
      });
    }

    // Submit organization form in the request page
    const requestOrganisationSelect = document.querySelector(
      "#request-organization select"
    );

    if (requestOrganisationSelect) {
      requestOrganisationSelect.addEventListener("change", () => {
        requestOrganisationSelect.form.submit();
      });

      requestOrganisationSelect.addEventListener("click", (e) => {
        // Prevents Ticket details collapsible-sidebar to close on mobile
        e.stopPropagation();
      });
    }

    // If there are any error notifications below an input field, focus that field
    const notificationElm = document.querySelector(".notification-error");
    if (
      notificationElm &&
      notificationElm.previousElementSibling &&
      typeof notificationElm.previousElementSibling.focus === "function"
    ) {
      notificationElm.previousElementSibling.focus();
    }
  });

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

    // Creates a new chevron SVG element (static, no user content)
    function createChevronSvg() {
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('width', '12');
      svg.setAttribute('height', '12');
      svg.setAttribute('focusable', 'false');
      svg.setAttribute('viewBox', '0 0 12 12');
      svg.classList.add('dropdown-chevron-icon');
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('fill', 'none');
      path.setAttribute('stroke', 'currentColor');
      path.setAttribute('stroke-linecap', 'round');
      path.setAttribute('d', 'M3 4.5l2.6 2.6c.2.2.5.2.7 0L9 4.5');
      svg.appendChild(path);
      return svg;
    }

    // Safely sets the button label using textContent to avoid XSS,
    // then appends the static chevron SVG as a DOM node.
    function setButtonLabel(text) {
      button.textContent = text + ' ';
      button.appendChild(createChevronSvg());
    }

    const button = document.createElement('button');
    button.className = 'dropdown-toggle';
    button.setAttribute('aria-haspopup', 'true');
    setButtonLabel('Filter by Tag (All)');

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

    let isDropdownOpen = false;

    // Handle dropdown toggle visibility explicitly and locally
    button.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopImmediatePropagation(); // Kills any Zendesk native listeners that might interfere
      
      isDropdownOpen = !isDropdownOpen;
      
      // close other native dropdowns SAFELY (remove inline styles instead of forcing none)
      document.querySelectorAll('.topic-filters .dropdown-toggle').forEach(btn => {
        if (btn !== button) {
          btn.setAttribute('aria-expanded', 'false');
          const nextMenu = btn.nextElementSibling;
          if (nextMenu && nextMenu.classList.contains('dropdown-menu')) {
            nextMenu.style.display = ''; // Clear inline style so CSS can take over again!
          }
        }
      });
      
      button.setAttribute('aria-expanded', isDropdownOpen ? 'true' : 'false');
      dropdownMenu.style.display = isDropdownOpen ? 'block' : 'none'; // Explicit override
    });

    function closeTagFilter() {
      if (isDropdownOpen) {
        isDropdownOpen = false;
        button.setAttribute('aria-expanded', 'false');
        dropdownMenu.style.display = 'none';
      }
    }

    // Close when clicking outside
    document.addEventListener('click', closeTagFilter);

    // Close when clicking other native Zendesk dropdown toggles
    document.querySelectorAll('.topic-filters .dropdown-toggle').forEach(btn => {
      if (btn !== button) {
        btn.addEventListener('click', closeTagFilter);
      }
    });

    // 4. Handle the filtering logic when a selection changes
    function handleOptionClick(e) {
      e.preventDefault();
      const selectedTagValue = this.getAttribute('data-value');
      
      // Update checkmarks
      const options = dropdownMenu.querySelectorAll('a');
      options.forEach(o => o.setAttribute('aria-checked', 'false'));
      this.setAttribute('aria-checked', 'true');
      
      // Update button text safely (textContent prevents HTML injection)
      const rawText = this.textContent.trim();
      const textToDisplay = selectedTagValue === 'all' ? 'Filter by Tag (All)' : rawText;
      setButtonLabel(textToDisplay);

      // Explicitly close the dropdown menu
      isDropdownOpen = false;
      button.setAttribute('aria-expanded', 'false');
      dropdownMenu.style.display = 'none';

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
      setButtonLabel('Loading all posts...');

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
        setButtonLabel('Filter by Tag (All)');
        
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

})();
