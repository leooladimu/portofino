/**
 * Tests for home.html
 * These tests verify the structure, content, and basic functionality of the portfolio home page
 */

describe('Home Page Tests', () => {
  let htmlContent;

  beforeEach(() => {
    // Load the HTML content before each test
    htmlContent = global.loadHTML('home.html');
    // Set up JSDOM document with the HTML content
    document.documentElement.innerHTML = htmlContent;
  });

  describe('Document Structure', () => {
    test('should have correct doctype and html structure', () => {
      expect(htmlContent).toMatch(/<!DOCTYPE html>/i);
      expect(htmlContent).toMatch(/<html lang="en">/i);
      expect(htmlContent).toMatch(/<head>.*<\/head>/s);
      expect(htmlContent).toMatch(/<body>.*<\/body>/s);
    });

    test('should have proper meta tags', () => {
      expect(htmlContent).toContain('<meta charset="UTF-8">');
      expect(htmlContent).toContain('<meta name="viewport" content="width=device-width, initial-scale=1.0">');
    });

    test('should have correct title', () => {
      expect(htmlContent).toContain('<title>My Portfolio</title>');
    });
  });

  describe('Navigation', () => {
    test('should have navigation element', () => {
      const nav = document.querySelector('nav');
      expect(nav).toBeTruthy();
    });

    test('should have navigation links', () => {
      const homeLink = document.querySelector('a[href="home.html"]');
      const aboutLink = document.querySelector('a[href="about.html"]');
      const projectsLink = document.querySelector('a[href="projects.html"]');
      
      expect(homeLink).toBeTruthy();
      expect(aboutLink).toBeTruthy();
      expect(projectsLink).toBeTruthy();
    });

    test('should have Home link marked as active', () => {
      const activeLink = document.querySelector('a.active');
      expect(activeLink).toBeTruthy();
      expect(activeLink.getAttribute('href')).toBe('home.html');
    });

    test('should have correct navigation text', () => {
      const homeLink = document.querySelector('a[href="home.html"]');
      const aboutLink = document.querySelector('a[href="about.html"]');
      const projectsLink = document.querySelector('a[href="projects.html"]');
      
      expect(homeLink.textContent.trim()).toBe('Home');
      expect(aboutLink.textContent.trim()).toBe('About');
      expect(projectsLink.textContent.trim()).toBe('Projects');
    });
  });

  describe('Main Content', () => {
    test('should have main content container', () => {
      const mainContent = document.querySelector('.main-content');
      expect(mainContent).toBeTruthy();
    });

    test('should display correct name and title', () => {
      const h1 = document.querySelector('h1');
      const subtitle = document.querySelector('.subtitle');
      
      expect(h1.textContent.trim()).toBe('Leo Ọládimú');
      expect(subtitle.textContent.trim()).toBe('Software Developer');
    });

    test('should have welcome section', () => {
      const welcomeHeading = document.querySelector('h2');
      const welcomeText = document.querySelector('main p');
      
      expect(welcomeHeading.textContent.trim()).toBe('Welcome!');
      expect(welcomeText.textContent).toContain("I'm Leo Ọládimú, a developer and designer");
    });

    test('should have semantic HTML structure', () => {
      const header = document.querySelector('header');
      const main = document.querySelector('main');
      const footer = document.querySelector('footer');
      
      expect(header).toBeTruthy();
      expect(main).toBeTruthy();
      expect(footer).toBeTruthy();
    });
  });

  describe('Footer', () => {
    test('should have copyright information', () => {
      const footer = document.querySelector('footer');
      expect(footer.textContent).toContain('© 2026 Leo Ọládimú');
    });
  });

  describe('CSS Styles', () => {
    test('should include embedded styles', () => {
      expect(htmlContent).toContain('<style>');
      expect(htmlContent).toContain('</style>');
    });

    test('should have flexbox layout styles', () => {
      expect(htmlContent).toContain('display: flex');
    });

    test('should have navigation styles', () => {
      expect(htmlContent).toContain('nav {');
      expect(htmlContent).toContain('width: 180px');
      expect(htmlContent).toContain('background: #222');
    });

    test('should have responsive design elements', () => {
      expect(htmlContent).toContain('max-width: 600px');
      expect(htmlContent).toContain('min-height: 100vh');
    });
  });

  describe('Content Validation', () => {
    test('should not have any broken or empty links', () => {
      const links = document.querySelectorAll('a[href]');
      links.forEach(link => {
        const href = link.getAttribute('href');
        expect(href).not.toBe('');
        expect(href).not.toBe('#');
        expect(href).toBeTruthy();
      });
    });

    test('should have proper text content', () => {
      expect(htmlContent).toContain('passionate about building elegant');
      expect(htmlContent).toContain('human-centered digital experiences');
    });

    test('should have valid HTML structure', () => {
      // Check that the document has the essential elements
      const nav = document.querySelector('nav');
      const mainContent = document.querySelector('.main-content');
      const header = document.querySelector('header');
      const main = document.querySelector('main');
      const footer = document.querySelector('footer');
      
      expect(nav).toBeTruthy();
      expect(mainContent).toBeTruthy();
      expect(header).toBeTruthy();
      expect(main).toBeTruthy();
      expect(footer).toBeTruthy();
      
      // Check that nav contains ul and li elements
      const navList = nav.querySelector('ul');
      const navItems = nav.querySelectorAll('li');
      expect(navList).toBeTruthy();
      expect(navItems.length).toBeGreaterThan(0);
    });
  });
});