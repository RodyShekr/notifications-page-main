let number = document.getElementById(`number`),
    circles = document.querySelectorAll(`.circles`),
    notifications = document.querySelectorAll(`.notification`);
const markAllAsRead = document.getElementById(`mark-all-as-read`);


for (let i = 0; i < 3; i++) {

    notifications[i].classList.add(`unread--notification`);
    circles[i].classList.add(`circle`);
    /*Mark all as read*/
    markAllAsRead.addEventListener(`click`, () =>{
        notifications[i].classList.remove(`unread--notification`);
        circles[i].classList.remove(`circle`);
        number.textContent = 0;
    });

    notifications[i].addEventListener(`click`, () =>{
        notifications[i].classList.remove(`unread--notification`);
        circles[i].classList.remove(`circle`);
    })

}

const countingNotificationsDown = () => {
    notifications[0].addEventListener(`click`, () => {
        number.textContent -= 1
        if (number.textContent <= 0) {
            number.textContent = 0;
        }
    }, {once : true})
    
    // {once : true} = The EventListener should be only one time used
    
    notifications[1].addEventListener(`click`, () => {
        number.textContent -= 1
        if (number.textContent <= 0) {
            number.textContent = 0;
        }
    }, {once : true})
    
    notifications[2].addEventListener(`click`, () => {
        number.textContent -= 1
        if (number.textContent <= 0) {
            number.textContent = 0;
        }
    }, {once : true})
}

countingNotificationsDown()