/*
* This function will ask browser to save data in file which browser will ask user to save ( works on Chrome, Firefox and IE ):
* 
* @param {String} : The name and extension of file you want to save. for ex. "sample.txt"
* @param {String}: Data in string format that you want to save in sample.txt above
*/

function saveFile(filename, data) {
    var blob = new Blob([data], {type: 'text/csv'});
    if(window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveBlob(blob, filename);
    }
    else{
        var elem = window.document.createElement('a');
        elem.href = window.URL.createObjectURL(blob);
        elem.download = filename;        
        document.body.appendChild(elem);
        elem.click();        
        document.body.removeChild(elem);
    }
}


/* If you have simple string to download. you can create anchor tag in HTML that will download the file when clicked .
 file name only works in chrome and firefox. In IE it will ask  to open a file named "download" without extension */
<a download="sample.txt" href='data:application/octet-stream,Sampletextdata'>Click to Donlwoad file</a>
