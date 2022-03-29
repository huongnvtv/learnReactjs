import {useEffect, useState} from 'react'
function Content(){
    // useEffect(callback,[dependence])
    // 1. useEffect(callback)
    // - Gọi callback mỗi khi component re-render
    // - Gọi callback sau khi element thêm component vào dom
    // 2. useEffect(callback,[])
    // Chỉ gọi callback 1 lần sau khi component mounted
    // 3. useEffect(callback,[deps])
    // Callback sẽ được gọi lại mỗi khi dependence thay đổi 
    // ---------------
    // 1. Callback luôn được gọi sau khi component mounted
    const [title,setTitle] = useState("")
    const [posts,setPosts] = useState([])
    const tabs = ['posts','comments','albums']
    const [type, setType] = useState('posts')
    useEffect(() => {
        // console.log("Mounted", title)
        // document.title = title
        fetch("https://jsonplaceholder.typicode.com/posts")
             .then(res => res.json())
             .then(data => {
                 setPosts(data)
             })
    }, [])
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
        .then(res => res.json())
        .then(data => {
            setPosts(data)
        })
    },[type])
    // console.log(posts);
    console.log(type);
    return (
        <div>
            {tabs.map(tab => (
                <button key = {tab}
                style = {type === tab ? {
                    color : '#fff',
                    backgroundColor : '#333'
                } : {}}
                onClick = {() => setType(tab)} >{tab}
                </button>
            ))}
            <br/>
            <input 
                value={title} 
                onChange = {e => setTitle(e.target.value)}
            />
            {/* {console.log('render')} */}
            <ul>
                {posts.map(post => (<li key={post.id}>{post.title}</li>))}
            </ul>
        </div>
    )
}
export default Content