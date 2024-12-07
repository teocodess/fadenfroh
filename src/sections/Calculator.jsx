import React from 'react'
import Button from '../components/Button'
import { arrowRight } from "../assets";
import { useState, useRef } from 'react';
import {Timer} from "./index.js";
import html2canvas from "html2canvas";
import jsPDF from 'jspdf';
// import GaleryCardPage from '../sections/GaleryCardPage.jsx'



const Calculator = () => {
  const [projectName, setProjectName] = useState('');
  const [projectDate, setProjectDate] = useState('');
  const [yarnName, setYarnName] = useState('');
  const [hookSize, setHookSize] = useState('');
  const [stitch, setStitch] = useState('');
  const [finalLength, setFinalLength] = useState('');
  const [finalWidth, setFinalWidth] = useState('');
  const [yarnWeight, setYarnWeight] = useState('');
  const [yarnLength, setYarnLength] = useState('');
  const [skeinPrice, setSkeinPrice] = useState('');
  const [hourRate, setHourRate] = useState('');
  const [gaugeWeight, setGaugeWeight] = useState('');
  const [gaugeRows, setGaugeRows] = useState('');
  const [gaugeStitches, setGaugeStitches] = useState('');
  const [gaugeLength, setGaugeLength] = useState('');
  const [gaugeWidth, setGaugeWidth] = useState('');

  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState(null); // Separate state for calculation results
  const [crochetTime, setCrochetTime] = useState({ minutes: 0, seconds: 0 }); // Store final crochet time

  // Function to handle time update from the Timer
  const handleTimeUpdate = (minutes, seconds) => {
    
    const timeInMinutes = minutes + seconds/60;

    if (minutes >= 60){
      const totalTimeInHours = timeInMinutes / 60;
      setCrochetTime({ totalTimeInHours, timeInMinutes, minutes, seconds});
    }

    else {
      setCrochetTime({minutes, seconds});
    }
    
  };


  const handleCalculate = (e) => {
    e.preventDefault();
    const totalArea = finalLength * finalWidth;

    const gaugeLength = (yarnLength * gaugeWeight) / yarnWeight;
    const stitchesWidth = (gaugeStitches * finalWidth) / gaugeWidth;
    const rowsLength = (gaugeRows * finalLength) / gaugeLength;
    const totalStitchesGauge = gaugeStitches * gaugeRows;
    const totalStitches = stitchesWidth * rowsLength;

    const totalYarnLengthNeeded = (gaugeLength * totalStitches) / totalStitchesGauge;
    const skeinsAmount = Math.ceil(totalYarnLengthNeeded / yarnLength); // yarnLength is the length of one skein
    const totalYarnCost = skeinsAmount * skeinPrice;
    
    const {minutes, seconds} = crochetTime;
    const totalTimeInMin = minutes + seconds / 60;
    // const timeConverted = minutes + seconds / 60;
    const totalTime = (totalTimeInMin * totalStitches) / totalStitchesGauge;


  // Correctly calculate the wage
  const totalWage = totalYarnCost + ((totalTime / 60) * hourRate);
 

    

    setResults({
      totalArea,
      totalYarnCost,
      totalStitches,
      rowsLength,
      skeinsAmount,
      totalTime,
      totalWage
    });

    setShowResults(true); // Make the results table visible
  };

  const pdfRef = useRef();

  const downloadPDF = () => {
  const input = pdfRef.current;
  html2canvas(input).then((canvas) => {
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4', true);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    const imgWidth = canvas.width;
    const imgHeight = canvas.height;
    const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
    const imgX = (pdfWidth - imgWidth * ratio)/2;
    const imgY = 30;
    pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
    pdf.save("results.pdf");

  })
    // doc.text("Calculation Results", 10, 10);
    // doc.text(`Project Name: ${projectName}`, 10, 20);
    // doc.text(`Total Area: ${results.totalArea} cm²`, 10, 30);
    // doc.text(`Total Yarn Cost: €${results.totalYarnCost.toFixed(2)}`, 10, 40);
    // doc.text(`Total Stitches: ${results.totalStitches}`, 10, 50);

    // doc.save("results.pdf"); // Save the generated PDF
  };

  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <div className="flex flex-col justify-center items-center gap-5 mt-[25%] md:mt-[15%] lg:mt-[10%] text-justify" >
        <label htmlFor="project_name">Project name: </label>
        <input
          id="project_name"
          type="text"
          placeholder="e.g. strawberry hat"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          className='border-2 p-2 hover:bg-slate-500'
        />

        <label htmlFor="project_date">Project date: </label>
        <input
          id="project_date"
          type="date"
          value={projectDate}
          onChange={(e) => setProjectDate(e.target.value)}
          className='border-2 p-2'
        />
      </div>

      <form id="wrap-form" onSubmit={handleCalculate} className='flex flex-col justify-start items-center gap-10 w-3/4 py-10'>
        <div className='grid grid-cols-1 justify-center xl:grid-cols-2 xl:justify-center gap-x-4 gap-y-5 w-full'>
        <div id="form1" className='w-full h-auto max-w-xl border-2 border-black bg-slate-200 flex flex-col justify-start items-stretch p-5 gap-5'>
        <h2>📐MEASUREMENTS </h2>

  <div className="metrics-radio">
     <label htmlFor="metrics">Select metrics:</label>
     <br/>
     <input type="radio" placeholder="cm" /><label> cm</label>
    </div>
{/* 
    <select name="project_type" id="type">
        <option value="">Select project</option>
        <option value="hat">hat</option>
        <option value="top">top</option>
        <option value="top">jumper</option>
        <option value="top">scarf</option>
        </select>  */}

    {/* <select name="form" id="select_form">
    <option value="select">Select form:</option>
    <option value="rectangle">rectangle</option>
    <option value="square">square</option>
    <option value="circle">circle</option>
    <option value="circle">granny square</option> 
    </select>  */}

  
        {/*SICHTBAR WENN MAN SELEKTIERT: rect/square - circle - granny*/}

     <label>Enter final length: </label>
     <label>
     <input 
     id="final_length" 
     type="number" 
     placeholder="e.g. 60"
     value={finalLength}
     onChange={(e) => setFinalLength(e.target.value)}
     />{' '}
     cm
     </label>

    <label>Enter final width: </label>
    <label>
    <input 
    id="final_width" 
    type="number" 
    placeholder="e.g. 24"
    value={finalWidth}
    onChange={(e) => setFinalWidth(e.target.value)}
    />{' '}
    cm
    </label>

    {/*<label>Enter circumference: </label><label> <input id="circumference" type="number" placeholder="e.g. 14"/>cm</label>
    <label>Enter total number granny squares: </label><input id="n_grannysquares" type="number" placeholder="e.g. 14"/> */}

    </div>
     
    <div id="form2" className='w-full h-auto max-w-xl border-2 border-black bg-pink-200 flex flex-col justify-start items-stretch p-5 gap-5'>
    <h1 className='uppercase'>🧶Yarn</h1>
    <label htmlFor="yarn_name">Yarn type:</label>
    <input 
    id="yarn_name" 
    type="text" 
    placeholder="Enter garn type"
    value={yarnName}
    onChange={(e) => setYarnName(e.target.value)}
    />
    
    {/* <select name="garn" id="garn">
      <option value="">Seide</option>
      <option value="">Wolle</option> 
    </select> */}
    {/*basic types aufzählen*/}


    <label htmlFor="weight">Enter total yarn weight:</label>
    <label>
    <input 
    id="yarn_weight" 
    type="number" 
    name="yarn_weight" 
    placeholder="e.g. 50"
    value={yarnWeight}
    onChange={(e) => setYarnWeight(e.target.value)}
    />{' '} 
    g</label>
    <br/>

    <label htmlFor="length">Enter total yarn length:</label>
    <label>
    <input 
    id="yarn_length" 
    type="number" 
    name="yarn_length" 
    placeholder="e.g. 120"
    value={yarnLength}
    onChange={(e) => setYarnLength(e.target.value)}
    />{' '} 
    m
    </label>
    <br/>

    <br/>
    <label htmlFor="skein_price">Price per skein:</label>
    <label>
    <input 
    id="skein_price" 
    type="number" 
    name="skein_price" 
    placeholder="e.g. 5.00"
    value={skeinPrice}
    onChange={(e) => setSkeinPrice(e.target.value)}
    />{' '} 
    €
    </label>
    <br/>
    <label htmlFor="hour_rate">Hourly rate:</label>
    <label>
    <input 
    id="hour_rate" 
    type="number" 
    name="hour_rate" 
    placeholder="e.g. 20.00"
    value={hourRate}
    onChange={(e) => setHourRate(e.target.value)}
    />{' '} 
    €
    </label>
    </div>

<div id="form3" className='w-full max-w-xl border-2 border-black bg-orange-200 flex flex-col justify-start items-stretch p-5 gap-5'>
<h1 className='uppercase'>📓Hook & Stitch</h1>
<label htmlFor="hook_size">Hook Size:</label>
<label><input 
id="hook_size" 
type="number" 
placeholder='e.g. 4.0'
value={hookSize}
onChange={(e) => setHookSize(e.target.value)}
/>{' '}mm
</label>
{/* <select id="hook_num" name="hook" placeholder="">
<option value="">Select option</option>
<option value="2.0">2.0mm</option>
<option value="2.5">2.5mm</option>
<option value="3.0">3.0mm</option>
<option value="3.5">3.5mm</option>
<option value="4.0">4.0mm</option>
<option value="4.5">4.5mm</option>
<option value="5.0">5.0mm</option>
<option value="5.5">5.5mm</option>
<option value="6.0">6.0mm</option>
</select>
<button onclick="addNew()">ADD</button>
<br/> */}
<br/>

<label htmlFor="stitch">Stitch Type:</label>
<input 
id="stitch" 
type="text" 
placeholder='e.g. HDC'
value={stitch}
onChange={(e) => setStitch(e.target.value)}
/>
{/* <select name="stitch" type="number" placeholder="" id="stitch_type">
    <option value="">Select option</option>
    <option value="sc">SC</option>
    <option value="sc">DC</option>
    <option value="sc">HDC</option>
</select>
<button onclick="addNew()">ADD</button> */}
</div>



    <div id="form4" className="w-full max-w-xl border-2 border-black bg-blue-200 flex flex-col justify-start items-stretch p-5 gap-5">
    <h2>🧣GAUGE</h2>
     {/* <h3>with selected stitch *take data from previous slide* type</h3>  */}
    {/* <br/>
    <label for="gauge" placeholder="">Gauge(sts/10cm):</label>
    <select name="gauge" id="gauge" placeholder="">
    <option value="">Select option</option>
    <option value="bulky">8/10(Super Bulky)</option>
    <option value="bulky">12/10(Bulky)</option>
    <option value="bulky">14/10(Bulky)</option>
    <option value="bulky">16/10(Heavy Bulky)</option>
    <option value="bulky">18/10(Heavy Worsted)</option>
    <option value="bulky">20/10(Worsted)</option>
    <option value="bulky">22/10(DK)</option>
    <option value="bulky">24/10(Sport)</option>
    </select> */}
    <label>Length / Width:</label>
    <label>
    <input id="gauge_length" type="number" placeholder="e.g. 10" value={gaugeLength} onChange={(e) => setGaugeLength(e.target.value)}/> cm/
    <input id="gauge_width" type="number" placeholder="e.g. 10" value={gaugeWidth} onChange={(e) => setGaugeWidth(e.target.value)}/>{' '}
    cm</label>

    <div className='flex flex-col gap-4 items-center'>
    <h1 htmlFor="time" className='uppercase self-start '>⏳Timer</h1>
    <Timer className="items-center" onTimeUpdate={handleTimeUpdate}/>
    </div>
    
    <label>Type in number of rows/length:</label> 
    <label><input 
    id="gauge_rows" 
    type="number" 
    placeholder="e.g. 5"
    value={gaugeRows}
    onChange={(e) => setGaugeRows(e.target.value)}
    />{' '}rows</label>

    <label>Type in number of stitches/width: </label>
    <label><input 
    id="gauge_stitches" 
    type="number" 
    placeholder="e.g. 23"
    value={gaugeStitches}
    onChange={(e) => setGaugeStitches(e.target.value)}
    />{' '} stitches</label>
    
    <label htmlFor="gauge_weight">Gauge total weight:</label>
    <label>
    <input 
    id="gauge_weight" 
    type="number" 
    name="gauge_weight" 
    placeholder='e.g. 8'
    value={gaugeWeight}
    onChange={(e) => setGaugeWeight(e.target.value)}
    />{' '} g</label>

    {/* <label for="gauge_length">Gauge length/10cm:</label> 
    <label><input type="number" name="gauge_length" placeholder='13 '/> cm</label> */}

     {/* <div class="tension-radio">
     <label for="tension">Tension:</label>
     <input type="radio"/>
     <input type="radio" placeholder="tense"/>
     <input type="radio"/> 
    </div> */}

          <Button type="submit" label="calculate" iconURL={arrowRight}/>
        </div>
        </div>
      </form>

      <div id="res_table" ref={pdfRef} className='h-screen w-2/3'>
        {/* Conditionally render the results table */}
        {showResults && results && (
          <div id="res_table" className='flex flex-col justify-center items-start gap-10 mt-10 bg-brown-200 border-2 border-black p-5'>
            <h1>Date:  <span className="border border-slate-700">{projectDate}</span></h1>
            
            <p>In order to crochet a <span className="border border-slate-700">{projectName}</span>, 
            with base <span>{finalLength}</span>/<span>{finalWidth}</span>
            {' '}for <span>{yarnName} </span>yarn, <span>{hookSize}mm </span>hook and <span>{stitch} </span>stitch;<br/> you'll need: 
            </p>

            <ul className='self-center'>
                <li>Yarn Skeins total: {results.skeinsAmount}</li>
                <li>Expenses total: {results.totalYarnCost.toFixed(2)}€</li>
    
    {Math.floor(results.totalTime) >= 60 ? (
    <li>
      Time: {Math.floor(results.totalTime / 60)} hours {Math.floor(results.totalTime % 60)} minutes{' '}
      {Math.floor((results.totalTime % 1) * 60)} seconds
    </li>
  ) : (
    <li>
      Time: {Math.floor(results.totalTime)} minutes{' '}
      {Math.floor((results.totalTime % 1) * 60)} seconds
    </li>
  )}
                <li>Total Wage: {results.totalWage.toFixed(2)}€</li>
            </ul>

            <p>Additional info: <br/>
            Stitches total: <span>{Math.floor(results.totalStitches)} </span> <br/>
            Rows total: <span>{Math.floor(results.rowsLength)}</span>
            </p>
               
            {/* Button to download PDF */}
            {/* <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded" onClick={downloadPDF}>
              Download as PDF
            </button> */}
            <p className='self-center text-center'>Happy crocheting💗!<br/>
            <span>- fadenfroh</span></p>
            <button className='self-end' onClick={downloadPDF}>Download PDF</button>
          </div>
        )}
      </div>

      {/* <GaleryCardPage/> */}
    </div>
  )
}

export default Calculator;