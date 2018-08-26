import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {newPost} from '../actions/postActions';

class Postform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title : '',
            body : ''
        }
    }
    onInput = (data)=> {
        this.setState({
            [data.target.name] : data.target.value
        })
    }
    onSubmit = (e)=> {
        e.preventDefault();
        const post = {
            title : this.state.title,
            body : this.state.body
        }
        this.props.newPost(post);

    }
  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={this.onSubmit}>
            <div>
                <label>Title : </label><br />
                <input name="title" onChange={this.onInput} type="text" value={this.state.title}></input>
            </div>
            <div>
                <label>Content : </label><br />
                <textarea name="body" onChange={this.onInput} value={this.state.body}/>
            </div>
            <br />
            <button type="submit"  >Submit</button>
        </form>
      </div>
    )
  }
}
Postform.propTypes = {
    newPost: PropTypes.func.isRequired
  };

export default connect(null,{newPost})(Postform) ;
