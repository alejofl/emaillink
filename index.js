const API_KEY = "7e5070a5ff071bdd757c2940b6af76f4402d5"

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#generateLink').addEventListener('click', () => {
        var form = document.querySelector('#form');
        var validity = form.checkValidity();
        form.classList.add('was-validated');

        if (validity) {
            to = document.querySelector('#toEmail').value;
            subject = document.querySelector('#subject').value;
            body = document.querySelector('#body').value;
            resultBox = document.querySelector('#result');

            string = `https://alejofl.github.io/emaillink/send/send.html?to=${to}&subject=${subject}&body=${body}`;
            encoded = encodeURIComponent(string);

            fetch(`https://cutt.ly/api/api.php?key=${API_KEY}&short=${encoded}`, {
                method: 'GET'
            }).then(response => response.json())
            .then (result => {
                console.log(result);
            })

            resultBox.value = "Loading...";
            resultBox.value = string;
            document.querySelector('#copyResult').disabled = false;
        }
    });
    document.querySelector('#copyResult').addEventListener('click', () => {
        navigator.clipboard.writeText(document.querySelector('#result').value);
    });
});