class TimelineLite {
  constructor() {
    // console.log('Mock TimelineLite: constructor was called');
    this.to = jest.fn().mockReturnThis();
    this.from = jest.fn().mockReturnThis();
  }
}

export default TimelineLite;
