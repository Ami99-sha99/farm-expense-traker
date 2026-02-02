let expenses = [];
let totalExpense = 0;
let totalRevenue = 0;

function addExpense() {
    let crop = document.getElementById("crop").value;
    let item = document.getElementById("expenseItem").value;
    let amount = parseInt(document.getElementById("expenseAmount").value);

    if (!crop) {
        alert("Select crop first!");
        return;
    }

    if (!item || !amount) {
        alert("Enter valid expense!");
        return;
    }

    expenses.push({ crop, item, amount });
    totalExpense += amount;

    let li = document.createElement("li");
    li.innerText = ${item} - ₹${amount};
    document.getElementById("expenseList").appendChild(li);

    document.getElementById("totalExpense").innerText = totalExpense;

    document.getElementById("expenseItem").value = "";
    document.getElementById("expenseAmount").value = "";
}

function calculateRevenue() {
    let price = parseFloat(document.getElementById("price").value);
    let quantity = parseFloat(document.getElementById("quantity").value);

    if (!price || !quantity) {
        alert("Enter price and quantity!");
        return;
    }

    totalRevenue = price * quantity;
    document.getElementById("totalRevenue").innerText = totalRevenue;

    calculateProfitLoss();
}

function calculateProfitLoss() {
    let result = totalRevenue - totalExpense;
    let text = document.getElementById("profitLossText");

    if (result >= 0) {
        text.style.color = "green";
        text.innerText = "Profit: ₹ " + result;
    } else {
        text.style.color = "red";
        text.innerText = "Loss: ₹ " + Math.abs(result);
    }
}