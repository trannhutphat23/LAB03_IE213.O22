import './bai9.css';
import { useState } from 'react';
import ColorCard from './colorCard';
import Values from 'values.js'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Bai9 = () => {
    const [color, setColor] = useState("")
    const [errors, setError] = useState(false)
    const [backgroundColor, setBackgroundColor] = useState((color === "#f15025" || color === "") ? "#635DFF" : color);
    var defaultColor = new Values('#f15025').all;
    var defaultListColor = defaultColor.filter((item) => {
        return item._hsl.l % 5 === 0;
    })
    const [list, setList] = useState(defaultListColor)

    const handleSubmit = (e) => {
        e.preventDefault()
        try {
          let colors = new Values(color).all
          let colorsList = colors.filter((item) => {
            return item._hsl.l % 5 === 0;
          })
          setList(colorsList)
        } catch (error) {
          setError(true)
        }
    }
    const notifyError = () => {
        toast.error(`Unable to parse color from string: ${color}`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
    return (
        <div className='wrapper-bai9'>
            <div className='generatorBai9'>
                <h3 className='titleBai9'>Color Generator</h3>
                <form onSubmit={handleSubmit}
                    onMouseMove={() => {
                        setBackgroundColor((color === "#f15025" || color === "") ? "#635DFF" : color);
                    }}
                    className='formBai9'
                    >
                    <input type='color' value={((color === "") ? "#000000" : backgroundColor)} className='colorInputBai9'
                            onChange={(e) => {setBackgroundColor(e.target.value); setColor(e.target.value)}}/>
                    <input
                        type='text'
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                        placeholder='#f15025'
                        className='inputBai9'
                    />
                    <ToastContainer />
                    {(color === "#f15025" || color === "") && (
                        <button className='btnBai9' type='submit' 
                                style={{
                                    backgroundColor: backgroundColor,
                                }}
                                onMouseEnter={() => {
                                    setBackgroundColor("#41399C");
                                }}
                                onMouseLeave={() => {
                                    setBackgroundColor("#635DFF");
                                }}
                                onClick={(errors) ? notifyError : null}
                                >
                            Submit
                        </button>
                    )}
                    {(color !== "#f15025" && color !== "") && (
                        <button className='btnBai9' type='submit' 
                            style={{
                                backgroundColor: backgroundColor,
                            }}
                            onClick={(errors) ? notifyError : null}
                            >
                            Submit
                        </button>
                    )}
                </form>
            </div>
            <div className='colors'>
                {list.map((item, index) => {
                    return (
                        <ColorCard key={index} bgColor={item.rgb} brightness={item._hsl.l} index={index} hexCode={item.hex}/>
                    )
                })}
            </div>
        </div>
    )
}

export default Bai9;