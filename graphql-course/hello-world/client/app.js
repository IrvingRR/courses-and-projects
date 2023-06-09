const GRAPHQL_URL = 'http://localhost:9000/';

const fetchGreeting = async () => {
    const response = await fetch(GRAPHQL_URL, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({
            query: `
                query {
                    greeting
                }
            `
        })
    });

    const { data } = await response.json();
    return data;
}

const element = document.getElementById('greeting');
element.textContent = "Loading...";

fetchGreeting().then(data => element.textContent = data.greeting);