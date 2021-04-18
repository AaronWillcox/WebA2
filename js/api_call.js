

function APICall()
{
    var xhttp = new XMLHttpRequest();

    var key = '1';
    var input1 =document.getElementById('input1').value;
    var input2 =document.getElementById('input2').value;
    var url = 'https://www.thesportsdb.com/api/v1/json/'+key+'/searchevents.php?e=' + input1 + '_vs_' + input2;
    //'https://www.thesportsdb.com/api/v1/json/1/searchevents.php?e=Arsenal_vs_Chelsea';
    console.log(url);

    xhttp.open("GET", url);

    xhttp.send();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200)
        {
            var data = JSON.parse(this.responseText);
            console.log(data);

            document.getElementById('thumb').src =data.event[0].strThumb;
            document.getElementById('sport').innerHTML=data.event[0].strSport;
            document.getElementById('date').innerHTML=data.event[0].dateEvent;
            document.getElementById('home').innerHTML=data.event[0].strHomeTeam;
            document.getElementById('homeScore').innerHTML=data.event[0].intHomeScore;
            document.getElementById('away').innerHTML=data.event[0].strAwayTeam;
            document.getElementById('awayScore').innerHTML=data.event[0].intAwayScore;

            document.getElementById('input1').value=null;
            document.getElementById('input2').value=null;
        }
    }


}