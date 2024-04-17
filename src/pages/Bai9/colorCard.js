import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ColorCard = ({bgColor, brightness, index, hexCode}) => {
    const value = brightness - index*5
    const notify = () => {
        navigator.clipboard.writeText(hexCode)

        toast.success('Color copied to clipboard!', {
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
        <div style={{
                backgroundColor: `${bgColor}`, 
                height: "110px",
                color: (value < 0) ? "white" : "black",
                paddingTop: "15px",
                paddingLeft: "25px"}}
             onClick={notify}>
            <div>{(value < 0 ) ? value + (index-10)*20 : value}%</div>
            <div>{hexCode}</div>
            <ToastContainer />
        </div>
    )
}

export default ColorCard;