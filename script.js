// Fade-in effect on hero section
document.addEventListener("DOMContentLoaded", function () {
  const heroSection = document.getElementById("hero");
  if (heroSection) {
    heroSection.classList.add("fade-in");
  }
});

// Toggle open and close of project sections
function initializeProjectButtons() {
  const viewProjectsButton = document.querySelector('.view-projects-button');
  const projectDescriptions = document.querySelectorAll('.project-description');

  if (viewProjectsButton && projectDescriptions.length > 0) {
    viewProjectsButton.addEventListener('click', () => {
      projectDescriptions.forEach(desc => {
        const isOpen = desc.style.display === 'block' || desc.classList.contains('active');
        desc.style.display = isOpen ? 'none' : 'block';
        desc.style.opacity = isOpen ? '0' : '1';
      });
    });
  }
}

document.addEventListener("DOMContentLoaded", initializeProjectButtons);

// Email icon
const emailIcon = document.querySelector('.email-icon');
if (emailIcon) {
  emailIcon.addEventListener('click', () => {
    // Add email icon click functionality here if needed
  });
}

// Social links
const socialLinks = document.querySelector('.social-links');
if (socialLinks) {
  socialLinks.addEventListener('click', (e) => {
    // Add social link click functionality here if needed
  });
}

// Scroll effect for hiding/showing social links and email icon
let prevScrollPos = window.pageYOffset;
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (socialLinks && emailIcon) {
    if (prevScrollPos > currentScrollPos) {
      // Scrolling up: show elements
      socialLinks.style.opacity = "1";
      emailIcon.style.opacity = "1";
    } else {
      // Scrolling down: hide elements
      socialLinks.style.opacity = "0";
      emailIcon.style.opacity = "0";
    }
  }
  prevScrollPos = currentScrollPos; // Update previous scroll position
};

// Floating banner scrolling effect
document.addEventListener("DOMContentLoaded", function() {
  const banner = document.querySelector('.floating-banner');
  if (banner) {
    const bannerWidth = banner.scrollWidth; // Get the total width of the banner

    // Duplicate the banner content for continuous scrolling
    banner.innerHTML += banner.innerHTML;

    // Set the initial position of the banner
    let position = 0;
    const speed = 1; // Adjust speed of scrolling here

    function scrollBanner() {
      position -= speed;

      // Reset position if the banner has completely scrolled out
      if (Math.abs(position) >= bannerWidth) {
        position = 0;
      }

      banner.style.transform = `translateX(${position}px)`;
      requestAnimationFrame(scrollBanner); // Request the next frame
    }

    scrollBanner(); // Start the scrolling effect
  }
});
