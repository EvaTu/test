import React, {useState} from 'react';

function AuthorCard({authorObj}) {
    const {image, name, desc, books} = authorObj
    const [isClicked, setIsClicked] = useState(true)

    function handleToggleClick(){
        setIsClicked((previousIsClicked) => {
            return !previousIsClicked
        })
    }

    return (
        <div onClick={handleToggleClick}>
            {isClicked ? (
            <div className="author-card">
                <img className="cardImage" src={image} alt={name} />
                <h3>Author Name: {name}</h3>
            </div>
            ):(
                <div className="author-card">
                <h4>Author Bio: {desc}</h4>
                <p>Author Books: </p>
                {books.map(book => 
                    <p>{book.title}</p>)}
            </div>
            )
            }
            </div>
        
    );

}

export default AuthorCard;