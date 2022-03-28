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
            <section className="app">
                <div className="container py-5">
                    <div className="row mx-0">
                        <div className="col-lg-6 mx-auto">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row mx-0">
                                        <div className="col-lg-12">
                                            <div className="head text-center text-white py-1 mx-auto">
                                                <h3>E-mail sender</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <form className="form p-3" onSubmit={this.handleSubmit} method="POST" action="/">
                                        <div className="form-row pt-4">
                                            <div className="col-lg-12">
                                                <input
                                                    className="input-area"
                                                    placeholder="e-mail address..."
                                                    type="email"
                                                    value={this.state.recipient}
                                                    name="recipient"
                                                    required
                                                    onChange={this.handleInputChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="form-row pt-4">
                                            <div className="col-lg-12">
                                                <input
                                                    className="input-area"
                                                    type="text"
                                                    placeholder="title..."
                                                    value={this.state.title}
                                                    name="title"
                                                    required
                                                    onChange={this.handleInputChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="form-row pt-4">
                                            <div className="col-lg-12">
                                                <textarea
                                                    className="input-area"
                                                    placeholder="message..."
                                                    value={this.state.message}
                                                    name="message"
                                                    rows="5"
                                                    required
                                                    onChange={this.handleInputChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="form-row pt-4">
                                            <div className="col-lg-12">
                                                <input className="btn mx-auto" type="submit" value="SEND" />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

ReactDOM.render(
    <ContactForm />,
    document.getElementById('contact')
  );