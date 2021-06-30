
// IMPORT
import { Toast } from "./components/toast/Toast.js";
import { Clock } from "./components/clock/Clock.js";
import { Form } from "./components/form/Form.js";
import { Progressbar } from "./components/progress-bar/ProgressBar.js";
import { socials } from "./components/socials/socials.js";
import { clockData } from "./data/clockData.js";
import { progressBarData } from "./data/progressBarData.js";
import { socialsData } from "./data/socialsData.js";
import { SocialsOOP } from "./components/socials/SocialsOOP.js";

// EXECUTION
const toast = new Toast();
// toast.success('Tau pavyko!');
// toast.error('kazkur sufeilinai pildydamas💩')

new Clock('#clock_1', clockData);


// socials('footer .socials', socialsData);
new Progressbar('.left-column', progressBarData);
new SocialsOOP('.row-big.socials', socialsData);
new Form('.hero form');
new Form('main form');



























// let count = 0;

// const timer1 = setInterval(() => {
//     if (count < 10) {
//         console.log(count++);
//     } else {
//         clearInterval(timer1);
//     }
// }, 1000)

