document.getElementById('stockForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const pricePerShare = parseFloat(document.getElementById('pricePerShare').value);
    const numberOfShares = parseInt(document.getElementById('numberOfShares').value);
    const newPricePerShare = parseFloat(document.getElementById('newPricePerShare').value);

    const totalCost = pricePerShare * numberOfShares;
    const newTotalValue = newPricePerShare * numberOfShares;
    const gain = newTotalValue - totalCost;

    document.getElementById('result').textContent = `Gain: Rs ${gain.toLocaleString()}`;

    document.getElementById('explanation').innerHTML = `
        <p><strong>Calculation:</strong></p>
        <p>Total Cost = Rs ${pricePerShare.toLocaleString()} × ${numberOfShares.toLocaleString()} = Rs ${totalCost.toLocaleString()}</p>
        <p>New Total Value = Rs ${newPricePerShare.toLocaleString()} × ${numberOfShares.toLocaleString()} = Rs ${newTotalValue.toLocaleString()}</p>
        <p>Gain = Rs ${newTotalValue.toLocaleString()} - Rs ${totalCost.toLocaleString()} = Rs ${gain.toLocaleString()}</p>
        <p><strong>Formula:</strong></p>
        <p>Total Cost = Price per Share × Number of Shares</p>
        <p>New Total Value = New Price per Share × Number of Shares</p>
        <p>Gain = New Total Value - Total Cost</p>
    `;
});
