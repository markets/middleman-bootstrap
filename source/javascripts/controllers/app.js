export default class AppCtrl {
  constructor() {
    this._initNavbar()
  }

  _initNavbar() {
    // Navbar shrink function
    const navbarShrink = () => {
      const navbar = find('#mainNav')
      if (!navbar) return

      if (window.scrollY === 0) {
        removeClass(navbar, 'navbar-shrink')
      } else {
        addClass(navbar, 'navbar-shrink')
      }
    };

    // Shrink the navbar
    navbarShrink()

    // Shrink the navbar when page is scrolled
    on(document, 'scroll', navbarShrink)
  }
}
