function f() {
    var Budget = parseInt(document.getElementById("budget").value);

    var selectNumGuests = document.getElementById("selectNumGuests");
    var selectSeats = selectNumGuests.options[selectNumGuests.selectedIndex].value;
    var seats;

    if(selectSeats == 3){

        seats=6;
    }
    if(selectSeats == 2){
        seats=8;
    }
    if(selectSeats == 1){
        seats=10;
    }


    var food = parseInt(document.getElementById("rateFood").value);
    var flowers = parseInt(document.getElementById("rateFlowers").value);
    var decor = parseInt(document.getElementById("rateDecor").value);
    var entertainment = parseInt(document.getElementById("rateEntertainment").value);


    var messageErrors = ' ';



    if((document.getElementById("budget").value) === '' || (document.getElementById("budget").value) == null) {
      alert("Please fill a budget");
        event.preventDefault()
        return false;
    }

    if(selectSeats.toString() === '' || selectSeats.toString() == null) {
       alert("Please select number of guests");
        event.preventDefault()
        return false;
    }

    else{

        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2
        });




        var total = seats + food + flowers + decor + entertainment;
        var ratio = Budget / total;

        var budgetSeats = Math.round(ratio * seats);
        var budgetFood= Math.round(ratio * food);
        var budgetFlowers= Math.round(ratio * flowers);
        var budgetDecor= Math.round(ratio * decor);
        var budgetEntertainment= Math.round(ratio * entertainment);


        document.getElementById("seats").innerHTML = "Seats budget: <br>" + formatter.format(budgetSeats) ;
        document.getElementById("food").innerHTML = "Food budget: <br>" + formatter.format(budgetFood) ;
        document.getElementById("flowers").innerHTML = "Flowers budget: <br>" + formatter.format(budgetFlowers);
        document.getElementById("decor").innerHTML = "Decor budget: <br>" + formatter.format(budgetDecor);
        document.getElementById("entertainment").innerHTML = "Entertainment budget: <br>" + formatter.format(budgetEntertainment);



        return false;

    }




}

