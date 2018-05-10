/* author : Suhas Sanmukh */

function refreshPage(){
  		alert('Coming soon!!');
  	}

	window.onload = function(){
		//var coll = document.getElementsByClassName("collapsible");
		var coll = $('.collapsible');
		var i;

		$( document ).on( "click", ".collapsible", function() {
	        this.classList.toggle("active");
	        var content = this.nextElementSibling;
	        if (content.style.display === "block") {
	            content.style.display = "none";
	        } else {
	            content.style.display = "block";
	        }
	    });

	    var currentData = [{
			name: "HAA - Bankmail",
			status: [{
				task: 'initialize params',
				status: 'done'
			},{
				task: 'Start build',
				status: 'done'
			},{
				task: 'Unit tests',
				status: 'done'
			},{
				task: 'Protractor',
				status: 'done'
			},{
				task: 'Sonar',
				status: 'done'
			}]
		},{
			name: "HAB - Generics",
			status: [{
				task: 'initialize params',
				status: 'done'
			},{
				task: 'Start build',
				status: 'inprogress'
			},{
				task: 'Unit tests',
				status: ''
			},{
				task: 'Protractor',
				status: ''
			},{
				task: 'Sonar',
				status: ''
			}]
		},{
			name: "HAC - Tooling",
			status: [{
				task: 'initialize params',
				status: ''
			},{
				task: 'Start build',
				status: ''
			},{
				task: 'Unit tests',
				status: ''
			},{
				task: 'Protractor',
				status: ''
			},{
				task: 'Sonar',
				status: ''
			}]
		}];

		displayData(currentData);
	}

function displayData(data){
	var strHtml = "";
	for (var i = 0; i < data.length; i++) {
		var status = data[i].status;
		var totalStatus = 'waiting';
		strHtml += '<button class="collapsible btn btn-primary">'
			+ '<span class="glyphicon glyphicon-tasks" style="float:left;" aria-hidden="true"></span>'
			+  data[i].name+'</button>'
			+ '<div class="content">'
			+ '<div class="single-block-progress">'
			+ '<table width="100%" style=" border: 2px solid #cccccc; text-align: center;">'
			+ '<tbody>';
		var strRow1 = '<tr class="header-status">';
		var strRow2 = '<tr class="value-status">';
		for (var j = 0; j < status.length; j++) {
			strRow1 += '<td>'+status[j].task+'</td>';
			if(status[j].status.toLowerCase() == "done"){
				strRow2 += '<td>'
						+ '<div class="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 100%">'
						+ '</div>'
						+ '</td>';
				if(j == (status.length - 1)){
					totalStatus = "complete";
				} else {
					totalStatus = "inprogress";
				}
			} else if(status[j].status.toLowerCase() == "inprogress"){
				strRow2 += '<td>'
						+ '<div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 80%">'
						+ '</div>'
						+ '</td>';
				totalStatus = "inprogress";
			} else {
				strRow2 += '<td class="not-active"></td>';
				if(totalStatus != "inprogress"){
					totalStatus = "waiting";
				}
			}
		}
		strRow1 += '<td>Status</td>';

		if(totalStatus == "waiting"){
			strRow2 += '<td class="status status-waiting" title="Waiting (not started)"><span class="glyphicon glyphicon-hourglass" aria-hidden="true"></span>&nbsp; Coming soon</td>';
		} else if(totalStatus == "inprogress"){
			strRow2 += '<td class="status status-running" title="In progress"><span class="glyphicon glyphicon-forward" aria-hidden="true"></span>&nbsp; In Progress</td>';
		} else {
			strRow2 += '<td class="status status-complete" title="Completed!"><span class="glyphicon glyphicon-ok-circle" aria-hidden="true"></span>&nbsp; Complete</td>';
		}

		strRow1 += '</tr>';
		strRow2 += '</tr>';
		strHtml += strRow1 + strRow2 + '</tbody></table></div></div>';
	}
	$('.jobs-container').append(strHtml);
}
