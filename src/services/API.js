class API{
    static getAllTags = async () => {
        return await fetch("https://raw.githubusercontent.com/peratrusnik/fake_db/main/tags")
        .then((res)=> res.json())
    }
    static getAllPost = () => {
        return fetch("https://raw.githubusercontent.com/peratrusnik/fake_db/main/posts")
        .then((res) => res.json())
    }
}

export default API