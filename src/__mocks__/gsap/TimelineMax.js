export class TimelineMax {
  constructor() {
    // console.log('Mock TimelineMax: constructor was called');
    this.progress = jest.fn().mockReturnThis();
    this.clear = jest.fn().mockReturnThis();
    this.to = jest.fn().mockReturnThis();
    this.from = jest.fn().mockReturnThis();
    this.fromTo = jest.fn().mockReturnThis();
    this.staggerFrom = jest.fn().mockReturnThis();
  }
}

export default TimelineMax;
