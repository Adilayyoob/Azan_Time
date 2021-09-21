var fajrEdit = 1;
var zuhrEdit = 1;
var asrEdit = 1;
var maghribEdit = 2;
var ishaEdit = 0;
// getting prayer  time
setInterval(function(){ 
prayTimes.setMethod('Karachi');
prayTimes.adjust( {fajr: 20, isha: 18} );
prayTimes.tune( {fajr: fajrEdit, dhuhr: zuhrEdit, asr: asrEdit,maghrib: maghribEdit,isha: ishaEdit} );
var time =   prayTimes.getTimes (new Date(), [11.25, 75.5], 'auto', 'auto', '12hNS');

document.getElementById("fajr").innerHTML = time.fajr;
document.getElementById("sun_rise").innerHTML = time.sunrise;
document.getElementById("zuhr").innerHTML = time.dhuhr;
document.getElementById("asr").innerHTML = time.asr;
document.getElementById("maghrib").innerHTML = time.maghrib;
document.getElementById("isha").innerHTML = time.isha;
}, 500); 


// eg:22:30 t0 2230
function correction_hour(n) {
    var h = Number(n.substring(0, n.indexOf(":")));
	return(h);
};
function correction_minute(n) {
    var m = Number(n.substring(n.indexOf(":")+1, ));
	return(m);
};

//geting prayer time
prayTimes.setMethod('Karachi');
prayTimes.adjust( {fajr: 20, isha: 18} );
prayTimes.tune( {fajr: fajrEdit, dhuhr: zuhrEdit, asr: asrEdit,maghrib: maghribEdit,isha: ishaEdit} );
var time =   prayTimes.getTimes (new Date(), [11.25, 75.5], 'auto', 'auto', '24h');

//second bazzer + times
var fajrWait = Number(document.getElementById("fajr-wait").innerHTML);
var zuhrWait = Number(document.getElementById("zuhr-wait").innerHTML);
var asrWait = Number(document.getElementById("asr-wait").innerHTML);
var maghribWait = Number(document.getElementById("maghrib-wait").innerHTML);
var ishaWait = Number(document.getElementById("isha-wait").innerHTML);



//initialise sound
var x = document.getElementById("buzzer");
var n = 1;
//buz1
function buz(t) {
    var today = new Date();
	var h = today.getHours();
	var m = today.getMinutes();
	var h2 = correction_hour(t);
	var m2 = correction_minute(t);
	
    if(h == h2 && m == m2)
    {
    	if(n == 1)
    	{
    	    x.play();
    	    n=0;
    	    setTimeout(function () {
                n=1;
            }, 60000);
    	}
    }
};

//buz2 ans prayer in timmer
var flag=1;
var l = 1;
function buz2(t,c) {

    var today = new Date();
	var h = today.getHours();
	var m = today.getMinutes();
	
	switch(c){
		case 1: var fHour = new Date();
                fHour.setHours(correction_hour(time.fajr),correction_minute(time.fajr)+fajrWait,0);
		        break;
		case 2: var fHour = new Date();
                fHour.setHours(correction_hour(time.dhuhr),correction_minute(time.dhuhr)+zuhrWait,0);
		        break;
		case 3: var fHour = new Date();
                fHour.setHours(correction_hour(time.asr),correction_minute(time.asr)+asrWait,0);
		        break;
		case 4: var fHour = new Date();
                fHour.setHours(correction_hour(time.maghrib),correction_minute(time.maghrib)+maghribWait,0);
		        break;
		case 5: var fHour = new Date();
                fHour.setHours(correction_hour(time.isha),correction_minute(time.isha)+ishaWait,0);
		        break;
		default:m2
		        break; 
	}
    var h2 = fHour.getHours();
	var m2 = fHour.getMinutes();
	
	// timmer
    if(today >= t && today < fHour )
    {
    	flag=0;
    	stopWatch(fHour);
        
    }
    if(flag == 1){
    	document.getElementById("timmer").innerHTML = "00:00";
    }
	
    if(h == h2 && m == m2)
    {
    	if(l == 1)
    	{
    	    x.play();
    	    
    	    l=0;
    	    setTimeout(function () {
                l=1;
            }, 60000);
    	}
    }
};


setInterval(function(){ 
//setting time slot and comparing
var currentD = new Date();
var fajrHour = new Date();
fajrHour.setHours(correction_hour(time.fajr),correction_minute(time.fajr),0);
var dhuhrHour = new Date();
dhuhrHour.setHours(correction_hour(time.dhuhr),correction_minute(time.dhuhr),0);
var asrHour = new Date();
asrHour.setHours(correction_hour(time.asr),correction_minute(time.asr),0);
var maghribHour = new Date();
maghribHour.setHours(correction_hour(time.maghrib),correction_minute(time.maghrib),0);
var ishaHour = new Date();
ishaHour.setHours(correction_hour(time.isha),correction_minute(time.isha),0);


if(currentD >= fajrHour && currentD < dhuhrHour)
{
	document.querySelector(".fajr-d").style = "background-color: white;border-radius:26px;color: #05c3f7";
    document.querySelector(".zuhr-d").style = "";
    document.querySelector(".asr-d").style = "";
    document.querySelector(".maghrib-d").style = "";
    document.querySelector(".isha-d").style = "";
    buz(time.fajr);
    buz2(fajrHour,1);
}
else if(currentD >= dhuhrHour && currentD < asrHour)
{
	document.querySelector(".zuhr-d").style = "background-color: white;border-radius:26px;color: #05c3f7";
	document.querySelector(".fajr-d").style = "";
    document.querySelector(".asr-d").style = "";
    document.querySelector(".maghrib-d").style = "";
    document.querySelector(".isha-d").style = "";
    buz(time.dhuhr);
    buz2(dhuhrHour,2);
}
else if(currentD >= asrHour && currentD < maghribHour)
{
	document.querySelector(".asr-d").style = "background-color: white;border-radius:26px;color: #05c3f7";
	document.querySelector(".fajr-d").style = "";
    document.querySelector(".zuhr-d").style = "";
    document.querySelector(".maghrib-d").style = "";
    document.querySelector(".isha-d").style = "";
    buz(time.asr);
    buz2(asrHour,3);
}
else if(currentD >= maghribHour && currentD < ishaHour)
{
	document.querySelector(".maghrib-d").style = "background-color: white;border-radius:26px;color: #05c3f7";
	document.querySelector(".fajr-d").style = "";
    document.querySelector(".zuhr-d").style = "";
    document.querySelector(".asr-d").style = "";
    document.querySelector(".isha-d").style = "";
    buz(time.maghrib);
    buz2(maghribHour,4);
}
else 
{
	document.querySelector(".isha-d").style = "background-color: white;border-radius:26px;color: #05c3f7";
	document.querySelector(".fajr-d").style = "";
    document.querySelector(".zuhr-d").style = "";
    document.querySelector(".asr-d").style = "";
    document.querySelector(".maghrib-d").style = "";
    buz(time.isha);
    buz2(ishaHour,5);
}
}, 1000);


// setting date
setInterval(function(){ 
var d = new Date();
var day = d.getDate();
var month = d.getMonth()+1;
var year = d.getFullYear();
document.getElementById("full_date").innerHTML = day + "-" + month + "-" + year;
}, 1000);

//change function fot jumma and tharavih
function changeTime() {
    fajrEdit = Number(prompt("fajr Add or Minus minutes","1"));
    zuhrEdit = Number(prompt("dhuhr Add or Minus","1"));
    asrEdit = Number(prompt("asr Add or Minus","1"));
    maghribEdit = Number(prompt("maghrib Add or Minus","2"));
    ishaEdit = Number(prompt("isha Add or Minus","0"));
    var juma = prompt("Set Juma Time","12:30");
    var tharavih = prompt("Set Tharavih Time","8:30");
    var fajr_wait = prompt("Set fajr wait time","25");
    var zuhr_wait = prompt("Set dhuhr wait time","30");
    var asr_wait = prompt("Set asr wait time","15");
    var maghrib_wait = prompt("Set maghrib wait time","5");
    var isha_wait = prompt("Set isha wait time","15");

	document.getElementById("juma").innerHTML = juma; 
	document.getElementById("tharavih").innerHTML = tharavih;
    document.getElementById("fajr-wait").innerHTML = fajr_wait;
    document.getElementById("zuhr-wait").innerHTML = zuhr_wait;
    document.getElementById("asr-wait").innerHTML = asr_wait;
    document.getElementById("maghrib-wait").innerHTML = maghrib_wait;
    document.getElementById("isha-wait").innerHTML = isha_wait;
}
