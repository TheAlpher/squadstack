import React,{useState, Fragment} from 'react';
import data from 'assets/json/data.json';
import Navigation from 'components/navigation';
const PricingPage = () => {
const [modalOpen,setModalOpen]=useState(false);
const [activeTab,setActiveTab]=useState(localStorage.getItem('activeTab')||2);
const toggleModal=()=>{
    setModalOpen(!modalOpen);
}
const updateActiveTab=(index)=>{
    setActiveTab(index);
    localStorage.setItem('activeTab',index);
}
    // return (<div>{data.map((tab,index)=>{
    //     return(<Fragment key={index}>
    //      <br/>{tab.range}<br/></Fragment>
    //     )
    // })}</div>);
    return(<Navigation data={data} activeTab={activeTab} updateActiveTab={updateActiveTab}/>)
}
 
export default PricingPage;