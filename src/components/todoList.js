import React from "react";
import ShowBooks from "./showBooks";
import AddBook from "./addBook";
class TodoList extends React.Component{
    state = {
        bookList : [
            {id:1,bookName:'PHP Programming',author: 'Kirtiman Singh'},
            {id:2,bookName:'Flutter Framework',author: 'Kirtiman Singh'},
            {id:3,bookName:'React Native',author: 'Syam Veer'}
        ],
        bookSuccess: "",
        bookDeleted: ""
    };
    
    storeBooks=(bookInfo)=>{
        this.setState({bookList:[...this.state.bookList,bookInfo]})
        this.setState({bookSuccess:"Your book has been added successfully!"});
        setTimeout(()=>{
            this.setState({bookSuccess:""})
        },3000)
    };
    
    removeBook=(id)=>{
        if(window.confirm("Are your really want this book?")){
            const filterBooks = this.state.bookList.filter((book)=>book.id!==id);
            this.setState({bookList:filterBooks});  
            this.setState({bookDeleted:"Your book has been deleted successfully"}); 
            setTimeout(()=>{this.setState({bookDeleted:""})},3000)    
        }
    };

    render(){
        return(
            <>
            {
                this.state.bookSuccess?<div className="alert alert-success mt-3">{this.state.bookSuccess}</div>:null
            }
            {
                this.state.bookDeleted?<div className="alert alert-success mt-3">{this.state.Deleted}</div>:null
            }
            <AddBook addBook={this.storeBooks}/>
            <ShowBooks books = {this.state.bookList} delete={this.removeBook}/> 
            </>
        )
    }
}
export default TodoList;
