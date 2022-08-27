const createOrderCardBillTable = (billDetails) => {
	// Calculate Total Amount 
	let totalAmount = 0
	billDetails.forEach(element => {
		totalAmount = totalAmount + element.price
	})
	 const GSTbill = Math.round((10 / 100) * totalAmount)
	 const grandtotal = totalAmount + GSTbill;
	 console.log(totalAmount)
	 console.log(grandtotal)

	/* ---------------------------------------------------------------- */

	let billTable = document.createElement('table')
	let billTableHead = document.createElement('thead')
	let billTableBody = document.createElement('tbody')

	billTable.classList = 'table'

	/* ---------------------------------------------------------------- */
	// 1. Creating Heading Row

	let billHeadingRow = document.createElement('tr')
	let billHeadingColumn1 = document.createElement('th')
	let billHeadingColumn2 = document.createElement('th')
	let billHeadingColumn3 = document.createElement('th')

	billHeadingColumn1.innerText = '#'
	billHeadingColumn2.innerText = 'Item'
	billHeadingColumn3.innerText = 'Price'

	billHeadingRow.append(billHeadingColumn1, billHeadingColumn2, billHeadingColumn3)
	billTableHead.append(billHeadingRow)

	/* ---------------------------------------------------------------- */
	// 2. Creating Item Rows
	let billTableRows = []
	for(let i = 1; i <= billDetails.length; i++){
		billTableRows.push(document.createElement('tr'))

		let billTableColumns = []
		for(let j = 0; j < 3; j++) 
			billTableColumns.push(document.createElement('td'))

		billTableColumns[0].innerText = i
		billTableColumns[1].innerText = billDetails[i - 1].item
		billTableColumns[2].innerText = `$${billDetails[i - 1].price.toFixed(2)}`

		billTableRows[i - 1].append(...billTableColumns)
	}

	/* ---------------------------------------------------------------- */
	// 3. Creating Total Bill Row
	let totalBillTH = document.createElement('th')
	totalBillTH.setAttribute('colspan', 2)
	totalBillTH.innerText = ' sub total :'
	let totalBillTD = document.createElement('td')
	totalBillTD.innerText = `$${totalAmount.toFixed(2)}`
	let totalBillRow = document.createElement('tr')
	totalBillRow.append(totalBillTH, totalBillTD)



	// -------gst
	let GST = document.createElement('th')
	GST.setAttribute('colspan', 2)
	GST.innerText = `GST: 10% @ $${totalAmount}`
	let GSTamount = document.createElement('td')
	GSTamount.innerText = `$${GSTbill.toFixed(2)}`
	let GSTRow = document.createElement('tr')
	GSTRow.append(GST, GSTamount)



		// 3. Creating Grand total Bill Row
		let grandBillTH = document.createElement('th')
		grandBillTH.setAttribute('colspan', 2)
		grandBillTH.innerText = ' Grand Total :'
		let grandBillTD = document.createElement('td')
		grandBillTD.innerText = `$${grandtotal.toFixed(2)}`
		grandBillRow = document.createElement('tr')
		grandBillRow.append(grandBillTH, grandBillTD)
	
	

	/* ---------------------------------------------------------------- */
	billTableBody.append(...billTableRows, totalBillRow , GSTRow ,grandBillRow)
	billTable.appendChild(billTableHead)
	billTable.appendChild(billTableBody)

	return billTable
	
}