document.querySelector('#push').onclick = function() {
    if (document.querySelector('#newwork input').value.length == 0) {
        alert("Plese enter the work");
    } else {
        document.querySelector('#tasks').innerHTML += `
            <div class="tasks">
            <span id="newtask">
            ${document.querySelector("#newwork input").value }
            </span>
            <button class="delete">delete
            </button>
            </div>
        `;

        var current_task = document.querySelectorAll(".delete");
        for (var i = 0; i < current_task.length; i++) {
            current_task[i].onclick = function() {
                this.parentNode.remove();
            }
        }

        var tasks = document.querySelectorAll(".tasks");
        for (var i = 0; i < tasks.length; i++) {
            tasks[i].onclick = function() {
                this.classList.toggle('completed');
            }
        }

        document.querySelector('#newwork input').value = "";


    }
}

// let push = document.getElementById('push');
// push.addEventListener("click", function run() {
//     if (document.querySelector("#newwork input").value.length == 0) {
//         alert("Please enter the work");
//     } else {

//     }
// });