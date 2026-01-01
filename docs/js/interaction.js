document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.querySelector('.demo-canvas');
    if (!canvas) return;

    // Signal to CSS that JS is running
    document.body.classList.add('js-active');

    // Default values
    canvas.style.setProperty('--int-x', '0.5');
    canvas.style.setProperty('--int-y', '0.5');

    canvas.addEventListener('mousemove', function(e) {
        const rect = canvas.getBoundingClientRect();
        
        // Calculate normalized coordinates (0.0 to 1.0)
        let x = (e.clientX - rect.left) / rect.width;
        let y = (e.clientY - rect.top) / rect.height;

        // Clamp values between 0 and 1
        x = Math.max(0, Math.min(1, x));
        y = Math.max(0, Math.min(1, y));

        // Update CSS variables
        canvas.style.setProperty('--int-x', x);
        canvas.style.setProperty('--int-y', y);
    });

    // Touch support for mobile
    canvas.addEventListener('touchmove', function(e) {
        e.preventDefault(); // Prevent scrolling while interacting
        const touch = e.touches[0];
        const rect = canvas.getBoundingClientRect();
        
        let x = (touch.clientX - rect.left) / rect.width;
        let y = (touch.clientY - rect.top) / rect.height;

        x = Math.max(0, Math.min(1, x));
        y = Math.max(0, Math.min(1, y));

        canvas.style.setProperty('--int-x', x);
        canvas.style.setProperty('--int-y', y);
    }, { passive: false });
});