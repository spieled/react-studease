/**
 * Created by Administrator on 2015/3/5.
 */
var CommentBox = React.createClass({
    render: function() {
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList />
                <CommentForm />
            </div>
            );
    }
});

React.render(
    <CommentBox />,
    document.getElementById('content')
);