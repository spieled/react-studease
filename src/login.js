var LoginBox = React.createClass({
    render: function() {
        return (
        <div className="login-box">
            <LoginBoxHead />
            <LoginBoxErrorMsg />
            <LoginBoxForm />
        </div>
        );
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
        return (
            <div className="login-box-error-msg">
                <h2>电邮地址不正确</h2>
                <p>
                输入的邮箱不属于任何帐户。
                </p>
                <p>
                你可以使用与你的帐户绑定的电邮地址、用户名称或手机号码登录。请确定输入拼写正确无误。
                </p>
            </div>
            );
    }
});

var LoginBoxForm = React.createClass({
    render: function() {
        return (
            <form className="login-box-form" method="get">
                <div className="login-box-form-item">
                    <label className="login-box-form-label">邮箱或手机号:</label>
                    <input className="login-box-form-input" type="text" name="username"/>
                </div>
                <div className="login-box-form-item">
                    <label className="login-box-form-label">密码:</label>
                    <input className="login-box-form-input" type="password" name="password"/>
                </div>
                <div className="login-box-form-item">
                    <label className="login-box-form-label">&nbsp;</label>
                    <input className="login-box-form-button" type="submit" value="登录"/>
                </div>
            </form>
            );
    }
});

React.render(<LoginBox />, document.getElementById('loginDiv'));