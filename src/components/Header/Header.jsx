import LOGOHEVINCI from '../../assets/LOGOHEVINCI.png'

const Header = ({course}) => {
    return (
        <div>
            <img src={LOGOHEVINCI} alt="Logo Hevinci" />
            <h1>{course}</h1>
        </div>
    )
}

export default Header