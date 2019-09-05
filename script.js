// click event to create the field for the tests
$('#addMore').click(function () {
  addTestFields();
});
// function created to pass the test values
function addTestFields() {
  const html ="<label for='testName'>Name of Test:</label><select id='testName'required=''><option value='' disabled='' selected=''>Select test</option> <option value='' disabled='' selected=''>Select test</option><option value='S-Param'>S-Param</option><option value='Power'>Power</option><option value='Pulse'>Pulse</option><option value='RF'>RF</option></select><label for='proberNum'>Prober # </label><select required=''><option value='' disabled='' selected=''>Select probe #</option><option value='1'>1</option><option value='2'>2</option><option value='3'>3</option><option value='4'>4</option></select><label for='GS'>GS run:</label><select id='GS' required =''><option value='' disabled='' selected=''>Select probe #</option><option value='yes'>Yes</option><option value='no'>No</option></select>";
  const divBody = "<div class='bodyTestDiv'> <label for='slice'>Slice #</label><select id='slice'required=''><option value='' disabled='' selected=''>Select #</option><option value='1'>1</option><option value='2'>2</option><option value='3'>3</option><option value='4'>4</option></select><label for='partial'>Partial (# Good):</label><input type='number'><label for='yield'>Yield %:</label><input type='number'></div>"
  $('.testDiv').append(html);
  $('.testDiv').append(divBody);
};

        // <label for='testName'>Name of Test:</label>
        // <select id='testName'required=''>
        //   <option value='' disabled='' selected=''>Select test</option>
        //   <option value='S-Param'>S-Param</option>
        //   <option value='Power'>Power</option>
        //   <option value='Pulse'>Pulse</option>
        //   <option value='RF'>RF</option>
        // </select>
        // <label for='proberNum'>Prober # </label>
        // <select required=''>
        //   <option value='' disabled='' selected=''>Select probe #</option>
        //   <option value='1'>1</option>
        //   <option value='2'>2</option>
        //   <option value='3'>3</option>
        //   <option value='4'>4</option>
        // </select>
        // <label for='GS'>GS run:</label>
        // <select id='GS' required =''>
        //   <option value='' disabled='' selected=''>Select probe #</option>
        //   <option value='yes'>Yes</option>
        //   <option value='no'>No</option>
        // </select>
        // <div class='bodyTestDiv'>
        //   <label for='slice'>Slice #</label>
        //   <select id='slice'required=''>
        //     <option value='' disabled='' selected=''>Select #</option>
        //     <option value='1'>1</option>
        //     <option value='2'>2</option>
        //     <option value='3'>3</option>
        //     <option value='4'>4</option>
        //   </select>
        //   <label for='partial'>Partial (# Good):</label>
        //   <input type='number'>
        //   <label for='yield'>Yield %:</label>
        //   <input type='number'>
        // </div>
