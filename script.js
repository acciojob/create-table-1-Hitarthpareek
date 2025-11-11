 
function insert_Row() {
  const table = document.getElementById("sampleTable");

  const cell1 = document.createElement("td");
  const cell2 = document.createElement("td");
  cell1.textContent = `New Cell1`;
  cell2.textContent = `New Cell2`;

  // Create new row
  const row = document.createElement("tr");
  row.appendChild(cell1);
  row.appendChild(cell2);


  table.insertBefore(row, table.rows[0]);
}
