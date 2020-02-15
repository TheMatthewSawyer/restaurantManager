$( document ).ready(function() {
    
    const fakeArray = [{
        id : 34,
        name : "Fred",
        email : "Fred@fake.email",
        phone : "4044044040"
    },
    {
        id : 36,
        name : "Freddy",
        email : "Fred@fake.email",
        phone : "4044044040"
    },
    {
        id : 39,
        name : "Fredo",
        email : "Fred@fake.email",
        phone : "4044044040"
    },
    {
        id : 54,
        name : "Fredum",
        email : "Fred@fake.email",
        phone : "4044044040"
    },
    {
        id : 74,
        name : "Fredelle",
        email : "Fred@fake.email",
        phone : "4044044040"
    },
    {
        id : 84,
        name : "Fredan",
        email : "Fred@fake.email",
        phone : "4044044040"
    },
    {
        id : 34,
        name : "Fred",
        email : "Fred@fake.email",
        phone : "4044044040"
    },
    {
        id : 39,
        name : "Fredo",
        email : "Fred@fake.email",
        phone : "4044044040"
    },
    {
        id : 54,
        name : "Fredum",
        email : "Fred@fake.email",
        phone : "4044044040"
    },
    {
        id : 74,
        name : "Fredelle",
        email : "Fred@fake.email",
        phone : "4044044040"
    },
    {
        id : 84,
        name : "Fredan",
        email : "Fred@fake.email",
        phone : "4044044040"
    },
    {
        id : 34,
        name : "Fred",
        email : "Fred@fake.email",
        phone : "4044044040"
    },
    {
        id : 39,
        name : "Fredo",
        email : "Fred@fake.email",
        phone : "4044044040"
    },
    {
        id : 54,
        name : "Fredum",
        email : "Fred@fake.email",
        phone : "4044044040"
    }];

    var currentlySeated = 0;
    var currentlyWaiting = 0;
    var waitListHtml = '';

    $(".table").click(function() {
        console.log($(this).children().attr('id'));
    });

    function seatPeople() {
        for(let i = 0; i < fakeArray.length; i++) {
            if( i < 5) {
                $("#table"+i).parents("div.table").toggleClass('full');
                $("#table"+i).text('Reserved');
                currentlySeated++;
            }else {
                waitList(fakeArray[i],i);
                currentlySeated++;
            }
        }
        $("#curSeated").text(currentlySeated);
        if(currentlySeated > 5){
            $("#curSeated").text('5');
            currentlyWaiting = currentlySeated - 5;
            $("#curWait").text(currentlyWaiting);
        } else {
            currentlyWaiting = 0;
            $("#curWait").text(currentlyWaiting);
        }
    }

    function waitList(waitingPerson,i) {
        waitListHtml +=
`
<div class='row'>
    <div class='col-md-3'></div>
    <div class='col-md-6'>
        <h1>[${i-4}] ${waitingPerson.name}</h1>
        <h3 class='text-center'>${waitingPerson.email}<h3>
        <h3 class='text-center'>${waitingPerson.phone}<h3>
        <h3 class='text-center'>ID: ${waitingPerson.id}<h3>
    </div>
</div>
<hr/>
`   
        $('#waitList').html(waitListHtml);
    }

    seatPeople();
});