//BUSINESS LOGIC//

//Order Object Constructor
// function Order(total) {
//   this.orderTotal = total;
//   this.subtotals = [];
//   this.pizzas = []
// }

//Pizza Object Constructor
function Pizza() {
  this.pizzaSize = "";
  this.baseCost = 0;
  this.individToppingCost = 0;
  this.toppingsArray = [];
  this.numToppings = 1,
  this.pizzaCost = 0;
}

//Prototype to determine the base cost of a given pizza, based on size.
Pizza.prototype.setBaseCost = function() {
  if (this.pizzaSize == "small") {
    this.baseCost = 11;
  } else if (this.pizzaSize == "medium") {
    this.baseCost = 13.5;
  } else if (this.pizzaSize == "large") {
    this.baseCost = 16;
  }
  return this.baseCost;
};

//Prototype to determine individual topping cost for a given pizza, based on size
Pizza.prototype.setIndividToppingCost = function() {
  if (this.pizzaSize == "small") {
    this.individToppingCost = 1;
  } else if (this.pizzaSize == "medium") {
    this.individToppingCost = 1.5;
  } else if (this.pizzaSize == "large") {
    this.individToppingCost = 2;
  }
  return this.individToppingCost;
}

//Prototype to push toppings to toppingsArray
// Pizza.prototype.pushToToppingsArray = function(checkedCheckboxes) {
//   ("checkedCheckboxes").each(function(){
//     pizzaOne.toppingsArray.push($(this).attr('name'));
//   });
//
//   for (i=0; i < this.toppingsArray.length; i++){
//     if
//   }
// }

Pizza.prototype.pushToToppingsArray = function() {
  var checkCheckBoxValue = document.getElementsByClassName('check');
  this.toppingsArray = [];

  for (i = 0; i < (checkCheckBoxValue.length); i++) { 
    if (checkCheckBoxValue[i].checked === true) {
      this.toppingsArray.push(checkCheckBoxValue[i].value);
    }
  }

  // while (i++ <= (this.toppingsArray.length + 1)) {
  //   if (checkCheckBoxValue[i].checked === true) {
  //     this.toppingsArray.push(checkCheckBoxValue[i].value);
  //   }
  // }
  // return this.toppingsArray;
  // this.toppingsArray.push(getElementsByClassName('checkbox'))
}

//Prototype to set the number of toppings for a given pizza
Pizza.prototype.setNumToppings = function() {
  this.numToppings = parseInt(this.toppingsArray.length);
}

// Prototype to calculate the cost of a given pizza. Incorporates previous pizza prototypes inside itself.
Pizza.prototype.calculatePizzaCost = function() {
  this.setBaseCost();
  this.setIndividToppingCost();
  this.setNumToppings();
  this.pizzaCost = this.baseCost + (this.numToppings * this.individToppingCost);
  return this.pizzaCost;
}

var pizzaOne = new Pizza();


//USER INTERFACE LOGIC//
$(document).ready(function() {

  // // Number of pizzas input
  // $('.btn-number').click(function(e) {
  //   e.preventDefault();
  //   var fieldName = $(this).attr('data-field');
  //   var type      = $(this).attr('data-type');
  //   var input = $("input[name='"+fieldName+"']");
  //   var currentVal = parseInt(input.val());
  //   if (!isNaN(currentVal)) {
  //     if(type == 'minus') {
  //       var minValue = parseInt(input.attr('min'));
  //       if(!minValue) minValue = 1;
  //       if(currentVal > minValue) {
  //         input.val(currentVal - 1).change();
  //       }
  //       if(parseInt(input.val()) == minValue) {
  //         $(this).attr('disabled', true);
  //       }
  //     } else if(type == 'plus') {
  //       var maxValue = parseInt(input.attr('max'));
  //       if(!maxValue) maxValue = 5;
  //       if(currentVal < maxValue) {
  //         input.val(currentVal + 1).change();
  //       }
  //       if(parseInt(input.val()) == maxValue) {
  //         $(this).attr('disabled', true);
  //       }
  //     }
  //   } else {
  //     input.val(0);
  //   }
  // });
  // // More number of pizzas input stuff
  // $('.input-number').focusin(function(){
  //   $(this).data('oldValue', $(this).val());
  // });
  // // More number of pizzas input stuff
  // $('.input-number').change(function() {
  //   var minValue =  parseInt($(this).attr('min'));
  //   var maxValue =  parseInt($(this).attr('max'));
  //   if(!minValue) minValue = 1;
  //   if(!maxValue) maxValue = 5;
  //   var valueCurrent = parseInt($(this).val());
  //   var name = $(this).attr('name');
  //   if(valueCurrent >= minValue) {
  //     $(".btn-number[data-type='minus'][data-field='"+name+"']").removeAttr('disabled')
  //   } else {
  //     alert("Trust us: you don't want to order zero pizzas!");
  //     $(this).val($(this).data('oldValue'));
  //   }
  //   if(valueCurrent <= maxValue) {
  //     $(".btn-number[data-type='plus'][data-field='"+name+"']").removeAttr('disabled')
  //   } else {
  //     alert("Oh no! You must be hungry. Unfortunately, we're not able to process more than 5 pizzas online at a time. Call 555-555-5555 and we'd be happy to help fulfill your sizable pizza needs!");
  //     $(this).val($(this).data('oldValue'));
  //   }
  // });
  // // More number of pizzas input stuff
  // $(".input-number").keydown(function (e) {
  //     // Allow: backspace, delete, tab, escape, enter and .
  //     if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
  //          // Allow: Ctrl+A
  //         (e.keyCode == 65 && e.ctrlKey === true) ||
  //          // Allow: home, end, left, right
  //         (e.keyCode >= 35 && e.keyCode <= 39)) {
  //              // let it happen, don't do anything
  //              return;
  //     }
  //     // Ensure that it is a number and stop the keypress
  //     if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
  //         e.preventDefault();
  //     }
  //   });
  // });

  // Submit Listener
  $('#pizza-one').submit(function(event) {
    event.preventDefault();
      console.log("hello");
      pizzaOne.pushToToppingsArray();
      console.log(pizzaOne);
      // $(".checkbox input:checked").each(function(){
      //   pizzaOne.toppingsArray.push($(this).attr('name'));
      // })
      // pizzaOne.toppingsArray.push($("input[type='checkbox']").name());
  });
});
