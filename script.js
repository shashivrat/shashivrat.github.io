    function openCity(evt, cityName) {
      var i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }
      tablinks = document.getElementsByClassName("tablinks");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
      }
      document.getElementById(cityName).style.display = "block";
      evt.currentTarget.className += " active";
      
    }
    
    // Get the element with id="defaultOpen" and click on it
   // document.getElementById("defaultOpen").click();
    
    //D3 code starts here
    
    //________________
    var margin = 500;
        var width = 820;
        var height = 520;
        var padding = 200;
        
        var data =  [1525,3862,4736,2963,3209,4136];
        var dataLaptop =[65,167,248,171,210,222];
        var dataDesktop =  [42,90,78,33,39,43];
        var dataKeyboard =  [64,137,236,110,111,126];
        var dataMonitors =  [60, 127,208,95,96,111];
        
        
        var x = d3.scaleBand()
            .domain(["Jan", "Feb", "Mar", "Apr", "May", "Jun"])
            .range([0,width-margin]);
            
        var y = d3.scaleLinear()
            .domain([0,5560])
            .range([height -20,0]);
            alert("test");
        var tooltip = d3.select("body").append("div").attr("class", "toolTip");
        
        var chart = d3.select(".chart");
        
        chart.attr("width",width )
            .attr("height",height )
            .append("g")
                .attr("transform","translate(" + margin + "," + margin + ")")
            .selectAll("rect")
            .data(data)
            .enter().append("rect")
            .attr("width",38)
            .attr("height",function(d) { return height - y(d); })
            .attr("x",function(d,i) { return ((i * (width - margin)/6) +20) ; })
            .attr("y",function(d) { return  y(d) -height ; })
            .on("mousemove", function(d){
                    tooltip
                      .style("left", d3.event.pageX - 50 + "px")
                      .style("top", d3.event.pageY - 70 + "px")
                      .style("display", "inline-block")
                      .html("Total Quantity Sold :" + "<br>" + d) + "K";
                      console.log(y(d));
                   
                })
            .on("mouseout", function(d){ tooltip.style("display", "none");});
           
        chart.append("g")
        .attr("transform", "translate(" + height + ",0 )")
            .call(d3.axisLeft(y));
        chart.append("text")
          .attr("transform", "rotate(-90)")
          .attr("y",  margin - 50)
          .attr("x",0 - (height / 2))
          .attr("dy", "1em")
          .style("text-anchor", "middle")
          .text("Quantity Sold (In Thousands)");  
        
        chart.append("g")
        .attr("transform", "translate("  + height + "," + margin + ")")
            .call(d3.axisBottom(x));
        
         
    
    //---------------------Laptop
    
    var xl = d3.scaleBand()
            .domain(["Jan", "Feb", "Mar", "Apr", "May", "Jun"])
            .range([0,width-margin]);
            
        var yl = d3.scaleLinear()
            .domain([0,250])
            .range([height -20,0]);
    var chartLaptop = d3.select(".chartLaptop");
        
    chartLaptop.attr("width",width )
            .attr("height",height )
            .append("g")
                .attr("transform","translate(" + margin + "," + margin + ")")
            .selectAll("rect")
            .data(dataLaptop)
            .enter().append("rect")
            .attr("width",38)
            .attr("height",function(d) { return height - yl(d); })
            .attr("x",function(d,i) { return ((i * (width - margin)/6) +20) ; })
            .attr("y",function(d) { return  yl(d) -height ; })
            .on("mousemove", function(d){
                    tooltip
                      .style("left", d3.event.pageX - 50 + "px")
                      .style("top", d3.event.pageY - 70 + "px")
                      .style("display", "inline-block")
                      .html("Total Quantity Sold :" + "<br>" + d+ "K");
                      console.log(y(d));
                   
                })
            .on("mouseout", function(d){ tooltip.style("display", "none");});
           
            chartLaptop.append("g")
        .attr("transform", "translate(" + height + ",0 )")
            .call(d3.axisLeft(yl));
    
            chartLaptop.append("text")
          .attr("transform", "rotate(-90)")
          .attr("y",  margin - 50)
          .attr("x",0 - (height / 2))
          .attr("dy", "1em")
          .style("text-anchor", "middle")
          .text("Quantity Sold (In Thousands)");  
        
            chartLaptop.append("g")
        .attr("transform", "translate("  + height + "," + margin + ")")
            .call(d3.axisBottom(xl));
    
    //---------------------Desktop
    
    var xd = d3.scaleBand()
            .domain(["Jan", "Feb", "Mar", "Apr", "May", "Jun"])
            .range([0,width-margin]);
            
        var yd = d3.scaleLinear()
            .domain([0,100])
            .range([height -20,0]);
    var chartDesktop = d3.select(".chartDesktop");
        
    chartDesktop.attr("width",width )
            .attr("height",height )
            .append("g")
                .attr("transform","translate(" + margin + "," + margin + ")")
            .selectAll("rect")
            .data(dataDesktop)
            .enter().append("rect")
            .attr("width",38)
            .attr("height",function(d) { return height - yd(d); })
            .attr("x",function(d,i) { return ((i * (width - margin)/6) +20) ; })
            .attr("y",function(d) { return  yd(d) -height ; })
            .on("mousemove", function(d){
                    tooltip
                      .style("left", d3.event.pageX - 50 + "px")
                      .style("top", d3.event.pageY - 70 + "px")
                      .style("display", "inline-block")
                      .html("Total Quantity Sold :" + "<br>" + d+ "K");
                      console.log(y(d));
                   
                })
            .on("mouseout", function(d){ tooltip.style("display", "none");});
           
        chartDesktop.append("g")
        .attr("transform", "translate(" + height + ",0 )")
            .call(d3.axisLeft(yd));
        
        chartDesktop.append("text")
          .attr("transform", "rotate(-90)")
          .attr("y",  margin - 50)
          .attr("x",0 - (height / 2))
          .attr("dy", "1em")
          .style("text-anchor", "middle")
          .text("Quantity Sold (In Thousands)");  
            
    
        chartDesktop.append("g")
        .attr("transform", "translate("  + height + "," + margin + ")")
            .call(d3.axisBottom(xd));
    //---------------------Keyboard
    
    var xk = d3.scaleBand()
            .domain(["Jan", "Feb", "Mar", "Apr", "May", "Jun"])
            .range([0,width-margin]);
            
        var yk = d3.scaleLinear()
            .domain([0,250])
            .range([height -20,0]);
    var chartKeyboard = d3.select(".chartKeyboard");
        
    chartKeyboard.attr("width",width )
            .attr("height",height )
            .append("g")
                .attr("transform","translate(" + margin + "," + margin + ")")
            .selectAll("rect")
            .data(dataKeyboard)
            .enter().append("rect")
            .attr("width",38)
            .attr("height",function(d) { return height - yk(d); })
            .attr("x",function(d,i) { return ((i * (width - margin)/6) +20) ; })
            .attr("y",function(d) { return  yk(d) -height ; })
            .on("mousemove", function(d){
                    tooltip
                      .style("left", d3.event.pageX - 50 + "px")
                      .style("top", d3.event.pageY - 70 + "px")
                      .style("display", "inline-block")
                      .html("Total Quantity Sold :" + "<br>" + d+ "K");
                      console.log(y(d));
                   
                })
            .on("mouseout", function(d){ tooltip.style("display", "none");});
           
        chartKeyboard.append("g")
        .attr("transform", "translate(" + height + ",0 )")
            .call(d3.axisLeft(yk));
        
        chartKeyboard.append("text")
          .attr("transform", "rotate(-90)")
          .attr("y",  margin - 50)
          .attr("x",0 - (height / 2))
          .attr("dy", "1em")
          .style("text-anchor", "middle")
          .text("Quantity Sold (In Thousands)");  
    
        chartKeyboard.append("g")
        .attr("transform", "translate("  + height + "," + margin + ")")
            .call(d3.axisBottom(xk));
    //---------------------Monitors
    
    var xm = d3.scaleBand()
            .domain(["Jan", "Feb", "Mar", "Apr", "May", "Jun"])
            .range([0,width-margin]);
            
    var ym = d3.scaleLinear()
            .domain([0,250])
            .range([height -20,0]);
    var chartMonotors = d3.select(".chartMonitors");
        
    chartMonotors.attr("width",width )
            .attr("height",height )
            .append("g")
                .attr("transform","translate(" + margin + "," + margin + ")")
            .selectAll("rect")
            .data(dataMonitors)
            .enter().append("rect")
            .attr("width",38)
            .attr("height",function(d) { return height - ym(d); })
            .attr("x",function(d,i) { return ((i * (width - margin)/6) +20) ; })
            .attr("y",function(d) { return  ym(d) -height ; })
            .on("mousemove", function(d){
                    tooltip
                      .style("left", d3.event.pageX - 50 + "px")
                      .style("top", d3.event.pageY - 70 + "px")
                      .style("display", "inline-block")
                      .html("Total Quantity Sold :" + "<br>" + d+ "K");
                      console.log(y(d));
                   
                })
            .on("mouseout", function(d){ tooltip.style("display", "none");});
           
        chartMonotors.append("g")
        .attr("transform", "translate(" + height + ",0 )")
            .call(d3.axisLeft(ym));
           
        chartMonotors.append("text")
          .attr("transform", "rotate(-90)")
          .attr("y",  margin - 50)
          .attr("x",0 - (height / 2))
          .attr("dy", "1em")
          .style("text-anchor", "middle")
          .text("Quantity Sold (In Thousands)"); 
        
          chartMonotors.append("g")
        .attr("transform", "translate("  + height + "," + margin + ")")
            .call(d3.axisBottom(xm));