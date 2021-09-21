// Business logic
var price , crust_price, topping_price;
let total = 0;

function getPizza (name, size, crust, topping, total) {
    this.name = name;
    this.size = size;
    this.crust= crust;
    this.topping =topping;
    this.total = total;
}

//User interface logic
$(document).ready(function(){
    $("button.order-button").click(function(event){
    let pname = $(".flavor option:selected").val();
    let psize = $("#size option:selected").val();
    let pcrust = $("#crust option:selected").val();
    let ptopping = [];
    $.each($("input[name='topping']:checked"), function(){            
        ptopping.push($(this).val());
    });
    console.log(ptopping.join(", "));
    });
});