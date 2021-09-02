import React from 'react';
import { Book } from './book';
import { Card } from './Card';
export const Books=()=>{
 return  (
<div>
{Book.map((book,index)=>{
return <Card
{...book}
key={book.id}
/>


})

}




</div>


 )

}