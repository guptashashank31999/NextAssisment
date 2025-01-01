export async function GET(request) {

    let data = await fetch('https://jsonplaceholder.typicode.com/posts');

    console.log('data', data)
}