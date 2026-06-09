function Header({ name, image, about }) {
  return (
    <header>
      <img src={image} alt={name} />
      <h1>{name}</h1>
      <p>{about}</p>
    </header>
  );
}

export default Header;