import text from "./bai8_data";
import './bai8.css';
import { useState } from "react";
const Bai8 = () => {
    const [count, setCount] = useState(1);
    const [paragraphs, setParagraphs] = useState(text);
    const [click, setClick] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (count <= 0 ){
            setCount(1)
        }
        if (count > 8 ){
            setCount(8)
        }
        setParagraphs(text.slice(0, count))
        setClick(true);
    }
    return (
        <div className="wrapper-bai8">
            <div className="container_bai8">
                <h3 className="title_bai8">tired of boring lorem ipsum?</h3>
                <form className="form_bai8" onSubmit={handleSubmit}>
                    <label htmlFor="amount">Paragraphs: </label>
                    <input 
                        type='number'
                        name='amount'
                        min='0'
                        max='8'
                        id='amount'
                        value={count}
                        onChange={(e) => setCount(e.target.value)}
                    />
                    <button className="btn_bai8">Generate</button>
                </form>
                <div className="paragraph_section">
                    {click && paragraphs.map((item, index)=> {
                        return (
                            <p key={index} className="paragraph_bai8">{item}</p>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
export default Bai8;