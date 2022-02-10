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

            string = `${window.location.origin}/send?to=${to}&subject=${subject}&body=${body}/`

            resultBox.value = "Loading...";
          
            fetch("https://url-shortener-service.p.rapidapi.com/shorten", {
                headers: {
                    "content-type": "application/x-www-form-urlencoded",
		            "x-rapidapi-host": "url-shortener-service.p.rapidapi.com",
		            "x-rapidapi-key": "fe837bcddbmsheb2c9090e667d80p11122bjsn8d748aadbf61"
                },
                method: 'POST',
                body: {"url": string}
            }).then(response => response.json())
              .then(result => {
                resultBox.value = result;
                document.querySelector('#copyResult').disabled = false;
            });
        }
    });
    document.querySelector('#copyResult').addEventListener('click', () => {
        navigator.clipboard.writeText(document.querySelector('#result').value);
    });
});