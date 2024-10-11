document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname;

    if (currentPage === '/html/index.html' || currentPage === '/') {
        indexjs();
    } else if (currentPage === '/html/iphone.html') {
        iphonejs();
    } else if (currentPage === '/html/contactons.html') {
        contactonsjs();
    } else if (currentPage === '/html/data.html') {
        datajs();
    }
});

function indexjs() {
    newspaperinfo();
    timelimit();
    navigate();
    test();
    
    // Timer code
    function timelimit() {
        const startTime = 62000; // seconds value
        let seconds;

        const clock = document.getElementById('timer');

        if (localStorage.getItem('seconds')) {
            seconds = parseInt(localStorage.getItem('seconds'), 10);
        } else {
            seconds = startTime;
        }

        function formatTime(seconds) {
            const hrs = Math.floor(seconds / 3600);
            const mins = Math.floor((seconds % 3600) / 60);
            const secs = seconds % 60;
            return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        }

        function updateTimer() {
            if (seconds < 1) {
                seconds = startTime;
            } else {
                seconds--;
                clock.textContent = formatTime(seconds);
                localStorage.setItem('seconds', seconds);
            }
        }

        clock.textContent = formatTime(seconds);
        timer = setInterval(updateTimer, 1000);
    }

    // when iphone-btn is pressed redirect to :
    function navigate() {
        const btn = document.getElementById('claim-btn-red');
        btn.addEventListener('click', () => {
            window.location.href = 'iphone.html';
        });
    }

    // takes info for newspaper
    function newspaperinfo() {
        const btn = document.getElementById('index-btn');

        btn.addEventListener('click', () => {
            const name = document.getElementById('email-name').value;
            const email = document.getElementById('index-email').value;

            // checks for valid input else log error
            if (!name || !email) {
                console.log('please enter a value');
                return;
            }

            // create the array and pushes data into the array
            const emailarray = JSON.parse(localStorage.getItem('indexdata')) || [];
            emailarray.push({ name, email });

            localStorage.setItem('indexdata', JSON.stringify(emailarray));
        });

        // the data array
        console.log(JSON.parse(localStorage.getItem('indexdata')) || []);
    }

    function test() {
        document.getElementById('challange').addEventListener('click', (event) => {
            event.preventDefault()
        
            const num1 = Math.floor(Math.random() * 10) + 1;
            const num2 = Math.floor(Math.random() * 10) + 1;
            const answer = num1 + num2;
        
            const userAnswer = prompt('Solve the following math problem to proceed:\n\n' +
                num1 + ' + ' + num2 + ' = ?');
        
            if (userAnswer == answer) {
                alert('Correct');
                window.location.href = 'data.html';
            } else {
                alert('Incorrect answer'); // Show failure message
            }
        });
    }
}

function iphonejs() {
    iphoneinfo();

    // takes info for iphone
    function iphoneinfo() {
        const btn = document.getElementById('iphone-btn');

        btn.addEventListener('click', () => {
            const fname = document.getElementById('iphone-firstname').value;
            const lname = document.getElementById('iphone-lastname').value;
            const email = document.getElementById('iphone-email').value;
            const cardnum = document.getElementById('iphone-cardnumber').value;
            const expdate = document.getElementById('iphone-expirydate').value;
            const cvc = document.getElementById('iphone-cvc').value;

            if (!fname || !lname || !email || !cardnum || !expdate || !cvc) {
                console.log('please enter a value');
                return;
            } 
                const iphonearray = JSON.parse(localStorage.getItem('iphonedata')) || [];

                // Push new data as an object into the array
                iphonearray.push({ fname, lname, email, cardnum, expdate, cvc });

                localStorage.setItem('iphonedata', JSON.stringify(iphonearray));
        });

        // the data array
        console.log(JSON.parse(localStorage.getItem('iphonedata')) || []);
    }
}

function contactonsjs() {
contactinfo();

    function contactinfo() {
        const btn = document.getElementById('cont-btn');

        btn.addEventListener('click', () => {
            const fname = document.getElementById('cont-fname').value;
            const lname = document.getElementById('cont-lname').value;
            const email = document.getElementById('cont-email').value;
            const number = document.getElementById('cont-num').value;
            const msg = document.getElementById('cont-msg').value;

            if (!fname || !lname || !email || !number || !msg) {
                console.log('Please enter a value');
                return;
            }

            const contactarray = JSON.parse(localStorage.getItem('contactdata')) || [];
            contactarray.push({ fname, lname, email, number, msg });

            localStorage.setItem('contactdata', JSON.stringify(contactarray));

            document.getElementById('cont-fname').value = '';
            document.getElementById('cont-lname').value = '';
            document.getElementById('cont-email').value = '';
            document.getElementById('cont-num').value = '';
            document.getElementById('cont-msg').value = '';
        });

        console.log(JSON.parse(localStorage.getItem('contactdata')) || []);
    }

}

function datajs() {
    contactons();
    creditcard();
    newspaper();

    function newspaper() {
        const newsFname = document.getElementById('news-fname');
        const newsEmail = document.getElementById('news-email');
        const newspaperInfo = JSON.parse(localStorage.getItem('indexdata')) || [];
        const fname = newspaperInfo.map(item => item.name);
        const email = newspaperInfo.map(item => item.email);

        createP(fname, newsFname);
        createP(email, newsEmail);
    };

    function contactons() {
        const contactInfo = JSON.parse(localStorage.getItem('contactdata')) || [];
        const contactFname = document.getElementById('contact-fname');
        const contactLname = document.getElementById('contact-lname');
        const contactEmail = document.getElementById('contact-email');
        const contactNummer = document.getElementById('contact-nummer');
        const contactMsg = document.getElementById('contact-msg');
        const fname = contactInfo.map(item => item.fname);
        const lname = contactInfo.map(item => item.lname);
        const email = contactInfo.map(item => item.email);
        const number = contactInfo.map(item => item.number);
        const msg = contactInfo.map(item => item.msg);
        
        createP(fname, contactFname);
        createP(lname , contactLname);
        createP(email , contactEmail);
        createP(number , contactNummer);
        createP(msg , contactMsg);
    };

    function creditcard() {
        const creditFname = document.getElementById('credit-fname');
        const creditLname = document.getElementById('credit-lname');
        const creditEmail = document.getElementById('credit-email');
        const creditNummer = document.getElementById('credit-cardnum');
        const creditexp = document.getElementById('credit-expdate');
        const creditcvc = document.getElementById('credit-cvc');
        const iphoneInfo = JSON.parse(localStorage.getItem('iphonedata')) || [];
        const fname = iphoneInfo.map(item => item.fname);
        const lname = iphoneInfo.map(item => item.lname);
        const email = iphoneInfo.map(item => item.email);
        const cvc = iphoneInfo.map(item => item.cvc);
        const cardnum = iphoneInfo.map(item => item.cardnum);
        const exp = iphoneInfo.map(item => item.expdate);

        createP(fname, creditFname);
        createP(lname, creditLname);
        createP(email, creditEmail);
        createP(cardnum, creditNummer);
        createP(exp, creditexp);
        createP(cvc, creditcvc);
    }

    function createP (data, target) {
        data.forEach(item => {
            const p = document.createElement('p');
            p.innerText = item;
            target.append(p);
        });
    }
}