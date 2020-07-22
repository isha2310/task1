import React, { useState } from 'react'
import useFetch from './useFetch'
import 'antd/dist/antd.css'
import { Layout } from 'antd'
import './dashboard.css'

const { Header, Content } = Layout;

const Dashboard = () => {
    let [breed, setBreed] = useState('')
    let data = useFetch(breed)


    const handleChange = (e) => {
        const value = e.target.value
        if(value){
            setBreed(value)
        }
    }

    return (
        <div className="dashboard" >
            <Layout style={{backgroundColor: '#262626'}} className="dashboard2">
                <Header style={{ backgroundColor: '141414', position: 'fixed', zIndex: 1, width: '100%' }}>
                    <input placeholder="Enter breed" onChange={handleChange} className="dash-input" />
                </Header>
                <Content className="site-layout" >
                    <div className="site-layout-background" >

                        {data &&  
                        data.map((url) => {
                            return <img className="dog-img" key={data.indexOf(url)} src={url} alt="" />
                        })
                        }
                    </div>
                </Content>
            </Layout>           
        </div>
    )
}

export default Dashboard