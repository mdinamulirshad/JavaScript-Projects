export default class Timer {
    constructor(root) {
        root.innerHTML = Timer.getHTML();

        this.el = {
            minutes: root.querySelector(".timer_part_minutes"),
            seconds: root.querySelector(".timer_part_seconds"),
            controls: root.querySelector(".timer_btn_control"),
            reset: root.querySelector(".timer_btn_reset")
        }

        this.interval = null;
        this.remainingSeconds = 900;

        // this.updateInterfaceTime()
        // this.updateInterfaceControls()
        // this.start();
        // this.stop();

        this.el.controls.addEventListener("click", () => {
            //for starting and pausing timer
            if (this.interval === null) {
                this.start();
            } else {
                this.stop();
            }
        });

        this.el.reset.addEventListener("click", () => {
            //for reset timer or for setting time
            const inputMinutes = prompt("Enter number of minutes.")

            if (inputMinutes < 60) {
                this.stop();
                this.remainingSeconds = inputMinutes * 60;
                this.updateInterfaceTime();

            }
        });
    }


    updateInterfaceTime() {
        const minutes = Math.floor(this.remainingSeconds / 60);
        const seconds = this.remainingSeconds % 60

        this.el.minutes.textContent = minutes.toString().padStart(2, "0");
        this.el.seconds.textContent = seconds.toString().padStart(2, "0");

        console.log(minutes, seconds);
    }


    updateInterfaceControls() {
        if (this.interval === null) {
            this.el.controls.innerHTML = `<i class="fa-solid fa-circle-play"></i>`;
            this.el.controls.classList.add("timer_btn_start");
            this.el.controls.classList.remove("timer_btn_stop");
        } else {
            this.el.controls.innerHTML = `<i class="fa-solid fa-pause"></i>`;
            this.el.controls.classList.add("timer_btn_stop");
            this.el.controls.classList.remove("timer_btn_start");
        }
    }


    start() {
        if (this.remainingSeconds === 0) return;

        this.interval = setInterval(() => {
            this.remainingSeconds--;
            this.updateInterfaceTime();

            if (this.remainingSeconds === 0) {
                this.stop();
            }
        }, 1000);

        this.updateInterfaceControls();
    }

    stop() {
        clearInterval(this.interval);
        this.interval = null;
        this.updateInterfaceControls();
    }


    static getHTML() {
        return `
            <span class="timer_part timer_part_minutes">00</span>
            <span class="timer_part">:</span>
            <span class="timer_part timer_part_seconds">00</span>
            <button type="button" class="timer_btn timer_btn_control timer_btn_start">
                <i class="fa-solid fa-circle-play"></i>
            </button>
            <button type="button" class="timer_btn timer_btn_reset">
                <i class="fa-solid fa-clock"></i>
            </button>
        `;
    }
}