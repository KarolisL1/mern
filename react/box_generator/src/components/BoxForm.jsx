import React, {useState} from "react";

const BoxForm = () => {
    let [text, setText] = useState("");

    //submited values
    let [colorList, setColor] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        let newColorObj = { text: text }

        // onSubmit(text);
        
        //set text to empty
        setText("");

        setColor([...colorList, newColorObj]);
    };

    return (
        <>
        <form onSubmit={handleSubmit}>
            <label>Color: </label>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
            <input type="submit" value="Add"/>
        </form>

        <div style={{display: 'flex', justifyContent: 'center'}}>
            {
                colorList.map((box) => {
                    return <div style={{backgroundColor: box.text, width: '50px', height: '50px', margin: '3px'}}>
                    </div>
                })
            }
        </div>
        </>

    )
}

export default BoxForm;