import React,{ useEffect, useState } from 'react'
import axios from 'axios'

export function useGetPosts(categoryName) {

    const [posts, setPosts] = useState([])
    
    const [refresh, setRefresh] = useState(false)

    async function getData(){
        try{
            setRefresh(true)
            const {data:{data:{children}}} = await axios.get(`https://api.reddit.com/r/pics/${categoryName.toLowerCase()}.json`)
            if(children) setPosts(children)
            setRefresh(false)
        }catch(err) {
            console.log("err",err);
        }
    }
  
    useEffect(()=>{
        if(categoryName){
            getData()
        }
    },[])

    return {
        posts,
        refresh,
        getData
    }
}