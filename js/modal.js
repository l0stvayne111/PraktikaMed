function modalFunc(){
    let body = document.body;
    let unlock = !0;
    let timeout = 150;


    const openModalBtn = document.querySelectorAll('.open-modal-js');
    const closeModalBtn = document.querySelectorAll('.close-modal');

    if(openModalBtn.length > 0){
        openModalBtn.forEach(btn=>{
            btn.addEventListener('click', (event)=>{
                event.preventDefault();
                triggerOpenModal(btn)
            })
        })
    }
    if(closeModalBtn.length > 0){
        closeModalBtn.forEach(btn=>{
            btn.addEventListener('click', (event)=>{
                event.preventDefault()
                triggerCloseModal(btn)
            })
        })
    }

    function  triggerCloseModal(btn){
        modalCLose(btn.closest(".modal-js"));
    }

    function triggerOpenModal(btn){
        let c = btn.getAttribute("href") || btn.getAttribute("data-modal");
        c = document.querySelector(c);
        openModal(c);
    }

    function openModal(a) {
        if (a && unlock) {
            var b = document.querySelector(".modal-js.open");
            b ? modalCLose(b, !1) : bodyLock();
            a.classList.add("open");
            a.addEventListener("click", function (c) {
                c.target.closest(".modal__body") ? "" : modalCLose(c.target.closest(".modal-js"))
            })
        }
    }

    function modalCLose(a, b) {
        b = void 0 === b ? !0 : b;
        unlock && (a.classList.remove("open"), b && bodyUnLock())
    }

    function bodyLock() {
        body.style.paddingRight = window.innerWidth - body.offsetWidth + "px";
        body.classList.add("page-close");
        unlock = !1;
        setTimeout(function () {
            unlock = !0
        }, timeout)
    }

    function bodyUnLock() {
        setTimeout(function () {
            if(!document.querySelector('.sm-md-menu.open')){
                body.classList.remove("page-close");
                body.style.paddingRight = "0px";
            }
        }, timeout);
        setTimeout(function () {
            unlock = !0
        }, timeout)
    }

    document.addEventListener("keydown", function (a) {
        27 === a.which && (a = document.querySelector(".modal-js.open"), modalCLose(a))
    });
}
modalFunc();