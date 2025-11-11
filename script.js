let count=0
function insert_Row() {
    //Write your code here
  let cell1 = document.createElement("td")
  let cell2 = document.createElement("td")
  cell1.textContent = `New Cell${count+1}`
  cell2.textContent = `New Cell${count+2}`
  count++
  let row = document.createElement("tr")
  row.appendChild(cell1)
  row.appendChild(cell2)

  let table = document.getElementById("sampleTable")
  table.prepend(row)
}
