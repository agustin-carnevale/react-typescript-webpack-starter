import './styles.css';
import Image from '../assets/colors.png';
import PineappleSVG from '../assets/Pineapple.svg';

const App = () => {
    return <div>
        <h1>React Typescript WebPack Template</h1>
        <img src={Image} alt="Colors" width="300" height="400" />
        <img src={PineappleSVG} alt="Pineapple" width="150"/>
    </div> 
}

export default App