var id = '1pXcfkMKdXFD3XvmuBgkgVu7UXoxYN3ZDKOoOchIjKO0';
var gid = '0';
var url = 'https://docs.google.com/spreadsheets/d/'+id+'/gviz/tq?tqx=out:json&tq&gid='+gid;
fetch(url)
  .then(response => response.text())
  .then(data => document.getElementById("ventas").innerHTML=myItems(data.substring(47).slice(0, -2))  
  );
function myItems(jsonString){
  var json = JSON.parse(jsonString);
  var table = '<p class="uno">'
  json.table.cols.forEach(colonne => table += '<p>' + colonne.label + '</p>')
  table += '</p>'
  json.table.rows.forEach(ligne => {
    table += '<p>'
    ligne.c.forEach(cellule => {
        try{var valeur = cellule.f ? cellule.f : cellule.v}
        catch(e){var valeur = ''}
        table += '<p>' + valeur + '</p>'
      }
    )
    table += '</p>'
    }
  )
  table += '</p>'
  return table
}