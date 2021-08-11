import faker from "faker";
import fs from "fs";
import dayjs from "dayjs";

const [numberOfFakeData = 1000] = process.argv.slice(2);
const fakeData = [];

for (let i = 0; i < numberOfFakeData; i++) {
    fakeData.push({
        id: i+1,
        user: { name : faker.name.findName() },
        content: faker.lorem.paragraph(),
        createdAt: dayjs(faker.date.datetime()).format("DD/MM/YYYY")
    })
};

fs.writeFileSync("./data.json", JSON.stringify(fakeData));
