// for future ref: https://stackoverflow.com/questions/3357553/how-do-i-store-an-array-in-localstorage
var jsonArray;
let array2 = [];
// click event to create the field for the tests
$( '#addMore' ).click(function () {
  addTestFields();
});
// create an array of the form input
$( '#targetData' ).submit(function ( event ) {
  // serialize array then iterate through the array only saving value
  jsonArray = $( '#targetData' ).serializeArray();
  jsonArray.forEach(function (el) {
    array2.push(el.value);
  });
  // store the current form data to append on index.html
  sessionStorage.setItem( 'workForm', JSON.stringify(array2) );
});
// function created to pass the test values
function addTestFields() {
  const html ="<label for='testName'>Name of Test:</label><select id='testName'required=''><option value='' disabled='' selected=''>Select test</option> <option value='' disabled='' selected=''>Select test</option><option value='S-Param'>S-Param</option><option value='Power'>Power</option><option value='Pulse'>Pulse</option><option value='RF'>RF</option></select><label for='proberNum'>Prober # </label><select required=''><option value='' disabled='' selected=''>Select probe #</option><option value='1'>1</option><option value='2'>2</option><option value='3'>3</option><option value='4'>4</option></select><label for='GS'>GS run:</label><select id='GS' required =''><option value='' disabled='' selected=''>Select value</option><option value='yes'>Yes</option><option value='no'>No</option></select>";
  const divBody = "<div class='bodyTestDiv'> <label for='slice'>Slice #</label><select id='slice'required=''><option value='' disabled='' selected=''>Select #</option><option value='1'>1</option><option value='2'>2</option><option value='3'>3</option><option value='4'>4</option></select><label for='partial'>Partial (# Good):</label><input type='number'><label for='yield'>Yield %:</label><input type='number'></div>"
  $('.testDiv').append(html);
  $('.testDiv').append(divBody);
};
// create a table at load
function tableCreate( valueArray ) {
  const tbl = document.getElementById( 'dynamicTable' );
  // create row and limit to only 1
  for( var i = 0; i < 1; i++){
    // insert at end of table
    var tr = tbl.insertRow(-1);
    for( var j = 0; j < 17; j++){
      if( i === 1 && j === 17){
        break;
      } else{
        var td = tr.insertCell();
        td.appendChild( document.createTextNode( valueArray[j] ));
        // create edit button once it reaches the end of the array
        if( j === 16){
          const btn = document.createElement( 'BUTTON' );
          btn.innerHTML = 'Edit';
          tr.appendChild(btn);
        }
      }
    }
  }
};
