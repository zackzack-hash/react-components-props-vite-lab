function About({ name, image, about }) {
  return (
    <div>
      <img src={image} alt={name} />
      <h1>{name}</h1>
      <p>{about}</p>
    </div>
  ); 
}

export default About;