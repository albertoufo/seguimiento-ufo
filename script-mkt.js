var id = '1MexnUQYKjLSMJfYU4mbClKy0y8Sn5IHcsnku01QQlqk';
var gid = '0';
var url = 'https://docs.google.com/spreadsheets/d/'+id+'/gviz/tq?tqx=out:json&tq&gid='+gid;
fetch(url)
  .then(response => response.text())
  .then(data => document.getElementById("mkt").innerHTML=myItems(data.substring(47).slice(0, -2))  
  );
function myItems(jsonString){
  var json = JSON.parse(jsonString);
  var table = '<div>'
  // json.table.cols.forEach(colonne => table += '<p class="uno">' + colonne.label + '</p>')
  // table += '</p>'
  json.table.rows.forEach(ligne => {
    // table += '<p class="dos">'
    ligne.c.forEach(cellule => {
        try{var valeur = cellule.f ? cellule.f : cellule.v}
        catch(e){var valeur = ''}
        table += '<p  class="tres">' + valeur + '</p>'
      }
    )
    // table += '</p>'
    }
  )
  table += '</div>'
  return table
}