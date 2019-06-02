export class TimelineMax {
  constructor() {
    // console.log('Mock TimelineMax: constructor was called');
    this.to = jest.fn().mockReturnThis();
    this.from = jest.fn().mockReturnThis();
    this.fromTo = jest.fn().mockReturnThis();
    this.staggerFrom = jest.fn().mockReturnThis();
  }
}

export default TimelineMax;
