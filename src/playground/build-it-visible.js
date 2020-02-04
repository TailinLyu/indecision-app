class VisibilityToggle extends React.Component{
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility : false
        };
    }
    handleToggleVisibility (){
        this.setState((prevstate) => {
            return {
                visibility : !prevstate.visibility
            };
        });
    }
    render (){
        console.log(this.state.visibility);
        return (
            <div>
            <h1>Visibility Toggle</h1>
            <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'Hide Detail' : 'Show Detail' }</button>
            {this.state.visibility && <p> This is the hiding infor</p>}
            </div>
        );
    }

}
ReactDOM.render(<VisibilityToggle/>, document.getElementById('app'));
// const toggle = () => {
//     app.click = !app.click;
//     render();
// }

// const app = {
//     title : "Visible Toggle",
//     click : true
// };
// const render = () =>{
//     const jsx = (
//         <div>
//             <h1>{app.title}</h1>
//             <button onClick={toggle}>{app.click ? 'Show Detail' : 'Hide Detail'}</button>
//             {app.click && <p> This is the hiding infor</p>}
//         </div>
//     );
//     console.log(app.click);
//     ReactDOM.render(jsx, document.getElementById('app'));
// };

// render();