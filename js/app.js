// Business logic
function givePizza (flavor, size, crust, topping, total) {
    this.flavor = flavor;
    this.size = size;
    this.crust= crust;
    this.topping =topping;
    this.total = total;
}
//User interface logic
$("button.order").click(function(event){
    let flavor = $(".flavor option:selected").val();
    let size = $("#size option:selected").val();
    let crust = $("#crust option:selected").val();
    let topping = [];
    console.log(size)
    let order = (flavor, size, crust, topping, total) => {
        return {flavor, size, crust, topping, total};

    $.each($("input[name='toppings']:checked"), function(){            
        topping.push($(this).val());
   });
}); 

