document.addEventListener('DOMContentLoaded', () => {
    console.log('Nousagi Website Initialized.');

    // Dark/Light Mode Toggle
    const modeToggle = document.getElementById('mode-toggle');
    modeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        // Save the user's preference in localStorage so the theme persists across sessions
        if (document.body.classList.contains('light-mode')) {
            localStorage.setItem('theme', 'light');
        } else {
            localStorage.setItem('theme', 'dark');
        }
    });

    // Check saved theme from localStorage and apply it
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.classList.add(savedTheme + '-mode');
    } else {
        document.body.classList.add('dark-mode'); // Default theme
    }

    // Modal Popup Functionality
    const modal = document.getElementById('modal');
    const closeModalButton = document.getElementById('close-modal');

    // Trigger modal to appear after 3 seconds (example for a member or event)
    setTimeout(() => {
        modal.classList.add('active');
    }, 3000);

    // Close the modal when the close button is clicked
    closeModalButton.addEventListener('click', () => {
        modal.classList.remove('active');
    });

    // Custom Cursor Logic
    const cursor = document.createElement('div');
    cursor.classList.add('cursor');
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = `${e.pageX}px`;
        cursor.style.top = `${e.pageY}px`;
    });

    // Custom Cursor Hover Effects
    const interactiveElements = document.querySelectorAll('a, .btn, .member');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.width = '30px';
            cursor.style.height = '30px';
            cursor.style.backgroundColor = '#00c8ff'; // Change cursor color on hover
        });

        el.addEventListener('mouseleave', () => {
            cursor.style.width = '20px';
            cursor.style.height = '20px';
            cursor.style.backgroundColor = '#4caf50'; // Reset cursor color
        });
    });

    // Smooth scrolling behavior for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').slice(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth',
            });
        });
    });

    // Member Card Flip Effect
    const members = document.querySelectorAll('.member');
    members.forEach(member => {
        member.addEventListener('mouseover', () => {
            member.style.transform = 'rotateY(180deg)';
            member.style.boxShadow = '0 4px 15px rgba(0, 255, 0, 0.3)';
        });

        member.addEventListener('mouseout', () => {
            member.style.transform = 'rotateY(0deg)';
            member.style.boxShadow = '';
        });
    });

    // Loading Spinner Visibility
    window.addEventListener('load', () => {
        document.body.classList.add('loaded'); // Hide the loading spinner
    });

    // Custom Scrollbar Styling: Ensures that custom scrollbar styles are applied
    const styleElement = document.createElement('style');
    styleElement.innerHTML = `
      ::-webkit-scrollbar {
        width: 12px;
      }

      ::-webkit-scrollbar-track {
        background-color: #1b1b1b;
      }

      ::-webkit-scrollbar-thumb {
        background-color: #4caf50;
        border-radius: 10px;
        box-shadow: 0 0 10px #4caf50;
        transition: background-color 0.3s ease;
      }

      ::-webkit-scrollbar-thumb:hover {
        background-color: #00c8ff;
        box-shadow: 0 0 15px #00c8ff;
      }
    `;
    document.head.appendChild(styleElement);

    // Parallax Effect for Hero Section: Use CSS for smooth background movement
    const hero = document.querySelector('.hero');
    window.addEventListener('scroll', () => {
        let offset = window.scrollY;
        hero.style.backgroundPosition = `center ${offset * 0.5}px`; // Parallax effect
    });

    // Modal Pop-Up - Example Trigger: Can be changed for specific events or members
    setTimeout(() => {
        modal.classList.add('active');
    }, 5000); // Show the modal after 5 seconds
});
