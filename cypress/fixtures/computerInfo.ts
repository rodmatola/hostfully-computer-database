import { faker } from '@faker-js/faker';

export const computerRandomInfo = {
  computerName: faker.commerce.productName(),
  introduced: faker.date.birthdate({ min: 2020, max: 2021, mode: 'year' }).toISOString().split('T')[0],
  discontinued: faker.date.birthdate({ min: 2022, max: 2023, mode: 'year' }).toISOString().split('T')[0],
  company: faker.number.int({ min: 1, max: 40 })
}

export const myComputerInfo = {
  computerName: 'MacBook 12-inch',
  introduced: '2015-04-10',
  discontinued: '2017-06-05',
  company: 'Apple Inc.'
}
