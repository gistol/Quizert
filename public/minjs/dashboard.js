new Vue({el:"#formcreatequiz",methods:{addanswer(){for(var e=3;e<=10;e++)if(document.getElementById("answerdiv"+e).classList.contains("displaynone")){document.getElementById("answerdiv"+e).classList.remove("displaynone");break}},removeanswer(e){for(var n=10;n>=3;n--)if(!document.getElementById("answerdiv"+n).classList.contains("displaynone")){document.getElementById("answerdiv"+n).classList.add("displaynone"),document.getElementById("answer"+n).value="";break}for(var t=1;t<=10;t++)1==document.getElementById("radioanswer"+t).checked&&(document.getElementById("radioanswer"+t).checked=!1,document.getElementById("correctanswer"+t).classList.add("displaynone"),document.getElementById("radioanswer1").checked=!0,document.getElementById("correctanswer1").classList.remove("displaynone"))},removeanswerpsychotest(){for(var e=10;e>=3;e--)if(!document.getElementById("answerdiv"+e).classList.contains("displaynone")){document.getElementById("answerdiv"+e).classList.add("displaynone"),document.getElementById("answer"+e).value="",document.getElementById("radioanswer"+e).value="";break}},correctanswer(e){for(var n=1;n<=10;n++)1==document.getElementById("radioanswer"+n).checked?document.getElementById("correctanswer"+n).classList.remove("displaynone"):document.getElementById("correctanswer"+n).classList.add("displaynone")}}});