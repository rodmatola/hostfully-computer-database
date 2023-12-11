export const computersListPage = {
  computersFound: '#main > h1',
  searchField: '#searchbox',
  filterBtn: '#searchsubmit',
  addNewComputerBtn: '#add',
  alertMessage: '.alert-message',
  tableComputers: 'tbody > tr > td > a'
};

export const computerInfoForm = {
  computerNameField: '#name',
  introducedField: '#introduced',
  discontinuedField: '#discontinued',
  companyDropDown: '#company',
}

export const addNewComputerPage = {
  computerInfo: computerInfoForm,
  createComputerBtn: '[type="submit"]',
  cancelBtn: 'a.btn'
}

export const editComputerPage = {
  computerInfo: computerInfoForm,
  deleteComputerBtn: '[class="btn danger"]',
  saveComputerBtn: '[type="submit"]',
  cancelBtn: 'a.btn'
}
