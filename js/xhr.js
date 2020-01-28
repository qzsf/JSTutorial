const request = new XMLHttpRequest();
request.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        console.log('HTTP Request.')
        console.log(this.responseText);
    }
};
request.open('GET', 'http://sfnews.sf.ad.ssa.gov/cybersecurity/wp-json/wp/v2/posts', true);
request.setRequestHeader('Accept', 'application/json');
// request.send();

export const sendRequest = request.send();