class Counter extends React.Component {
    constructor (props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        };
    }
    componentDidMount() {
            const stringCount = localStorage.getItem('count');
            const count = parseInt(stringCount,10);
            
            if(!isNaN(count)){
                this.setState(() => ({count}));
            }
        console.log('didMount');
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevState.count !== this.state.count){
            // const json = JSON.stringify();
            localStorage.setItem('count',this.state.count);
            console.log('!update')
        }
    }
    componentWillUnmount() {
        console.log('componentWillUnMount');
    }
    handleAddOne(){
        this.setState((prevState) => {
            return {
                count : prevState.count + 1
            };
        });
        console.log(this.state);
    }
    handleMinusOne(){
        this.setState((prevState) => {
            return {
                count : prevState.count - 1
            }
        });
        console.log(this.state);
    }
    handleReset(){
        //SetState is synchronized so we need to use prevstate to use value.
        this.setState(() => {
            return {
                count: 0
            };
        });
        console.log(this.state);
        // this.setState({
        //     count: 0
        // });
        // this.setState({
        //     count:this.state.count + 1
        // });
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
        console.log(this.state);
    }
    render() {
        return (
            <div>
                <h1>Count:{this.state.count} </h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        ); 
    }
}


ReactDOM.render(<Counter />,document.getElementById('app'));




// console.log('App.js is running!');

// const app = {
//   title: 'Indecision App',
//   subtitle: 'Put your life in the hands of a computer',
//   options: []
// };

// const onFormSubmit = (e) => {
//     e.preventDefault();
//     const option = e.target.elements.option.value;
//     if(option){
//         app.options.push(option);
//         e.target.elements.option.value = '';
//         renderApp();
//     }
// };
// const template = (
//   <div>
//     <h1>{app.title}</h1>
//     {app.subtitle && <p>{app.subtitle}</p>}
//     <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
//     <p>{app.options.length}</p>
//     <ol>
//       <li>Item one</li>
//       <li>Item two</li>
//     </ol>
//     <form onSubmit={onFormSubmit}>
//         <input type="text" name="option"/>
//         <button>Add Option</button>
//     </form>
//   </div>
// );

// const appRoot = document.getElementById('app');

// const moveAll = () => {
//     app.options = [];
//     renderApp();
// };
// const onMakeDecision = () =>{
//     const randomNum = Math.floor(Math.random() * app.options.length);
//     const option = app.options[randomNum];
//     alert(option);
// };
// const renderApp = () => {
//     const template = (
//         <div>
//           <h1>{app.title}</h1>
//           {app.subtitle && <p>{app.subtitle}</p>}
//           <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
//           <p>{app.options.length}</p>
//           <button disabled={app.options.length === 0} onClick = {onMakeDecision}>What should I do?</button>
//           <button onClick={moveAll}>Remove All</button>
//           <ol>
//             {
//                 app.options.map((option) => <li key={option}>Option: {option}</li>)
//             }
//           </ol>
//           <form onSubmit={onFormSubmit}>
//               <input type="text" name="option"/>
//               <button>Add Option</button>
//           </form>
//         </div>
//       );
//       ReactDOM.render(template,appRoot);
// };
// renderApp();