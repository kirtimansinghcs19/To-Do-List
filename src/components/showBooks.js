import React from "react";

const ShowBooks = props =>{
    const deleteBook = (id)=>{
         props.delete(id);
    };
    return( 
        <table className="table merge mt-4">
            {props.books.map((book) =>(
                <tbody key={book.id}>
                    <tr>
                        <td>{book.bookName}</td>
                        <td>{book.author}</td>
                        <td><button 
                        type="button" 
                        className="btn btn-danger" 
                        onClick={()=>{deleteBook(book.id)}}>
                            Delete
                            </button></td>
                    </tr>
                </tbody>  
 
            ))}
        </table>
    )
}

export default ShowBooks;