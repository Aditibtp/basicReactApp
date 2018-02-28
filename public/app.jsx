var GreeterForm = React.createClass({
    
    onFormSubmit : function(e){
        e.preventDefault();
        var name = this.refs.name.value;
        var message = this.refs.message.value;
        var update = {};
        if(name.length > 0){
            this.refs.name.value = '';
            update.name = name;
        }
        if(message.length > 0){
            this.refs.message.value = '';
            update.message = message; 
        }
        this.props.onUpdate(update);

    },

    render: function() {
        return (
            <form onSubmit = {this.onFormSubmit}>
                <div><input type="text" ref="name" placeholder="Enter some name"/></div>
                <div><textarea type="text" ref="message" placeholder="enter some fun message"></textarea></div>
                <div><button>Set Name and message</button></div>
            </form>
        )
    }
})

var GreeterMessage = React.createClass({
    render: function() {
        var name = this.props.name;
        var message = this.props.message;
        return (
                <div>
                    <h1>Hello {name}!!</h1>
                    <p>{message}</p>
                </div>
        )
    }
});

var Greeter = React.createClass({
    getDefaultProps: function () {
        return {
            name: 'React',
            message: 'How are you'
        }
    },

    getInitialState: function () {
        return {
            name: this.props.name,
            message: this.props.message
        }
    },

    handleNewState: function(updates){
        // //this.refs.name == browser node
        // var nameRef = this.refs.name;
        // var name = nameRef.value
        // nameRef.value = ''
        // //set value for state and re render the component

        // if(typeof name === 'string' && name.length > 0){
            
        // }
        // this.setState({
        //     name: updates.name,
        //     message: updates.message
        // });
        this.setState(updates);

    },

    render: function () {
        var name = this.state.name
        var message = this.state.message
        return (
            <div>
                <GreeterMessage name={name} message={message}/>
                <GreeterForm onUpdate={this.handleNewState}/>
            </div>
        )
    }
});

var firstName = "Aditi";
var myMessage = "Howwdy";

ReactDOM.render(
    <Greeter name={firstName} message={myMessage}/>,
    document.getElementById("app")
);
