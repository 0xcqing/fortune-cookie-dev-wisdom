import{writeFileSync,mkdirSync}from"node:fs";
const a=process.argv,i=a.indexOf("--output"),d=i>0?a[i+1]:"/output";
const f="The code you write in a hurry is a letter to a stranger you will never meet.";
mkdirSync(d,{recursive:true});
writeFileSync(d+"/entry.txt",f+"\n");
console.log("Wrote "+f.length+" chars to "+d+"/entry.txt");
