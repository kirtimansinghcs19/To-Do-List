import React from "react";
import { v4 as uuidv4 } from 'uuid';

class AddBook extends React.Component{
    state = {
        bookName:'',
        author:''
    } 
    handleInputs=(e)=>{
        this.setState({[e.target.name]: e.target.value});
    }
    saveData=(e)=>{
        e.preventDefault();
        this.props.addBook({id:uuidv4(),bookName:this.state.bookName, author:this.state.author} );
        this.setState({bookName:'',author:''})
    }
    render(){
        return (
            <form className="mt-3" onSubmit={this.saveData}>  
               <div className="form-group">
                   <h3>Add Book</h3>
                </div>
                <div className="form-group mt- 3">
                    <input 
                    type="text" 
                    name="bookName" 
                    className="form-control" 
                    placeholder="Book Name..."
                     value={this.state.bookName}
                    onChange={this.handleInputs}
                    required>
                        </input>
                </div>
                <div className="form-group">
                    <input 
                    type="text" 
                    name="author" 
                    className="form-control" 
                    placeholder="Author Name..."
                    value={this.state.author}
                    onChange={this.handleInputs}
                    required>
                        </input>
                </div>
                <div className="form-group">
                    <input type="submit" className="btn btn-primary" value="Add Book">
                        </input>
                </div>       
            </form>
        )
    }
    
}
export default AddBook;