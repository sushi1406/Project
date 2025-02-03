// Generate Gradient for Charts
function getGradient(ctx, color) {
    const gradient = ctx.createLinearGradient(0, 0, 0, 300);
    gradient.addColorStop(0, color);
    gradient.addColorStop(1, "rgba(255, 255, 255, 0.2)");
    return gradient;
}

// Revenue Chart
const revCtx = document.getElementById("revenueChart").getContext("2d");
new Chart(revCtx, {
    type: "bar",
    data: {
        labels: ["M", "T", "W", "T", "F", "S", "S"],
        datasets: [{
            data: [120, 90, 100, 110, 140, 160, 180],
            backgroundColor: getGradient(revCtx, "#760504"),
        }]
    }
});

// Expense Chart
const expCtx = document.getElementById("expenseChart").getContext("2d");
new Chart(expCtx, {
    type: "bar",
    data: {
        labels: ["M", "T", "W", "T", "F", "S", "S"],
        datasets: [{
            data: [80, 70, 90, 100, 110, 130, 140],
            backgroundColor: getGradient(expCtx, "#760504"),
        }]
    }
});

// Sales Chart
const salesCtx = document.getElementById("salesChart").getContext("2d");
new Chart(salesCtx, {
    type: "line",
    data: {
        labels: ["M", "T", "W", "T", "F", "S", "S"],
        datasets: [{
            data: [2, 4, 3, 5, 6, 3, 7],
            borderColor: "#8e44ad",
            tension: 0.3,
        }]
    }
});
