import React ,{useEffect, useState } from 'react'
import ReactDOM from 'react-dom'; // Utiliser cette importation

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { render } from 'react-dom';



//const title = "Bonjour les gens";
const styleTitle = {color : 'blue'}



const todos = [
	"aller manger ",
	"faire du sport",
	"Boire de l'eau"
]

//const root = document.querySelector('#root');

function App() {
	

	const [count ,setCount] = useState(0)

	/* useEffect(()=>{

		const intervaId = setInterval(() => {
			setCount(prevCount  => prevCount  + 1)
		},1000);

	

		return () => clearInterval(intervaId);
	},[]


); */
	return <div>

		

		<h1 style={styleTitle}>{}</h1>
    {/*     <button onClick={}>incremenent</button> */}
	</div>
	/* return <form action="" onSubmit={handleSumit}>
		<input type="text" name="" id=""/>
		<button>Envoyer</button>
	</form> */

	/* let interval = 1000;

	const [time,setTime] = useState(new Date().toLocaleTimeString() )
	
	function tick(){
		
		const element = (
			<div>
				<h1>Hello word </h1>
				<p>It is .{time}</p>
			</div>
		);
		
		return element;
	}
	
	useEffect(()=>{

		const intervalId = setInterval(()=>{
			setTime(new Date().toLocaleTimeString())
		}, interval);

		return () => clearInterval(intervalId);

	},[]);
	
	return <div>
			<h1 className='title' style={styleTitle}>hello word </h1>
			<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam non ad nulla molestias nemo quod blanditiis atque eos distinctio accusamus! Ullam maiores earum eveniet quia blanditiis vel, maxime repellat quibusdam!
			Mollitia ab deleniti veniam praesentium. Quasi ipsa, blanditiis ratione unde voluptate dolores porro quas maxime, aliquid tempora voluptatum id impedit dicta beatae, facere temporibus iste possimus? Laboriosam delectus esse voluptate?</p>
			<div>{tick()}</div>

			<div>
				<Todo todos={todos} color="blue"/>
			</div>

		</div> */


}


const Todo = ({todos,color}) => {

	return (
		<ul>
			{todos.map((todo,index)=>(
				<li key={index} style={{color:color}}>{todo}</li>
			))}
		</ul>
	);
};









/* const root = ReactDOM.createRoot(
	document.getElementById('root')
) */


export default App


