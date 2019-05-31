class Controller {
  constructor() {
    // console.log('Mock Controller: constructor was called');
  }
}

class Scene {
  constructor() {
    // console.log('Mock Scene: constructor was called');
    this.setPin = jest.fn().mockReturnThis();
    this.setTween = jest.fn().mockReturnThis();
    this.addTo = jest.fn().mockReturnThis();
    this.reverse = jest.fn().mockReturnThis();
  }
}

class ScrollMagic {
  constructor() {
    // console.log('Mock ScrollMagic: constructor was called');
  }
}

ScrollMagic.Controller = Controller;
ScrollMagic.Scene = Scene;

export default ScrollMagic;
