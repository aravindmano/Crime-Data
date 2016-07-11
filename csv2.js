
var fs = require("fs");
var csv2array=require('csv2array');
var readfiles = require('readfiles-async');
var data = fs.readFile('Book2.csv','utf8');
//var stringData=data.toString();
var arrayOne=csv2array(data);

//console.log(stringData);
//var arrayOne= stringData;

var header=arrayOne[0];
var noOfRow=arrayOne.length;
var noOfCol=header.length;
var cnt_ptype;
for(var i=0;i<header.length;i++)
{
if(header[i] == 'Primary Type')
{
cnt_ptype = i;
}
}

var cnt_desc;
for(var i=0;i<header.length;i++)
{
if(header[i]=='Description')
{
cnt_desc = i;
}
}

var cnt_year;
for(var i=0;i<header.length;i++)
{
if(header[i]=='Year')
{
cnt_year = i;
}
}

var jArray=[];

var i=0,j=0;
for (i = 1; i < noOfRow; i++) {

    var obj = {};
    var myNewLine=arrayOne[i];

    // for (j = 0; j< noOfCol; j++) {
    //
    // };

    obj[header[cnt_ptype]]=myNewLine[cnt_ptype];
    obj[header[cnt_desc]]=myNewLine[cnt_desc];
    obj[header[cnt_year]]=myNewLine[cnt_year];
    //if((obj.city=="Delhi)")||(obj.mobile=="88888"))
  //  {
        //jArray.push(obj);
        //obj={};
  //  }
  if((obj.Description=="OVER $500") || (obj.Description=="$500 AND UNDER"))
    {
      jArray.push(obj);
   }
 };
console.log( jArray);
//fs.writeFile('savee.json', JSON.stringify(jArray),'utf8');
