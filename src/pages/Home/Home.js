import Data from "../../Data/data";
import Card from "../../Components/Card/card";
import './home.css';
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    const handleClick = (index) => {
        switch (index) {
            case 1:
                navigate('/Bai7');
                break;
            case 2:
                navigate('/Bai8');
                break;
            case 3:
                navigate('/Bai9');
                break;
            case 4:
                navigate('/Bai10');
                break;
            case 5:
                navigate('/Bai11');
                break;
            case 6:
                navigate('/Bai12');
                break;
            default:
                navigate('/');
                break;
        }
    }
    return (
        <div style={{padding: "20px", backgroundColor: "#41B3A3", cursor: "pointer"}}>
            <h1>Bài thực hành 3</h1>
            <div className="wrapper">
                {Data.map((da, index) => {
                    return (
                        <div className="cardCom" key={da.id} onClick={() => handleClick(index+1)}>
                            <Card title={da.title}/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Home;