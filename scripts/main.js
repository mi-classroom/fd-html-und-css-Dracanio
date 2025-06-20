// Header Burger Menu
document.addEventListener("DOMContentLoaded", () => {
    const mainMenuOpenBtn = document.querySelector('[data-js-main-menu-open]');
    const mainMenuCloseBtn = document.querySelector('[data-js-main-menu-close]');
    const mainMenu = document.querySelector('[data-js-main-menu-target]');
    // Menü öffnen
    mainMenuOpenBtn.addEventListener('click', () => {
        mainMenu.classList.add('is-active');
    });
    // Menü schließen
    mainMenuCloseBtn.addEventListener('click', () => {
        mainMenu.classList.remove('is-active');
    });
});

//new On Page Navigation
document.addEventListener("DOMContentLoaded", () => {
    const menuContainer = document.querySelector('[data-js-page-navigation-menu]');
    const sections = document.querySelectorAll('[data-js-page-navigation-section]');

    sections.forEach((section, index) => {
        // Suche nach der ersten Überschrift (h1-h6) innerhalb der Sektion
        const heading = section.querySelector('h1, h2, h3, h4, h5, h6');

        if (heading) {
            // Erzeuge eine ID basierend auf dem Titeltext (slugify)
            let id = heading.textContent
                .toLowerCase()
                .replace(/[^\w\s-]/g, '')      // Sonderzeichen entfernen
                .replace(/\s+/g, '-')          // Leerzeichen durch Bindestriche ersetzen
                .replace(/-+/g, '-');          // Doppelte Bindestriche vermeiden

            // Fallback falls keine ID generiert werden kann
            if (!id) id = `section-${index}`;

            // ID zuweisen
            section.id = id;

            // Navigationspunkt erstellen
            const navItem = document.createElement('li');
            const navLink = document.createElement('a');
            navLink.href = `#${id}`;
            navLink.textContent = heading.textContent;

            navItem.appendChild(navLink);
            menuContainer.appendChild(navItem);
        }
    });
});
// Search function (Suchbegriff als console output)
document.addEventListener("DOMContentLoaded", () => {
    const searchOpenBtn = document.querySelector('[data-js-search-open]');
    const searchBar = document.querySelector('[data-js-search-bar]');
    const searchInput = document.querySelector('[data-js-search-input]');

    searchOpenBtn.addEventListener('click', () => {
        searchBar.toggleAttribute('hidden');
        if (!searchBar.hasAttribute('hidden')) {
            searchInput.focus(); // Cursor direkt im Eingabefeld
        }
    });
    searchBar.addEventListener('submit', (e) => {
        e.preventDefault();
        const term = searchInput.value.trim();

        if (term) {
            console.log("Gesuchter Begriff:", term);
        } else {
            console.log("Kein Suchbegriff eingegeben.");
        }
        searchBar.setAttribute('hidden', '');
        searchBar.reset();
    });
});