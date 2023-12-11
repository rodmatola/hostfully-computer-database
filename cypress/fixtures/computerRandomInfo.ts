import { faker } from '@faker-js/faker';

export const computerRandomInfo = {
  computerName: faker.commerce.productName(),
  introduced: faker.date.birthdate({ min: 2020, max: 2021, mode: 'year' }).toISOString().split('T')[0],
  discontinued: faker.date.birthdate({ min: 2022, max: 2023, mode: 'year' }).toISOString().split('T')[0],
  companyIndex: faker.number.int({ min: 1, max: 40 })
}
