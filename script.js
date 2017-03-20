    var dyn = d3.select("#dynamic");
     var info = [4, 8, 15, 16, 23, 42];
     var makeBars = function() {
                
                dyn.selectAll("div")
              .data(info)
              .enter()
              .append("div")
              .style("width", function(d) {
                        return d + "px";
                      })
              .text( function(d) {
                        return d;
                      });
              };

