import { peakType } from '../gsd';

/**
 * This method will allow to enlarge peaks and prevent overlap between peaks
 * Because peaks may not be symmetric after we add 2 properties, from and to.
 * @param {Array} peakList
 * @param {object} [options={}]
 * @param {number} [options.factor=2]
 * @param {boolean} [options.overlap=false] by default we don't allow overlap
 * @return {Array} peakList
 */
interface optionsType {
  factor?: number;
  overlap?: boolean;
}
export function broadenPeaks(
  peakList: peakType[],
  options: optionsType = {},
): peakType[] {
  const { factor = 2, overlap = false }: optionsType = options;

  const peaks: peakType[] = JSON.parse(JSON.stringify(peakList));

  peaks.forEach((peak) => {
    peak.from = peak.x - (peak.shape.width / 2) * factor;
    peak.to = peak.x + (peak.shape.width / 2) * factor;
  });

  if (!overlap) {
    for (let i = 0; i < peaks.length - 1; i++) {
      let peak = peaks[i];
      let nextPeak = peaks[i + 1];
      if ((peak.to as number) > (nextPeak.from as number)) {
        peak.to = nextPeak.from =
          ((peak.to as number) + (nextPeak.from as number)) / 2;
      }
    }
  }

  for (let peak of peaks) {
    peak.shape.width = (peak.to as number) - (peak.from as number);
  }

  return peaks.map((peak: peakType): peakType => {
    const { x, y, shape }: peakType = peak;
    return { x, y, shape } as peakType;
  });
}
