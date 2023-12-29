import React from 'react';
import "./Home.scss";

const  Card = ({img}) => (
    <div className='card'> 
     <img alt='cover' src={img} />
    </div>
)
const  Row = ({title}) => (
    <div className='row'> 
    <h2>{title}</h2>
    <div>
    <Card img={'https://i.pinimg.com/736x/b0/13/97/b013977c4fcea22f2a3a9cf1f467b75d.jpg'}/>
    <Card img={'https://i.pinimg.com/736x/b0/13/97/b013977c4fcea22f2a3a9cf1f467b75d.jpg'}/>
    <Card img={'https://i.pinimg.com/736x/b0/13/97/b013977c4fcea22f2a3a9cf1f467b75d.jpg'}/>
    <Card img={'https://i.pinimg.com/736x/b0/13/97/b013977c4fcea22f2a3a9cf1f467b75d.jpg'}/>
    <Card img={'https://i.pinimg.com/736x/b0/13/97/b013977c4fcea22f2a3a9cf1f467b75d.jpg'}/>
    <Card img={'https://i.pinimg.com/736x/b0/13/97/b013977c4fcea22f2a3a9cf1f467b75d.jpg'}/>
    <Card img={'https://i.pinimg.com/736x/b0/13/97/b013977c4fcea22f2a3a9cf1f467b75d.jpg'}/>
    <Card img={'https://i.pinimg.com/736x/b0/13/97/b013977c4fcea22f2a3a9cf1f467b75d.jpg'}/>

    
    </div>
    </div>
)

const Home = () => {
  return (
    <section className='home'>
    <div className='banner'>Banner</div>
    <Row title={"Popular on Netflix"}/>
    </section>
  )
}

export default Home