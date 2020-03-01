import { PowerPipe } from './power.pipe';

fdescribe('PowerPipe', () => {
  it('create an instance', () => {
    const pipe = new PowerPipe();
    expect(pipe).toBeTruthy();
  });
  it('it should use power', () => {
    const pipe = new PowerPipe();
    expect(pipe.transform(2,3)).toBe(8);
  });
});
