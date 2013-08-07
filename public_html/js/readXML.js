// File: readXML.js

// Start function when DOM has completely loaded 
$(document).ready(function() {

    // Open the students.xml file
    $.get("rep.xml", {}, function(xml) {

        // Build an HTML string
        myHTMLOutput = '';
        myHTMLOutput += '<table width="98%" border="1" cellpadding="0" cellspacing="0">';
        myHTMLOutput += '<th>Werk</th><th>Datum</th><th>Arbpl</th><th>Schicht</th><th>Ist-Prod</th><th>Ist-Rues</th><th>Ist-Still</th><th>Ist-Stoe</th>';

        // Run the function for each student tag in the XML file
        $('Line', xml).each(function(i) {
            werk = $(this).find("werks").text();
            datum = $(this).find("datum").text();
            arbpl = $(this).find("arbpl").text();
            shift = $(this).find("shift_text").text();
            ist_prod = $(this).find("ist_prod").text();
            ist_rues = $(this).find("ist_rues").text();
            ist_stoe = $(this).find("ist_stoe").text();
            ist_still = $(this).find("ist_still").text();

            // Build row HTML data and store in string
            mydata = BuildStudentHTML(werk, datum, arbpl, shift, ist_prod, ist_rues, ist_stoe, ist_still);
            myHTMLOutput = myHTMLOutput + mydata;
        });
        myHTMLOutput += '</table>';

        // Update the DIV called Content Area with the HTML string
        $("#ContentArea").append(myHTMLOutput);
    });
});


function BuildStudentHTML(werk, datum, arbpl, shift, ist_prod, ist_rues, ist_stoe, ist_still) {

    // Check to see if their is a "post" attribute in the name field
//    if ((studentPost) != undefined) {
//        studentPostHTML = "<strong>(" + studentPost + ")</strong>";
//    }
//    else
//    {
//        studentPostHTML = "";
//    }

    // Build HTML string and return
    output = '';
    output += '<tr>';
    output += '<td>' + werk + '</td>';
    output += '<td>' + datum + '</td>';
    output += '<td>' + arbpl + '</td>';
    output += '<td>' + shift + '</td>';
    output += '<td>' + ist_prod + '</td>';
    output += '<td>' + ist_rues + '</td>';
    output += '<td>' + ist_stoe + '</td>';
    output += '<td>' + ist_still + '</td>';
    output += '</tr>';
    return output;
}
	 