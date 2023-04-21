import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
function Cards({ user }) {
  return (
    <Card
      style={{ width: "20rem", height: "42rem", boxShadow: "7px 5px #e0e1dd " }}
    >
      <Card.Img
        variant="top"
        src={`https://image.tmdb.org/t/p/w500/${user.poster_path}`}
        alt="movie"
      />
      <Card.Body>
        <Card.Title>{user.original_title}</Card.Title>
        <Card.Text style={{fontWeight:"600"}}>Language Available:- {user.original_language.toUpperCase()}</Card.Text>
        <Card.Text>{user.overview.slice(0, 90) + "...."}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Cards;
