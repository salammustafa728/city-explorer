import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'


export class Movie extends Component {
    render() {
        return (

            <>
          
          {   
          
          this.props.movieData.map(value => {
                 return(
                    <Card>
                    <Card.Img variant="top" src={value.img}/>
                  <Card.Body>
                    <Card.Title>{value.title}</Card.Title>
                  <Card.Text>{value.overview}   </Card.Text>
                 <Card.Text>{value.averageVotes} </Card.Text>
                 <Card.Text>{value.released}</Card.Text>
                 <Card.Text>{value.popularity}</Card.Text>
              
                 </Card.Body>
                 </Card>

                 )
             })


          }
           
        </>
         
        )
    }
}

export default Movie
// {/*
//   this.props.movie.data.map(value => {
                     
//                 return (
//                  <>
//                  {console.log('move data',this.movie.data)}
//                  {console.log('the data inside the array', this.props.movie.data)}
                  
//                   <Card>
//                     <Card.Img variant="top" src="holder.js/100px160" />
//                   <Card.Body>
//                     <Card.Title>{value.title}</Card.Title>
//                   <Card.Text>{value.overview}   </Card.Text>
//                  <Card.Text>{value.averageVotes} </Card.Text>
//                  <Card.Text>{value.released}</Card.Text>
//                  <Card.Text>{value.popularity}</Card.Text>
//                  <Card.Image>{value.img}</Card.Image>
               
//                  </Card.Body>
//                  </Card>
// {/*

//  this.overview=movie.overview;
//     this.averageVotes=movie.vote_average;
//     this.totalVotes=movie.vote_count;
//     this.img=movie.oster_path;
//     this.popularity=movie.popularity;
//     this.released=movie.released_on;
// */}
                
// </>
// )
// })
// }

// */}
//  {/* <ListGroup  style={{ width: "30%" , margin: '50px 60px' , textAlign: 'center'}}>
//                     {value.description}
//                   </ListGroup>
//                    <ListGroup  style={{ width: "30%" , margin: '20px 60px' , textAlign: 'center'}}>
//                    {value.date}
//                  </ListGroup> */}
//             // <div>
//             //     this.props.movie.filter(value => {

//             //     })
               
//             //      { Array.from({ length: 4 }).map((_, idx) => (
                  
//             //       <Card>
//             //       <Card.Img variant="top" src="holder.js/100px160" />
//             //     <Card.Body>
//             //       <Card.Title>Card title</Card.Title>
//             //     <Card.Text>
//             // This is a longer card with supporting text below as a natural
//             // lead-in to additional content. This content is a little bit longer.
//             //    </Card.Text>
//             //    </Card.Body>
//             //    </Card>
                
//             //       ))
                  
//             //       }
                
//             // </div>