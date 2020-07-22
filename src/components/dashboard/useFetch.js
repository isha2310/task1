import {useState, useEffect} from 'react'
import axios from 'axios'

const useFetch = (endpoint) => {
    const [links, setLinks] = useState([])

    useEffect(() => { 
        axios.get(`https://dog.ceo/api/breed/${endpoint}/images/random/9`)
        .then((res) => {
            if(res.data.status === 'success'){
                setLinks(res.data.message) 
        }
        })
        .catch((e) => console.log(e))
    }, [endpoint])
    console.log(links)
    return links
}

export default useFetch