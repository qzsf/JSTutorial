function getUsers() {
    return fetch('http://sfnews.sf.ad.ssa.gov/cybersecurity/wp-json/wp/v2/posts', {
        method: 'GET',
        headers: { 'Accept': 'application/json' }
    })
        .then(res => res.json())
        .then(console.log);
}

export default fetch('http://sfnews.sf.ad.ssa.gov/cybersecurity/wp-json/wp/v2/posts', {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
})
    .then(res => res.json())
    .then(console.log);

// export default getUsers;