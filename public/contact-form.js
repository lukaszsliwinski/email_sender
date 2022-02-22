class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {title: '',
                    message: '',
                    recipient: '',
                    };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value});
    }

    handleSubmit(e) {
        axios.post('/', this.state)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        e.preventDefault();
        alert(`Email was sent to ${this.state.recipient}`);
        window.location.reload()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} method="POST" action="/">
                <label>TITLE:
                    <input
                        type="text"
                        value={this.state.title}
                        name="title"
                        required
                        onChange={this.handleInputChange}
                    />
                </label>

                <label>MESSAGE:
                    <textarea
                        value={this.state.message}
                        name="message"
                        rows="5"
                        required
                        onChange={this.handleInputChange}
                    />
                </label>


                <label>
                    SEND TO:
                    <input
                        type="email"
                        value={this.state.recipient}
                        name="recipient"
                        required
                        onChange={this.handleInputChange}
                    />
                </label>
                <input type="submit" value="SEND" />
            </form>
        );
    }
}

ReactDOM.render(
    <ContactForm />,
    document.getElementById('contact')
  );