import React from 'react';

const CommentAdd = () => {

    return(
        <>
            <form onSubmit={this.onFormSubmit} >  
                <input type="text" value={this.state.body} onChange={this.handleChange} />
                <input type="submit" value="Add" />
            </form>
        </>
    );
}

export default CommentAdd;