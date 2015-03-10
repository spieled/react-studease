var LoginBox = React.createClass({
    getInitialState: function() {
      return ({success: false, errorTitle: '', errorDetail: '', suggest: ''});
    },
    handleFormSubmit: function(form) {
        var username = form.username;
        var password = form.password;
        var obj = this;
        $.ajax({
            url: this.props.url,
            type: 'GET',
            dataType: 'json',
            data: {username: username, password: password},
            success: function(data) {
                console.log(data);
                var success = data.success;
                var errorTitle = data.errorTitle;
                var errorDetail = data.errorDetail;
                var suggest = data.suggest;
                obj.setState({success: success, errorTitle: errorTitle, errorDetail: errorDetail, suggest: suggest});
            },
            error: function(xhr, status, err) {
                console.log(status, err.toString());
            }
        });
    },
    render: function() {
        if (this.state.success == true) {
            window.location.href = 'index.html';
            return (
                <meta http-equiv="refresh" content="0;url=hello.html"/>
                );

        } else {
            return (
                <div className="login-box">
                    <LoginBoxHead />
                    <LoginBoxErrorMsg errorTitle={this.state.errorTitle} errorDetail={this.state.errorDetail} suggest={this.state.suggest}/>
                    <LoginBoxForm onFormSubmit={this.handleFormSubmit}/>
                </div>
                );
        }
    }
});

var LoginBoxHead = React.createClass({
    render: function() {
        return (
            <div className="login-box-head">
                <h2>Facebook 登录</h2>
            </div>
            )
    }
});

var LoginBoxErrorMsg = React.createClass({
    render: function() {
        if (this.props.errorTitle == '' && this.props.errorDetail == '' && this.props.suggest == '') {
            return (<div/>);
        }
        return (
            <div className="login-box-error-msg">
                <h2>{this.props.errorTitle}</h2>
                <p>
                {this.props.errorDetail}
                </p>
                <p>
                {this.props.suggest}
                </p>
            </div>
            );
    }
});

var LoginBoxForm = React.createClass({
    handleSubmit: function(e) {
        e.preventDefault();
        var username = this.refs.username.getDOMNode().value.trim();
        var password = this.refs.password.getDOMNode().value.trim();
        this.props.onFormSubmit({username: username, password: password});
    },
    render: function() {
        return (
            <form className="login-box-form" method="get" onSubmit={this.handleSubmit}>
                <div className="login-box-form-item">
                    <label className="login-box-form-label">邮箱或手机号:</label>
                    <input className="login-box-form-input" type="text" name="username" ref="username"/>
                </div>
                <div className="login-box-form-item">
                    <label className="login-box-form-label">密码:</label>
                    <input className="login-box-form-input" type="password" name="password" ref="password"/>
                </div>
                <div className="login-box-form-item">
                    <label className="login-box-form-label">&nbsp;</label>
                    <input className="login-box-form-button" type="submit" value="登录"/>
                </div>
            </form>
            );
    }
});

React.render(<LoginBox url='http://127.0.0.1:3000/login.json'/>, document.getElementById('loginDiv'));