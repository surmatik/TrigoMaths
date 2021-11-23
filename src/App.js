import './App.css';
import {Button, Container, FormControl, InputGroup} from "react-bootstrap";
import {useState} from "react";
import { calculateSinusTangensCosinus} from './globalhelper/SinusCosinusTangens.js'
import * as sideLengthAnglesType from './calculateSideLengthandAngles/anglesAndSideLengthOfTriangles.mjs'

function App() {
    const [seiteA, setSeiteA] = useState(0)
    const [seiteB, setSeiteB] = useState(0)
    const [seiteC, setSeiteC] = useState(0)
    const [alpha, setAlpha] = useState(0)
    const [beta, setBeta] = useState(0)
    const [gamma, setGamma] = useState(0)
    let triangleSpecies = ''
    const [sinusAlpha, setSinusAlpha] = useState(0)
    const [sinusBeta, setSinusBeta] = useState(0)
    const [tangensAlpha, setTangensAlpha] = useState(0)
    const [tangensBeta, setTangensBeta] = useState(0)
    const [cosineAlpha, setCosineAlpha] = useState(0)
    const [cosineBeta, setCosineBeta] = useState(0)





    function calculateTriangle() {


        
        
        findMethodForValues()
        const cosineTangensAndSine = calculateSinusTangensCosinus(seiteA, seiteB, seiteC)
        setSinusAlpha(cosineTangensAndSine.sinusAlpha)
        setSinusBeta(cosineTangensAndSine.sinusBeta)
        setTangensAlpha(cosineTangensAndSine.tangensAlpha)
        setTangensBeta(cosineTangensAndSine.tangensBeta)
        setCosineAlpha(cosineTangensAndSine.cosineAlpha)
        setCosineBeta(cosineTangensAndSine.cosineBeta)

        findTriangleSpecies()
    }

    function findMethodForValues() {
        if(seiteA !== 0 && seiteB !== 0 && seiteC !== 0) {
            let angles = sideLengthAnglesType.SSS(seiteA, seiteB, seiteC)
            setAlpha(angles[0])
            setBeta(angles[1])
            setGamma(angles[2])
        }
        if(seiteA !== 0 && seiteB !== 0 && alpha !== 0) {
            let resultObjects = sideLengthAnglesType.SSW(seiteA, seiteB, alpha)
            setBeta(resultObjects.angleBeta)
            setGamma(resultObjects.angleGamma)
            setSeiteC(resultObjects.seiteC)
        }
    }


    function findTriangleSpecies() {
        if (seiteA === seiteB && seiteA === seiteC) {
            triangleSpecies = 'gleichseitig'
        }
        if (seiteB === seiteA) {
            triangleSpecies = 'gleichschenklig'
        }
    }

    /*
    const initializeCanvas = () => {
        if (document.querySelector("#canvas")) {
            let canvasElement = document.querySelector("#canvas");
            let ctx = canvasElement.getContext("2d");
            // the width of the canvas
            let cw = (canvasElement.width = 150),
                cx = cw / 2;
            //the height of the canvas
            let ch = (canvasElement.height = 150),
                cy = ch / 2;
            //your data
            let a = seiteA,
                b = seiteB,
                c = seiteC;
            // In this case you have an isosceles triangle since a = b = 30
            // this triangle is circumscribed in a circle with a radius = 30
            let R = 30;
            // calculate the angle between the two sides of equal length
            let angle = Math.asin(.5 * c / a);

            //draw the circumscribed circle:
            ctx.beginPath();
            ctx.arc(cx, cy, R, 0, 2 * Math.PI);
            ctx.stroke();


            let triangle = {
                //the first vertex is in the center of the canvas
                //you may decide to change this.
                x1: cx,
                y1: cy,
                //the second vertex is on the circumscribed circle at 0 radians where R is the radius of the circle ( a = 30, b=30 )
                //you may decide to change this.
                x2: cx + R,
                y2: cy,
                //calculate the 3-rd vertex
                x3: cx + R * Math.cos(alpha),
                y3: cy + R * Math.sin(beta)
            };

            ctx.strokeStyle = "red";

            ctx.beginPath();
            ctx.moveTo(triangle.x1, triangle.y1);
            ctx.lineTo(triangle.x2, triangle.y2);
            ctx.lineTo(triangle.x3, triangle.y3);
            ctx.lineTo(triangle.x1, triangle.y1);
            ctx.closePath();
            ctx.stroke();
        }
    }
    */

    return (
        <Container style={{alignItems: "center", textAlign: "center"}} className="App">
            <div>
                <h1>TRIGO</h1>
                <br/>
                <br/>
                <table>
                    <tr>
                        <td>
                            {/*Gegenkathete*/}
                            <h5>Gegenkathete</h5>
                            <InputGroup className="form-group w-50">
                                <FormControl
                                    aria-label="Default"
                                    aria-describedby="inputGroup-sizing-default"
                                    onChange={e => setSeiteA(e.target.value)}
                                />
                            </InputGroup>
                        </td>
                        <td>
                            {/*Ankathete*/}
                            <h5>Ankathete</h5>
                            <InputGroup className="form-group w-50">
                                <FormControl
                                    aria-label="Default"
                                    aria-describedby="inputGroup-sizing-default"
                                    onChange={e => setSeiteB(e.target.value)}
                                />
                            </InputGroup>
                        </td>
                        <td>
                            {/*Hypotenuse*/}
                            <h5>Hypotenuse</h5>
                            <InputGroup className="form-group w-50">
                                <FormControl
                                    aria-label="Default"
                                    aria-describedby="inputGroup-sizing-default"
                                    onChange={e => setSeiteC(e.target.value)}
                                />
                            </InputGroup>
                        </td>
                        <td>
                            {/*Alpha*/}
                            <h5>Alpha</h5>
                            <InputGroup className="form-group w-50">
                                <FormControl
                                    aria-label="Default"
                                    aria-describedby="inputGroup-sizing-default"
                                    onChange={e => setAlpha(e.target.value)}
                                />
                            </InputGroup>
                        </td>
                        <td>
                            {/*Beta*/}
                            <h5>Beta</h5>
                            <InputGroup className="form-group w-50">
                                <FormControl
                                    aria-label="Default"
                                    aria-describedby="inputGroup-sizing-default"
                                    onChange={e => setBeta(e.target.value)}
                                />
                            </InputGroup>
                        </td>
                        <td>
                            {/*Gamma*/}
                            <h5>Gamma</h5>
                            <InputGroup className="form-group w-50">
                                <FormControl
                                    aria-label="Default"
                                    aria-describedby="inputGroup-sizing-default"
                                    onChange={e => setGamma(e.target.value)}
                                />
                            </InputGroup>
                        </td>
                    </tr>
                </table>
                <br/>
                {/*Berechnen*/}
                <Button onClick={() => calculateTriangle() }>Calculate</Button>
                <br/>
                <table>
                    <tr>
                        <td>{/*Sinus Cosinus*/}
                            <div>
                                <h3>Sinus Cosinus</h3>
                                <p>Sinus Alpha: {sinusAlpha}</p>
                                <p>Sinus Beta: {sinusBeta}</p>
                                <p>Cosinus Alpha: {cosineAlpha}</p>
                                <p>Cosinus Beta: {cosineBeta}</p>
                            </div>
                        </td>
                        <td>{/*Tangens*/}
                            <div>
                                <h3>Tangens</h3>
                                <p>Tangens Alpha: {tangensAlpha} </p>
                                <p>Tangens Beta: {tangensBeta}</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <h3>Seiten</h3>
                                <p>a: {seiteA} </p>
                                <p>b: {seiteB} </p>
                                <p>c : {seiteC}</p>
                            </div>
                        </td>
                        <td>
                            <div><h3>Angles</h3>
                                <p>Winkel Alpha: {alpha}</p>
                                <p>Winkel Beta: {beta}</p>
                                <p>Winkel Gamma: {gamma}</p></div>
                        </td>
                        <td>
                            <div>
                                <h3>Triangle Species</h3>
                                <p>{triangleSpecies}</p>
                            </div>
                        </td>
                    </tr>
                </table>


                <br/>

                {/* <Button onClick={() => initializeCanvas}>Create Triangle</Button> */}
                <canvas id="canvas">

                </canvas>
                {/*Seiten*/}
                <br/>

            </div>
        </Container>

    );
}

export default App;