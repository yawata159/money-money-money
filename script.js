var data_2008 = {
    revenue: {
        total: "$2.55 trillion",
        data: [
            {name: "Individual Income Taxes", percent: 45},
            {name: "Payroll Taxes", percent: 36},
            {name: "Corporate Income Taxes", percent: 12},
            {name: "Excise Taxes", percent: 3},
            {name: "Other", percent: 4}
        ]
    },
    spending: {
        total: "$3.02 trillion",
        data: [
            {name: "Social Security, Unemployment, and Labor", percent: 34},
            {name: "Medicare and Health", percent: 22},
            {name: "National Defense", percent: 20},
            {name: "Net Interest", percent: 8},
            {name: "Education, Training, Employment, and Social Services", percent: 3},
            {name: "Other Programs", percent: 3},
            {name: "Veterans Benefits and Services", percent: 3},
            {name: "Transportation", percent: 3},
            {name: "Administration of Justice", percent: 2},
            {name: "Natural Resources and Environment", percent: 1},
            {name: "General Science, Space, and Technology", percent: 1}
        ]
    },
}

var data_2009 = {
    revenue: {
        total: "$2.1 trillion",
        data: [
            {name: "Individual Income Taxes", percent: 43},
            {name: "Payroll Taxes", percent: 42},
            {name: "Corporate Income Taxes", percent: 7},
            {name: "Excise Taxes", percent: 3},
            {name: "Other", percent: 5}
        ]
    },
    spending: {
        total: "$3.53 trillion",
        data: [
            {name: "Social Security, Unemployment, and Labor", percent: 34},
            {name: "Medicare and Health", percent: 21},
            {name: "National Defense", percent: 19},
            {name: "Net Interest", percent: 5},
            {name: "Education, Training, Employment, and Social Services", percent: 2},
            {name: "Other Programs", percent: 10},
            {name: "Veterans Benefits and Services", percent: 3},
            {name: "Transportation", percent: 2},
            {name: "Administration of Justice", percent: 1},
            {name: "Natural Resources and Environment", percent: 1},
            {name: "General Science, Space, and Technology", percent: 1}
        ]
    },
}

var y2008 = document.querySelector("#y2008");
y2008.addEventListener("click", function() {
    return revenue(data_2008);
});
y2008.addEventListener("click", function() {
    return spending(data_2008);
});

var y2009 = document.querySelector("#y2009");
y2009.addEventListener("click", function() {
    return revenue(data_2009);
});
y2009.addEventListener("click", function() {
    return spending(data_2009);
});

var rev = d3.select("#revenue");
function revenue(data_year) {

    document.querySelector("#rev_title")
        .innerHTML = ": " + data_year.revenue.total;
    var divs = rev.selectAll("div")
        .data(data_year.revenue.data)
        .attr("title", function(d) {
            return d.name;
        })
        .transition()
        .duration(1500)
        .style("width", function(d) {
            return 30*d.percent + "px";
        })
        .text( function(d) {
            return d.percent + "%";
        });
};

var spnd = d3.select("#spending");
function spending(data_year) {

    document.querySelector("#spnd_title")
        .innerHTML = ": " + data_year.spending.total;
    var divs = spnd.selectAll("div")
        .data(data_year.spending.data)
        .attr("title", function(d) {
            return d.name;
        })
        .transition()
        .duration(1500)
        .style("width", function(d) {
            return 30*d.percent + "px";
        })
        .text( function(d) {
            return d.percent + "%";
        });
};

