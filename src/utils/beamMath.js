export const udlLoadDistribution = [
  {
    supports: 2,
    distribution: [50, 50],
  },
  {
    supports: 3,
    distribution: [19, 62, 19],
  },
  { supports: 4, distribution: [13, 37, 37, 13] },
  { supports: 5, distribution: [10, 28, 24, 28, 10] },
  { supports: 6, distribution: [8, 23, 19, 19, 23, 8] },
  { supports: 7, distribution: [7, 19, 15, 18, 15, 19, 7] },
  { supports: 8, distribution: [6, 16, 14, 14, 14, 16, 16, 6] },
];

export function calculateSupportLoads(beamLength, supports, loads, udl) {
  let sections = [];
  // Determine Sections
  supports.forEach((support, index) => {
    if (index === 0) {
      // sections.push({ id: 1, start: 0, end: support, length: support });
    } else {
      sections.push({
        id: index,
        r1: supports[index - 1],
        r2: support,
        l: support - supports[index - 1],
      });
    }
  });

  // Calculate Loads
  sections.forEach((section) => {
    let sectionLoads = loads.filter(
      (load) => load.position >= section.r1 && load.position < section.r2
    );

    let supportLoads = Array(2).fill(0);
    sectionLoads.forEach((load) => {
      supportLoads[1] =
        supportLoads[1] +
        (load.weight * (load.position - section.r1)) / section.l;
      supportLoads[0] = supportLoads[0] + (load.weight - supportLoads[1]);
    });
    section.load = supportLoads;
  });

  let totalLoads = Array(supports.length).fill(0);
  supports.forEach((support, index) => {
    sections.find((section) => {
      if (section.r2 === support) {
        totalLoads[index] = totalLoads[index] + section.load[1];
      } else if (section.r1 === support) {
        totalLoads[index] = totalLoads[index] + section.load[0];
      }
    });
  });

  // Add UDL to each support - up to 8 supports
  let udlDistribution = udlLoadDistribution.find(
    (x) => x.supports === supports.length
  ).distribution;

  let supportLoadsWithUdl = totalLoads.map(
    (load, index) => (load += (udlDistribution[index] * udl) / 100)
  );

  let result = {};
  supports.forEach((support, index) => {
    result[support] = supportLoadsWithUdl[index];
  });

  return result;
}

let beamLength = 24;
let supports = [1, 6, 12, 15];
let loads = [
  { position: 8, weight: 100 },
  { position: 14, weight: 400 },
];
let udl = 100; // Uniformly distributed load of 200 units per length

console.log(calculateSupportLoads(beamLength, supports, loads, udl));
