// function calculateSupportLoads(beamLength, supports, loads) {
//   let totalLoad = loads.reduce((total, load) => total + load.weight, 0);
//   let momentAboutSupportA = loads.reduce(
//     (total, load) => total + load.weight * (beamLength - load.position),
//     0
//   );

//   let loadOnSupportA = momentAboutSupportA / beamLength;
//   let loadOnSupportB = totalLoad - loadOnSupportA;

//   let supportLoads = {};
//   supports.forEach((support, index) => {
//     supportLoads[support] = index === 0 ? loadOnSupportA : loadOnSupportB;
//   });

//   return supportLoads;
// }

// // Usage:
// let beamLength = 12;
// let supports = [1, 12];
// let loads = [
//   { position: 3, weight: 100 },
//   { position: 9, weight: 4000 },
// ];

// console.log(calculateSupportLoads(beamLength, supports, loads));

export function calculateSupportLoads(beamLength, supports, loads, udl) {
  let totalLoad =
    loads.reduce((total, load) => total + load.weight, 0) + udl * beamLength;
  let supportLoads = Array(supports.length).fill(0);

  for (let i = 0; i < supports.length - 1; i++) {
    let sectionLength = supports[i + 1] - supports[i];
    let sectionLoads = loads.filter(
      (load) => load.position >= supports[i] && load.position < supports[i + 1]
    );
    let sectionLoad =
      sectionLoads.reduce((total, load) => total + load.weight, 0) +
      udl * sectionLength;
    let momentAboutSupport =
      sectionLoads.reduce(
        (total, load) => total + load.weight * (load.position - supports[i]),
        0
      ) +
      (udl * sectionLength * sectionLength) / 2;

    supportLoads[i] += momentAboutSupport / sectionLength;
    supportLoads[i + 1] += sectionLoad - momentAboutSupport / sectionLength;
  }

  let remainingLoad =
    totalLoad - supportLoads.reduce((total, load) => total + load, 0);
  supportLoads[supportLoads.length - 1] += remainingLoad;

  let supportLoadsObj = {};
  supports.forEach((support, index) => {
    supportLoadsObj[support] = supportLoads[index];
  });

  return supportLoadsObj;
}

// Usage:
// let beamLength = 12;
// let supports = [1, 6, 12];
// let loads = [
//   { position: 3, weight: 100 },
//   { position: 9, weight: 4000 },
// ];
// let udl = 200; // Uniformly distributed load of 200 units per length

// console.log(calculateSupportLoads(beamLength, supports, loads, udl));
