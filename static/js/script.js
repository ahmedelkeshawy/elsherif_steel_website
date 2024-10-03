
  // Common function to toggle language
function toggleLanguage(button) {
    var lang = button.innerText; // Get the current language from the button text
    
    // Toggle text content of elements with data-en and data-ar attributes
    document.querySelectorAll('[data-en]').forEach(function(el) {
        if (lang === 'AR') {
            // Switch to Arabic
            el.innerText = el.getAttribute('data-ar');
            el.setAttribute('dir', 'rtl');
            el.setAttribute('lang', 'ar');
        } else {
            // Switch to English
            el.innerText = el.getAttribute('data-en');
            el.setAttribute('dir', 'ltr');
            el.setAttribute('lang', 'en');
        }
    });

    // Toggle visibility of .english and .arabic spans
    document.querySelectorAll('.english').forEach(function(el) {
        el.style.display = (lang === 'AR') ? 'none' : 'inline';
    });
    document.querySelectorAll('.arabic').forEach(function(el) {
        el.style.display = (lang === 'AR') ? 'inline' : 'none';
    });

    // Toggle the button text (AR <-> EN)
    button.innerText = (lang === 'AR') ? 'EN' : 'AR';
}

// Event listeners for both language toggle buttons
document.getElementById('lang-toggle').addEventListener('click', function() {
    toggleLanguage(this);
});

document.getElementById('lang-toggle1').addEventListener('click', function() {
    toggleLanguage(this);
});





// Scroll to section function for the Explore More button
function scrollToSection() {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
}
function scrollLeft() {
    const container = document.querySelector('.service-grid');
    const scrollAmount = 300; // Adjust this value as needed
    container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
}

function scrollRight() {
    const container = document.querySelector('.service-grid');
    const scrollAmount = 300; // Adjust this value as needed
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
}
function scrollLeft1() {
    const container = document.querySelector('.service-grids');
    const scrollAmount = 300; // Adjust this value as needed
    container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
}


function scrollRight1() {
    const container = document.querySelector('.service-grids');
    const scrollAmount = 300; // Adjust this value as needed
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
}
function scrollLeft2() {
    const container = document.querySelector('.service-grids1');
    const scrollAmount = 300; // Adjust this value as needed
    container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
}

function scrollRight2() {
    const container = document.querySelector('.service-grids1');
    const scrollAmount = 300; // Adjust this value as needed
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
}


    // Toggle dropdown visibility and animation
    document.querySelectorAll('.dropdown-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            const dropdown = this.nextElementSibling;
            const arrow = this.querySelector('.dropdown-arrow');

            // Toggle dropdown content
            if (dropdown.style.maxHeight === '0px' || dropdown.style.maxHeight === '') {
                dropdown.style.maxHeight = dropdown.scrollHeight + 'px';
                arrow.style.transform = 'rotate(-135deg)'; // Point arrow upwards
            } else {
                dropdown.style.maxHeight = '0px';
                arrow.style.transform = 'rotate(45deg)'; // Point arrow downwards
            }
        });
    });

function toggleDropdown(dropdownId) {
    var dropdown = document.getElementById(dropdownId);
    // Toggle the display property of the dropdown
    if (dropdown.style.display === "none" || dropdown.style.display === "") {
        dropdown.style.display = "block"; // Show the dropdown
    } else {
        dropdown.style.display = "none"; // Hide the dropdown
    }
}

// Optional: Close dropdown if clicked outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropdown-btn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            dropdowns[i].style.display = "none";
        }
    }
}

       function scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

      /* contact*/ 
     
    function toggleMenu() {
        const menu = document.getElementById("mobile-menu");
        menu.style.display = menu.style.display === "none" || menu.style.display === "" ? "block" : "none";
    }

    function toggleDropdown(event, dropdownId) {
        const dropdownContent = document.getElementById(dropdownId);
        const isVisible = dropdownContent.style.display === "block";
        
        // Close all dropdowns first
        const allDropdowns = document.querySelectorAll('.dropdown-content');
        allDropdowns.forEach(dropdown => {
            dropdown.style.display = "none";
        });

        // Toggle the clicked dropdown
        dropdownContent.style.display = isVisible ? "none" : "block";
        event.stopPropagation(); // Prevent the event from bubbling up
    }
    

    // Hide nav items in mobile view
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    function handleMediaChange(e) {
        const navItems = document.getElementById("nav-items");
        if (e.matches) {
            navItems.style.display = "none"; // Hide nav items in mobile view
        } else {
            navItems.style.display = "flex"; // Show nav items in larger view
        }
    }

    // Initial check
    handleMediaChange(mediaQuery);
    mediaQuery.addListener(handleMediaChange);