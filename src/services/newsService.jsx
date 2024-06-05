export const getAllNews =() => {
    return fetch(
        "http://localhost:8088/news"
    ).then((res) => res.json())
}