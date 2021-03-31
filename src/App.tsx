import './styles.css'
import Image from '../assets/colors.png'
import PineappleSVG from '../assets/pineapple.svg'

const App = () => {
  //   const name = "Agustin"
  return (
    <div>
      <h1>
        React Typescript WebPack Template - {process.env.NODE_ENV} -{' '}
        {process.env.name}
        {/* {name} */}
      </h1>
      <img src={Image} alt="Colors" width="300" height="400" />
      <img src={PineappleSVG} alt="Pineapple" width="150" />
    </div>
  )
}

export default App
