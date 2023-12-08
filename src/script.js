const darkModeToggle = document.getElementById('darkModeToggle');
      const body = document.body;

      darkModeToggle.addEventListener('click', () => {
          // Toggle dark mode class on body
          body.classList.toggle('dark');

          // Toggle dark mode in localStorage
          const isDarkMode = body.classList.contains('dark');
          localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
      });

      // Check if dark mode preference is saved in localStorage
      const savedDarkMode = JSON.parse(localStorage.getItem('darkMode'));

      // Set dark mode if preference exists in localStorage
      if (savedDarkMode !== null) {
          body.classList.toggle('dark', savedDarkMode);
      }