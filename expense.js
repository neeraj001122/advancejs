
var form = document.getElementById("lol")
form.addEventListener('submit', getvalue);

function getvalue(e)
{
   e.preventDefault();
   var li = document.createElement('li');
   var exp = document.getElementById('exploit').value
   var dis = document.getElementById('tax').value
   var dope = document.getElementById('rail').value

var details = {
    expense: exp,
    discription: dis,
    catogery:dope
  };
  var details_string = JSON.stringify(details);
  localStorage.setItem(exp, details_string);
  getlocale(details)
}

window.addEventListener('DOMContentLoaded', refresh)

function refresh()
{
  var arr = Object.keys(localStorage);
  for(var i=0;i<arr.length;i++)
  {
    var userdetails = JSON.parse(localStorage.getItem(arr[i]))
    getlocale(userdetails)
  }
  
}

function getlocale(user)
{
  const parentNode = document.getElementById('items');
  const childHTML = `<li id=${user.expense}> ${user.expense} - ${user.discription} - ${user.catogery}
  <button onclick = deleteUser('${user.expense}')> Delete User </button>
</li>`

parentNode.innerHTML = parentNode.innerHTML + childHTML;
}
function deleteuser(Amount)
{
  console.log(Amount)
   localStorage.removeItem(Amount)
   removefromscreen(Amount)
}

function removefromscreen(amount)
{
  var items = document.getElementById('items')
  deletenode = document.getElementById(amount);

  items.removeChild(deletenode)
}




