import React, { useContext } from "react";
import { AppContext } from "./AppContext";
import { Card, Image, Button, Grid, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./page.css";

const Watchlist = () => {
  const { watchlist, removeFromWatchlist } = useContext(AppContext);
  const isEnmpty = watchlist.length === 0;
  return (
    <Grid
      verticalAlign="middle"
      textAlign="center"
      columns={"equal"}
      padded
      className="grid"
    >
      <Grid.Column>
        <h2 style={{ fontSize: "50px" }}>My Watchlist</h2>
        <Link to="/" style={{ fontSize: "20px" }}>
          <Icon name="search" />
          Back to Home
        </Link>
        <div>
          {isEnmpty ? (
            <Grid.Column>
              <h2
                style={{
                  fontSize: "15px",
                  fontFamily: "Helvetica, sans-serif",
                  fontStyle: "italic",
                  padding: "10px",
                }}
              >
                Quiet here, start adding some animes......
              </h2>
            </Grid.Column>
          ) : (
            <Card.Group style={{ display: "flex", justifyContent: "center" }}>
              {watchlist.map((anime) => (
                <Card className="fade-in-card" key={anime.mal_id}>
                  <Card.Content>
                    <a href={anime.url}>
                      {" "}
                      <Image
                        src={anime.images.jpg.image_url}
                        alt={anime.title}
                      />
                    </a>
                  </Card.Content>

                  <Card.Content extra>
                    <Card.Header>{anime.title}</Card.Header>
                  </Card.Content>
                  <Card.Content extra>
                    <Button
                      color="red"
                      onClick={() => removeFromWatchlist(anime.mal_id)}
                    >
                      Remove
                    </Button>
                  </Card.Content>
                </Card>
              ))}
            </Card.Group>
          )}
        </div>
      </Grid.Column>
    </Grid>
  );
};

export default Watchlist;
