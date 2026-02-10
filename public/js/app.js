// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
    });

    // Close menu when a link is clicked
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.style.display = 'none';
        });
    });
}

// Contact Form Handler
function handleContactForm(event) {
    event.preventDefault();
    
    const form = event.target;
    const formMessage = document.getElementById('formMessage');
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const company = document.getElementById('company').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Validate form
    if (!name || !email || !subject || !message) {
        showMessage('Please fill in all required fields.', 'error');
        return;
    }
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showMessage('Please enter a valid email address.', 'error');
        return;
    }
    
    // In a real application, you would send this data to a server
    // For now, we'll just show a success message
    const formData = {
        name: name,
        email: email,
        phone: phone,
        company: company,
        subject: subject,
        message: message,
        timestamp: new Date().toISOString()
    };
    
    // Log form data (in production, send to backend)
    console.log('Form submitted:', formData);
    
    // Show success message
    showMessage('Thank you! We\'ve received your message. We\'ll get back to you as soon as possible.', 'success');
    
    // Reset form
    form.reset();
    
    // Note: For actual email functionality, you would need:
    // 1. An Azure Function API endpoint
    // 2. SendGrid or similar email service integration
    // 3. Backend logic to send the email
    // 
    // Example of what the backend call would look like:
    // fetch('/api/send-email', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(formData)
    // });
}

function showMessage(message, type) {
    const formMessage = document.getElementById('formMessage');
    formMessage.textContent = message;
    formMessage.style.display = 'block';
    formMessage.className = type === 'success' ? 'success-message' : 'error-message';
    
    // Add custom styles for message display
    if (type === 'success') {
        formMessage.style.color = '#28a745';
        formMessage.style.backgroundColor = '#d4edda';
        formMessage.style.padding = '12px';
        formMessage.style.borderRadius = '4px';
        formMessage.style.border = '1px solid #c3e6cb';
    } else {
        formMessage.style.color = '#dc3545';
        formMessage.style.backgroundColor = '#f8d7da';
        formMessage.style.padding = '12px';
        formMessage.style.borderRadius = '4px';
        formMessage.style.border = '1px solid #f5c6cb';
    }
    
    // Clear message after 5 seconds
    setTimeout(() => {
        formMessage.style.display = 'none';
    }, 5000);
}

// Smooth scroll for same-page navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        // Don't prevent default for empty hashes
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Add active class to current navigation item
function setActiveNav() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (currentPath === href || (currentPath === '/' && href === '/')) {
            link.style.color = 'var(--primary-color)';
            link.style.fontWeight = '700';
        }
    });
}

// Call on page load
document.addEventListener('DOMContentLoaded', setActiveNav);

// Intersection Observer for fade-in animations on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Apply observer to service cards and other elements
document.querySelectorAll('.service-card, .reason, .stat-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Analytics and error tracking (optional)
window.addEventListener('error', (event) => {
    console.error('Error:', event.error);
    // In production, you might send this to an error tracking service
});

// Log page performance (optional)
window.addEventListener('load', () => {
    if (window.performance && window.performance.timing) {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log('Page load time:', pageLoadTime, 'ms');
    }
});
