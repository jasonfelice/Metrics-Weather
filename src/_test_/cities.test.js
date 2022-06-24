import updateCities from '../redux/cities/cities';

describe('Cities Reducer', () => {
  it('Check the default state', () => {
    const mockState = undefined;
    const mockAction = { type: 'test' };
    const state = updateCities(mockState, mockAction);
    expect(state).toEqual([]);
  });

  it('Should return the given state', () => {
    const mockState = ['New York', 'Chicago', 'Denver'];
    const mockAction = { type: 'test' };
    const state = updateCities(mockState, mockAction);
    expect(state).toEqual(['New York', 'Chicago', 'Denver']);
  });
});
