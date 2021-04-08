import fs from 'fs';

const dir = './results/1617900265890';

const heapData = [];

const files = fs.readdirSync(dir);

files.forEach((file) => {
  if (file.split('.')[1] !== 'json') {
    return;
  }
  const json = JSON.parse(fs.readFileSync(`${dir}/${file}`).toString());
  const heapSizes = [];

  json.traceEvents.forEach((event) => {
    const heapSize = event.args?.data?.jsHeapSizeUsed;
    if (heapSize) heapSizes.push(heapSize);
  });

  heapData.push({
    name: file.split('.')[0],
    minHeapSize: Math.min(...heapSizes),
    maxHeapSize: Math.max(...heapSizes),
  });
});

// console.log(`JS Heap: ${Math.min(...heapSizes)} - ${Math.max(...heapSizes)}`);
console.log(heapData.map((data) => Object.values(data).join(',')));
fs.writeFileSync(
  `${dir}/jsHeap.csv`,
  heapData.map((data) => Object.values(data).join(',')).join('\n'),
);
