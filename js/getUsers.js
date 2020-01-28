// use axios to request an API. axios will return a promise
function getUsers() {
    axios.get('http://sfnews.sf.ad.ssa.gov/cybersecurity/wp-json/wp/v2/posts')
        .then(handleResponse)
        .catch(handleError);
}
async function handleResponse(response) {
    console.log(response)
    if (response.status === 200) {
        return response.data;
    } else {
        // So, a server-side validation error occurred.
        // Server side validation returns a string error message, so parse as text instead of json.
        const error = await response.text();
        throw new Error(error);
    }
    // throw new Error("Network response was not ok.");
}
// In a real app, would likely call an error logging service.
function handleError(error) {
    // eslint-disable-next-line no-console
    console.error("API call failed. " + error);
    throw error;
}


// use async/await - a Syntactic Sugar for Promises
async function asyncFunction() {
    const {data} = await axios.get('http://sfnews.sf.ad.ssa.gov/cybersecurity/wp-json/wp/v2/posts');
    console.log(data);
}


export {getUsers as default, asyncFunction};