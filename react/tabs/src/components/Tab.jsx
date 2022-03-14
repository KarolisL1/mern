import React, {useState} from "react";

const Tab = () => {

    let [activeTab, setActiveTab] = useState([]);

    const [activeTabValue, setActiveTabValue] = useState([{tabName:"Tab1", content: "first"},{tabName:"Tab2", content: "second"},{tabName:"Tab3", content: "third"}]);


    const handleClick = (index) => {
        // console.log(activeTabValue[index].content)
        setActiveTab(activeTabValue[index].content);
    }

    return (
        <>
        <form>
            <div>
                {
                    activeTabValue.map((tab, index) => {
                        return (
                            <div key={index}>
                                <label onClick={()=>handleClick(index)}>{tab.tabName}</label>
                            </div>
                        )
                    })
                }
            </div>
        </form>
        <div>
            <h1>{activeTab}</h1>
        </div>
        </>
    )


}
export default Tab;