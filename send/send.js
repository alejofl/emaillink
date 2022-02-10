document.addEventListener('DOMContentLoaded', () => {
    url = new URL(window.location.href);
    to = url.searchParams.get("to");
    subject = url.searchParams.get("subject");
    body = url.searchParams.get("body");
    if (to != null && to != '') {
        if (subject == null) {
            subject = '';
        }
        if (body == null) {
            body = '';
        }
        mailto = `mailto:${to}?subject=${subject}&body=${body.replace(new RegExp(/(%0A)|(\n)/, 'g'), '%0D%0A')}`;
        window.location.href = mailto;
    }
});