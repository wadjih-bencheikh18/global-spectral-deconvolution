import { groupPeaks } from '../groupPeaks';

describe('groupPeaks', () => {
  it('default factor value', () => {
    let result = groupPeaks([
      { x: 5, y: 10, shape: { width: 5 } },
      { x: 10, y: 10, shape: { width: 5 } },
      { x: 30, y: 10, shape: { width: 5 } },
    ]);
    expect(result).toStrictEqual([
      [
        { x: 5, y: 10, shape: { width: 5 } },
        { x: 10, y: 10, shape: { width: 5 } },
      ],
      [{ x: 30, y: 10, shape: { width: 5 } }],
    ]);
  });

  it('factor = 0.1', () => {
    let result = groupPeaks(
      [
        { x: 5, y: 10, shape: { width: 5 } },
        { x: 10, y: 10, shape: { width: 5 } },
        { x: 30, y: 10, shape: { width: 5 } },
      ],
      0.1,
    );
    expect(result).toStrictEqual([
      [{ x: 5, y: 10, shape: { width: 5 } }],
      [{ x: 10, y: 10, shape: { width: 5 } }],
      [{ x: 30, y: 10, shape: { width: 5 } }],
    ]);
  });

  it('factor=3', () => {
    let result = groupPeaks(
      [
        { x: 5, y: 10, shape: { width: 5 } },
        { x: 10, y: 10, shape: { width: 5 } },
        { x: 30, y: 10, shape: { width: 5 } },
      ],
      3,
    );
    expect(result).toStrictEqual([
      [
        { x: 5, y: 10, shape: { width: 5 } },
        { x: 10, y: 10, shape: { width: 5 } },
      ],
      [{ x: 30, y: 10, shape: { width: 5 } }],
    ]);
  });

  it('factor=5', () => {
    let result = groupPeaks(
      [
        { x: 5, y: 10, shape: { width: 5 } },
        { x: 10, y: 10, shape: { width: 5 } },
        { x: 30, y: 10, shape: { width: 5 } },
      ],
      5,
    );
    expect(result).toStrictEqual([
      [
        { x: 5, y: 10, shape: { width: 5 } },
        { x: 10, y: 10, shape: { width: 5 } },
        { x: 30, y: 10, shape: { width: 5 } },
      ],
    ]);
  });
});
