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

            string = `alejofl.github.io/emaillink/send/send.html?to=${encodeURIComponent(to)}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

            resultBox.value = "Loading...";
            resultBox.value = string;
            document.querySelector('#copyResult').disabled = false;
        }
    });
    document.querySelector('#copyResult').addEventListener('click', () => {
        navigator.clipboard.writeText(document.querySelector('#result').value);
    });
});