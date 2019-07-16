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
