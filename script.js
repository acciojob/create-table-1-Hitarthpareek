function insert_Row() {
  // Get the table
  const table = document.getElementById("sampleTable");

  // Create new row and two cells
  const newRow = document.createElement("tr");
  const cell1 = document.createElement("td");
  const cell2 = document.createElement("td");

  cell1.textContent = "New Cell1";
  cell2.textContent = "New Cell2";

  newRow.appendChild(cell1);
  newRow.appendChild(cell2);

  // Insert row at the top of the tbody (or table if no tbody)
  if (table.tBodies.length > 0) {
    const tbody = table.tBodies[0];
    tbody.insertBefore(newRow, tbody.firstChild);
  } else {
    table.insertBefore(newRow, table.firstChild);
  }
}
