import style from './Home.module.css'

export default function Home() {

    let hours = 0;
    let mins = 0;
    let seconds = 0;
    let count = 0;
    let timer;
    let lapContent = '' ;
    let noLaps = 0

    function stopWatch() {
        if (timer) {
            count++;

            if (count == 100) {
                seconds++;
                count = 0;
            }

            if (seconds == 60) {
                mins++;
                seconds = 0;
            }

            if (mins == 60) {
                hours++;
                mins = 0;
                seconds = 0;
            }

            let hrString = hours;
            let minString = mins;
            let secString = seconds;
            let countString = count;

            if (hours < 10) {
                hrString = "0" + hrString;
            }

            if (mins < 10) {
                minString = "0" + minString;
            }

            if (seconds < 10) {
                secString = "0" + secString;
            }

            if (count < 10) {
                countString = "0" + countString;
            }

            document.getElementById('hours').innerHTML = hrString;
            document.getElementById('mins').innerHTML = minString;
            document.getElementById('seconds').innerHTML = secString;
            document.getElementById('count').innerHTML = countString;
            setTimeout(stopWatch, 10);
        }


    }

    function start() {
        timer = true;
        stopWatch();

        document.getElementById('seconds').innerHTML = seconds

    }

    function stop() {
        timer = false
    }

    function reset() {
        timer = false;
        hours = 0;
        mins = 0;
        seconds = 0;
        count = 0;
        document.getElementById('hours').innerHTML = "00";
        document.getElementById('mins').innerHTML = "00";
        document.getElementById('seconds').innerHTML = "00";
        document.getElementById('count').innerHTML = "00";
    }

    function lap(){
        noLaps += 1
  
        lapContent += `<li class='lap'>${'#' + noLaps + ' | ' + document.getElementById('stopwatchContent').innerText}</li>`;

        document.getElementById('bigDiv').classList.remove('d-none')

        document.getElementById('lapSections').innerHTML = lapContent
  
    }

    function clear(){
        document.getElementById('lapSections').innerHTML = '';
        document.getElementById('bigDiv').classList.add('d-none')
        lapContent = '';
        noLaps = 0;
    }

    function showThreeBtns() {

        document.getElementById('threeBtns').classList.remove('d-none')
        document.getElementById('startBtn').classList.add('d-none')

    }

    function hidethreeBtns() {

        document.getElementById('startBtn').classList.remove('d-none')
        document.getElementById('threeBtns').classList.add('d-none')

    }


    return <>
        <div className={style.homeComponent}>

            <div className='d-flex align-items-center justify-content-center'>
                <div className={`${style.content}`}>
                    <div id='stopwatchContent'><span id='hours' className={`${style.timer}`}>00</span> H <span className={style.timer}> : </span> <span id='mins' className={style.timer}>00</span> M <span className={style.timer}> : </span><span id='seconds' className={style.timer}>00</span> S  : <span id='count' className={style.timer}>00</span> Ms</div>

                </div>
            </div>

            <div className='d-flex align-items-center justify-content-center'>
                <button onClick={() => { showThreeBtns(); start() }} id='startBtn' className={`${style.Btns}`}>Start</button>

                <div id='threeBtns' className='d-flex align-items-center justify-content-center d-none'>
                    <button onClick={() => {hidethreeBtns(); reset()}} className={style.Btns}>Reset</button>
                    <button onClick={() => { hidethreeBtns(); stop() }} className={`${style.Btns} mx-4`}>Pause</button>
                    <button onClick={() => lap()} className={style.Btns}>Lap</button>
                </div>

            </div>

            <div id='bigDiv' className='d-flex align-items-center justify-content-center flex-column mt-4 d-none'>
            <ul id='lapSections' className='p-0'>
               
                </ul>
                <button onClick={() => clear()} className={`${style.Btns} my-2 `}>Clear Laps</button>
            </div>

        </div>

    </>
}
