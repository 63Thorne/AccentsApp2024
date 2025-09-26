const Name = document.getElementById('find');
Name.addEventListener('keyup', e => {
    let currentValue = e.target.value.toLowerCase();
    let Audios = document.querySelectorAll('h4');
    Audios.forEach(Audio => {
        if (Audio.textContent.toLowerCase().includes(currentValue)) {
              Audio.parentElement.style.display = "block";
        } else {
            Audio.parentElement.style.display = "none";
        }
          })
    });
 



// function search() {
//     let filter = document.getElementById('find').value.toUpperCase();
//     let item = document.querySelectorAll('.Audios');
//     let l = document.getElementsByTagName('h4').textContent; 
// }

//     for (let i = 0; i <=l.length;i++) {
//         let a = item[i].getElementsByTagName('h4')[0];
//         let value = a.innerHTML || a.innerText || a.textContent;

//         if (value.toUpperCase().indexOf(filter) > -1) {
//             item[i].style.display = "";
//         } else {
//             item[i].style.display = "none";
//         }
// }




  