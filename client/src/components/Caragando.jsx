import '../css/cargando.css'

const Cargando = () => {
    return (
        <div className='contenedor-cargando'>
            <div className="hourglassBackground">
                <div className="hourglassContainer">
                    <div className="hourglassCurves"></div>
                    <div className="hourglassCapTop"></div>
                    <div className="hourglassGlassTop"></div>
                    <div className="hourglassSand"></div>
                    <div className="hourglassSandStream"></div>
                    <div className="hourglassCapBottom"></div>
                    <div className="hourglassGlass"></div>
                </div>
            </div>
        </div>

    )
}

export default Cargando;