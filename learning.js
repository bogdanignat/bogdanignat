import { allData } from './statesAndCapitals.js'

//select obj from the array and put them in a new array
const listArray = allData.map(function (continentMap) {
  return [
    continentMap.continentName,
    continentMap.countryName,
    continentMap.capital,
  ]
})

function makeDropDown(data, filtersAsArray, targetElement) {
  const filterArr = filterArray(data, filtersAsArray)
  const uniqueList = getUniqueValues(filterArr, filtersAsArray.length)
  populateDropDown(targetElement, uniqueList)
  //console.log(filterArr);
  // console.log(uniqueList);
}

function applyDropDown() {
  const selectContinentValue = document.getElementById('continents-id').value
  const selectStates = document.getElementById('states-id')
  makeDropDown(listArray, [selectContinentValue], selectStates) //populate dropdown
  applyDropDown2()
}

function applyDropDown2() {
  const selectContinentValue = document.getElementById('continents-id').value
  const selectStatesValue = document.getElementById('states-id').value
  const selectCapitals = document.getElementById('capitals-id')
  makeDropDown(
    listArray,
    [selectContinentValue, selectStatesValue],
    selectCapitals
  ) //populate dropdown
}

function afterDocumentLoads() {
  pupulateContinentDropDown()
  applyDropDown()
  applyDropDown2()
}

//function for unique values
function getUniqueValues(data, index) {
  const uniqueOption = new Set()
  data.forEach((arr) => uniqueOption.add(arr[index])) //adds a unique option
  return [...uniqueOption] //make a array from uniqueOptions
}

function pupulateContinentDropDown() {
  const uniqueList = getUniqueValues(listArray, 0)
  const el = document.getElementById('continents-id')
  populateDropDown(el, uniqueList)
}

function populateDropDown(el, listAsArray) {
  el.innerHTML = ''

  listAsArray.forEach((item) => {
    const option = document.createElement('option') //create a HTML element
    option.textContent = item
    el.appendChild(option)
  })
}

function filterArray(data, filterAsArray) {
  //data.filter (arr => arr[0] === filterAsArray[0] && arr[1] === filterAsArray[1]) //filter for array
  return data.filter((arr) => filterAsArray.every((item, i) => item === arr[i]))
}

document
  .getElementById('continents-id')
  .addEventListener('change', applyDropDown)
document.getElementById('states-id').addEventListener('change', applyDropDown2)
document.addEventListener('DOMContentLoaded', afterDocumentLoads)
