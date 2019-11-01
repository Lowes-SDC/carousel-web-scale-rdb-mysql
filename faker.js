const faker = require('faker');
const fs = require('fs');
const seedCSV = fs.createWriteStream('./seed.csv');
seedCSV.write('_id,Name,Price,Rating,Reviews,Category,Picture\n', 'utf8');

function writeTenMillionUsers(writer, encoding, callback) {
    let i = 10000000;
    function write() {
      let status = true;
      do {
        let Name = faker.name.title();
        let Price = faker.finance.amount();
        let Rating = faker.random.number({
            'min': 1,
            'max': 5,
        });
        let Reviews = faker.random.number({
            'min': 7,
            'max': 15,
        });
        let Category = faker.random.number({
            'min': 1,
            'max': 7,
        });
        let Picture = faker.image.cats();
        let data = `${i},${Name},${Price},${Rating},${Reviews},${Category},${Picture}\n`;
        i--;
        if (i === 0) {
          writer.write(data, encoding, callback);
        } else {
          status = writer.write(data, encoding);
        }
      } while (i > 0 && status);
      if (i > 0) {
        writer.once('drain', write);
      }
    }
  write()
}

writeTenMillionUsers(seedCSV, 'utf-8', () => {
    seedCSV.end();
});