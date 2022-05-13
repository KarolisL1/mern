import React, {useState} from 'react';

const List = () => {
    let [listItem, setlistItem] = useState("");
    let [list, setList] = useState([]);
    let [checked, setChecked] = useState(false);

    const submitHandler = (e)=>{
        e.preventDefault(); //prevents the form from reloading the whole page
        let newListObj = {listItem, checked} //create a ninja object using the info from form

        setlistItem(""); //clear the form
        setList([...list, newListObj]) //add the new todo item to the list
    }

    const deleteitem = (i)=>{
        let filtereditemList = list.filter((item,index)=>{
            return index!=i;
        })
        //update our state array ninjaList to be this new filteredNinjaList
        setList(filtereditemList)
    }

    const handleChange = (i) => { //function to handle the checkbox
        let copyList = [...list]
        copyList[i].checked = !copyList[i].checked
        setChecked(copyList)
    }

    return (
        <>
            <form onSubmit={submitHandler}>
                <div>
                    <input type="text" name="listItem" value={listItem} onChange={(e) => setlistItem(e.target.value)}/>
                    <input type="submit" value="Add"/>
                </div>
            </form>
            <div>
                {list.map((item, index) => {
                    return <div >
                        <p key={index} style={{ textDecoration: item.checked? "line-through" : "" }}>{item.listItem}</p>
                        <input type="checkbox" onClick={()=>handleChange(index)}></input>
                        <button onClick={()=>deleteitem(index)}>Delete</button>
                    </div>
                })}
            </div>
        </>
    )
}

export default List;